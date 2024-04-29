// const jwt = require('jsonwebtoken')
const User = require('../../models/user')
// const Event = require('../../models/event')


module.exports = {
  index
};


async function index(req, res) {
    console.log("req.body:", req.body)
  }
  

// async function index(req, res) {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     console.log(user)
//     if (!user) throw new Error();
//     const match = await bcrypt.compare(req.body.password, user.password);
//     if (!match) throw new Error();
//     const token = createJWT(user);
//     res.json(token)
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }





