const db = require('../models/models');

const offerController = {};

offerController.newOffer = async (req, res, next) => {
  const { user_id, company_id, department_id, amount, position_id, notes, date } = req.body;
  try {
    const queryString =
    `
    INSERT INTO offers ( user_id, company_id, department_id, amount, position_id, notes, date )
    VALUES ($1, $2, $3, $4, $5, $6, $7) 
    RETURNING *;`;
    const params = [ user_id, company_id, department_id, amount, position_id, notes, date ];
    const result = await db.query(queryString, params);
    res.locals.newOffer = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `offerController.newOffer ERROR: ${err}`,
      message: { err: 'Error occured in offerController.newOffer' }
    });
  }
}

offerController.getOffers = async (req, res, next) => {
  try {
    const queryString =
    `
    SELECT 
    offers.notes, offers.amount, offers.date,
    companies.name AS company_name, 
    departments.name AS department_name, 
    positions.name AS position_name, positions.level AS position_level, 
    users.first_name AS first_name, users.last_name AS last_name
    FROM offers
    LEFT JOIN companies ON offers.company_id = companies.id
    LEFT JOIN departments ON offers.department_id = departments.id
    LEFT JOIN positions ON offers.position_id = positions.id
    LEFT JOIN users ON offers.user_id = users.id;`;
    const result = await db.query(queryString);

    for (let i = 0; i < result.rows.length; i++) {
      result.rows[i].date = result.rows[i].date.toISOString().split('T')[0];
    }
    res.locals.foundOffers = result.rows;
    // invoke next to enter the next middleware function
    next();
  }
  catch (err) {
    next({
      log: `offerController.getOffers  ERROR: ${err}`,
      message: { err: 'Error occured in offerController.getOffers' }
    });
  }
}

offerController.updateOffer = async (req, res, next) => {
  const { offer_id, amount, notes, company_id, department_id, position_id, date } = req.body; // destructure relevant data from request body
  try {
    const params = [ offer_id ]; // include relevant parameters for db query
    let queryString = // formulate updated columns
    `
    UPDATE offers
    SET
    `;
    if (amount) params.push(amount), queryString += `amount = $${params.length}, `;
    if (notes) params.push(notes), queryString += `notes = $${params.length}, `;
    if (company_id) params.push(company_id), queryString += `company_id = $${params.length}, `;
    if (department_id) params.push(department_id), queryString += `department_id = $${params.length}, `;
    if (position_id) params.push(position_id), queryString += `position_id = $${params.length}, `;
    if (date) params.push(date), queryString += `date = $${params.length}, `;
    queryString = queryString.substring(0, queryString.length-2);
    queryString += 
    `
    WHERE id = $1
    RETURNING *;`;
    
    const result = await db.query(queryString, params);
    
    res.locals.updatedOffer = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `offerController.updateOffer  ERROR: ${err}`,
      message: { err: 'Error occured in offerController.updateOffer' }
    });
  }
}

offerController.deleteOffer = async (req, res, next) => {
  const { offer_id } = req.body; // destructure relevant data from request body
  try {
    const queryString = // definte column to be deleted
    `
    DELETE FROM offers
    WHERE id = $1
    RETURNING *;`;
    const params = [ offer_id ]; // include relevant parameters for db query
    const result = await db.query(queryString, params);

    res.locals.deletedOffer = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `offerController.deleteOffer  ERROR: ${err}`,
      message: { err: 'Error occured in offerController.deleteOffer' }
    });
  }
}

module.exports = offerController;