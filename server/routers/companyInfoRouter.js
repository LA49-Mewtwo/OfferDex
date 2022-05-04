const express = require('express');
const companyInfoController = require('../controllers/companyInfoController');
const companyInfoRouter = express.Router();


// create new Company /companyInfo/newCompany
companyInfoRouter.post('/newCompany',
  companyInfoController.newCompany,
  (req, res) => res.status(200).json(res.locals.newCompany)
);

// create new Department /companyInfo/newDepartment
companyInfoRouter.post('/newDepartment',
  companyInfoController.newDepartment,
  (req, res) => res.status(200).json(res.locals.newDepartment)
);

// create new position /companyInfo/newPosition
companyInfoRouter.post('/newPosition',
  companyInfoController.newPosition,
  (req, res) => res.status(200).json(res.locals.newPosition)
);


module.exports = companyInfoRouter;