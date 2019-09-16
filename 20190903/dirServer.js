//1.引入http原生模块
const http = require("http");
const fs = require("fs");
//2.创建一个服务器
var server = http.createServer(function(req, res) {
    var urlObj = url.Parse(req.url);
    // 4.当客户端的http请求发起的时候，才会执行回调函数里面的内容。
    //res.end("hello");
    var htmlPath = _dirname + "\\view\\index.html";
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(htmlContent);
    res.end();
    //console.log(htmlPath);
    //console.log(htmlContent);
});
//3.服务监听一个端口
server.listen(8081);
console.log("server is listening 8081");



else if(urlPathName == "/js/index.js") {
    var jsPath = path.join(__dirname, "/js/index.js");
    var jsContent = fs.readFileSync(jsPath);

    res.writeHead(200, {"content-Type": "text/javascript"});
    res.write(jsContent);
    res.end();
}

//2.创建一个服务器，只要有http请求，访问窗口。
// 就会执行回调函数里面的内容

//req.url表示url地址中，端口以后的内容
// http:
// 使用了url.parse 将req.url转化为了对象，对象提取pathname
var urlObj = url.parse(req.url);
var 
//根据资源路径，可以决定执行那一段代码