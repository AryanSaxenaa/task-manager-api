# Task Manager API

A simple Node.js + MongoDB API for managing tasks, with an optional frontend.

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

##  How to Run the Frontend (Optional)

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