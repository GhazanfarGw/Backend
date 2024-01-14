const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  picture: {
    type: String,
    required: true
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
    required: false
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
    type: String,
    required: true
  },

  cbirth: {
    type: String,
    required: true
  },

  ctbirth: {
    type: String,
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
    type: String,
    required: true
  },

  passportexpirydate: {
    type: String,
    required: true
  },

  arrivaldate: {
    type: String,
    required: true
  },

  departuredate: {
    type: String,
    required: true
  },

  purposeofvisit: {
    type: String,
    required: true
  },

  communication: {
    type: String,
    required: true
  },

  phoneno: {
    type: String,
    required: true
  },

  residentialaddresssaudi: {
    type: String,
    required: true
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
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

},

  {
    timestamps: true
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;
