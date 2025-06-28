# Task Manager API

A simple Node.js + MongoDB API for managing tasks, with an optional frontend.

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

**You are ready to submit your repository link!**  
Your project meets all requirements for code coverage, test types, and documentation.##  Testing

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

![Screenshot 2025-06-28 112403](https://github.com/user-attachments/assets/221b0294-3b0d-4349-92a4-f6ca65d3e637)

![Screenshot 2025-06-28 114200](https://github.com/user-attachments/assets/d8efc734-e056-499e-873a-69f4a90a0b5f)

![Screenshot 2025-06-28 115443](https://github.com/user-attachments/assets/95c5cea0-3ca8-475f-9972-68ddfb590961)

### Keploy Extension
![Screenshot 2025-06-28 113704](https://github.com/user-attachments/assets/d5952ec9-ab92-468e-bd7f-c7a2cf486b5b)







