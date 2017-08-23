const mongoose = require('mongoose'),
	Schema = mongoose.modelSchemas;

const TaskSchema = new Schema({
	name: {
		type: String,
		required: 'Enter the name of the task'
	},
	creationDate: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [{
			type: String,
			enum: ['Pending', 'Ongoing', 'Completed']
		}],
		default: ['Pending']
	}
});

module.exports = mongoose.model('Tasks', TaskSchema);