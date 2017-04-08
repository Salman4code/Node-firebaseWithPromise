var express =require("express");
var router = express.Router();

var login=require("../model/login");

  router.use(require('./signup'));
 router.use(require('./login'));
 router.use(require('./welcome'));
 router.use(require('./logout.js'));



// route.use("/signup",require("./signup"));
// route.use("/login",require("./login"));
// route.use("/getall",require("./getall"));
// route.use("/welcome",require("./welcome"));
// route.use("/logout",require("./logout"));

module.exports = router;
