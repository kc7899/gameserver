/**
 * Created by Ben on 14/11/5.
 */

var router = require("./router");
var http = require('http');
var url = require("url");
var info = "通过HTTPGet方式成功加入队列";
http.createServer(function (req, res) {


    var pathname, querystr;
    var urlData = url.parse(req.url);
    pathname = urlData.pathname;
    querystr = urlData.query;

//    console.log("Request for " + pathname + " received.");
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(router.route(pathname, querystr));
    res.end();

    /** get处理
    var params = url.parse(req.url, true).query;//解释url参数部分name=zzl&email=zzl@sina.com
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    res.write(info);
    res.end();
    */



// 关闭nodejs 默认访问 favicon.ico
//    if (!pathname.indexOf('/favicon.ico')) {
//        return;
//    };



}).listen(8000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8000/');

//json
function LoadConfig(onOK){
    var fs = require('fs');
    fs.readFile('config.json', 'utf-8', function(error, data){
        if (error) throw error;
        var json = JSON.parse(data);
        if (onOK) {
            onOK(json);
        }
    });
}