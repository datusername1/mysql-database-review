const { Todo } = require('../models');


const seed = [
	{
		name: 'cook dinner'
	},
	{
		name: 'pew pew'
	},
	{
		name: 'what are you?'
	},
	{
		name: "I'm yu."
	}
];

//good step to have when running the file outside of the server's context
	//needed when trying to connect to server;
Todo.sync({ force: false })
	.then( () => {
		Todo.bulkCreate(seed)
			.then( () => console.log('Todo seeded'));
	});