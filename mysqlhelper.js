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


function query(client,sqlstring,handler){
    conn.query(
//        'select * from user_info'
        sqlstring,
        function(err,res,fields){

            if(err) {
                console.log('查询错误!');
                throw error;
            }

            console.log(res);
            handler(res);
        }
    );
};

exports.query = query;
