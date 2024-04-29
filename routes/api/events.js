// routes/api/users.js

const express = require('express');
const router = express.Router();
// const usersCtrl = require('../../controllers/api/users');
const eventsCtrl = require('../../controllers/api/events');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Insert ensureLoggedIn on all routes that need protecting
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// All routes here will start with /api/users

// // GET /api/users/check-token
// router.get('/check-token', usersCtrl.checkToken);

// POST /api/events 
router.get('/', eventsCtrl.index);

//POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;
