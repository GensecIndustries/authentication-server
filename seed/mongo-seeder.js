const seedCollection = require("../utils/mongo/seed-collection");
const Country = require("../models/country");
const City = require("../models/city");
const County = require("../models/county");
const Area = require("../models/area");
const Neighborhood = require("../models/neighborhood");

seedCollection(Country, `${__dirname}\\data\\countries.json`, () => {
  seedCollection(City, `${__dirname}\\data\\cities.json`, () => {
    seedCollection(County, `${__dirname}\\data\\counties.json`, () => {
      seedCollection(Area, `${__dirname}\\data\\areas.json`, () => {
        seedCollection(Neighborhood, `${__dirname}\\data\\neighborhoods.json`);
      });
    });
  });
});
