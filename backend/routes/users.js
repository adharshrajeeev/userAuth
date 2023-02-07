var express = require('express');
var router = express.Router();
const { SignUpUser,LoginUser } = require('../controllers/userController');



router.post('/signUp',SignUpUser);

router.post('/userLogin',LoginUser)

module.exports = router;
