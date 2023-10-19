const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    // Ajoutez d'autres champs au besoin
});

module.exports = mongoose.model('User', userSchema);
