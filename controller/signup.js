var express = require('express');
var router = express.Router();

signup = require("../model/signup");

signupObject = new signup();

router.post('/signup', function(request,response) {

  signupObject.checksignup(request).then(function(success) {
      response.send({
        "status": true,
        "message": success
      });

    }).catch(function(error) {
      response.send({
        "status": false,
        "message": error

      });
    });


})

module.exports = router;
