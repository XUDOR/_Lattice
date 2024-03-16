const db = require('../connection'); // Adjust path as needed
const createPost = require('./createPost'); // Example, assuming you have this set up similarly
const getAllPosts = require('./getAllPosts'); // Same as above
const getPostsBySearch = require('./getPostsBySearch'); // Same as above
const getPostById = require('./getPostById');

module.exports = { getAllPosts, createPost, getPostsBySearch, getPostById };
