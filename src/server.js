// entry point
const express = require('express');
const app = express();
const hbs = require('./handlebars');
const applyRouter = require('./routes');
// fake session for db-less function (lost on restart)
const GLOBAL_SESSION = {
  votes: {
    on: 0,
    off: 0,
  }
};

// load static
app.use(express.static('static'));
app.use('/bs',express.static('node_modules/bootstrap/dist/'));
// load HBS
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
// apply routes
applyRouter(app, GLOBAL_SESSION);

// listen
app.listen(3000);
