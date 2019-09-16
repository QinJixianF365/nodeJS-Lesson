/**
 nodeServer.js
*/

const http = require("http");
// 实例化server
var server = new http.Server();
// server监听客户端的请求
server.on("request", function(req, res) {
    //
    // http协议,协议的结构 协议的请求响应过程
    // 状态码
    // 
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("<h1>hello world</h1>");
    //响应结束
    //res.end("hello world");
});
// server监听端口
server.listen(8082);
console.log("server is listening 8082");