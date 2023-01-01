const express = require('express');
const router = new express.Router();
const homeController = require('../Controller/homeController');

router.get('/api/v1/home', homeController.getHome);

module.exports = router;