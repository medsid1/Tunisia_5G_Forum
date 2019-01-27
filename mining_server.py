import pandas as pd
from keras.preprocessing import sequence
from keras.models import Sequential
from keras.layers import Dense, Dropout, Embedding, LSTM, Bidirectional
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor
from sklearn.model_selection import train_test_split
import numpy as np
from datetime import datetime
import os
from apscheduler.schedulers.blocking import BlockingScheduler
from pattern.web import URL , download , plaintext , DOM , Element
from HTMLParser import HTMLParser
from htmlentitydefs import name2codepoint
from pattern.search import search
from pattern.vector import stem
import requests
import pickle
import sys
reload(sys)
sys.setdefaultencoding("utf-8")
import urllib2
import socket
from pattern.web import Crawler , download
from pattern.search import search
from pattern.vector import stem
from elasticsearch import Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])    
import json
import pandas as pd
import hashlib
from timeit import default_timer as timer
from apscheduler.schedulers.background import BackgroundScheduler
   






################################### crawler job ######################################################################
def crawler():
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
    res = es.search(index="crawling_links", body={"size" : 10000,"query": {"match_all": {}}})
    links=[]
    for doc in res['hits']['hits']:
        i = str(doc['_source']['link'])
        links.append(i)


    p = Polly(links=links, delay=0.5)

    while not p.done:
        p.crawl(cached=False, throttle=3)
#######################################################################################################################
    



#################################### data_fetcher job ##############################################################

