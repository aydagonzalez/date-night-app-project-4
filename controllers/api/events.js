// const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const Concert = require('../../models/concert')
// const Yelp = require('../../models/yelp')


module.exports = {
  index,
  create,
  delete: deleteEvent,
  update
};

async function index(req, res) {
  if (req.user) {

    const user = await User.findById(req.user)
    const userID = user._id
    const concerts = await Concert.find({user : userID})
    res.json(concerts)
  }
}

async function create(req, res) {
  try {
    // console.log(req.body)
    const userID = await User.findById(req.user._id)
    // console.log(req.user)
    req.body.user = userID;
    // const user = await User.findOne({ email: req.body.email });
    const concert = await Concert.create(req.body)
    // console.log(req.body)
    res.status(200).json(concert)
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteEvent(req, res) {
  try {
    const concert = await Concert.findByIdAndDelete(req.params.id)
    // console.log("DELETE-EVENT:", concert)
    if (!concert) {
      return res.status(404).json({ err: "Event not found" });
    }
    res.status(200).json(concert)
  } catch (eror) {
    res.status(400).json(eror);
  }
}

async function update(req, res) {
  // console.log("ID:", req.params.id, "Body:", req.body);
  // console.log("ID:", req.params.id, "Body:", req.body.status);
  try {
    const concert = await Concert.findOne({ '_id': req.params.id })
    // console.log("FOUND CONCERT-EVENT:", concert)
    if (!concert) {
      return res.status(404).json({ err: "Event not found" });
    }
      // console.log("FOUND concert status LOG:", concert.status);
      concert.status = req.body.status;
      await concert.save();
      res.json(concert)
  } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred.");
  }
}


