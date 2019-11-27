'use strict';

const postApiAlias = (database) => {
  if (!database) {
    throw new Error('Database is missing!');
  }

  return (req, res) => {
    const alias = req.params.alias,
      target = req.body.target;

    database.createMapping(alias, target, err => {
      if (err) {
        logger.error(err);
        return res.status(500).end();
      }
      res.status(201).end();
    });
  };
};

module.exports = postApiAlias;