def data_fetcher():
    
    def check_url( url, timeout=5 ):
        try:
            return urllib2.urlopen(url,timeout=timeout).getcode() == 200
        except urllib2.URLError as e:
            return False
        except socket.timeout as e:
            print(False)



    Titles={}
    Images={}
    Videos={}
    Documents={}
    Pdfs={}
    Date={}
    lien = ''


    class MyHTMLParser(HTMLParser):
        def handle_starttag(self, tag, attrs):
  
        
        
            for attr in attrs:
            
                a = attr[1]
                a = a.split('/')
                a = [stem(a[j]) for j in range(len(a))]
    
                a = '_'.join(str(e) for e in a)
            
                for i in attr:
              
                  l = search('src',i)  
              
                  b1 = search('5g', a)
               
                  b3 = search('imag',a)
                  b4 = search('video',a)
                  b5 = search('pdf',a)
              
                  if not len(b1)==0 :
                  
                      if not len(b5)==0 :
                      
                          if not attr[1][2:] in Pdfs[lien]:
                             Pdfs[lien].append(attr[1][2:])
                  
                      if not len(b3)==0 :
                          if not attr[1][2:] in Images[lien]:
                             Images[lien].append(attr[1][2:])
                     
                      if not len(b4)==0 :
                          if not attr[1][2:] in Videos[lien]:
                             Videos[lien].append(attr[1][2:])
                      
                  if not len(l)==0 and not len(b1)==0 :
                      if not attr[1][2:] in Images[lien]:
                          Images[lien].append(attr[1][2:])
             
    parser = MyHTMLParser()        


   
    res = es.search(index="mining_links", body={"size" : 10000,"query": {"match_all": {}}})
    Links=[]
    for doc in res['hits']['hits']:
        
        i = str(doc['_source']['link'])
        Links.append(i[2:])
        
        
    for i in Links:
    
        i = i.strip('\'"')
        Titles[i] = []
        Images[i] = []
        Videos[i] = []
        Documents[i] = []
        Pdfs[i] = []
        Date[i] = []



    for i in Links:
        i = i.strip('\'"')
        url = URL(i)
 
        if(check_url(i)):
        
        
            dom = DOM(url.download(cached=True))
    
      
      #########################################################           
            for a in dom('h1'): 
              s = search('5g', plaintext(a.content))
              if not len(s)==0:
                if not plaintext(a.content) in Titles[i]:
                    Titles[i].append(plaintext(a.content)) 
                
                
                
            for a in dom('h2'): 
              s = search('5g', plaintext(a.content))
              if not len(s)==0:
                if not plaintext(a.content) in Titles[i]:
                    Titles[i].append(plaintext(a.content)) 
                
                
            for a in dom('h3'): 
              s = search('5g', plaintext(a.content))
              if not len(s)==0:
                if not plaintext(a.content) in Titles[i]:
                    Titles[i].append(plaintext(a.content)) 
                
                
            for a in dom('title'): 
              s = search('5g', plaintext(a.content))
              if not len(s)==0:
                if not plaintext(a.content) in Titles[i]:
                    Titles[i].append(plaintext(a.content)) 
       ##########################################################
    
    
       ##########################################################           
            for b in dom('p'):
        
                  a = search('5g', plaintext(b.content))
                  if not len(a)==0:
             
                      if not plaintext(b.content)  in Documents[i] :
                            Documents[i].append(plaintext(b.content)) 
                        
                        
            for b in dom('pre'):
        
                  a = search('5g', plaintext(b.content))
                  if not len(a)==0:
             
                      if not plaintext(b.content)  in Documents[i] :
                            Documents[i].append(plaintext(b.content)) 
       ##########################################################    
            for b in dom('span'):
        
                  a1 = search('jan', plaintext(b.content).lower())
                  a2 = search('feb', plaintext(b.content).lower())
                  a3 = search('mar', plaintext(b.content).lower())
                  a4 = search('apr', plaintext(b.content).lower())
                  a5 = search('may', plaintext(b.content).lower())
                  a6 = search('jun', plaintext(b.content).lower())
                  a7 = search('jul', plaintext(b.content).lower())
                  a8 = search('aug', plaintext(b.content).lower())
                  a9 = search('sep', plaintext(b.content).lower())
                  a10 = search('oct', plaintext(b.content).lower())
                  a11 = search('nov', plaintext(b.content).lower())
                  a12 = search('dec', plaintext(b.content).lower())
                  if (not len(a1)==0 or not len(a2)==0 or not len(a3)==0 or not len(a4)==0 or
                  not len(a5)==0 or not len(a6)==0 or not len(a7)==0 or not len(a8)==0 or
                  not len(a9)==0 or not len(a10)==0 or not len(a11)==0 or not len(a12)==0) :
             
                      if not plaintext(b.content)  in Date[i] :
                            Date[i].append(plaintext(b.content))             
          
        ############################################################
            for c in dom('a'):
            
                  parser.feed(str(c))
                  lien = i
              
            for c in dom('div[class="video_box"] a'):
            
                  parser.feed(str(c))
                  lien = i
            
            for d in dom('img'):
         
                  parser.feed(str(d))
                  lien = i
   
            for d in dom('div img'):
      
                  parser.feed(str(d))
                  lien = i
              
            for d in dom('span img'):
      
                  parser.feed(str(d))
                  lien = i
        
            for d in dom('p img'):
      
                  parser.feed(str(d))
                  lien = i
              
            for d in dom('video source'):
          
                  parser.feed(str(d))
                  lien = i
              
            for d in dom('iframe'):
         
                  parser.feed(str(d))
                  lien = i
    
        print("# link : %s =======> done" % i)
    print("#########################################################################################")
    print("Classification 1 Process ............................................................... ")
    '''
    for i in Pdfs:
        if not len(Pdfs[i][0]) == 0:
            Data = {}
            if Images[i][0] and Documents[i][0] and Titles[i][0]:
                hash_object = hashlib.sha256(i)
                hex_dig = hash_object.hexdigest()
                Data['id'] = hex_dig
                Data['title'] = Titles[i][0]
                Data['link'] = i
                Data['label'] = 'white_paper'
                Data['data'] = Documents[i][0]
                Data['image']= Images[i][0]
                
                r = json.dumps(Data)
                loaded_r = json.loads(r)
                es.index(index='white_papers', doc_type='white_papers', id=i, body= loaded_r)
    '''            
    classification1_sub_job(Documents,Titles,Images,Date)

#######################################################################################################################


############################################# Classification 1 sub job ##################################################

