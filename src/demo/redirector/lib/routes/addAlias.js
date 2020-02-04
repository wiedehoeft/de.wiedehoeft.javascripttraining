const addAlias = (app) => {

  return app.post('/api/:alias', (req, res) => {
    res.send('Saving alias...' + req.params.alias + ' with content ' + JSON.stringify(req.body));
  });
};

module.exports = addAlias;
