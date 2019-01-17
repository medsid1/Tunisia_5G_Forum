const AuthorizationValidation = require('../security/authorization/authorization.validation');
const AuthorizationPermission = require('../security/authorization/authorization.permission');
const subscribersProvider = require('./controllers/subscribers.provider');
const config = require('../env.config');



exports.routesConfig = function (app) {

    app.post('/Subscribers/addSubscriber', [
        
       
        subscribersProvider.addSubscriber
    ]);

    app.get('/Subscribers/loadSubscribersdata', [
        
       
       subscribersProvider.getallSubscribers
   ]);

   

}
