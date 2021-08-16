const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidley')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


/*const startupDebugger = require('debug')('app:startup');
//const dbDebugger = require('debug')('app:db');
const mongoose = require('mongoose');
const config = require('config');
//const helmet = require('helmet');
//const morgan = require('morgan');
const genres = require('./routes/genres');
const home = require('./routes/home');
//const promises = require('./routes/promises');
const logger = require('./middleware/logger');
const Joi = require('joi');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

mongoose.connect('mongodb://localhost/vidley') //returns a promise
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(err => console.error('Connection failed to MongoDB...', err));

app.use(express.json());
//app.use(helmet());
app.use('/api/genres','genres');
app.use('/','home');
//app.use('/api/promises','promises');
app.use(logger);

//Configuration
console.log('Application Name:' + config.get('name'));
console.log('Mail Server:' + config.get('mail.host'));
console.log('Mail Password:' + config.get('mail.password'));

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled...'); //for debugging

//dbDebugger('Connected to database...');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
*/
