from elasticsearch import Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])    
import json
import pandas as pd
import hashlib

df = pd.read_csv('data.csv', sep=",")

labels = []    
for i in df['labels']:
    labels.append(i)
    
titles = []    
for i in df['titles']:
    titles.append(i)
    
data = []    
for i in df['data']:
    data.append(i)







Data = {}
j=0
for i in range(len(data)):
    hash_object = hashlib.sha256(data[i])
    hex_dig = hash_object.hexdigest()
    Data['id'] = hex_dig
    
    Data['title'] = titles[i]
    Data['data'] = data[i]
    
    if labels[i] == 'healthcare':
        Data['label'] = labels[i]
        r = json.dumps(Data)
        loaded_r = json.loads(r)
        es.index(index='case_studies_healthcare', doc_type='case_studies', id=i, body= loaded_r)
        Data = {}
        
        
        
    if labels[i] == 'education':
        Data['label'] = labels[i]
        r = json.dumps(Data)
        loaded_r = json.loads(r)
        es.index(index='case_studies_education', doc_type='case_studies', id=i, body= loaded_r)
        Data = {}
        
        
        
    if labels[i] == 'agriculture':
        Data['label'] = labels[i]
        r = json.dumps(Data)
        loaded_r = json.loads(r)
        es.index(index='case_studies_agriculture', doc_type='case_studies', id=i, body= loaded_r)
        Data = {}