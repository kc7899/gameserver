/**
 * Created by Ben on 14/11/12.
 */

var sqlhelper = require("../mysqlhelper");

function info_set_data(querystr,res)
{

    res.write(JSON.stringify({return:1}));
    res.end();
}

exports.info_set_data = info_set_data;