const express = require('express');
const todoController = require('../controllers/todoController');
const Todo = require('../models/todoModel');
const router = express.Router();

router.route('/')
  .get(todoController.getAll(Todo))
  .post(todoController.createOne(Todo));

router.route('/:id')
  .delete(todoController.deleteOne(Todo));

module.exports = router;