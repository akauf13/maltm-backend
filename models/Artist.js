
import mongoose from "mongoose";
const Schema = mongoose.Schema

let Artist = new Schema({
  _id: {type: String},
  name: {type: String},
  artistImg: {type: String},
  genre: [{type: String}],
  albums: [{
    type: Schema.Types.ObjectId, ref: "albums"
  }]
})

export default mongoose.model("artists", Artist)
  