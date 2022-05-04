const db = require('../models/models');

const interviewController = {};

interviewController.newInterview = async (req, res, next) => {
  const { user_id, company_id, department_id, date, position_id, questions, answers, notes } = req.body;
  try {
    const queryString =
    `
    INSERT INTO interviews ( user_id, company_id, department_id, date, position_id, questions, answers, notes )
    VALUES ( $1, $2, $3, $4, $5, $6, $7, $8 ) 
    RETURNING *;`;
    const params = [ user_id, company_id, department_id, date, position_id, questions, answers, notes ];
    const result = await db.query(queryString, params);
    res.locals.newInterview = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `interviewController.newInterview ERROR: ${err}`,
      message: { err: 'Error occured in interviewController.newInterview' }
    });
  }
}

interviewController.getInterviews = async (req, res, next) => {
  try {
    const queryString =
    `
    SELECT 
    interviews.date, interviews.questions, interviews.answers, interviews.notes, 
    companies.name AS company_name, 
    departments.name AS department_name, 
    positions.name AS position_name, positions.level AS position_level, 
    users.first_name AS first_name, users.last_name AS last_name 
    FROM interviews
    LEFT JOIN companies ON interviews.company_id = companies.id
    LEFT JOIN departments ON interviews.department_id = departments.id
    LEFT JOIN positions ON interviews.position_id = positions.id
    LEFT JOIN users ON interviews.user_id = users.id;`;
    const result = await db.query(queryString);

    for (let i = 0; i < result.rows.length; i++) {
      result.rows[i].date = result.rows[i].date.toISOString().split('T')[0];
    }
    res.locals.foundInterviews = result.rows;
    // invoke next to enter the next middleware function
    next();
  }
  catch (err) {
    next({
      log: `interviewController.getInterviews  ERROR: ${err}`,
      message: { err: 'Error occured in interviewController.getInterviews' }
    });
  }
}

interviewController.updateInterview = async (req, res, next) => {
  const { interview_id, company_id, department_id, date, position_id, questions, answers, notes } = req.body; // destructure relevant data from request body
  try {
    const params = [ interview_id ]; // include relevant parameters for db query
    let queryString = // formulate updated columns
    `
    UPDATE interviews
    SET
    `;
    if (company_id) params.push(company_id), queryString += `company_id = $${params.length}, `;
    if (department_id) params.push(department_id), queryString += `department_id = $${params.length}, `;
    if (date) params.push(date), queryString += `date = $${params.length}, `;
    if (position_id) params.push(position_id), queryString += `position_id = $${params.length}, `;
    if (questions) params.push(questions), queryString += `questions = $${params.length}, `;
    if (answers) params.push(answers), queryString += `answers = $${params.length}, `;
    if (notes) params.push(notes), queryString += `notes = $${params.length}, `;
    queryString = queryString.substring(0, queryString.length-2);
    queryString += 
    `
    WHERE id = $1
    RETURNING *;`;
    
    const result = await db.query(queryString, params);
    
    res.locals.updatedInterview = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `interviewController.updateInterview  ERROR: ${err}`,
      message: { err: 'Error occured in interviewController.updateInterview' }
    });
  }
}

interviewController.deleteInterview = async (req, res, next) => {
  const { interview_id } = req.body; // destructure relevant data from request body
  try {
    const queryString = // definte column to be deleted
    `
    DELETE FROM interviews
    WHERE id = $1
    RETURNING *;`;
    const params = [ interview_id ]; // include relevant parameters for db query
    const result = await db.query(queryString, params);

    res.locals.deletedInterview = result.rows[0];
    next();
  }
  catch (err) {
    next({
      log: `interviewController.deleteInterview  ERROR: ${err}`,
      message: { err: 'Error occured in interviewController.deleteInterview' }
    });
  }
}

module.exports = interviewController;