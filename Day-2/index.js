const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb://localhost:27017/IMDB")

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true, minLength: 3, maxLength: 100 },
    rating: { type: Number, required: true },
    earning: { type: Number },
    releaseDate: { type: String, default: Date.now() },
    language: { type: String, enum: ["Hindi", "English", "Tamil"], required: true },

})

const Movie = mongoose.model("movie", movieSchema);

async function main() {
    await connection;
    const movie1 = new Movie({
        language: "English",
        title: "Titanic",
        rating: 9,
        rating: 800
    })
    movie1.save();
    console.log("data Added");
    console.log("Connected Succesfully");
    mongoose.disconnect();
}
main();