// router.js by ben

/**
function route(handle, pathname, response, postData){
    console.log("About to route request for " + pathname);
    if (typeof handle[pathname] === 'function'){
	return handle[pathname](response, postData);
    }else{
	console.log("No request handler found for " + pathname);
	response.writeHead(404, {"Content-Type":"text/plain"});
	response.write("404 Not found");
	response.end();
    }
}
*/

function route(pathname,querystring)
{
    console.log(pathname, querystring);

    var patch = "."+pathname;
    if(mkdir_p(patch+".js"))
    {
        var request = require(patch);
        return request.info_request(querystring);
    }
    else
    {
        return "404";
    }


}

exports.route = route;

//检查目录是否存在
function mkdir_p(dir){
    var fs=require('fs');
    return fs.existsSync(dir);
}