const router = require('express').Router();
const userController = require('./lib/userController');

router.post('/', userController.login);

module.exports = router;
