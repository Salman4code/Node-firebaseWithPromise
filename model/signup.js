var express = require('express');
var app = express();
var router = express.Router();
var firebase = require("../config")

var root = firebase.database().ref();
var signup = function(){
  this.checksignup=function(request){
  return new Promise(function(resolve, reject) {
    console.log(request.body);
  Username = request.body.name;
  UserEmail = request.body.email;
  UserPassword = request.body.password;
  confirmpassword=request.body.confirmpassword;
  console.log(typeof(Username));
  //request.checkBody("name","Please Enter name in String character").isAplha();
  request.checkBody("name","Please Enter name").notEmpty();
  request.checkBody("password","Please Enter Password").notEmpty();
  request.checkBody("email","Please Enter email_id").notEmpty();
  request.checkBody('email', "Enter valid email address.").isEmail();
  request.checkBody("password", "Password must be of 8 digit & password must contain atleast one capital letter,one small letter and one special character").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
  request.checkBody("mobile", "Mobile number is not valid").matches(/^[789]\d{9}$/);
  if(UserPassword!=confirmpassword)
  {
    reject("Password does not matched");
  }
  var errors = request.validationErrors();
  if (errors) {
    //response.send(errors);
    reject(errors);
  }

  root.orderByChild("email").equalTo(UserEmail).once("value", function(snapshot) {
    if (snapshot.val() === null) {
      root.push().set({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        mobile: request.body.mobile
      });
      console.log(request.session);
      request.session={"email":UserEmail};
      resolve("Signup Successfully");

    } else {

      reject("Email_Id already Exist");
    }
  })
})
}
}
module.exports=signup;
