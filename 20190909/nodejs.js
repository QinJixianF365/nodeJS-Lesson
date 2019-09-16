import { Http2SecureServer } from "http2";

//1、 应用程序的后端开发
//处理前端发来的请求，作出响应。
//可以连接数据，从数据库中查询到数据，并且渲染到前端

//2、 写命令行应用程序！

//3、 写第三方的模块！

//后端程序、服务器的概念

    //创建了一个服务器
Http.createServer(function(req, res) {

}).listen(8081)

//4、 一个远端的计算机（经过特定的配置）
//会有一个服务器程序（软件），监听特定端口

//后端程序部署在服务器程序上。

//浏览器端向特定的服务器程序发起请求的时候
//121.89.12.121:8081/demo/indexedDB.html

//后端程序会接收请求，并且做出响应。

res.writeHead(200, {"Content-Type": "text/html"});
res.write("hello");
res.end();