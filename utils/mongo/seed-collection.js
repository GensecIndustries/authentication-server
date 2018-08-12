const mongoose = require("mongoose");
const mongooseDisconnect = require("./mongoose-disconnect");
const configurationProperties = require("../../config/configuration-properties");
const isEmpty = require("../validation/is-empty");

const seedCollection = (schema, filePath, seedFunction) => {
  mongoose
    .connect(
      configurationProperties.connectionString,
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("*************************************");
      console.log("Database connection established ...");
      let list = schema.db.db
        .listCollections({
          name: schema.collection.name
        })
        .toArray();

      if (list.length !== 0) {
        console.log(`Dropping collection ${schema.collection.name} ...`);
        schema.collection.drop(() => {
          seed(schema, filePath, seedFunction);
        });
      } else {
        console.log(`Collection ${schema.collection.name} does not exist`);
        seed(schema, filePath, seedFunction);
      }
    })
    .catch(err => console.log(`Database connection error : ${err.message}`));
};

const seed = (schema, filePath, seedFunction) => {
  if (!isEmpty(filePath)) {
    console.log(`Reading ${schema.collection.name} from file...`);
    var countries = require(filePath);

    console.log(`Starting importing ${schema.collection.name} ...`);

    for (let index = 0; index < countries.length; index++) {
      var country = new schema(countries[index]);
      country.save((err, result) => {
        if ((index + 1) % 500 === 0) {
          console.log(`${index + 1} imported...`);
        }
        if (index + 1 === countries.length) {
          console.log(`${schema.collection.name} successfully imported.`);
          console.log("*************************************");
          mongooseDisconnect(mongoose);

          if (seedFunction) {
            seedFunction();
          }
        }
      });
    }
  } else {
    mongooseDisconnect(mongoose);

    if (seedFunction) {
      seedFunction();
    }
  }
};

module.exports = seedCollection;
