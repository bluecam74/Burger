var connection = require("../config/connection.js");
 
// function printQuestionMarks(num) {
//     var arr = [];
  
//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }
  
//     return arr.toString();
//   }

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
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, {
            burger_name: x.burger_name,
            devoured: false
         }, 
          function(err, result) {
            if (err) {throw err};
            cb(result);
        });
    },
    updateOne: function(objColVals, x, cb) {
      console.log("X: ", x);
        var queryString = "UPDATE burgers SET " + objToSql(objColVals) + " WHERE " + x + ";";
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {throw err};
            cb(result);
        });
    }
}

module.exports = orm; 