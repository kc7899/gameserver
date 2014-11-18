/**
 * Created by Ben on 14/11/12.
 */
var config = require("./config");
var mysql = require('mysql');

var conn = mysql.createConnection({
    host:'10.66.123.210',
    user:'root',
    database:'fruit_db',
    password:'AdamGame123',
    port:3306
});
if(!config.debugmode)
{
    conn.connect();
}



exports.query = function(sqlstring,handler){
    conn.query(
//        'select * from user_info'
        sqlstring,
        function(err,res,fields){

            if(err) {
                console.log('查询失败!');
                throw error;
            }

            //console.log(res);
            handler(res);
        }
    );
};


