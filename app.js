const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const postsRoute = require('./routes/posts');
const app =express();
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
	res.send("we are on home ");
});

app.use('/posts' , postsRoute);

mongoose.connect(process.env.DB_CONNECTION , 
{ useNewUrlParser: true },
()=>{
	console.log('connected to the mongodb');
});

app.listen(3000,()=>{
	console.log('server started on port 3000');
});