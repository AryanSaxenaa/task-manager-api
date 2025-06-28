#!/bin/bash

# Simple script to start the server for testing
echo "🚀 Starting Task Manager API Server for Testing"

# Check if MongoDB is running
echo "🔍 Checking MongoDB connection..."
if ! nc -z localhost 27017 2>/dev/null; then
    echo "❌ MongoDB is not running on port 27017"
    echo "Please start MongoDB first:"
    echo "  sudo systemctl start mongod"
    echo "  OR"
    echo "  brew services start mongodb/brew/mongodb-community"
    echo "  OR" 
    echo "  docker run -d --name mongodb-test -p 27017:27017 mongo:6.0"
    exit 1
fi

echo "✅ MongoDB is running"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the server
echo "🚀 Starting server on port 5000..."
echo "Server will be available at: http://localhost:5000"
echo "API docs will be available at: http://localhost:5000/api-docs"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm start
