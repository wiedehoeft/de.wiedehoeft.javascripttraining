const handle = (req, res) => {
  res.writeHead(200, {
    'content-type': 'text/html'
  });

  res.write(`Hello HTTP. ${req.method}${req.url}`);

  res.end();
};

module.exports = handle;
