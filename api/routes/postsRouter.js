const router = require("express").Router();

const Posts = require("./postsHelpers");

// Returns all posts in descending order

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.getPosts(req.body);
    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ error: "No posts found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', validateId, async (req, res) => {
    try{
        const post = await Posts.getPostById(req.params.id)
        res.status(200).json(post)
    } catch(err){
        res.status(500).json(err.message)
    }
  });

router.post("/", requiredBody, async (req, res) => {
  try {
    const post = await Posts.addPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.put('/:id', validateId, requiredBody, async(req, res) => {
    try{
        const updatedPost = await Posts.editPost(req.params.id, req.body)
        res.status(201).json(updatedPost);
    } catch(err){
        res.status(500).json(err.message)
    }
})

router.delete('/:id', validateId, async (req, res) => {
    try{
        const deleted = await Posts.deletePost(req.params.id)
        res.status(201).json(deleted)
    } catch(err){
        res.status(500).json(err.message)
    }
})

router.get('/user/:id', async (req, res) => {
  try{
    const posts = await Posts.getUserPosts(req.params.id)
    res.status(201).json(posts)
  } catch(err){
    res.status(500).json(err.message)
  }
})

function requiredBody(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    next();
  } else {
    next({ message: "Please include request body" });
  }
}

async function validateId(req, res, next) {
  try {
    const { id } = req.params;
    const post = await Posts.getPostById(id);
    if (post) {
      next();
    } else {
      next({ message: "No post with that ID" });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
}

module.exports = router;