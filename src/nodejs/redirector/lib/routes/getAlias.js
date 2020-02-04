'use strict';

const getAlias = database => {
  if (!database) {
    throw new Error('Database is missing!');
  }

  return (req, res) => {
    const { alias } = req.params;

    database.getMapping(alias, (err, mapping) => {
      if (err) {
        logger.warn(err);

        return res.status(404).end();
      }

      database.invokeMapping(mapping.id, err => {
        if (err) {
          return res.status(500).end();
        }
        res.redirect(307, mapping.target);
      });
    });
  };
};

module.exports = getAlias;