def classification1_sub_job(classification_data,Titles,Images,Date):
    maxlen = 80
    batch_size = 32
  
    word_dictionary = {}



    def load_data():
        df = pd.read_csv('classification_first_level.csv', sep=",")
    
        x_loaded = df['data']
     
        y_loaded = df['Label']
    

        x_replaced = x_to_vect(x_loaded)
        y_replaced = y_to_vect(y_loaded)

        return x_replaced, y_replaced


    def x_to_vect(x_loaded):
        all_words = []
        for content in x_loaded:
            content_str = beautify_word(str(content))
            content_words = content_str.split(" ")
            for content_word in content_words:
                all_words.append(content_word)

        for i in range(len(all_words)):
            word = all_words[i]
            if word not in word_dictionary:
                word_dictionary[word] = len(word_dictionary)

        x_replaced = []
        for content in x_loaded:
            content_str = beautify_word(str(content))
            content_words = content_str.split(" ")

            content_replaced = []
            for content_word in content_words:
                nr = word_dictionary[content_word]
                content_replaced.append(nr)

            x_replaced.append(content_replaced)

        return x_replaced

    def replace_data(data): 
        
        data_replaced = []
        content_str = beautify_word(str(data))
        content_words = content_str.split(" ")
        #print(content_words)
        content_replaced = []
        for content_word in content_words:
              
            if content_word in word_dictionary:
                
               nr = word_dictionary[content_word]
               content_replaced.append(nr)
                 

        data_replaced.append(content_replaced)
            
        #print(data_replaced)
        data_replaced=sequence.pad_sequences(data_replaced, maxlen=maxlen)
        
             
        
    
        return data_replaced

    def y_to_vect(y_loaded):
        y_replaced = []
        for classification in y_loaded:
            if classification == "case_study":
                y_replaced.append(0)

            if classification == "social_media":
                y_replaced.append(1)
            
            if classification == "news":
                y_replaced.append(2)

        return y_replaced

    def beautify_word(word):
        return word.lower().replace(".", "").replace(",", "").replace("!", "").replace("?", "").replace("]", "").replace("[", "").replace("'", "")


    print('Loading data...')

    x, y = load_data()

    max_features = len(word_dictionary)

    y_case_study = list(filter(lambda z: z == 0, y))
    print(len(y_case_study), "case studies")

    y_social_media = list(filter(lambda z: z == 1, y))
    print(len(y_social_media), "social media")

    y_news = list(filter(lambda z: z == 2, y))
    print(len(y_news), "news")


    x_train, x_test, y_train, y_test = train_test_split(x, y, random_state=2, train_size=0.5)
    print(len(x_train), 'train sequences')
    print(len(x_test), 'test sequences')

    print('Pad sequences (samples x time)')
    x_train = sequence.pad_sequences(x_train, maxlen=maxlen)
    x_test = sequence.pad_sequences(x_test, maxlen=maxlen)
    print('x_train shape:', x_train.shape)
    print('x_test shape:', x_test.shape)

    print('Build model')


    model = Sequential()
    model.add(Embedding(max_features, 128, input_length=maxlen))
    model.add(Bidirectional(LSTM(64)))
    model.add(Dropout(0.5))
    model.add(Dense(1, activation='sigmoid'))

    # try using different optimizers and different optimizer configs
    model.compile('adam', 'binary_crossentropy', metrics=['accuracy'])

    print('Train model')
    model.fit(x_train, y_train,
          batch_size=batch_size,
          epochs=3,
          validation_data=(x_test, y_test))

    score, acc = model.evaluate(x_test, y_test, batch_size=batch_size)

    print('Test score:', score)
    print('Test accuracy:', acc)
    
    
    for i in classification_data:
        elem = ''
        if not len(classification_data[i])==0 :
           #print(i)
           for j in classification_data[i]:
               elem = elem + j
           #print(elem)
           print("#########################################################################################")
           print("Classification 1 Process ............................................................... ")
           elem = replace_data(elem)
           print(i)
           prediction = model.predict(elem,verbose=0)
           
           print(prediction)
           
           if(prediction[0][0] <=  0.6):
               print("#########################################################################################")
               print("Classification 2 Process ............................................................... ")
               classification2_sub_job(elem , Titles , Images, i, classification_data)
           
           '''
           if prediction[0][0] >  0.6 and prediction[0][0] <=  1.6:
               Data={}
               if Titles[i]:
                   hash_object = hashlib.sha256(classification_data[i][0])
                   hex_dig = hash_object.hexdigest()
                   Data['id'] = hex_dig
                   Data['title'] = Titles[i][0]
                   Data['link'] = i
                   Data['label'] = 'socialmedia'
                   if Date[i]:
                       Data['date'] = Date[i]
                       
                   else
                       now = datetime.datetime.now()
                       Data['date'] = str(now.year+'/'+now.month+'/'+now.day)
                   r = json.dumps(Data)
                   loaded_r = json.loads(r)
                   es.index(index='social_media', doc_type='social_media', id=i, body= loaded_r)
                   Data = {}
           if prediction[0][0] >  1.6 and prediction[0][0] <=  2:
               Data={}
               if Titles[i]:
                   hash_object = hashlib.sha256(classification_data[i][0])
                   hex_dig = hash_object.hexdigest()
                   Data['id'] = hex_dig
                   Data['title'] = Titles[i][0]
                   Data['link'] = i
                   Data['label'] = 'news'
                   if Date[i]:
                       Data['date'] = Date[i]
                       
                   else
                       Data['date'] = str(now.year+'/'+now.month+'/'+now.day)
                   r = json.dumps(Data)
                   loaded_r = json.loads(r)
                   es.index(index='5g_news', doc_type='5g_news', id=i, body= loaded_r)
                   Data = {}    
            '''   
