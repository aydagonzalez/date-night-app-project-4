const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const concertSchema = new Schema({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    name: { type: String, required: true },
    imageUrl: String,
    venue: String,
    venueLocation: String,
    eventDate: Date,
    shortName: String,
    longName: String,
    geocodes:[{
        latitude: String,
        longitude: String,
      }],
    timezone: String,
    address: String,
    locality: String,
    postalCode: Number,
    region: String,
    accesibility: Number,
    
})


module.exports = mongoose.model('Concert', concertSchema);
