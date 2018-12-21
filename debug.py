from pattern.web import URL , download , plaintext , DOM , Element
from HTMLParser import HTMLParser
from htmlentitydefs import name2codepoint
from pattern.search import search
from pattern.vector import stem
from pattern.vector import Cluster
from pattern.vector import Vector, distance
from pattern.vector import Document
import numpy as np
import PyPDF2

import sys
reload(sys)
sys.setdefaultencoding("utf-8")


Titles={}
Images={}
Videos={}
Documents={}
elem={}
lien = ''


class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print(lien)
        
        
        for attr in attrs:
            
            a = attr[1]
            a = a.split('/')
            a = [stem(a[j]) for j in range(len(a))]
            #print(a)
            a = '_'.join(str(e) for e in a)
            
            for i in attr:
              
              l = search('src',i)  
              b = search('path', i)
              b1 = search('5g', a)
              b2 = search('mob',a)
              b3 = search('imag',a)
              b4 = search('video',a)
              
              if not len(b) == 0 and not len(b1)==0 :
                  
                  if not len(b3)==0 :
                      if not attr[1][2:] in Images[lien]:
                         Images[lien].append(attr[1][2:])
                     
                  if not len(b4)==0 :
                      if not attr[1][2:] in Videos[lien]:
                         Videos[lien].append(attr[1][2:])
                      
              if not len(l)==0 and not len(b1)==0 :
                   if not attr[1][2:] in Images[lien]:
                      Images[lien].append(attr[1][2:])
             
                  
                   
    def handle_data(self, data):
        print "Data     :", data

    def handle_comment(self, data):
        print "Comment  :", data

    def handle_entityref(self, name):
        c = unichr(name2codepoint[name])
        print "Named ent:", c

    def handle_charref(self, name):
        if name.startswith('x'):
            c = unichr(int(name[1:], 16))
        else:
            c = unichr(int(name))
        print "Num ent  :", c

    def handle_decl(self, data):
        print "Decl     :", data
        
parser = MyHTMLParser()        

obj = ['https://www.huawei.com/en/about-huawei/publications/communicate/83/drilling-dow-to-the-core-of-5g-evolution',
       'https://www.huawei.com/en/about-huawei/publications/communicate/85/cloud-data-centers-in-5g-era',
       'https://www.huawei.com/en/about-huawei/publications/communicate/85/power-of-5g-core-networks',
       'https://www.huawei.com/en/about-huawei/publications/communicate/85/xhaul-5g-network',
       'https://www.huawei.com/en/industry-insights/outlook/mobile-broadband/5g/use-cases/huawei-launches-5g-testbed-uk#HUAWEI-CLOUD',
       'https://www.huawei.com/en/industry-insights/outlook/mobile-broadband/5g/use-cases/worlds-first-5g-field-trial',
       'https://www.huawei.com/en/industry-insights/outlook/mobile-broadband/5g/use-cases/worlds-first-5g-field-trial#FOR-CARRIERS',
       'https://www.huawei.com/en/industry-insights/outlook/mobile-broadband/5g/use-cases/worlds-first-5g-field-trial#FOR-ENTERPRISE',
       'https://www.huawei.com/en/industry-insights/outlook/mobile-broadband/5g/use-cases/worlds-first-5g-field-trial#HUAWEI-CLOUD',
       'https://www.huawei.com/en/press-events/news/2018/11/china-mobile-huawei-5g-8k-vr-broadcast-5th-wic',
       'https://www.cisco.com/c/en/us/solutions/service-provider/mobile-internet/5g-infographic.html?dtid=osscdc000283',
       'https://www.cisco.com/c/m/en_us/network-intelligence/service-provider/digital-transformation/5g-strategy-for-your-success.html?dtid=osscdc000283'
       ]
    

for i in obj:
    i = i.strip('\'"')
    Titles[i] = []
    Images[i] = []
    Videos[i] = []
    Documents[i] = []
    elem[i] = []


for i in obj:
    i = i.strip('\'"')
    url = URL(i)
    dom = DOM(url.download(cached=True))
    
    div = Element(dom)
    for e in dom:
        elem[i].append(e.html)
        
                
    for a in dom('div h1'): 
      s = search('5g',plaintext(a.content))
      if not len(s)==0:
        if not plaintext(a.content) in Titles[i]:
            Titles[i].append(plaintext(a.content)) 
          
    
      print("#########################################################")  
           
    for b in dom('p'):
        
          a = search('5g', plaintext(b.content))
          if not len(a)==0:
            
              if not plaintext(b.content)  in Documents[i] :
                    Documents[i].append(plaintext(b.content)) 
                
                
    for c in dom('div[class="video_box"] a'):
            
            
          parser.feed(str(c))
          lien = i
            
    for d in dom('img'):
            #print(e)
          parser.feed(str(d))
          lien = i
   
    for d in dom('div img'):
            #print(e)
          parser.feed(str(d))
          lien = i
        
    for d in dom('p img'):
            #print(e)
          parser.feed(str(d))
          lien = i
    
    print("#########################################################")




