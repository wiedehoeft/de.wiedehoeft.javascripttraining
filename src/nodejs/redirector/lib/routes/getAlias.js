'use strict';

const getAlias = (database) => {
  if (!database) {
    throw new Error('Database is missing!');
  }

  return (req, res) => {
    const alias = req.params.alias;

    database.getMapping(alias, (err, mapping) => {
      if (err) {
        logger.warn(err);
        return res.status(404).end();
      }

      res.redirect(307, mapping.target);
    });
  }
};

module.exports = getAlias;
