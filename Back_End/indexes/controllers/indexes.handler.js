const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    hosts: ['http://localhost:9200']
  });


exports.gethealthcarecasestudies = (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'case_studies_healthcare',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}


exports.getagriculturecasestudies = (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'case_studies_agriculture',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}

exports.geteducationcasestudies = (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'case_studies_education',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}


exports.getentertainmentcasestudies = (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'case_studies_entertainment',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}


exports.getmanufacturingcasestudies= (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'case_studies_manufacturing',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}


exports.getautomativecasestudies = (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'case_studies_automative',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}


exports.getnews= (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: '5g_news',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}


exports.getsocialmedia= (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'social_media',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}

exports.getpastevents= (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'past_events',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}

exports.getupcomingevents= (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'upcomingevents',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}


exports.get5gservices= (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'upcomingevents',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}


exports.getvideos= (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'videos',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}


exports.getwhitepapers= (req, res) => {

  console.log(req)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.search({

  index: 'white_papers',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}