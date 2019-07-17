const db = require('../../data/dbConfig');

module.exports = {
    getPosts,
    addPost,
    getPostById
}

function getPosts(){
    return db('posts').orderBy('id', 'desc')
}

function getPostById(id){
    return db('posts').where({id}).first()
}

async function addPost(post){
    const [id] = await db('posts').insert(post)

    return getPostById(id)
}