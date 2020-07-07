Example: SARS transmission (written in python) 
```
wantwords=['infect', 'kip', 'anus', 'zaad', 'druppel', 'gapen', 'vloeistof', 'teken', 'seks', 'hoesten', 'genetisch', 'uitadem', 'badweefsel', 'draadloos', 'hoest', 'sputum', 'oppervlak', '5g', 'saliva', 'adem', 'aanraken', 'fontein', 'overdra', 'speeksel', 'aerosol', 'asymptomatisch', 'electromagnetisch', 'aanrak', 'ijs', 'niezen', 'moedermelk', 'hand', 'zweet', 'apen', 'insecten', 'lucht', 'water', 'naald', 'nies', 'luchtvochtigheid', '5gee', 'symptomatisch', 'straling', 'muggen', 'mond', 'microchip', 'penis', 'sex', 'contact', 'knuffelen', 'zoenen', 'erfelijk', 'dieren', 'praten', 'vagina', 'slijm', 'benzine', 'meter', 'bloed', 'golf', 'ogen', 'druppeltjes', 'besmet', 'delen', 'poep', 'asympto', 'overle', 'overgedra', 'toilet', 'schoen', 'neus', 'temperatuur']
wantwords=['druppel','teken','hoest','niezen','slijmvliezen','mond','neus','seks','ogen','contact','aanraken','lucht','nauw contact','biologisch wapen','biowapen','loewak','vleermuizen']
import json, re, csv, codecs,os,pickle
from itertools import zip\_longest
from operator import itemgetter
from nltk import sent\_tokenize, word\_tokenize
from string import punctuation
from datetime import datetime
bads=[]
langs=pickle.load(open('langs.p','rb'))

for ff in ['SARS.json']:
print(ff)
sents=[]
dta = json.load(open(ff,'r'))
freqs={}
for xxx in dta.keys():
    if langs[ff][xxx] == 'en':
        continue
    txt = dta[xxx]['description']
    try:
        txt = "%s. %s." % (dta[xxx]['title'], txt)
    except KeyError:
        pass#print('????', dta[xxx])
    try:
        txt = "%s %s." % (txt, dta[xxx]['subtitles'])
    except KeyError:
        pass#print('????', dta[xxx])
        # continue
    dt = "%s-01" % dta[xxx]['broadcastDate'][:7]
    try:
        dt = datetime.strptime(dt, '%Y-%m-%d')
    except Exception as err:
        dt = "01-%s" % dta[xxx]['broadcastDate'][-7:]
        dt = datetime.strptime(dt, '%d-%m-%Y')
    txt=txt.replace('\n',' ').replace('.,','. ').strip()
    for xx in sent\_tokenize(txt):
       # if 'kind' in xx.lower() or 'kleuter' in xx.lower():
           # if 'besmet' in xx.lower() or 'draag' in xx.lower():
                # print(xx)
                # sents.append(xx)
        if 'sars' in xx.lower() or 'virus' in xx.lower():
            # if 'besmet' in xx.lower():
           for bb in wantwords:
                if bb in xx.lower():
                    test = re.search(r'\b%s' % bb, xx.lower())
                    if test:
                        sents.append(xx)
                        print([bb,xx])
                        try:
                            freqs[dt]
                        except KeyError:
                            freqs[dt]={}
                        try:
                            freqs[dt][bb]+=1
                        except KeyError:
                            freqs[dt][bb]=1

out=[]
for dt, vv in sorted(freqs.items()):
    lout1=[dt]
    lout2=["%sct" % dt]
    for w, fre in sorted(vv.items(), key=itemgetter(1), reverse=True):
        lout1.append(w)
        lout2.append(fre)
    out.append(lout1)
    out.append(lout2)
with codecs.open('sars\_how.txt', 'w' , encoding='utf-8') as f:
    f.write("\n".join(sents))
with codecs.open('sars\_how.csv', 'w' , encoding='utf-8') as f:
    w=csv.writer(f, delimiter=';')
    w.writerows(list(map(list, zip\_longest(\*out))))
```