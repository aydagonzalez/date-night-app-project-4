const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yelpSchema = new Schema({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    name: { type: String, required: true },
    imageUrl: { type: String},
    isClosed:{ type: String},
    openHours:{ type: String},
    displayAddress: String,
    displayAddress1: String,
    displayCity: String,
    displayCountry: String,
    displayPhone: String,
    transactions: String,
    transaction2: String,
    price: String,
    reviewCount: Number,
    rating: Number,
    menuUrl: String,
    status: {
        type: String, 
        default: 'Not Visited Yet'
    },
    
}, {
    timestamps: true
})



module.exports = mongoose.model('Yelp', yelpSchema);

