const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

// create user /users/signup
userRouter.post('/signup',
  userController.signup,
  (req, res) => res.status(200).json(res.locals.newUser)
);

userRouter.get('/verifyUser',
  userController.verifyUser,
  (req, res) => res.status(200).json(res.locals.foundUser)
);


module.exports = userRouter;