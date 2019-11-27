'use strict';

const mongo = require('mongodb'),
  {uuid} = require('uuidv4');

const {flaschenpost} = require('flaschenpost');

const MongoClient = mongo.MongoClient;

const logger = flaschenpost.getLogger();

const database = {
  initialize(connectionString, callback) {
    if (!connectionString) {
      throw new Error('ConnetionString is missing');
    }

    if (!callback) {
      throw new Error('Callback is missing');
    }

    MongoClient.connect(connectionString, {autoReconnect: true}, (err, client) => {
      if (err) {
        return callback(err);
      }

      // TODO: Mappings not initialized at first call
      const mappings = client.db('admin').collection('mappings');
      this.mappings = mappings;

      callback(null);
    });
  },

  getMapping(alias, callback) {
    if (!alias) {
      throw new Error('Alias is missing');
    }

    if (!callback) {
      throw new Error('Callback is missing');
    }

    logger.info('Searching with alias', {alias});

    this.mappings.findOne({alias}, (err, mapping) => {
      if (err) {
        return callback(err);
      }
      if (!mapping) {
        return callback(new Error('Alias not found'));
      }

      callback(null, mapping);
    })
  },

  createMapping(alias, target, callback) {
    if (!alias) {
      throw new Error('Alias is missing');
    }

    if (!target) {
      throw new Error('Target is missing');
    }

    if (!callback) {
      throw new Error('Callback is missing');
    }

    const mapping = {
      id: uuid(),
      alias,
      target,
      statistics: {
        created: Date.now(),
        invoked: 0
      }
    };

    this.mappings.insertOne(mapping, err => {
      if (err) {
        return callback(err);
      }

      if (!mapping) {
        return callback(new Error('Alias not found!'));
      }

      callback(null);
    });
  },

  getMappings(callback) {
    if (!callback) {
      throw new Error('Callback is missing');
    }

    this.mappings
      .find({}, {_id: 0}) //TODO: Fix me!
      .sort({alias: 1})
      .toArray((err, mappings) => {
        if (err) {
          return callback(err);
        }
        callback(null, mappings);
      });
  },

  invokeMapping(id, callback) {
    if (!id) {
      throw new Error('ID is missing');
    }

    if (!callback) {
      throw new Error('Callback is missing');
    }

    this.mappings.updateOne({id}, {$inc: {'statistics.invoked': 1}}, err => {
      if (err) {
        return callback(err);
      }
      return callback(null);
    })
  }
};

module.exports = database;
