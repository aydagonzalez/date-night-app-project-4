const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    name: { type: String, required: true },
    type: { type: String},
    concertId:{ type: String},
    siteUrl:{ type: String},
    imageUrl: String,
    date: Date,
    dateTimeZone: String,
    genre: String,
    genreId: String,
    dateSaleStarts: Date,
    maxTicketPrice: Number,
    minTicketPrice: Number,
    accessibility: Number,
}, {
    timestamps: true
})



module.exports = mongoose.model('Restaurant', restaurantSchema);

