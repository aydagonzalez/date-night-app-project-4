// routes/api/users.js

const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Insert ensureLoggedIn on all routes that need protecting
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// All routes here will start with /api/users

// POST /api/events 
router.post('/', ensureLoggedIn, eventsCtrl.create);

router.get('/', ensureLoggedIn, eventsCtrl.index);

// DELETE	/posts/:id
router.delete('/:id', ensureLoggedIn, eventsCtrl.delete);

// PUT	/posts/:id
router.put('/:id', ensureLoggedIn, eventsCtrl.update);

module.exports = router;
