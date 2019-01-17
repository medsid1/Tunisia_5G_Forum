var subscribers = require('../models/subscribers');

exports.addSubscriber = (req, res) => {
    console.log(req.body)
    if (!req.body.fullname || !req.body.email ) {
        return res.status(400).send({ "success": false, "result":'null', "msg": "remplire tous les champs"});
      }
         else {
           
      var newsubscriber = new subscribers({
           
           full_name: req.body.fullname ,
           email:req.body.email ,
          
           
          });
          console.log(newsubscriber)
      newsubscriber.save(function (err) {
          if (err) {
             console.log("some error: ", err);
             return res.json({ "success": false, "msg": "Error while adding this subscriber", "error": err });
           }else{
             res.status(201).send({ "success": true, "msg": 'Successfully adding new subscriber.', "result": newsubscriber });
       } });
      }
};


exports.getallSubscribers = (req, res) => {

    
 
    subscribers.find().exec(function(err, data){
          if (err) {
           return res.json({ "success": false, "msg":  "Error while trying to load data", "error": err });
          }else {
               res.status(200).send({"success": true, "result":data});
            
          
          }
  
         
  
  
  
  })}