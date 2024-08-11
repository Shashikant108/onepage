const express=require('express');
const geted = require('../controller/getdata');
const created = require('../controller/create');
const route=express.Router();

route.get('/get',geted);
route.post('/create',created);

module.exports=route;