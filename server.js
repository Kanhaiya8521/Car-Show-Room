const express = require('express');
const app = express();
var bodyParser=require("body-parser"); 
const path = require('path');
const router = express.Router();
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg', {useNewUrlParser: true,useUnifiedTopology: true}); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 





db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 
  
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 




app.use(bodyParser.json());
app.post('/checkout', function(req,res){ 
  var name = req.body.fname; 
  var email =req.body.email; 
  var address = req.body.address;
  var city =req.body.city; 
  var car =req.body.cars; 
  var state=req.body.state;
  var zip=req.body.zip;
  var cname=req.body.cname;
  var ccnum=req.body.ccnum;
  var expmonth=req.body.expmonth;
  var expyear=req.body.expyear;
  var cvv=req.body.cvv;

  var data = { 
      "car": car,
      "name": name, 
      "email":email, 
      "address":address, 
      "city":city,
      "state":state,
      "zip":zip,
      "cname":cname,
      "ccnum":ccnum,
      "expmonth":expmonth,
      "expyear":expyear,
      "cvv": cvv
  } 
db.collection('detailsofbuyer').insertOne(data,function(err, collection){ 
      if (err) throw err; 
      console.log("Record inserted Successfully");         
  });     
  return res.redirect('thankyou'); 
}) 
app.post('/contact1', function(req,res){ 
  var fname = req.body.fname; 
  var lname = req.body.lname; 
  var email =req.body.email; 
  var contact = req.body.contact;
  var query =req.body.query; 
  var data = { 
      "fname": fname, 
      "lname": lname,
      "email":email, 
      "contact":contact,
      "query":query









  } 
db.collection('contactdetailofbuyer').insertOne(data,function(err, collection){ 
      if (err) throw err; 
      console.log("Record inserted Successfully"); 
            
  }); 
        
  return res.redirect('contact1'); 
}) 

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/1',function(req,res){
  res.sendFile(path.join(__dirname+'/1.html'));
});

app.get('/contact1',function(req,res){
  res.sendFile(path.join(__dirname+'/contact1.html'));
});

app.post('/2',function(req,res){
  res.sendFile(path.join(__dirname+'/2.html'));
});
app.post('/3',function(req,res){
  res.sendFile(path.join(__dirname+'/3.html'));
});
app.post('/4',function(req,res){
  res.sendFile(path.join(__dirname+'/4.html'));
});
app.get('/1',function(req,res){
  res.sendFile(path.join(__dirname+'/1.html'));
});

app.get('/2',function(req,res){
  res.sendFile(path.join(__dirname+'/2.html'));
});
app.get('/3',function(req,res){
  res.sendFile(path.join(__dirname+'/3.html'));
});
app.get('/4',function(req,res){
  res.sendFile(path.join(__dirname+'/4.html'));
});
app.post('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.post('/aaa',function(req,res){
  res.sendFile(path.join(__dirname+'/aaa.html'));
});
app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});
app. get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});
app. get('/thankyou',function(req,res){
  res.sendFile(path.join(__dirname+'/thankyou.html'));
});
app.use('/', router);
app.listen(process.env.PORT||3000);

console.log('Running at Port 3000');

