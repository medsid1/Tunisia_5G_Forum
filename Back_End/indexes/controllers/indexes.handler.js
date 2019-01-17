const elasticsearch = require('elasticsearch');
const uuidv4 = require('uuid/v4');
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

exports.pushnewevent= (req, res) => {

  console.log(req.body.newevent)
client.ping({
    requestTimeout: 30000,
}, function(error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('Everything is ok');
    }
});



client.bulk({
  body: [
    // action description
   { index:  { _index: 'upcoming_events', _type: 'mytype', _id: uuidv4()} },
     // the document to index
   { title: req.body.newevent.title ,
    link : req.body.newevent.link,
     description : req.body.newevent.description,
     start : req.body.newevent.start,
     end : req.body.newevent.end,
     color : req.body.newevent.color,
     draggable : req.body.newevent.draggble,
     resizable : req.body.newevent.resizable
     
    },
    // action description
    //{ update: { _index: 'myindex', _type: 'mytype', _id: 2 } },
    // the document to update
    //{ doc: { title: 'foo' } },
    // action description
    //{ delete: { _index: 'myindex', _type: 'mytype', _id: 3 } },
    // no document needed for this delete
 ]
}, function (err, resp) {
  
});

}

exports.getupcomingevents= (req, res) => {

  //console.log(req)
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

  index: 'upcoming_events',
  from : 0, size : 148,
  body: {
  
    query: {
      "match_all": {}
  }
  }
}).then(function(resp) {
  //console.log(resp);
  return res.status(201).send({result : resp.hits.hits});
}, function(err) {
  console.trace(err.message);
  
  return res.status(403).send({error : err.message});


});}