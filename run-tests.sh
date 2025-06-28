#!/bin/bash

# Test runner script for Task Manager API
set -e

echo "🚀 Starting Task Manager API Test Suite"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check if a service is running
check_service() {
    local service=$1
    local port=$2
    if nc -z localhost $port 2>/dev/null; then
        echo -e "${GREEN}✅ $service is running on port $port${NC}"
        return 0
    else
        echo -e "${RED}❌ $service is not running on port $port${NC}"
        return 1
    fi
}

# Function to wait for service to be ready
wait_for_service() {
    local service=$1
    local port=$2
    local max_attempts=30
    local attempt=1
    
    echo "⏳ Waiting for $service to be ready..."
    
    while [ $attempt -le $max_attempts ]; do
        if nc -z localhost $port 2>/dev/null; then
            echo -e "${GREEN}✅ $service is ready!${NC}"
            return 0
        fi
        echo "Attempt $attempt/$max_attempts - waiting for $service..."
        sleep 2
        attempt=$((attempt + 1))
    done
    
    echo -e "${RED}❌ $service failed to start after $max_attempts attempts${NC}"
    return 1
}

# Check if MongoDB is running
echo "🔍 Checking MongoDB..."
if ! check_service "MongoDB" 27017; then
    echo -e "${YELLOW}⚠️  MongoDB is not running. Starting MongoDB...${NC}"
    
    # Try to start MongoDB (different commands for different systems)
    if command -v systemctl >/dev/null 2>&1; then
        sudo systemctl start mongod
    elif command -v brew >/dev/null 2>&1; then
        brew services start mongodb/brew/mongodb-community
    elif command -v docker >/dev/null 2>&1; then
        echo "Starting MongoDB with Docker..."
        docker run -d --name mongodb-test -p 27017:27017 mongo:6.0
    else
        echo -e "${RED}❌ Could not start MongoDB. Please start it manually.${NC}"
        echo "Try one of these commands:"
        echo "  sudo systemctl start mongod"
        echo "  brew services start mongodb/brew/mongodb-community"
        echo "  docker run -d --name mongodb-test -p 27017:27017 mongo:6.0"
        exit 1
    fi
    
    if ! wait_for_service "MongoDB" 27017; then
        exit 1
    fi
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run unit tests first
echo "🧪 Running unit tests..."
npm test

# Check if server is already running
if check_service "API Server" 5000; then
    echo -e "${YELLOW}⚠️  Server is already running on port 5000${NC}"
    read -p "Do you want to kill the existing server and restart? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🔄 Stopping existing server..."
        pkill -f "node server.js" || true
        sleep 2
    else
        echo "ℹ️  Using existing server..."
    fi
fi

# Start the server if not running
if ! check_service "API Server" 5000; then
    echo "🚀 Starting API server..."
    npm start &
    SERVER_PID=$!
    echo "Server PID: $SERVER_PID"
    
    # Wait for server to be ready
    if ! wait_for_service "API Server" 5000; then
        echo -e "${RED}❌ Failed to start API server${NC}"
        kill $SERVER_PID 2>/dev/null || true
        exit 1
    fi
    
    # Test server endpoint
    echo "🔍 Testing server endpoint..."
    if curl -f http://localhost:5000/ >/dev/null 2>&1; then
        echo -e "${GREEN}✅ Server is responding${NC}"
    else
        echo -e "${RED}❌ Server is not responding${NC}"
        kill $SERVER_PID 2>/dev/null || true
        exit 1
    fi
else
    SERVER_PID=""
fi

# Run Keploy tests
echo "🧪 Running Keploy tests..."
if [ -z "$KEPLOY_API_KEY" ]; then
    echo -e "${YELLOW}⚠️  KEPLOY_API_KEY not set. Please export it first:${NC}"
    echo "export KEPLOY_API_KEY=your_api_key_here"
    exit 1
fi

# Run Keploy tests
keploy test-suite --app=dfe08a4f-1068-4e87-8c79-41583f9cc015 --base-path http://localhost:5000/ --cloud

# Cleanup
if [ -n "$SERVER_PID" ]; then
    echo "🧹 Cleaning up - stopping server..."
    kill $SERVER_PID 2>/dev/null || true
fi

echo -e "${GREEN}🎉 All tests completed!${NC}"
