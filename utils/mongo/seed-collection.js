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
    var data = require(filePath);

    console.log(`Starting importing ${schema.collection.name} ...`);

    schema.collection.insert(data, (err, docs) => {
      if (err) {
        console.info(err.message);
      } else {
        console.info(
          `${data.length} ${schema.collection.name} were successfully imported.`
        );

        mongooseDisconnect(mongoose);
        if (seedFunction) {
          seedFunction();
        }
      }
    });
  } else {
    mongooseDisconnect(mongoose);

    if (seedFunction) {
      seedFunction();
    }
  }
};

module.exports = seedCollection;
