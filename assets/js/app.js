// const { strict } = require("assert")

// 'user strict'
import {addSomeUsers} from "./controllers/dummyData.js";
import {loadDB} from "./controllers/loadDatabase.js";
import {getPost} from "./controllers/getPost.js";
import {followOtherUser} from "./controllers/follow.js";


loadDB();
// getPost();
// addSomeUsers();
followOtherUser('natyman12','lingeman69');

