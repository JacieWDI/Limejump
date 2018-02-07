const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const router          = require('./config/routes');
const { env, dbURI, port } = require('./config/environment');
const cors             = require('cors');
const app             = express();
const mongoose        = require('mongoose');

mongoose.Promise      = require('bluebird');
mongoose.connect(dbURI);

if(env !== 'test') app.use(morgan('dev'));

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is up and running on port: ${port}`));

module.exports = app;
