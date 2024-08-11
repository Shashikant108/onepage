const express=require('express');
const app=express();
const cors=require('cors');
const route = require('./Routes/route');
require('./database/db');

app.use(express.json());
app.use(cors());
app.use('/api',route);


app.listen(7900,()=>{
    console.log('server is running')
})