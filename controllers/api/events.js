// const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const Concert = require('../../models/concert')


module.exports = {
  index,
  create,
  delete: deleteEvent
};


async function index(req, res) {
  const user = await User.findById(req.user)

  console.log("USE", user)
  console.log("DID YOU REACH INDEX FXN?")
  const concerts = await Concert.find({})
  console.log("concerts:", concerts)
  res.json(concerts)

}


async function create(req, res) {
  try {
    console.log(req.body)
    const userID = await User.findById(req.user._id)
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

async function deleteEvent(req, res) {
  try {
    const concert = await Concert.findByIdAndDelete(req.params.id)
    console.log("DELETE-EVENT:", concert)
    if (!concert) {
      return res.status(404).json({ err: "Note not found" });
    }
    res.status(200).json(concert)
  } catch (eror) {
    res.status(400).json(eror);
  }
}


