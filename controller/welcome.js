var express = require('express');
// var app = express();
var route = express.Router();
//var session		=	require('express-session');
route.get('/welcome',function(request,response)
{

console.log(request.session);
	if(request.session.email==null)
	{

		response.send({"status":false,"message":"No user"});
	}
  else {
  response.send({"status":true,"message":"you are online"});
  //response.redirect("/login");
}
});
module.exports = route;
