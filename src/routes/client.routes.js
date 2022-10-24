const express = require('express');
const router = express.Router();
const {addClient, allClient} = require('../controllers/client');

router.get('/allClient', allClient);
router.post('/addClient', addClient);

module.exports = router;
