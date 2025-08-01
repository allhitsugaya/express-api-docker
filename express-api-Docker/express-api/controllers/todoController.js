const Todo = require('../models/todoModel');
const catchAsync = require('../utils/catchAsync');

exports.deleteOne = (Todo) => {
  return catchAsync(async (req, res, next) => {
    const doc = await Todo.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new Error('Not Found'));
    }
    res.status(200).json({
      status: 'success',
      data: doc
    });
  });
};
exports.createOne = (Todo) => {
  return catchAsync(async (req, res, next) => {
    const newTodo = await Todo.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        todo: newTodo
      }
    });
    console.log('Done');
  });
};

exports.getAll = (Todo) => {
  return catchAsync(async (req, res, next) => {
    const docs = await Todo.find();

    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: docs
    });
  });
};
