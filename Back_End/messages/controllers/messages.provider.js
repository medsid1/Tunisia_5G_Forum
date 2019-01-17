var messages = require('../models/messages');

exports.addMessage = (req, res) => {
    console.log(req.body)
    if (!req.body.firstname || !req.body.email || !req.body.lastname || !req.body.subject ) {
        return res.status(400).send({ "success": false, "result":'null', "msg": "remplire tous les champs"});
      }
         else {
           
      var newmessage = new messages({
           
           firstname: req.body.firstname ,
           email:req.body.email ,
          lastname: req.body.lastname ,
           subject: req.body.subject ,
          });
          console.log(newmessage)
      newmessage.save(function (err) {
          if (err) {
             console.log("some error: ", err);
             return res.json({ "success": false, "msg": "Error while adding this message", "error": err });
           }else{
             res.status(201).send({ "success": true, "msg": 'Successfully adding new message.', "result": newmessage });
       } });
      }
};


exports.getallMessages = (req, res) => {

    
 
    messages.find().exec(function(err, data){
          if (err) {
           return res.json({ "success": false, "msg":  "Error while trying to load data", "error": err });
          }else {
               res.status(200).send({"success": true, "result":data});
            
          
          }
  
         
  
  
  
  })}