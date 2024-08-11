const mongose=require('mongoose');

const myschema=new mongose.Schema({
    description: String,
    timer: Number,
    link: String,
    show: Boolean,
})

const ftype=mongose.model('onepage',myschema);
module.exports=ftype;