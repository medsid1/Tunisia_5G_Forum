from elasticsearch import Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200}])    
import json
import pandas as pd
import hashlib
from timeit import default_timer as timer

links=['https://gsacom.com/',
       
'https://www.telia.fi/operators',

'https://www.swisscom.ch/fr/',

'https://home.bt.com/',

'http://www.telecomitalia.com/',

'https://www.telenor.com/',

'https://www.vodafone.com/',

'https://www.orange.com/',

'https://www.telekom.com/en',

'https://www.telefonica.com/',

'https://www.mychinaunicom.com/',

'https://www.chinatelecom-h.com/',

'https://www.chinamobileltd.com/',

'https://www.nttdocomo.co.jp/',

'https://www.sktelecom.com/',

'https://www.att.com/',

'http://www.uplus.co.kr/en/',

'https://roaming.kt.com/',

'https://www.softbank.jp/en/',

'https://www.huawei.com',

'https://www.zte.com.cn/global/',

'https://www.intel.com/content/www/us/en/homepage.html',

'https://www.ericsson.com/en',

'https://www.cisco.com/',

'https://www.al-enterprise.com',

'https://www.qualcomm.com',

'https://www.nokia.com',

'https://www.samsung.com',

'https://www.surrey.ac.uk/5gic',

'https://www.exchange.telstra.com.au/laying-the-foundations-for-5g/',

'https://www.ox.ac.uk/',

'https://www.cam.ac.uk',

'https://www.ilp.mit.edu/',

'https://www.researchpublish.com/',

'https://www.scirp.org',

'https://www.ijsrp.org/',

'https://www.researchgate.net',

'https://www.clarivate.com/products/web-of-science/',

'https://www.f1000research.com',

'https://www.researcheracademy.elsevier.com/',

'https://www.guides.lib.udel.edu',

'https://www.itu.int',

'https://www.3gpp.org/',

'https://www.ietf.org',

'https://www.ieee.org',

'https://www.fcc.gov',

'https://www.fftelecoms.org',

'https://www.berec.europa.eu',

'https://www.arcep.fr/',

'https://www.bundesnetzagentur.de/EN/Home/home_node.html',

'https://www.verizonwireless.com/',

'https://www.mobileworldlive.com/'
 
       ]


Data = {}

for i in range(len(links)):
    hash_object = hashlib.sha256(links[i])
    hex_dig = hash_object.hexdigest()
    Data['id'] = hex_dig
    Data['link'] = links[i]
    
    r = json.dumps(Data)
    loaded_r = json.loads(r)
    es.index(index='crawling_links', doc_type='crawling_links', id=i, body= loaded_r)
    Data = {}
