var connection = require("../config/connection.js");
 
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
    var arr = [];
      for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
      return arr.toString();
  }
  
  
var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers;";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {throw err;} 
            cb(result);
        }); 
    },
    insertOne: function(x, cb) {
        var queryString = "INSERT INTO burgers burger_name, devoured VALUES (" + printQuestionMarks(vals.length) + "), false;";
        console.log(queryString);
        connection.query(queryString, x, function(err, result) {
            if (err) {throw err};
            cb(result);
        });
    },
    updateOne: function(x, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE burger_name" + x +";";
        console.log(queryString);
        connection.query(queryString, x, function(err, result) {
            if (err) {throw err};
            cb(result);
        });
    }
}

module.exports = orm; 