const http = require("http");

var server = http.createServer(function(req, res) {
    res.write("hello world");
    res.end();
});

server.listen(8081);
console.log("server is listening 8081");
/* 
1. Shift+ 鼠标右键 点击打开power shell窗口
2. 编译node.js文件 node + 文件名
3. 每次修改js文件后，需要重新执行 node+ 文件名
4. 在node中的js文件，必须得编译才能执行
5. WebStorm
*/