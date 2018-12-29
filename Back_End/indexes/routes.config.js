

const AuthorizationValidation = require('../security/authorization/authorization.validation');
const AuthorizationPermission = require('../security/authorization/authorization.permission');
const config = require('../env.config');
const searching = require('./controllers/indexes.handler')

const Master = config.permissionLevels.Master;
const Member = config.permissionLevels.Member;
const Surfer = config.permissionLevels.Surfer;

exports.routesConfig = function (app) {

    app.get('/indexes/casestudies/healthcare', [

        AuthorizationValidation.validJWTNeeded,
        searching.gethealthcarecasestudies
        
    ]);

    app.get('/indexes/casestudies/agriculture', [

        AuthorizationValidation.validJWTNeeded,
        searching.getagriculturecasestudies
        
    ]);
    app.get('/indexes/casestudies/education', [
        
        AuthorizationValidation.validJWTNeeded,
        searching.geteducationcasestudies
        
    ]);
    
};