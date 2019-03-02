var orm = require("../config/orm.js");

var burger = {
      selectAll: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
      },
      insertOne: function(vals, cb) {
        orm.insertOne(vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objColVals, cb) {
        orm.updateOne(objColVals, function(res) {
          cb(res);
        });
      },
};

module.exports = burger;