pdfFileObj = open('5G_Thomas_Casey_Nokia-8510.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_smart_home1=dict([])
count = pdfReader.numPages
for i in range(count):
    d_smart_home1 = dict(d_smart_home1)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_smart_home1.update(dict(d))
pdfFileObj.close()
#
pdfFileObj = open('Alberto-Garcia-5GSummit-Toronto-11142015.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_smart_home2=dict([])
count = pdfReader.numPages
for i in range(count):
    d_smart_home2 = dict(d_smart_home2)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_smart_home2.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('IoT and 5G history evolution and its architecture their compatibility and future..pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_smart_home3=dict([])
count = pdfReader.numPages
for i in range(count):
    d_smart_home3 = dict(d_smart_home3)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_smart_home3.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('Session2-Christele-Nokia.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_smart_home4=dict([])
count = pdfReader.numPages
for i in range(count):
    d_smart_home4 = dict(d_smart_home4)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_smart_home4.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('sustainability-09-01848.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_smart_home5=dict([])
count = pdfReader.numPages
for i in range(count):
    d_smart_home5 = dict(d_smart_home5)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_smart_home5.update(dict(d))
pdfFileObj.close()
d_smart_home=dict([])
d_smart_home.update(dict(d_smart_home1))
d_smart_home.update(dict(d_smart_home2))
d_smart_home.update(dict(d_smart_home3))
d_smart_home.update(dict(d_smart_home4))
d_smart_home.update(dict(d_smart_home5))
for cle in d_smart_home.keys():
    if (len(d_smart_home[cle]) == 2 and d_smart_home[cle] != "5g") or len(d_smart_home[cle]) == 1 or len(d_smart_home[cle]) == 3:
        del d_smart_home[cle] 

#######################transportation##################"
pdfFileObj = open('W-DIG20180612-S2_jaime_trapero.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_transportation1=dict([])
count = pdfReader.numPages
for i in range(count):
    d_transportation1 = dict(d_transportation1)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_transportation1.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('Nokia 4G and 5G cellular technologies enable intelligent transportation use cases_Mustajarvi .pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_transportation2=dict([])
count = pdfReader.numPages
for i in range(count):
    d_transportation2 = dict(d_transportation2)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_transportation2.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('MobileBroadband-17.11.16-Ericsson-PeterMarshall.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_transportation3=dict([])
count = pdfReader.numPages
for i in range(count):
    d_transportation3 = dict(d_transportation3)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_transportation3.update(dict(d))
pdfFileObj.close()
d_transportation=dict([])
d_transportation.update(dict(d_transportation1))
d_transportation.update(dict(d_transportation2))
d_transportation.update(dict(d_transportation3))
for cle in d_transportation.keys():
    if (len(d_transportation[cle]) == 2 and d_transportation[cle] != "5g") or len(d_transportation[cle]) == 1 or len(d_transportation[cle]) == 3:
        del d_transportation[cle] 

#######################healthcare##################"
pdfFileObj = open('5G-Health-Internet-of-Things_West.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_healthcare1=dict([])
count = pdfReader.numPages
for i in range(count):
    d_healthcare1 = dict(d_healthcare1)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_healthcare1.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('5GandHealthcareEUCNCpaper.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_healthcare2=dict([])
count = pdfReader.numPages
for i in range(count):
    d_healthcare2 = dict(d_healthcare2)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_healthcare2.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('healthcare.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_healthcare3=dict([])
count = pdfReader.numPages
for i in range(count):
    d_healthcare3 = dict(d_healthcare3)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_healthcare3.update(dict(d))
pdfFileObj.close()
d_healthcare=dict([])
d_healthcare.update(dict(d_healthcare1))
d_healthcare.update(dict(d_healthcare2))
d_healthcare.update(dict(d_healthcare3))
for cle in d_healthcare.keys():
    if (len(d_healthcare[cle]) == 2 and d_healthcare[cle] != "5g") or len(d_healthcare[cle]) == 1 or len(d_healthcare[cle]) == 3:
        del d_healthcare[cle] 

#######################education##################"
pdfFileObj = open('education_wifi.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_education1=dict([])
count = pdfReader.numPages
for i in range(count):
    d_education1 = dict(d_education1)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_education1.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('Education-VM_Extended.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_education2=dict([])
count = pdfReader.numPages
for i in range(count):
    d_education2 = dict(d_education2)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_education2.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('5GPacTech.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_education3=dict([])
count = pdfReader.numPages
for i in range(count):
    d_education3 = dict(d_education3)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_education3.update(dict(d))
pdfFileObj.close()
d_education=dict([])
d_education.update(dict(d_education1))
d_education.update(dict(d_education2))
d_education.update(dict(d_education3))
for cle in d_education.keys():
    if (len(d_education[cle]) == 2 and d_education[cle] != "5g") or len(d_education[cle]) == 1 or len(d_education[cle]) == 3:
        del d_education[cle] 
#######################agriculture##################"
pdfFileObj = open('5G2015_Ericsson.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_agriculture1=dict([])
count = pdfReader.numPages
for i in range(count):
    d_agriculture1 = dict(d_agriculture1)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_agriculture1.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('8008-study-on-implications-of-5g-deployment-o_0.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_agriculture2=dict([])
count = pdfReader.numPages
for i in range(count):
    d_agriculture2 = dict(d_agriculture2)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_agriculture2.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('adl_5g_deployment_models.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_agriculture3=dict([])
count = pdfReader.numPages
for i in range(count):
    d_agriculture3 = dict(d_agriculture3)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_agriculture3.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('agriculture.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_agriculture4=dict([])
count = pdfReader.numPages
for i in range(count):
    d_agriculture4 = dict(d_agriculture4)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_agriculture4.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('DTM_Agriculture 4.0 IoT v1.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_agriculture5=dict([])
count = pdfReader.numPages
for i in range(count):
    d_agriculture5 = dict(d_agriculture5)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_agriculture5.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('gigabit-society-5g-04042017.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_agriculture6=dict([])
count = pdfReader.numPages
for i in range(count):
    d_agriculture6 = dict(d_agriculture6)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_agriculture6.update(dict(d))
pdfFileObj.close()


pdfFileObj = open('sia2016-rencontre-agriculture-numerique-4-guizard.doc.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_agriculture7=dict([])
count = pdfReader.numPages
for i in range(count):
    d_agriculture7 = dict(d_agriculture7)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_agriculture7.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('leading-the-world-to-5g-evolving-cellular-technologies-for-safer-drone-operation.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_agriculture8=dict([])
count = pdfReader.numPages
for i in range(count):
    d_agriculture8 = dict(d_agriculture8)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_agriculture8.update(dict(d))
pdfFileObj.close()

pdfFileObj = open('Intel-ITU Forum-5G-Intel.pdf', 'rb')
pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
d_agriculture9=dict([])
count = pdfReader.numPages
for i in range(count):
    d_agriculture9 = dict(d_agriculture9)
    pageObj = pdfReader.getPage(i)
    page=pageObj.extractText()
    document = Document(page, 
          filter = lambda w: w.lstrip("'").isalnum(), 
     punctuation = '.,;:!?()[]{}\'`"@#$*+-|=~_', 
           number='12346789',
             top = None,       # Filter words not in the top most frequent.
       threshold = 0,          # Filter words whose count falls below threshold.
         exclude = [],         # Filter words in the exclude list. 
         stemmer = None,       # STEMMER | LEMMA | function | None.
       stopwords = False,      # Include stop words?
            name = None,
            type = None,
        language = None, 
     description = None)
    d=document.keywords(top=5, normalized=True)
    d_agriculture9.update(dict(d))
pdfFileObj.close()
d_agriculture=dict([])
d_agriculture.update(dict(d_agriculture1))
d_agriculture.update(dict(d_agriculture2))
d_agriculture.update(dict(d_agriculture3))
d_agriculture.update(dict(d_agriculture4))
d_agriculture.update(dict(d_agriculture5))
d_agriculture.update(dict(d_agriculture6))
d_agriculture.update(dict(d_agriculture7))
d_agriculture.update(dict(d_agriculture8))
d_agriculture.update(dict(d_agriculture9))
for cle in d_agriculture.keys():
    if (len(d_agriculture[cle]) == 2 and d_agriculture[cle] != "5g") or len(d_agriculture[cle]) == 1 or len(d_agriculture[cle]) == 3:
        del d_agriculture[cle] 

#V est le query du document qu'on cherche son index dans la base de donnée
#V1..V6 sont les queries des diiférents usecases dans la base donnée

d1=distance(V, V1, method=COSINE)
d2=distance(V, V2, method=COSINE)
d3=distance(V, V3, method=COSINE)
d4=distance(V, V4, method=COSINE)
d5=distance(V, V5, method=COSINE)
d6=distance(V, V6, method=COSINE)
index={}
index("Agriculture")=d1
index("Transport")=d2
index("Healthcare")=d3
index("Education")=d4
index("Smart Buildings")=d5
index("Commercial Launch")=d6
tri_index= sorted(index.items(), key=lambda t: t[1])
lvalues=list(index.values())
maxx=max(list)
index_element=(list(a.keys())[list(a.values()).index(maxx)])




    
    



