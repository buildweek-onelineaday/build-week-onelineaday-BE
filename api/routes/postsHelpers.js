const db = require('../../data/dbConfig');

module.exports = {
    getPosts,
    addPost,
    getPostById,
    editPost,
    deletePost,
    getUserPosts
}

function getPosts(){
    return db('posts').orderBy('id', 'desc')
}

function getPostById(id){
    return db('posts').where({id}).first();
}

async function addPost(post){
    const [id] = await db('posts').insert(post)

    return getPostById(id)
}

function editPost(id, updated){
    return db('posts').where({id}).update(updated, '*')
}

function deletePost(id){
    return db('posts').where({id}).del()
}

function getUserPosts(id){
    return db('posts').where({user_id: id})
}