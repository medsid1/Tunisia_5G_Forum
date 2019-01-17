

const AuthorizationValidation = require('../security/authorization/authorization.validation');
const AuthorizationPermission = require('../security/authorization/authorization.permission');
const config = require('../env.config');
const searching = require('./controllers/indexes.handler')

const Master = config.permissionLevels.Master;
const Member = config.permissionLevels.Member;
const Surfer = config.permissionLevels.Surfer;

exports.routesConfig = function (app) {

    app.get('/indexes/casestudies/healthcare', [

       // AuthorizationValidation.validJWTNeeded,
        searching.gethealthcarecasestudies
        
    ]);

    app.get('/indexes/casestudies/agriculture', [

        //AuthorizationValidation.validJWTNeeded,
        searching.getagriculturecasestudies
        
    ]);
    app.get('/indexes/casestudies/education', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.geteducationcasestudies
        
    ]);
    app.get('/indexes/casestudies/entertainment', [

        //AuthorizationValidation.validJWTNeeded,
        searching.getentertainmentcasestudies
        
    ]);

    app.get('/indexes/casestudies/manufacturing', [

        //AuthorizationValidation.validJWTNeeded,
        searching.getmanufacturingcasestudies
        
    ]);
    app.get('/indexes/casestudies/automative', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.getautomativecasestudies
        
    ]);
    
    app.get('/indexes/news', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.getnews
        
    ]);
    app.get('/indexes/socialmedia', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.getsocialmedia
        
    ]);

    app.get('/indexes/pastevents', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.getpastevents
        
    ]);
    app.get('/indexes/upcomingevents', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.getupcomingevents
        
    ]);

    app.get('/indexes/5gservices', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.get5gservices
        
    ]);
    app.get('/indexes/videos', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.getvideos
        
    ]);

    app.get('/indexes/whitepapers', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.getwhitepapers
        
    ]);
    app.post('/indexes/pushnewevent', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.pushnewevent
        
    ]);
    app.get('/indexes/upcomingevents', [
        
        //AuthorizationValidation.validJWTNeeded,
        searching.getupcomingevents
        
    ]);
};
