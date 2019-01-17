from pattern.web import Crawler , download
from pattern.search import search
from pattern.vector import stem
from elasticsearch import Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])    
import json
import pandas as pd
import hashlib
from timeit import default_timer as timer
es = Elasticsearch()
res = es.search(index="crawling_links", body={"size" : 10000,"query": {"match_all": {}}})



class Polly(Crawler): 
    def visit(self, link, source=None):
        print ('visited:', repr(link.url), 'from:', link.referrer)
        i = str(link).split('/')
        i = [stem(i[j]) for j in range(len(i))]
        i = '_'.join(str(e) for e in i)
        b=search('5g', i)
        Data = {}
        if not len(b)==0:
            hash_object = hashlib.sha256(link.url)
            hex_dig = hash_object.hexdigest()
            Data['id'] = hex_dig
            Data['link'] = repr(link.url)
            #Data['source'] = FROM
            r = json.dumps(Data)
            loaded_r = json.loads(r)
            es.index(index='mining_links', doc_type='mining_links', id=i, body= loaded_r)
            Data = {}
           
           
           
    def fail(self, link):
        print ('failed:', repr(link.url))

links=[]
for doc in res['hits']['hits']:
    i = str(doc['_source']['link'])
    links.append(i)


p = Polly(links=links, delay=0.5)

while not p.done:
    p.crawl(cached=False, throttle=3)
    












