const db = require('../connection');
const createPost = require('./createPost'); // Adjust the path as needed
const getAllPosts = require('./getAllPosts');
const getPostsBySearch = require('./getPostsBySearch');
const getPostById = require('./getPostById');


module.exports = { getAllPosts, createPost, getPostsBySearch, getPostById };

