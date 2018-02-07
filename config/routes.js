const router = require('express').Router();
const companies = require('../controllers/companies');

router.route('/part1')
  .get(companies.index);

router.route('/part1/:id')
  .get(companies.show)
  .put(companies.update);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
