const router = require('express').Router();
const User = require('../models/User');

router.route('/').get((req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const picture = req.body.picture;
  const countrynationality = req.body.countrynationality;
  const firstname = req.body.firstname;
  const father = req.body.father;
  const lastname = req.body.lastname;
  const gender = req.body.gender;
  const marital= req.body.marital;
  const dbirth = req.body.dbirth;
  const cbirth = req.body.cbirth;
  const ctbirth = req.body.ctbirth;
  const profession = req.body.profession;
  const country = req.body.country;
  const city = req.body.city;
  const zipcode = req.body.zipcode;
  const address = req.body.address;
  const passport = req.body.passport;
  const passportno = req.body.passportno;
  const passportissueplace = req.body.passportissueplace;
  const passportissuedate = req.body.passportissuedate;
  const passportexpirydate = req.body.passportexpirydate;
  const arrivaldate = req.body.arrivaldate;
  const departuredate = req.body.departuredate;
  const purposeofvisit = req.body.purposeofvisit;
  const communication = req.body.communication;
  const phoneno = req.body.phoneno;
  const residentialaddresssaudi = req.body.residentialaddresssaudi;
  const nameofperson = req.body.nameofperson;
  const scity = req.body.scity;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const primarynumber = req.body.primarynumber;
  const email = req.body.email;
  
  const newUser = new User({
    picture,
    countrynationality,
    firstname,
    father,
    lastname,
    gender,
    marital,
    dbirth,
    cbirth,
    ctbirth,
    profession,
    country,
    city,
    zipcode,
    address,
    passport,
    passportno,
    passportissueplace,
    passportissuedate,
    passportexpirydate,
    arrivaldate,
    departuredate,
    purposeofvisit,
    communication,
    phoneno,
    residentialaddresssaudi,
    nameofperson,
    scity,
    address1,
    address2,
    primarynumber,
    email,
  });

  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.picture = req.body.picture;
      user.countrynationality = req.body.countrynationality;
      user.firstname = req.body.firstname;
      user.father = req.body.father;
      user.lastname = req.body.lastname;
      user.gender = req.body.gender;
      user.marital= req.body.marital;
      user.dbirth = req.body.dbirth;
      user.cbirth = req.body.cbirth;
      user.ctbirth = req.body.ctbirth;
      user.profession = req.body.profession;
      user.country = req.body.country;
      user.city = req.body.city;
      user.zipcode = req.body.zipcode;
      user.address = req.body.address;
      user.passport = req.body.passport;
      user.passportno = req.body.passportno;
      user.passportissueplace = req.body.passportissueplace;
      user.passportissuedate = req.body.passportissuedate;
      user.passportexpirydate = req.body.passportexpirydate;
      user.arrivaldate = req.body.arrivaldate;
      user.departuredate = req.body.departuredate;
      user.purposeofvisit = req.body.purposeofvisit;
      user.communication = req.body.communication;
      user.phoneno = req.body.phoneno;
      user.residentialaddresssaudi = req.body.residentialaddresssaudi;
      user.nameofperson = req.body.nameofperson;
      user.scity = req.body.scity;
      user.address1 = req.body.address1;
      user.address2 = req.body.address2;
      user.primarynumber = req.body.primarynumber;
      user.email = req.body.email;

      user.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
