const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Ayda is Connected to ${db.name} at ${db.host}:${db.port}`);
});
