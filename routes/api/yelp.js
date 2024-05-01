const express = require('express');
const router = express.Router();
const yelpCtrl = require('../../controllers/api/yelp');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Insert ensureLoggedIn on all routes that need protecting
router.post('/', yelpCtrl.search);

// router.get('/', yelpCtrl.search);


// All routes here will start with /api/yelp



module.exports = router;

