var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();

/* Post user */
router.post('/', function(req, res, next) {
    userController.user_create(req, res, next);
});

router.get('/listado', function(req, res) {
    userController.user_display(req, res);
});

router.get('/listado', function(req, res) {
    userController.user_alfa(req, res);
});


module.exports = router;

