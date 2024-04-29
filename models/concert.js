const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = new Schema({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    name: { type: String, required: true },
    shortName: String,
    longName: String,
    geocodes:[{
        latitude: String,
        longitude: String,
      }],
    address: String,
    locality: String,
    postalCode: Number,
    region: String,
    
})


module.exports = mongoose.model('Concert', concertSchema);
