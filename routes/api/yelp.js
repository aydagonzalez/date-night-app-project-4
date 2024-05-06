const express = require('express');
const router = express.Router();
const yelpCtrl = require('../../controllers/api/yelp');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Insert ensureLoggedIn on all routes that need protecting
router.post('/create', ensureLoggedIn, yelpCtrl.create);

router.post('/', ensureLoggedIn, yelpCtrl.search);

router.get('/', ensureLoggedIn, yelpCtrl.index);

// DELETE	/posts/:id
router.delete('/:id', ensureLoggedIn, yelpCtrl.delete);

// PUT	/posts/:id
router.put('/:id', ensureLoggedIn, yelpCtrl.update);

// All routes here will start with /api/yelp



module.exports = router;

