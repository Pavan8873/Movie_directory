const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
//router.get('/create-movie',homeController.create)


router.get('/',homeController.home);
router.get('/form-page',homeController.formPage);
router.post('/create-movie',homeController.form);
// router.post('/create-movie',homeController.addData);

// router.post('/create-movie',homeController.addData);

// router.use('/users',require('./user'));


module.exports = router;