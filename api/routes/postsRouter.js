const router = require('express').Router();

const Posts = require('./postsHelpers');

// Returns all posts in descending order

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.getPosts(req.body)
        if (posts){
            res.status(200).json(posts)
        } else {
            res.status(404).json({error: "No posts found"})
        }
    }
    catch(err){
        res.status(500).json(err)
    }
})

router.post('/', requiredBody, async (req, res) => {
    try {
        const post = await Posts.addPost(req.body)
        res.status(201).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})

function requiredBody(req, res, next){
    if (req.body && Object.keys(req.body).length){
      next();
    } else {
      next({message: "Please include request body"})
    }
  }

module.exports = router;