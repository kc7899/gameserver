// router.js by benvar url = require("url");var handle = {};handle["/fruit/info_get"] = require("./fruit/info_get").info_get_data;handle["/fruit/info_set"] = require("./fruit/info_set").info_set_data;function route(req, res){    var pathname, querystr;    var urlData = url.parse(req.url);    pathname = urlData.pathname;    querystr = urlData.query;    res.writeHead(200,{ 'Content-Type': 'text/plain;charset=utf-8'});    if (typeof handle[pathname] == "function") {        handle[pathname](querystr,res);    } else {        console.log("No request handler found for " + pathname);        res.write(JSON.stringify({return:0}));        res.end();    }}exports.route = route;