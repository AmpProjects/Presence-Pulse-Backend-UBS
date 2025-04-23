const express = require('express');
const SignIn = require('../models/SignIn.js');
const Staff =  require('../models/Staff.js'); 

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { staffID, name } = req.body;
    console.log(staffID, name);
    // const staffID = staffId; // Assuming staffID is the same as staffId in SignIn model
    const signInEntry = new SignIn( {staffID, name} );
    await signInEntry.save();
    res.status(201).json({ message: 'Sign-in recorded' });
  } catch (error) {
    res.status(500).json({ error: 'Error recording sign-in' });
    console.error(error);
  }
});

router.get('/get-staff/:staffId', async (req, res) => {
    // const { staffId } = req.params;
    const staffID = req.params.staffId;
  
    try {
      const staff = await Staff.findOne({staffID});
      if (!staff) {
        return res.status(404).json({ message: 'Staff not found' });
      }
  
      res.json({ name: staff.name });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
      console.error(error);
    }
  });

module.exports = router;
