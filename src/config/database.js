const mongoose = require('mongoose');


const mongoDB = async () => {
    await mongoose.connect(
    'mongodb+srv://theolumise:axHDuWke1B3Xe56S@oludb.0n3uau0.mongodb.net/devTinder'
);
}

module.exports = {mongoDB}
