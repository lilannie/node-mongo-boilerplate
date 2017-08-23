const mongoose = require('mongoose'),
	Task = mongoose.model('Tasks');

exports.list_all_tasks = (req, res) => {
	Task.find({}, (err, task) => {
		if (err) {
			res.send(err);
		}

		res.json(task);
	});
};

exports.create_a_task =