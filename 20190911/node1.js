//1、实现事件的继承的API

http.createServer(callback).listen(8081)
//当前端发来请求时，触发事件，执行回调函数
process.stdin.on("data", callback)
//当输入流接收到用户输入数据时，执行回调函数
