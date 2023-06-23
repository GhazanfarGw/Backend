const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  image:{
    image:String
  },
  
  countrynationality: {
    type: String,
    required: true
  },

  firstname: {
    type: String,
    required: true
  },

  father: {
    type: String,
    required: true
  },

  lastname: {
    type: String,
    required: true
  },

  gender: {
    type: String,
    required: true
  },

  marital: {
    type: String,
    required: true
  },

  dbirth: {
    type: Number,
    required: true
  },

  cbirth: {
    type: Number,
    required: true
  },

  ctbirth: {
    type: Number,
    required: true
  },

  profession: {
    type: String,
    required: true
  },

  country: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  zipcode: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  passport: {
    type: String,
    required: true
  },

  passportno: {
    type: String,
    required: true
  },

  passportissueplace: {
    type: String,
    required: true
  },

  passportissuedate: {
    type: Number,
    required: true
  },

  passportexpirydate: {
    type: Number,
    required: true
  },

  arrivaldate: {
    type: Number,
    required: true
  },

  departuredate: {
    type: Number,
    required: true
  },

  communication: {
    type: String,
    required: true
  },

  phoneno: {
    type: Number,
    required: true
  },

  residentialrorelative: {
    type: String,
  },

  commercial: {
    type: String,
  },

  nameofperson: {
    type: String,
    required: true
  },

  scity: {
    type: String,
    required: true
  },
  address1: {
    type: String,
    required: true
  },

  address2: {
    type: String,
    required: true
  },

  primarynumber: {
    type: Number,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  image: {
    type: String
  },
},

  {
    timestamps: true
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;
