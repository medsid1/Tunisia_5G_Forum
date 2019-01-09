from elasticsearch import Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])    
import json
import pandas as pd
import hashlib

'''
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
        
        
'''        
        
'''       
df1 = pd.read_csv('Videos.csv', sep=",",)

labels1 = []    
for i in df1['labels']:
    labels1.append(i)
    
titles1 = []    
for i in df1['titles']:
    titles1.append(i)
    
links1 = []    
for i in df1['links']:
    links1.append(i)
date1 = []    
for i in df1['date']:
    date1.append(i)    
    
Data = {}
j=0
for i in range(len(links1)):
    hash_object = hashlib.sha256(links1[i])
    hex_dig = hash_object.hexdigest()
    Data['id'] = hex_dig
    
    
    string = links1[i]
    string = string.replace('/watch?v','/embed?v')
    Data['title'] = titles1[i]
    Data['link'] = string
    Data['label'] = labels1[i]
    Data['date'] = date1[i]
    r = json.dumps(Data)
    loaded_r = json.loads(r)
    es.index(index='videos', doc_type='videos', id=i, body= loaded_r)
    Data = {}
'''   
   
    
    
    
    
    
'''   
    
df2 = pd.read_csv('white_papers.csv', sep=",",)

labels2 = []    
for i in df2['labels']:
    labels2.append(i)
    
titles2 = []    
for i in df2['titles']:
    titles2.append(i)
    
links2 = []    
for i in df2['links']:
    links2.append(i)
data2 = []    
for i in df2['data']:
    data2.append(i) 
    
    
images2 = []    
for i in df2['images']:
    if not i == '' :
        
      images2.append(i) 
    else:
      
      images2.append('') 
    
    
sources2 = []    
for i in df2['sources']:
    sources2.append(i)  
    
Data = {}
j=0
for i in range(len(links2)):
    hash_object = hashlib.sha256(links2[i])
    hex_dig = hash_object.hexdigest()
    Data['id'] = hex_dig
    Data['title'] = titles2[i]
    Data['link'] = links2[i]
    Data['label'] = labels2[i]
    Data['data'] = data2[i]
    Data['image']= images2[i]
    Data['source']= sources2[i]
    r = json.dumps(Data)
    loaded_r = json.loads(r)
    es.index(index='white_papers', doc_type='white_papers', id=i, body= loaded_r)
    Data = {}
    
'''    
    
    

'''
df3 = pd.read_csv('5G_news.csv', sep=",",)

labels3 = []    
for i in df3['labels']:
    labels3.append(i)
    
titles3 = []    
for i in df3['titles']:
    titles3.append(i)
    
links3 = []    
for i in df3['links']:
    links3.append(i)
data3 = []    
for i in df3['data']:
    data3.append(i) 
    
    
date3 = []    
for i in df3['date']:
   
      date3.append(i) 
 
sources3 = []    
for i in df3['sources']:
    sources3.append(i)  
    
    
types3 = []    
for i in df3['types']:
    types3.append(i) 
    
Data = {}
j=0
for i in range(len(links3)):
    hash_object = hashlib.sha256(data3[i])
    hex_dig = hash_object.hexdigest()
    Data['id'] = hex_dig
    Data['title'] = titles3[i]
    Data['link'] = links3[i]
    Data['label'] = labels3[i]
    Data['data'] = data3[i]
    Data['date']= date3[i]
    Data['source']= sources3[i]
    Data['type']= types3[i]
    r = json.dumps(Data)
    loaded_r = json.loads(r)
    es.index(index='5g_news', doc_type='5g_news', id=i, body= loaded_r)
    Data = {}
'''    
    
'''    
df4 = pd.read_csv('social_media.csv', sep=",",)

labels4 = []    
for i in df4['labels']:
    labels4.append(i)
    
titles4 = []    
for i in df4['titles']:
    titles4.append(i)
    
links4 = []    
for i in df4['links']:
    links4.append(i)
data4 = []    
for i in df4['data']:
    data4.append(i) 
    
    
date4 = []    
for i in df4['date']:
   
      date4.append(i) 
 
sources4 = []    
for i in df4['sources']:
    sources4.append(i)  
    
    
types4 = []    
for i in df4['types']:
    types4.append(i) 
    
Data = {}
j=0
for i in range(len(links4)):
    hash_object = hashlib.sha256(data4[i])
    hex_dig = hash_object.hexdigest()
    Data['id'] = hex_dig
    Data['title'] = titles4[i]
    Data['link'] = links4[i]
    Data['label'] = labels4[i]
    Data['data'] = data4[i]
    Data['date']= date4[i]
    Data['source']= sources4[i]
    Data['type']= types4[i]
    r = json.dumps(Data)
    loaded_r = json.loads(r)
    es.index(index='social_media', doc_type='social_media', id=i, body= loaded_r)
    Data = {} 
'''


df5 = pd.read_csv('past_events.csv', sep=",",)

labels5 = []    
for i in df5['labels']:
    labels5.append(i)
    
titles5 = []    
for i in df5['titles']:
    titles5.append(i)
    
links5 = []    
for i in df5['links']:
    links5.append(i)
data5 = []    
for i in df5['data']:
    data5.append(i) 
    
    
date5 = []    
for i in df5['date']:
   
      date5.append(i) 
 
places5 = []    
for i in df5['places']:
    places5.append(i)  
    
    

    
Data = {}
j=0
for i in range(len(links5)):
    hash_object = hashlib.sha256(links5[i])
    hex_dig = hash_object.hexdigest()
    Data['id'] = hex_dig
    Data['title'] = titles5[i]
    Data['link'] = links5[i]
    Data['label'] = labels5[i]
    Data['data'] = data5[i]
    Data['date']= date5[i]
    Data['place']= places5[i]
    r = json.dumps(Data)
    loaded_r = json.loads(r)
    es.index(index='past_events', doc_type='past_events', id=i, body= loaded_r)
    Data = {}   
    
    

