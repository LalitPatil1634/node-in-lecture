const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, minLength: 3, maxLength: 100 },
    rating: { type: Number, required: true },
    earning: { type: Number },
    releaseDate: { type: String, default: Date.now() },
    language: { type: String, enum: ["Hindi", "English", "Tamil"], required: true },

})

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
