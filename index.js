const express = require('express');
const hbs = require('express-handlebars');


const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config();
const getPlaceholder = require('./lib/getPlaceholder');
const app = express();
app.engine('hbs',hbs({
    extname:'.hbs'
}));

app.set('view engine','.hbs');
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',async(req,res)=>{
    // let data = await getPlaceholder();
    // console.log(data);
    res.render('index')
});
app.post('/',async(req,res)=>{
    let {city,countryCode} = req.body
    
    let data  = await getPlaceholder(city,countryCode);
    console.log(data);
    if(data.name)
    {res.render('index',{data});
        
    } 
    else{
        res.render('index',{err:"Error"});
    }
  
    
});
app.listen(3000,()=>{
    console.log("http://localhost:3000");
})