# Task Manager API

A simple Node.js + MongoDB API for managing tasks, with an optional frontend.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start MongoDB** (choose one method):
   ```bash
   # Using systemctl (Ubuntu/Linux)
   sudo systemctl start mongod
   
   # Using Homebrew (macOS)
   brew services start mongodb/brew/mongodb-community
   
   # Using Docker
   docker run -d --name mongodb-test -p 27017:27017 mongo:6.0
   ```

3. **Start the server:**
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```

4. **Access the application:**
   - Frontend: [http://localhost:5000](http://localhost:5000)
   - API docs: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

## 🧪 Testing

This project includes comprehensive testing with Jest (unit tests) and Keploy (integration tests).

### Prerequisites for Testing

1. **MongoDB must be running** (see Quick Start section)
2. **Keploy API key** (for integration tests):
   ```bash
   export KEPLOY_API_KEY=your_api_key_here
   ```

### Running Tests

#### Option 1: Run All Tests (Automated)
```bash
# This script handles everything automatically
./run-tests.sh
```

#### Option 2: Manual Testing
```bash
# 1. Run unit tests only
npm test

# 2. Start server in one terminal
./start-server.sh
# or
npm start

# 3. Run Keploy tests in another terminal
export KEPLOY_API_KEY=your_api_key_here
keploy test-suite --app=dfe08a4f-1068-4e87-8c79-41583f9cc015 --base-path http://localhost:5000/ --cloud
```

### Test Coverage

- **Unit Tests**: Located in `tests/unit/` - Test individual functions and controllers
- **Integration Tests**: Located in `tests/integration/` - Test API endpoints with real HTTP requests
- **Keploy Tests**: Cloud-based API testing with comprehensive test suites

### Understanding Test Results

**If Keploy tests fail with "connection refused":**
- ✅ Make sure MongoDB is running
- ✅ Make sure the server is started (`npm start`)
- ✅ Check if port 5000 is available
- ✅ Verify your `KEPLOY_API_KEY` is set

**Test Suites Include:**
- Task creation with various input types
- Task updates (title, description, status)
- Task retrieval (single and multiple)
- Edge cases (Unicode, special characters, long strings)
- Error handling and validation

## 📖 API Documentation

Interactive API documentation is available via Swagger UI:

- **Swagger UI**: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

The Swagger documentation includes:
- Complete API endpoint details
- Request/response schemas
- Interactive API testing interface
- Example requests and responses

### OpenAPI Schema

The API follows OpenAPI 3.0 specification and includes:
- **Task Schema**: Complete task object structure
- **TaskInput Schema**: Input validation for creating/updating tasks
- **Error Handling**: Standardized error response format

##  API Endpoints

| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | `/api/tasks`       | Get all tasks          |
| GET    | `/api/tasks/:id`   | Get a single task      |
| POST   | `/api/tasks`       | Create a new task      |
| PUT    | `/api/tasks/:id`   | Update a task          |
| DELETE | `/api/tasks/:id`   | Delete a task          |

##  Database

- **MongoDB** is used for storing tasks.
- Integrated using [Mongoose](https://mongoosejs.com/).

##  How to Run the Server

1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up your `.env` file (already present):
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/taskdb
   ```
3. Start the server:
   ```sh
   npm run dev
   ```

##  How to Run the Frontend 

- The frontend is served automatically at [http://localhost:5000/](http://localhost:5000/) when the server is running.

##  Sample API Requests

```sh
# Create a new task
curl -X POST http://localhost:5000/api/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Sample Task", "description": "A demo task"}'

# Get all tasks
curl http://localhost:5000/api/tasks

# Get a single task (replace <id> with a real task ID)
curl http://localhost:5000/api/tasks/<id>

# Update a task (replace <id> with a real task ID)
curl -X PUT http://localhost:5000/api/tasks/<id> \
-H "Content-Type: application/json" \
-d '{"title": "Updated Title", "description": "Updated description"}'

# Delete a task (replace <id> with a real task ID)
curl -X DELETE http://localhost:5000/api/tasks/<id>
```
![alt text](image-2.png)


![alt text](image-3.png)

##  Testing

### Tech Stack
- **Node.js**, **Express**, **MongoDB**, **Mongoose**
- **Jest** & **Supertest** for testing

### How to Run Tests

1. Install dependencies:
   ```sh
   npm install
   ```
2. (Optional) Ensure MongoDB is running and a test database is available (e.g., `taskdb_test`).
3. Run all tests and see coverage:
   ```sh
   npm test
   ```

### Testing Tools Used
- **Jest**: For unit and integration testing, and coverage reporting.
- **Supertest**: For API endpoint testing.

### Coverage
- **100%** code coverage for statements, branches, functions, and lines.
- Coverage reports are generated in the `/coverage` folder. Open `coverage/lcov-report/index.html` in your browser for a detailed report.

### Test Types
- **Unit tests**: Located in `tests/unit/`, use mocking for database logic.
- **Integration/API tests**: Located in `tests/integration/`, use a real MongoDB test database to verify CRUD operations.

---
![alt text](image-4.png)

###Testing Using Keploy

![Screenshot 2025-06-28 104730](https://github.com/user-attachments/assets/df1d2dec-15a8-4e5f-8191-a92c0783ebc6)

![Screenshot 2025-06-28 104741](https://github.com/user-attachments/assets/5ea9e962-405c-4078-a25d-52bac9e8b4fa)

![Screenshot 2025-06-28 112403](https://github.com/user-attachments/assets/39888801-81c0-4ba1-9eb9-dfb7404dc4c2)

![Screenshot 2025-06-28 115443](https://github.com/user-attachments/assets/95c5cea0-3ca8-475f-9972-68ddfb590961)

### Keploy Extension
![Screenshot 2025-06-28 113704](https://github.com/user-attachments/assets/d5952ec9-ab92-468e-bd7f-c7a2cf486b5b)







