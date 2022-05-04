const express = require('express');
const interviewController = require('../controllers/interviewController');
const interviewRouter = express.Router();

// create interview /interviews/newinterview
interviewRouter.post('/newInterview',
  interviewController.newInterview,
  (req, res) => res.status(200).json(res.locals.newInterview)
);

interviewRouter.get('/getInterviews',
  interviewController.getInterviews,
  (req, res) => res.status(200).json(res.locals.foundInterviews)
);

interviewRouter.put('/updateInterview',
  interviewController.updateInterview,
  (req, res) => res.status(200).json(res.locals.updatedInterview)
);

interviewRouter.delete('/deleteInterview',
  interviewController.deleteInterview,
  (req, res) => res.status(200).json(res.locals.deletedInterview)
);

module.exports = interviewRouter;