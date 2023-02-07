var express = require('express');
var router = express.Router();
const { SignUpUser } = require('../controllers/userController');



router.post('/signUp',SignUpUser)

module.exports = router;
