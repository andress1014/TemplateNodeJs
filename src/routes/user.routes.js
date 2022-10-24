const express = require('express');
const router = express.Router();
const { allUser, addUser } = require('../controllers/user');


router.get('/allUser', allUser);
router.post('/addUser', addUser);


module.exports = router;