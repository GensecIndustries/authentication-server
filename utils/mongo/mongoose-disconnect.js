const mongooseDisconnect = mongoose => {
  mongoose.disconnect(err => {
    if (err) {
      console.log(`Database connection error : ${err.message}`);
    } else {
      console.log("Database connection closed ...");
    }
  });
};

module.exports = mongooseDisconnect;
