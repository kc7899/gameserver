/**
 * Created by Ben on 14/11/12.
 */

var mysql = require('mysql');

var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'nodedb',
    password:'********',
    port:3306
});
conn.connect();


function query(client){
    conn.query(
        'select * from userinfo',
        function(err,res,fields){
            console.log(res);
        }
    );
};

exports.query = query;
