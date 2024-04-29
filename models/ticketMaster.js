const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketMasterSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String},
    id:{ type: String},
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
})


module.exports = mongoose.model('User', ticketMasterSchema);
