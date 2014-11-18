/**
 * Created by Ben on 14/11/12.
 */

var mysql = require('mysql');

var conn = mysql.createConnection({
    host:'10.66.123.210',
    user:'root',
    database:'fruit_db',
    password:'AdamGame123',
    port:3306
});
conn.connect();


function query(client){
    conn.query(
        'select * from user_info',
        function(err,res,fields){
            console.log(res);
        }
    );
};

exports.query = query;
