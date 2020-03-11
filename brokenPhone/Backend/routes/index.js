var express = require('express');
var router = express.Router();
var FederalService = require("../models/FederalServices")
var CategoryServices = require("../models/Categories")

//'mongodb://localhost:27017'
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addService',function(req,res){
  
  var Service = new FederalService({
    Name : req.body.Name,
    Location : req.body.Location,
    Description : req.body.Description,
    URL : req.body.URL,
    Category : req.body.Category,
    Email : req.body.email
  })

  console.log("Service Object"+Service.Name)
  Service.save().then((doc) => {
    console.log("Service added successfully.", doc);
    res.send(doc);
  }, (err) => {
    console.log("Unable to add service.", err);
    res.send(err);
   
  }); 

})

router.get('/getService/:id',function(req,res){
  
  console.log("Inside getMyServices" + "with req" + req.params);
  FederalService.find({ _id : req.params.id},
   function(err,service){
     if(err)
       res.send(err)
     else
       res.send(service)
   });

})



router.post('/deleteService',function(req,res){
  console.log("Deleting nehcnwdc");
  console.log(req.body.id);
  FederalService.deleteOne({
    "_id" : req.body.id }
      , function (err, course) {
       if (err) {
           console.log("Error", err);
           res.writeHead(400, {
               'Content-type': 'text/plain'
           });
           res.end('Error - Course');
       }
       else {
           //console.log(course);
           res.end("DOne");
       }
   });

})


router.post('/updateService',function(req,res){
  console.log("Updating nehcnwdc");
  console.log(req.body);


  FederalService.findOne({
     "_id" : req.body.serviceId 
}, (err, user) => {

    if (err) {
        console.log("Unable to fetch user details.", err);
        callback(err, null);
    }
    else {
        console.log('UserProfile', user);

        user.Name= req.body.Name,
    user.Location= req.body.Location,
    user.Description= req.body.Description,
    user.URL= req.body.URL,
    user.Category= req.body.Category,
    user.Email= req.body.Email

       
        user.save().then((doc) => {

            console.log("User details Updated successfully.", doc);
            res.end("Successful");
            //res.end(doc);

        }, (err) => {
            console.log("Unable to save user details.", err);
            res.end("Error");
           
        });
    }
});






})

router.get('/services',function(req,res){

  
 FederalService.find({},
  function(err,service){
    if(err)
      res.send(err)
    else
      res.send(service)
  });
 
 
})

router.get('/getMyservices/:id',function(req,res){

  console.log("Inside getMyServices" + "with req" + req.params);
  FederalService.find({ Email : req.params.id},
   function(err,service){
     if(err)
       res.send(err)
     else
       res.send(service)
   });
  
  
 })


router.get('/categories',function(req,res){
  CategoryServices.find({},
    function(err,service){
      if(err)
        res.send(err)
      else
        res.send(service)
    });
})

router.post('/addCategory',function(req,res){
  var newCategory = new CategoryServices({
    name : req.body.name
  })
 
  newCategory.save().then((doc) => {
    console.log("Category added successfully.", doc);
    res.send(doc);
  }, (err) => {
    console.log("Unable to add category.", err);
    res.send(err);
   
  }); 
})

router.get('/services/:location',function(req,res){

  
  FederalService.find({
    Location : req.params.location
  },
   function(err,service){
     if(err)
       res.send(err)
     else
       res.send(service)
   });
  
  
 })


 router.get('/services/categories/:category',function(req,res){

  console.log("Category Service "+req.params.category)
  
  FederalService.find({
    Category : req.params.category
  },
   function(err,service){
     console.log("Category Service "+service)
     if(err)
       res.send(err)
     else
       res.send(service)
   });
  
  
 })

module.exports = router;
