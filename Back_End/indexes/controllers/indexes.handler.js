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