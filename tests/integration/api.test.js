const mongoose = require('mongoose');
const request = require('supertest');
const express = require('express');
const taskRoutes = require('../../routes/taskRoutes');
const Task = require('../../models/Task');

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/taskdb_test', { useNewUrlParser: true, useUnifiedTopology: true });
});
afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe('Task API Integration Tests', () => {
  let taskId;

  it('should create a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: 'Integration Test', description: 'desc' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Integration Test');
    taskId = res.body._id;
  });

  it('should get all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a single task', async () => {
    const res = await request(app).get(`/api/tasks/${taskId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(taskId);
  });

  it('should update a task', async () => {
    const res = await request(app)
      .put(`/api/tasks/${taskId}`)
      .send({ title: 'Updated', description: 'desc2' });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated');
  });

  it('should delete a task', async () => {
    const res = await request(app).delete(`/api/tasks/${taskId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Task deleted');
  });
});