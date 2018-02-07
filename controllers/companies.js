const Company = require('../models/company');

function companiesIndex(req, res, next) {
  Company
    .find()
    .exec()
    .then(companies => res.json(companies))
    .catch(next);
}

function companiesShow(req, res, next) {
  Company
    .findById(req.params.id)
    .exec()
    .then(company => {
      if (!company) return res.notFound();
      res.json(company);
    })
    .catch(next);
}

function companiesUpdate(req, res, next) {
  Company
    .findById(req.params.id)
    .exec()
    .then(company => {
      if (!company) return res.notFound();

      for(const field in req.body) {
        company[field] = req.body[field];
      }

      return company.save();
    })
    .catch(next);
}

module.exports = {
  index: companiesIndex,
  show: companiesShow,
  update: companiesUpdate
};
