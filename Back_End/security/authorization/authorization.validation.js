const jwt = require('jsonwebtoken'),
    refreshSecret = require('../../env.config.js').actualRefreshSecret,
    crypto = require('crypto');
fs = require('fs');

const cert = fs.readFileSync('./tls/token-public-key.pem');

exports.validJWTNeeded = (req, res, next) => {


    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                var aud = 'urn:' + (req.get('origin') ? req.get('origin') : "http://localhost:8100");
                jwt.verify(authorization[1].replace(/"/gi, ""), cert, { audience: aud, algorithms: ['RS512'] }, function (err, decoded) {

                    if (decoded) {
                        req.jwt = decoded

                        console.log(req.jwt)

                        return next();
                    } else {


                        if (err.name == "TokenExpiredError") {
                            req.jwt.err = err
                            return next();
                        }

                    }

                });

            }
        } catch (error) {
           

            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
};

exports.verifyRefreshBodyField = (req, res, next) => {

    if (req.body && req.body.refresh_token) {

        return next();
    } else {
        return res.status(400).send({ error: 'need to pass refresh_token field' });
    }
};

exports.validRefreshNeeded = (req, res, next) => {

  
       

            
            let decoded1 = req.body.refresh_token.toString().split('$');
            let salt = decoded1[0];
            let refresh_token = decoded1[1];
            let hash = crypto.createHmac('sha512', salt).update(req.body.jwt.userId + refreshSecret + req.body.jwt.jti).digest("base64");
            
            if (hash === refresh_token) {

               
                req.body = {
                    iss: 'urn.SmartTrash.xyz',
                    aud: 'urn:' + (req.get('origin') ? req.get('origin') : "SmartTrash.xyz"),
                    sub:  req.body.jwt.sub,
                    name: req.body.jwt.name,
                    userId: req.body.jwt.userId,
                    roles: req.body.jwt.roles,
                    jti: req.body.jwt.jti,
                    iat: req.body.jwt.iat,
                    exp: req.body.jwt.exp
                };

                return next();


            } else {
                return res.status(400).send({ error: 'Invalid refresh token' });
            }




        
    
}