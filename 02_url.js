var url=require('url');

var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
      });
    
    if(req.url!='favicon.ico'){
        var result=url.parse(req.url,true);
        console.log(result);
        console.log(result.query.userName)
        console.log(result.query.age)
    }
      // 结束响应
      res.end();
    
   
}).listen(3000); 