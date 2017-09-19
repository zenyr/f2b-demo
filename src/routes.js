module.exports = (app, GLOBAL_SESSION) => {
  // routes
  app.get('/', (req, res) => {
    res.render('index', GLOBAL_SESSION);
  });

  app.get('/detail', (req, res) => {});

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
