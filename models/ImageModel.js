const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(

  {
    image:String
  },
  {
    collation: "Image",
  }
);

const Image = mongoose.model('Image', imageSchema);