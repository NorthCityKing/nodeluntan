//引包
const express=require('express');

//创建Server

const app=express();

//设置可访问目录
//开发公共资源
app.use('/public/',express.static('./public'));

//根据请求配置
app.get('/',function(req,res){
res.send('Hello Express');
});

app.get('/about',function(req,res){
  console.log(req.query);
res.send('我是 Express！！！！！');
});




//监听端口
app.listen(3000,function(){
  console.log('express is Start!!!');
});
