const db = require('../models/models');

const companyInfoController = {};

companyInfoController.newCompany = async (req, res, next) => {
  const { name } = req.body;
  try {
    const queryString =
      `
    INSERT INTO companies ( name )
    VALUES ($1) 
    RETURNING *;
    `;
    const params = [name];
    const result = await db.query(queryString, params);
    res.locals.newCompany = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `companyInfoController.newCompany ERROR: ${err}`,
      message: { err: 'Error occured in companyInfoController.newCompany' }
    })
  }
}

companyInfoController.newDepartment = async (req, res, next) => {
  const { name, company_id } = req.body;
  try {
    const queryString =
      `
    INSERT INTO departments ( name, company_id )
    VALUES ($1, $2) 
    RETURNING *;
    `;
    const params = [name, company_id];
    const result = await db.query(queryString, params);
    res.locals.newDepartment = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `companyInfoController.newDepartment ERROR: ${err}`,
      message: { err: 'Error occured in companyInfoController.newDepartment' }
    })
  }
}

companyInfoController.newPosition = async (req, res, next) => {
  const { name, level } = req.body;
  try {
    const queryString =
      `
    INSERT INTO positions ( name, level )
    VALUES ($1, $2) 
    RETURNING *;
    `;
    const params = [name, level];
    const result = await db.query(queryString, params);
    res.locals.newPosition = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `companyInfoController.newPosition ERROR: ${err}`,
      message: { err: 'Error occured in companyInfoController.newPosition' }
    })
  }
}

module.exports = companyInfoController;