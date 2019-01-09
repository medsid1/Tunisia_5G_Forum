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
       'https://www.cisco.com/c/m/en_us/network-intelligence/service-provider/digital-transformation/5g-strategy-for-your-success.html?dtid=osscdc00028',
       'https://www.huawei.com/en/industry-insights/outlook/mobile-broadband/insights-reports/5g-service-guaranteed-network-slicing-whitepaper'
       ]

"""
with open('huwaei.pkl', 'rb') as f:  
    obj = pickle.load(f)
"""
for i in obj:
    
    i = i.strip('\'"')
    Titles[i] = []
    Images[i] = []
    Videos[i] = []
    Documents[i] = []
    Pdfs[i] = []
   


for i in obj:
    i = i.strip('\'"')
    url = URL(i)
    #r = requests.get(url)
    if(check_url(i)):
        
        
        dom = DOM(url.download(cached=True))
    
        #div = Element(dom)
        #for e in dom:
            #elem[i].append(e.html)
        
           
        for a in dom('div h1'): 
          s = search('5g', plaintext(a.content))
          if not len(s)==0:
            if not plaintext(a.content) in Titles[i]:
                Titles[i].append(plaintext(a.content)) 
          
    
    
           
        for b in dom('p'):
        
              a = search('5g', plaintext(b.content))
              if not len(a)==0:
             
                  if not plaintext(b.content)  in Documents[i] :
                        Documents[i].append(plaintext(b.content)) 
                
          
        for c in dom('a'):
            
              parser.feed(str(c))
              lien = i
              
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
              
        for d in dom('span img'):
            #print(e)
              parser.feed(str(d))
              lien = i
        
        for d in dom('p img'):
            #print(e)
              parser.feed(str(d))
              lien = i
    
        print("#########################################################")
              
              
              



    



