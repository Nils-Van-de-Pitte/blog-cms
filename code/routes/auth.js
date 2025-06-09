const express = require('express');
const AuthController = require('../core/controllers/auth');

const router = express.Router();

router.post('/register', async(req, res) => {
  try {
    const request = {firstname, lastname, email, password} = req.body;
    await new AuthController().register(request);
    // TODO generate a success
  } catch (error) {
    res.status(500).json({message: 'Looks like something went wrong'});
  }
});

module.exports = router;