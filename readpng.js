var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
    if (request.url !== "/favicon.ico") {  //清除第2此访问  

        fs.readFile("image.png", 'binary', function (err, filedata) { //异步执行  'binary' 二进制流的文件
            if (err) {
                console.log(err);
                return;
            } else {
                response.write(filedata, 'binary');
                response.end();
            }



        })
    }
}).listen(8005);