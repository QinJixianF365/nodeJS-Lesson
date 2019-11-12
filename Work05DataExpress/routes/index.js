var express = require('express');
var router = express.Router();
var data=require("../config/data.json");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  });
});

router.get('/login', function(req, res, next) {
    res.render("login");
});

router.post('/login',function(req,res,next) {
  var username=req.body.username;
  var pwd=req.body.pwd;
  var i = 0;
  while(i < data.users.length){
    if(username==data["users"][0].username && pwd == data["users"][0].password){
      console.log("密码正确");
      res.render('list', {
        title: 'Express'
      });
      res.render("list",{
        theData:data["chapterList"]
      });
      break;
    }
    i++;
  }
  if(i = data.users.length){
    res.end("密码错误");
  }
})

module.exports = router;