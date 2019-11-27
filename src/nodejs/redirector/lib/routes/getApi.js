'use strict';

const getApi = (database) => {
  if (!database) {
    throw new Error('Database is missing!');
  }

  return (req, res) => {
    database.getMappings((err, mappings) => {
      if (err) {
        return res.status(500).end();
      }
      res.send(mappings);
    });
  }
};

module.exports = getApi;
