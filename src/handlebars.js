const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({
  extname: '.hbs',
  defaultLayout: 'base',
  helpers: {
    getTime() {
      return new Date().toISOString();
    },
  },
});

module.exports = hbs;
