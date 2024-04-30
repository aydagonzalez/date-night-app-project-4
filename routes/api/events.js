// routes/api/users.js

const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');


// Insert ensureLoggedIn on all routes that need protecting
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

// All routes here will start with /api/users

// POST /api/events 
router.post('/', eventsCtrl.create);

router.get('/', eventsCtrl.index);

// DELETE	/posts/:id
router.delete('/:id', eventsCtrl.delete);

// PUT	/posts/:id
router.put('/:id', eventsCtrl.update);

module.exports = router;
