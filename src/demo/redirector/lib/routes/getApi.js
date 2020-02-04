const getApi = (app) => {

  return app.get('/api', (req, res) => {
    res.send('Listing existing short urls...');
  });
};

module.exports = getApi;
