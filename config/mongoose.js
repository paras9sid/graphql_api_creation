const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost/graphql_db');

//acquire the connection
const db = mongoose.connection;

//check connection succeesful or not then print acccordingly.
db.on('error',console.error.bind(console,'error in connection'));

db.once('open',function(){
    console.log('successfully connected to the database');
});