######################################################################################################################    



############################################# Classification 2 sub job ##################################################

def classification2_sub_job(classification_data, Titles, Images, link, Documents):
    maxlen = 80
    batch_size = 32
    
    word_dictionary = {}



    def load_data():
        df = pd.read_csv('classification_second_level.csv', sep=",")
       
        x_loaded = df['data']
       
        y_loaded = df['Label']
   

        x_replaced = x_to_vect(x_loaded)
        y_replaced = y_to_vect(y_loaded)

        return x_replaced[0:348], y_replaced[0:348]


    def x_to_vect(x_loaded):
        all_words = []
        for content in x_loaded:
            content_str = beautify_word(str(content))
            content_words = content_str.split(" ")
            for content_word in content_words:
                all_words.append(content_word)

        for i in range(len(all_words)):
            word = all_words[i]
            if word not in word_dictionary:
                word_dictionary[word] = len(word_dictionary)

        x_replaced = []
        for content in x_loaded:
            content_str = beautify_word(str(content))
            content_words = content_str.split(" ")

            content_replaced = []
            for content_word in content_words:
                nr = word_dictionary[content_word]
                content_replaced.append(nr)

            x_replaced.append(content_replaced)

        return x_replaced

    def replace_data(data): 
        
        data_replaced = []
        content_str = beautify_word(str(data))
        content_words = content_str.split(" ")
        #print(content_words)
        content_replaced = []
        for content_word in content_words:
               
            if content_word in word_dictionary:
                
               nr = word_dictionary[content_word]
               content_replaced.append(nr)
                 
     
        
        data_replaced.append(content_replaced)
            
        #print(data_replaced)
        data_replaced=sequence.pad_sequences(data_replaced, maxlen=maxlen)
        
             
        
    
        return data_replaced

    def y_to_vect(y_loaded):
        y_replaced = []
        for classification in y_loaded:
            if classification == "healthcare":
                y_replaced.append(0)

            if classification == "automative":
                y_replaced.append(1)
            
            if classification == "agriculture":
                y_replaced.append(2)
            
            if classification == "entertainment":
                y_replaced.append(3)

            if classification == "education":
                y_replaced.append(4)
            
            if classification == "manufacturing":
                y_replaced.append(5)

        return y_replaced

    def beautify_word(word):
        return word.lower().replace(".", "").replace(",", "").replace("!", "").replace("?", "")


    print('Loading data...')

    x, y = load_data()

    max_features = len(word_dictionary)

    y_helthcare = list(filter(lambda z: z == 0, y))
    print(len(y_helthcare), "healthcare")

    y_automative = list(filter(lambda z: z == 1, y))
    print(len(y_automative), "automative")

    y_agriculture = list(filter(lambda z: z == 2, y))
    print(len(y_agriculture), "agriculture")
    
    y_entertainment = list(filter(lambda z: z == 2, y))
    print(len(y_entertainment), "entertainment")
    
    y_education = list(filter(lambda z: z == 2, y))
    print(len(y_education), "education")
    
    
    y_manufacturing = list(filter(lambda z: z == 2, y))
    print(len(y_manufacturing), "manufacturing")


    x_train, x_test, y_train, y_test = train_test_split(x, y, random_state=2, train_size=0.7)
    print(len(x_train), 'train sequences')
    print(len(x_test), 'test sequences')

    print('Pad sequences (samples x time)')
    x_train = sequence.pad_sequences(x_train, maxlen=maxlen)
    x_test = sequence.pad_sequences(x_test, maxlen=maxlen)
    print('x_train shape:', x_train.shape)
    print('x_test shape:', x_test.shape)

    print('Build model')


    model = Sequential()
    model.add(Embedding(max_features, 128, input_length=maxlen))
    model.add(Bidirectional(LSTM(64)))
    model.add(Dropout(0.5))
    model.add(Dense(1, activation='sigmoid'))

    # try using different optimizers and different optimizer configs
    model.compile('adam', 'binary_crossentropy', metrics=['accuracy'])

    print('Train model')
    model.fit(x_train, y_train,
          batch_size=batch_size,
          epochs=3,
          validation_data=(x_test, y_test))

    score, acc = model.evaluate(x_test, y_test, batch_size=batch_size)

    print('Test score:', score)
    print('Test accuracy:', acc)
    
    print(link)
    classification_data = replace_data(str(classification_data))
    #print(classification_data)
    prediction = model.predict(classification_data,verbose=0)
    print(prediction)
    
    '''
    if(prediction[0][0] <=  0.6):
               Data={}
               if Titles[link] and Images[link]:
                   hash_object = hashlib.sha256(Documents[link][0])
                   hex_dig = hash_object.hexdigest()
                   Data['id'] = hex_dig
                   Data['title'] = Titles[link][0]
                   Data['image'] = Images[link][0]
                   Data['link'] = i
                   Data['label'] = "healthcare"
                   r = json.dumps(Data)
                   loaded_r = json.loads(r)
                   es.index(index='case_studies_healthcare', doc_type='case_studies', id=i, body= loaded_r)
                   Data = {}
    '''
    '''
    if prediction[0][0] >  0.6 and prediction[0][0] <=  1.6:
                Data={}
                if Titles[link] and Images[link]:
                   hash_object = hashlib.sha256(Documents[link][0])
                   hex_dig = hash_object.hexdigest()
                   Data['id'] = hex_dig
                   Data['title'] = Titles[link][0]
                   Data['image'] = Images[link][0]
                   Data['link'] = i
                   Data['label'] = "automative"
                   r = json.dumps(Data)
                   loaded_r = json.loads(r)
                   es.index(index='case_studies_automative', doc_type='case_studies', id=i, body= loaded_r)
                   Data = {}
                   
    if prediction[0][0] >  1.6 and prediction[0][0] <=  2.6:
                Data={}
                if Titles[link] and Images[link]:
                   hash_object = hashlib.sha256(Documents[link][0])
                   hex_dig = hash_object.hexdigest()
                   Data['id'] = hex_dig
                   Data['title'] = Titles[link][0]
                   Data['image'] = Images[link][0]
                   Data['link'] = i
                   Data['label'] = "agriculture"
                   r = json.dumps(Data)
                   loaded_r = json.loads(r)
                   es.index(index='case_studies_agriculture', doc_type='case_studies', id=i, body= loaded_r)
                   Data = {}
                   
    if prediction[0][0] >  2.6 and prediction[0][0] <=  3.6:
               Data={}
               if Titles[link] and Images[link]:
                   hash_object = hashlib.sha256(Documents[link][0])
                   hex_dig = hash_object.hexdigest()
                   Data['id'] = hex_dig
                   Data['title'] = Titles[link][0]
                   Data['image'] = Images[link][0]
                   Data['link'] = i
                   Data['label'] = "entertainment"
                   r = json.dumps(Data)
                   loaded_r = json.loads(r)
                   es.index(index='case_studies_entertainment', doc_type='case_studies', id=i, body= loaded_r)
                   Data = {}
    '''
    '''
    if prediction[0][0] >  3.6 and prediction[0][0] <=  4.6:
                Data={}
                if Titles[link] and Images[link]:
                   hash_object = hashlib.sha256(Documents[link][0])
                   hex_dig = hash_object.hexdigest()
                   Data['id'] = hex_dig
                   Data['title'] = Titles[link][0]
                   Data['image'] = Images[link][0]
                   Data['link'] = i
                   Data['label'] = "education"
                   r = json.dumps(Data)
                   loaded_r = json.loads(r)
                   es.index(index='case_studies_education', doc_type='case_studies', id=i, body= loaded_r)
                   Data = {}
                   
    if prediction[0][0] >  4.6 and prediction[0][0] <=  5:
                Data={}
                if Titles[link] and Images[link]:
                   hash_object = hashlib.sha256(Documents[link][0])
                   hex_dig = hash_object.hexdigest()
                   Data['id'] = hex_dig
                   Data['title'] = Titles[link][0]
                   Data['image'] = Images[link][0]
                   Data['link'] = i
                   Data['label'] = "manufacturing"
                   r = json.dumps(Data)
                   loaded_r = json.loads(r)
                   es.index(index='case_studies_manufacturing', doc_type='case_studies', id=i, body= loaded_r)
                   Data = {}
                   
            '''   
   
######################################################################################################################    

    

if __name__ == '__main__':
    #scheduler = BackgroundScheduler(executors={'default': ThreadPoolExecutor(2),
                                             #'processpool': ProcessPoolExecutor(2)})
    scheduler = BlockingScheduler(executors={'default': ThreadPoolExecutor(2),
                                        'processpool': ProcessPoolExecutor(2)})
   
    scheduler.add_job(data_fetcher, 'interval', seconds=100)
    scheduler.add_job(crawler, 'interval', hours = 150)

    
    print('Press Ctrl+{0} to exit'.format('Break' if os.name == 'nt' else 'C'))

  
  

    
    try:
        scheduler.start()
    except (KeyboardInterrupt, SystemExit):
        pass
