'use strict';

const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionString = 'mongodb://admin:secret@localhost:27017';

MongoClient.connect(connectionString, {autoReconnect: true}, (err, client) => {
  if (err) {
    return console.log('Failed to connect');
  }
  console.log('Connected');

  // async syntax
  // client.collection(name, (err, collection) => {
  //
  // });

  const users = client.db('admin').collection('users'); // will create users collection if not present, when strict parameter not set

  // CREATE
  const user = {
    firstName: 'Jane',
    lastName: 'Doe'
  };

  users.insertOne(user, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log('Successfully inserted user');
  });

  // READ
  users.find().toArray((err, documents) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(documents);
  });

  users.find({
    firstName: 'Jane'
  })
    .toArray((err, documents) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(documents);
    });

  // UPDATE => Insert phone number for all entries from Jane
  const filter = {
    firstName: 'Jane'
  };

  const update = {
    $set: {
      phone: 104818491284
    }
  };

  users.updateMany(filter, update, {}, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  users.find({
    firstName: 'Jane'
  })
    .toArray((err, documents) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(documents);
    });

  // DELETE
  users.deleteMany({firstName: 'Jane'}, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });

  users.find({
    firstName: 'Jane'
  })
    .toArray((err, documents) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(documents);
    });

  client.close();
});
