var express = require('express');
var app = express();
var router = express.Router();


login = require("../model/login");

loginObject= new login();

router.post('/login', function(request, response) {

//var data=request.body;

  loginObject.checklogin(request).then(function(success) {
    response.send({
      "status": true,
      "message": success
    });

  }, function(error) {
    response.send({
      "status": false,
      "message": error
    });
  });


})








module.exports = router;
