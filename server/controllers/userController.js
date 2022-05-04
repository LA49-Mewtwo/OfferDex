const db = require('../models/models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {};

userController.signup = async (req, res, next) => {
  const { username, password, first_name, last_name, cohort_location, cohort } = req.body;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  try {
    const queryString =
      `
    INSERT INTO users ( username, password, first_name, last_name, cohort_location, cohort, created_at )
    VALUES ($1, $2, $3, $4, $5, $6, $7) 
    RETURNING *;
    `;
    const params = [username, encryptedPassword, first_name, last_name, cohort_location, cohort, new Date(Date.now())];
    const result = await db.query(queryString, params);
    res.locals.newUser = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `userController.signup ERROR: ${err}`,
      message: { err: 'Error occured in userController.signup' }
    })
  }
}

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const queryString =
      `
    SELECT 
    username, password, first_name, last_name, cohort_location, cohort
    FROM users
    WHERE username = $1;
    `;
    const params = [username];
    const result = await db.query(queryString, params);
    // console.log('Result: ', result);
    // compare the hashed password stored in the database and our plainTextPassword
    // if the plaintext password and hashedPassword do not match, throw a new syntax error
    const match = await bcrypt.compare(password, result.rows[0].password);
    // if the passwords are not a match, throw a custom error
    // the catch statement will grab the error thrown and invoke the global error handler
    if (!match) {
      // rather than throwing a new syntax error, maybe return a custom response to client to spawn a modal or alert
      throw new SyntaxError('Incorrect Password, Please Try Again');
    }
    // add the found login user row to the res.locals object
    res.locals.foundUser = result.rows[0];
    // invoke next to enter the next middleware function
    next();
  }
  catch (err) {
    next({
      log: `userController.verifyUser  ERROR: ${err}`,
      message: { err: 'Error occured in userController.verifyUser' }
    })
  }
}

module.exports = userController;