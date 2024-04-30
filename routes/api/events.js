// routes/api/users.js

const express = require('express');
const router = express.Router();
// const usersCtrl = require('../../controllers/api/users');
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Insert ensureLoggedIn on all routes that need protecting
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// All routes here will start with /api/users

// POST /api/events 

router.post('/', eventsCtrl.create);


module.exports = router;
