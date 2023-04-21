const express = require('express');
const router = express.Router();

/* GET users listing. */

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/cool', (req, res, next) => {
  res.send('You\'re so cool');
});

router.get('/ok', (req, res, next) => {
  res.send('You\'re ok');
});

router.get('/*', (req, res, next) => {
  res.send('That ressource wasn\'t found or does not exist');
});

module.exports = router;