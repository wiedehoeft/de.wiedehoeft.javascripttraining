const resolveAlias = (app) => {

  return app.get('/api/:alias', (req, res) => {
    res.send('Resolveing alias...' + req.params.alias);
  });
};

module.exports = resolveAlias;
