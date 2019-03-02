var orm = require("../config/orm.js");

var burger = {
      selectAll: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
      },
      insertOne: function(vals) {
        orm.insertOne("burgers", vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objColVals, cb) {
        orm.updateOne("burgers", objColVals, function(res) {
          cb(res);
        });
      },
};

module.exports = burger;