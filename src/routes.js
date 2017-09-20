// fibo cache
const fiboCache = [1, 1];
const fibo = n => {
  if (fiboCache[n - 1]) return fiboCache[n - 1];
  const result = fibo(n - 2) + fibo(n - 1);
  fiboCache[n - 1] = result;
  return result;
};

module.exports = (app, GLOBAL_SESSION) => {
  // routes
  app.get('/', (req, res) => {
    res.render('index', GLOBAL_SESSION);
  });

  app.get('/fibo', (req, res) => {
    res.render('fibo', GLOBAL_SESSION);
  });
  app.get('/vote', (req, res) => {
    res.render('vote', GLOBAL_SESSION);
  });
  app.get('/google', (req, res) => {
    res.render('google', GLOBAL_SESSION);
  });

  app.get('/fibo/get/:number', (req, res) => {
    let { number } = req.params;
    number = parseInt(number, 10) || 0;
    if (number <= 0 || number >= 500) {
      res.send('없음');
      return;
    }
    res.send(`${fibo(number)}`);
  });

  app.get('/vote/:side', (req, res) => {
    const { side } = req.params;
    if (side === 'on' || side === 'off') {
      GLOBAL_SESSION.votes[side]++;
    }
    if (side === 'both') {
      GLOBAL_SESSION.votes.on++;
      GLOBAL_SESSION.votes.off++;
    }
    res.redirect('/');
  });
};
