var express = require('express');
var route = express.Router();

route.get('/logout',function(request,response)
{


 request.session=null;
 console.log(request.session);
  response.send({"status":false,"message":"logged out"});

});
module.exports = route;
