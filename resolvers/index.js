const userResolver = require('./user');
const taskResolver = require('./task');
const carResolver = require('./car');

module.exports = [
    userResolver,
    taskResolver,
    carResolver
];