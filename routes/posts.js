const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//gets all the post
router.get('/',async (req,res)=>{
	try{
		const posts = await Post.find();
		res.json(posts);
	} catch(err) {
		res.json({message : err});
	}
});  

//submit a post
router.post('/' ,async (req,res)=>{
	res.send("received ");
	const post = new Post({
		title : req.body.title,
		description : req.body.description
	});

	try{
		const savedPost = await post.save();
		res.json(savedPost);
	} catch(err) {
			res.json({message : err});
	}
});


//delete a document
router.get('/:postId',async (req,res)=>{
	try{
		const removedPost = await Post.remove({_id : req.params.postId});
		res.json(removedPost);
	} catch(err) {
		res.json({message : err});
	}
});  


module.exports = router;