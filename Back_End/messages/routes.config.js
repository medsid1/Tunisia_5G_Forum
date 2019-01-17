const AuthorizationValidation = require('../security/authorization/authorization.validation');
const AuthorizationPermission = require('../security/authorization/authorization.permission');
const messagesProvider = require('./controllers/messages.provider');
const config = require('../env.config');



exports.routesConfig = function (app) {

    app.post('/messages/addMessage', [
        
       
        messagesProvider.addMessage
    ]);

    app.get('/messages/loadMessagesdata', [
        
       
       messagesProvider.getallMessages
   ]);

   

}
