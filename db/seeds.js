const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const Company = require('../models/company');
Company.collection.drop();

Company.create([
  {
    name: 'Limejump',
    address: 'Kennington Park, 1-3 Brixton Road, London SW9 6DE'
  },
  {
    name: 'Bulb',
    address: '68 Hanbury Street, London E1 5JL'
  },
  {
    name: 'Ecotricity',
    address: 'Lion House, Rowcroft, Stroud, Gloucestershire GL5 3BY'
  },
  {
    name: 'Greencoat Renewables',
    address: '43 Fitzwilliam Square, Dublin 2, D02 K792, Ireland'
  },
  {
    name: 'redT',
    address: '27-31 Clerkenwell Close, London EC1R 0AT'
  }

])
  .then(companies => console.log(`${companies.length} companies created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
