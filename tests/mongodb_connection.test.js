const mongoose_connection = require('../config/mongo_connection');

describe('Can connect to MongoDB', () => {
  try {
    const conn = mongoose_connection;
    const connState = await conn.connection.readyState;
    assert(connState === 'blah');

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})