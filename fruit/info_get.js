/**
 * Created by Ben on 14/11/6.
 */


var sqlhelper = require("../mysqlhelper");

function info_get_data(querystr,res)
{
    res.write(JSON.stringify({return:1}));
    res.end();
}

exports.info_get_data = info_get_data;