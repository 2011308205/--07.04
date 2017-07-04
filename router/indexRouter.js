var express = require('express');
var router=express.Router();
var indexRender = require('../controller/indexCtro.js')
    router.get('/',indexRender.showIndexPage)
module.exports=router;