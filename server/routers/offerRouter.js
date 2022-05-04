const express = require('express');
const offerController = require('../controllers/offerController');
const offerRouter = express.Router();

// create offer /offers/newOffer
offerRouter.post('/newOffer',
  offerController.newOffer,
  (req, res) => res.status(200).json(res.locals.newOffer)
);

offerRouter.get('/getOffers',
  offerController.getOffers,
  (req, res) => res.status(200).json(res.locals.foundOffers)
);

offerRouter.put('/updateOffer',
  offerController.updateOffer,
  (req, res) => res.status(200).json(res.locals.updatedOffer)
);

offerRouter.delete('/deleteOffer',
  offerController.deleteOffer,
  (req, res) => res.status(200).json(res.locals.deletedOffer)
);

module.exports = offerRouter;