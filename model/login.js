var express = require("express");
var route = express.Router();
var firebase = require("../config");
var root = firebase.database().ref();

var login = function() {

  this.checklogin = function(request) {
    return new Promise(function(resolve, reject) {
      var email = request.body.email;
      //var email = data1.email;
      var password = request.body.password;
      //var password = data1.password;
      console.log(email);
        request.checkBody("email","Please Enter Valid Email id").isEmail();
        request.checkBody("password","Please Enter Password").notEmpty();
        request.checkBody("password", "password must contain atleast one capital letter,one small letter and one special character").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
        var errors = request.validationErrors();
        if (errors) {

          reject(errors);
        }
      // if (email == "" || email == undefined || email == null) {
      //
      //   reject("Please Enter Email_id");
      //
      // } else if (password == "" || password == undefined || password == null) {
      //
      //   reject("Please Enter Password");
      // }

      root.on("value", function(snapshot) {

        console.log(" inside database");
        root.orderByChild("email").equalTo(request.body.email).once("value", function(snapshot) {
          console.log(snapshot.val());
          if(snapshot.val()!==null)
          {
          snapshot.forEach(function(data) {
            console.log("inside snapshot for each");
            Userinfo = data.val();
            Useremail = Userinfo.email;
            Userpassword = Userinfo.password;

            if (email === Useremail && password === Userpassword) {

              request.session = Userinfo;
              //console.log(request.session);

              resolve("Login Successfully");
            } else {
              console.log("Unauthorised user");

              reject("Unauthorised User");
            }
          });
        }
        else {
          reject("Email id is not Registered");
        }
        });
      });

    });
  }
}

module.exports = login;
