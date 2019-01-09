from pattern.web import Crawler , download
from pattern.search import search

LINKS=[]
class Polly(Crawler): 
    def visit(self, link, source=None):
        print ('visited:', repr(link.url), 'from:', link.referrer)
        b=search('5g', i)
        if not len(b)==0:
           LINKS.append(repr(link.url))
    def fail(self, link):
        print ('failed:', repr(link.url))

p = Polly(links=['https://www.al-enterprise.com/'], delay=0.5)

while not p.done:
    p.crawl( cached=False, throttle=3)
    

import pickle
with open('qualcomm.pkl', 'wb') as f:
    vector = LINKS
    pickle.dump(vector,f)
    










