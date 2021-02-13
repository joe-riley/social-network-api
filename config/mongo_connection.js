const mongoose = require('mongoose');
const env = require('dotenv').config();


let mongoose_connection;

const connect = async () => {
  try {
    if (process.env.MONGODB_URI) {
      mongoose_connection = await mongoose.connect(process.env.MONGODB_URI);
    } else {
      mongoose_connection = await mongoose.connect(
        `mongodb://localhost:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`,
        {
          useFindAndModify: false,
          useNewUrlParser: true,
          useUnifiedTopology: true
        },
      );
    }
    mongoose_connection.set('useCreateIndex', true);
    mongoose_connection.set('debug', process.env.MONGODB_DEBUG);

    return mongoose_connection;
  }catch (err) {
    console.error(err);
  }
}

module.exports = connect;
