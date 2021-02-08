// const { strict } = require("assert")

// 'user strict'
import {addSomeUsers} from "./controllers/dummyData.js";
import {loadDB} from "./controllers/loadDatabase.js";
import {getPost} from "./controllers/getPost.js";
import {followOtherUser} from "./controllers/follow.js";
import {addPost} from "./controllers/addPost.js";
import {likePost} from "./controllers/likePost.js";
import {getFollowFeed} from "./controllers/getFollowFeed.js";

loadDB();
// getPost();
// addPost("natyman12","this is a post dummy");
// addSomeUsers();
// followOtherUser('natyman12','lingeman69');
// likePost("11eb6a2f2c1da6c08d823ffa44a56a76","kidcore");
getFollowFeed("kidcore");



