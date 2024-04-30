// const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const Concert = require('../../models/concert')


module.exports = {
  index,
  create
};


async function index(req, res) {
  console.log("req.body:", req.body)
}


async function create(req, res) {
  try {
    console.log(req.body)
    const userID= await User.findById(req.user._id)
    console.log(req.user)
    req.body.user = userID;
    // const user = await User.findOne({ email: req.body.email });
    const concert = await Concert.create(req.body)
    console.log(req.body)
    // note.text = req.body.text
    // await note.save()
    // user.notes.push(note)
    // await user.save()
    res.status(200).json(concert)
  } catch (err) {
    res.status(400).json(err);
  }
}




