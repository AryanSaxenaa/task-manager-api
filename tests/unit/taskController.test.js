const Task = require('../../models/Task');
const taskController = require('../../controllers/taskController');

jest.mock('../../models/Task');

describe('Task Controller Unit Tests', () => {
  afterEach(() => jest.clearAllMocks());

  it('should get all tasks', async () => {
    Task.find.mockResolvedValue([{ title: 'Test' }]);
    const req = {}, res = { json: jest.fn() };
    await taskController.getTasks(req, res);
    expect(res.json).toHaveBeenCalledWith([{ title: 'Test' }]);
  });

  it('should get a single task', async () => {
    Task.findById.mockResolvedValue({ title: 'Test' });
    const req = { params: { id: '1' } }, res = { json: jest.fn() };
    await taskController.getTask(req, res);
    expect(res.json).toHaveBeenCalledWith({ title: 'Test' });
  });

  it('should create a task', async () => {
    Task.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue({ title: 'Created' })
    }));
    const req = { body: { title: 'Created' } }, res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await taskController.createTask(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ title: 'Created' });
  });

  it('should update a task', async () => {
    Task.findByIdAndUpdate.mockResolvedValue({ title: 'Updated' });
    const req = { params: { id: '1' }, body: { title: 'Updated' } }, res = { json: jest.fn() };
    await taskController.updateTask(req, res);
    expect(res.json).toHaveBeenCalledWith({ title: 'Updated' });
  });

  it('should delete a task', async () => {
    Task.findByIdAndDelete.mockResolvedValue();
    const req = { params: { id: '1' } }, res = { json: jest.fn() };
    await taskController.deleteTask(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: 'Task deleted' });
  });
});