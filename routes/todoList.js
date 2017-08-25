const express = require('express'),
	router = express.Router(),
	todoList = require('../controllers/todoList'),
	{
		list_all_tasks,
		create_a_task,
		read_a_task,
		update_a_task
	} = todoList;

router.get('/', list_all_tasks);
router.post('/', create_a_task);

router.get('/:taskId', read_a_task);
router.put('/:taskId', update_a_task);
router.delete('/:taskId', delete_a_task);

module.exports = router;