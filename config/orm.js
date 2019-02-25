var connection = require("../config/connection.js");
 
var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err; 
            console.log(result);
        }); 
    },
    insertOne: function(x) {
        var queryString = "INSERT INTO burgers burger_name, devoured VALUES ??, false";
        console.log(queryString);
        connection.query(queryString, [x], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(x) {
        var queryString = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
        console.log(queryString);
        connection.query(queryString, [x], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm; 