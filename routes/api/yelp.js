const express = require('express');
const router = express.Router();
const yelpCtrl = require('../../controllers/api/yelp');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Insert ensureLoggedIn on all routes that need protecting
router.post('/create', yelpCtrl.create);

router.post('/', yelpCtrl.search);

router.get('/', yelpCtrl.index);

// DELETE	/posts/:id
router.delete('/:id', yelpCtrl.delete);

// PUT	/posts/:id
router.put('/:id', yelpCtrl.update);

// All routes here will start with /api/yelp



module.exports = router;

