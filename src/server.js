// entry point
const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();

// fake session for db-less function (lost on restart)
const GLOBAL_SESSION = {
  votes: {
    on: 0,
    off: 0,
  },
};

// load static
app.use(express.static('static'));
// load HBS
app.engine(
  '.hbs',
  expressHandlebars({
    extname: '.hbs',
    defaultLayout: 'base',
  })
);
app.set('view engine', '.hbs');

// routes
app.get('/', (req, res) => {
  res.render('index', GLOBAL_SESSION);
});

app.get('/detail',(req,res)=>{

} );

app.get('/vote/:side', (req, res) => {
  const { side } = req.params;
  if (side === 'on' || side === 'off') {
    GLOBAL_SESSION.votes[side]++;
  }
  res.redirect('/');
});

// listen
app.listen(3000);
