---
title: Onderzoek naar gedigitaliseerde kranten uit de Tweede Wereldoorlog 
date: "2023-03-13T09:31:03.284Z"
description: "Tijdens een oorlog worden media door verschillende partijen gebruikt om propaganda te maken. Dat gebeurt vandaag de dag en dat gebeurde ook in het verleden. Deze Data Story geeft inzicht in de manier waarop onderzoekers uit verschillende disciplines hebben samengewerkt om een groot corpus digitale oorlogskranten uit de nazi-bezetting van Nederland (mei 1940- mei 1945) te ontsluiten en te analyseren. Ook laat deze Data Story zien hoe onderzoekers specifiek materiaal in het rijke krantencorpus kunnen vinden door middel van verschillende zoekstrategieën. Dit gebeurt onder andere aan de hand van de berichtgeving over een keerpunt in de Tweede Wereldoorlog: de Slag bij Stalingrad."
---

Onderzoekers: Marjet Brolsma (UvA en B&amp;G) en Vincent Kuitenbrouwer (UvA en B&amp;G)

Ontwikkelaars: Mari Wigham (B&amp;G) en Rana Klein (B&amp;G)

Adviseur: Willemien Sanders (UU en B&amp;G)

Reviewers: Carolyn Birdsall (UvA) en Luuk Ex (B&amp;G)

### 1. Inleiding en werkwijze

De bezetting van Nederland tijdens Tweede Wereldoorlog was in veel opzichten een unieke periode in de moderne nationale geschiedenis. Alle aspecten van het maatschappelijke leven werden diep beïnvloed -  zo ook de media in die tijd, zoals krant en radio. Zowel voorstanders als tegenstanders van de bezetting gebruikten deze media om mensen te mobiliseren voor hun politieke doeleinden. Zo werd Nederland een belangrijk slagveld in de propagandaoorlog tussen nazi-Duitsland en Groot-Brittannië. Er is veel historisch onderzoek gedaan naar verschillende aspecten van de Nederlandstalige propaganda maar deze publicaties beperken zich vooral tot de institutionele aspecten van het medialandschap. Tot nu toe mist een integrale inhoudelijke analyse van de mediabronnen uit de Tweede Wereldoorlog.

Het project [MediaOorlog](https://beeldengeluid.nl/kennis/projecten/mediaoorlog) analyseert de dynamiek van de propaganda in de Nederlandse oorlogsmedia en neemt daarbij als uitgangspunt de mediabronnen zelf. Door digitalisering zijn dit soort bronnen de afgelopen jaren op grote schaal doorzoekbaar geworden , waardoor het mogelijk is voor onderzoekers om zicht te krijgen op semantische patronen  en zo te visualiseren wanneer bepaalde woorden werden gebruikt in de oorlogsmedia. De nadruk van dit onderzoeksproject ligt vooral op de interactie tussen de verschillende kampen in de propagandastrijd: de media die de nazi-bezetting van Nederland steunden en de media die zich daartegen verzetten.

Een belangrijke collectie voor dit onderzoek is de [online databank Delpher](https://www.delpher.nl/oorlogskranten/) die een grote hoeveelheid gedigitaliseerd krantenmateriaal bevat, ook uit de bezettingsperiode (10 mei 1940 t/m 5 mei 1945). Het gaat om ruim 130.000 kranten uit deze periode, die zijn gesegmenteerd in 6.942.721 artikelen. 

<iframe src='https://flo.uri.sh/visualisation/11870011/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/11870011/?utm_source=embed&utm_campaign=visualisation/11870011' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>


_Figuur 1: Het aantal krantenartikelen over de periode 10 mei 1940 - 5 mei 1945_

Deze Data Story belicht de manier waarop het team van MediaOorlog deze enorme datacollectie van Delpher heeft ontsloten in de [CLARIAH Media Suite](https://mediasuite.clariah.nl/) om hun onderzoek te kunnen verrichten .  Zoals zal blijken was dit een complex proces waarbij bepaalde keuzes zijn gemaakt. Deze Data Story heeft als doel om inzicht te geven in dit proces. 

Wij denken dat dit verhaal relevant is op twee manieren. Ten eerste reflecteert deze Data Story op het ontsluiten van een groot corpus aan gedigitaliseerde historische data en in die hoedanigheid kan het dienen als een voorbeeld voor andere projecten. Ten tweede geven we rekenschap van de omgang met een bronnencorpus uit een van de meest beladen periodes uit de Nederlandse geschiedenis: de nazi-bezetting tijdens de Tweede Wereldoorlog. Uit het onderzoek, dat inmiddels verricht is, blijkt dat de collectie oorlogskranten een zeer rijke bron is. We hopen met deze Data Story anderen te inspireren om eigen onderzoek te verrichten en nodigen iedereen uit om gebruik te maken van deze dataset. Na een verslag van de manier waarop we het
krantenmateriaal hebben gecategoriseerd, geven we verschillende voorbeelden van zoek-
strategieën die de onderzoekers hebben gebruikt, zoals _Named Entity Recognition_ en _keyword searches_, en de eerste resultaten daarvan.

<table style='table-layout:fixed;width:100%'>
<tr>
<td style='width:50%'><img src="images/KBNRC01_000087944_mpeg21_p001_image.jpg"></td>
<td style='width:50%'><img src="images/MMNIOD05_000146218_mpeg21_p001_image.jpg"></td>
</tr>
<tr>
<td style='width:50%'><i>Algemeen Handelsblad</i>, 10 mei 1940</td>
<td style='width:50%'><i>Het Parool</i>, 5 mei 1945</td>
</tr>
</table>

_Figuur 2: Voorpagina’s van twee kranten die het begin- en eind markeren van de periode die wordt onderzocht_ Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

Deze Data Story is de uitkomst van een intensieve samenwerking tussen mensen die werken in verschillende disciplines: data engineering, AI development en geschiedenis. Het proces was in veel opzichten een vruchtbare dialoog tussen kwalitatieve en kwantitatieve onderzoeksmethodologieën, die elkaar goed aanvullen. Aan de ene kant valideren kwantitatieve trends in de data enkele belangrijke punten in de bestaande historische literatuur over de Nederlandse media tijdens de Tweede Wereldoorlog. Aan de andere kant kan kwalitatief historisch onderzoek helpen om de beschikbare data te verifiëren en waar nodig te corrigeren. Het eerste deel van deze Data Story geeft inzicht in deze interdisciplinaire samenwerking. Daarnaast toont deze bijdrage aan dat de beschikbare data in de Media Suite mogelijkheden biedt voor nieuw mediahistorisch onderzoek. In het tweede deel laten we zien hoe met behulp van verschillende strategieën semantische patronen kunnen worden blootgelegd die onze kennis over het gebruik van media voor propagandadoeleinden tijdens oorlogstijd kunnen verdiepen. Uitgangspunt hierbij is om de wisselwerking bloot te leggen tussen de propaganda-narratieven in media die de bezetting steunden en in de media die zich daartegen verzetten.

### 2. Categorisering mediabronnen: genazificeerd en anti-nazi

De metadata-velden van de krantencollectie Delpher kennen verschillende categorieën, die inzicht geven in de aard van de publicaties. Wat ontbreekt is een indeling op redactioneel-politieke gronden.  Als het gaat om kranten uit de Tweede Wereldoorlog is het van groot belang om een indeling te maken langs politieke lijnen om tot een goede analyse van de bronnen (bronnenkritiek) te komen . De belangrijkste scheidslijn was die tussen de publicaties die onder controle stonden van de bezettingsautoriteiten, en dus informatie verspreidden die het regime ondersteunde, en publicaties die opriepen tot verzet. Deze eerste categorie ‘genazificeerde kranten’ kan verder onderverdeeld worden. Er waren kranten die werden uitgegeven door organisaties verbonden met de ‘nazi partij’ die het regime vrijwillig  en uit overtuiging steunden. Daarnaast waren er kranten die ‘gelijkgeschakeld’ waren en onder strikt toezicht stonden van bezettingsautoriteiten, die veel druk uitoefenden op de journalisten die werkzaam waren bij deze kranten. De ‘anti-nazi kranten’ in bezet Nederland verschenen clandestien omdat uitgave ‘illegaal’ was, een term die zij als geuzennaam adopteerden. In september 1944 werden de zuidelijke provincies van Nederland ‘bevrijd gebied’ en ook daar verschenen kranten die ageerden tegen de nazi’s.

Op basis van deze inzichten uit de bestaande historiografie zijn categorieën geformeerd om de metadata van het Delpher-materiaal te verrijken. Met name waardevol was de publicatie [_Woord als wapen_](http://publications.niod.knaw.nl/publications/Woord_wapen.pdf) uit 1952, dat een overzicht bevat van de verzetskranten die zijn gearchiveerd door het Rijksinstituut voor Oorlogsdocumentatie (thans NIOD Instituut voor Oorlogs-, Holocaust- en Genocidestudies). Met behulp van een lijst van 1273 titels is handmatig een indeling gemaakt in een excel-sheet, die is gebruikt om in de Media Suite selecties (zogeheten _queries_) te maken, zodat onderzoekers de verschillende segmenten van het krantenlandschap in samenhang kunnen onderzoeken en vergelijken met behulp van de compare-functie. De hyperlinks hieronder geven toegang tot de verschillende _queries_ en kunnen voor eigen doeleinden worden opgeslagen door ingelogde gebruikers van de Media Suite en worden gebruikt voor eigen onderzoek.

**[Hele corpus (alle krantentitels 10 mei 1940 t/m 5 mei 1945)](https://mediasuite.clariah.nl/tool/single-search?queryId=15710a10-1c6d-4c3c-bbb7-73b2c12784c9)**

**Genazificeerd**



* [Gelijkgeschakelde kranten](https://mediasuite.clariah.nl/tool/single-search?queryId=00209676-3f99-4440-8f26-8ba126bd08fc) (118 titels, 6.096.506 artikelen)
* [Nazi-partij kranten](https://mediasuite.clariah.nl/tool/single-search?queryId=af151df4-7399-4589-80d3-52e956ffa98d) (21 titels, 475.630 artikelen)

**Anti-nazi**



* [Illegale pers](https://mediasuite.clariah.nl/tool/single-search?queryId=c1c842dd-b3d5-431b-a542-083d5a7e76a0) (955 titels, 269.089 artikelen)
* [Bevrijd gebied](https://mediasuite.clariah.nl/tool/single-search?queryId=ed256a74-d65c-4cf8-a56d-e02e9fa9ff1c) (157 titels, 60.592 artikelen)

Tijdens het categoriseren en ook in het onderzoek daarna viel op dat sommige titels in meerdere categorieën passen. Deze zijn gezet in een aparte restcategorie [‘onbekend’](https://mediasuite.clariah.nl/tool/single-search?queryId=ab65ffd3-a043-404c-b750-1a5afb8196d5) (22 titels, 40.904 artikelen).  Zulke categoriseringsproblemen hebben verschillende oorzaken. Een daarvan is dat de historische omstandigheden veranderden. Zo zijn sommige kranten die in het zuiden van Nederland verschenen zowel in te delen in de categorie ‘gelijkgeschakeld’ als in de categorie ‘bevrijd gebied’ (vanaf september 1944). Een voorbeeld is het in Maastricht gepubliceerde katholieke blad _Veritas_.
<table style='table-layout:fixed;width:100%'>
<tr>
<td style='width:50%'><img src="images/ddd_011028230_mpeg21_p001_image.jpg"></td>
<td style='width:50%'><img src="images/ddd_010419283_mpeg21_p001_image.jpg"></td>
</tr>
<tr>
<td style='width:50%'>5 mei 1941 (gelijkgeschakeld)</td>
<td style='width:50%'>25 september 1944 (bevrijd gebied)</td>
</tr>
</table>

_Figuur 3: Twee versies van Veritas: ‘gelijkgeschakeld’ (links) en ‘bevrijd gebied’ (rechts)_ Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

Een andere factor was de dynamiek van de propagandastrijd. Sommige titels van nazi-partij-kranten werden gebruikt door verzetsgroepen. Deze vorm van imitatie was waarschijnlijk bedoeld om nationaal-socialisten te desoriënteren. Een voorbeeld is _Storm: Blad der Nederlandsche SS_ dat, op niet echt overtuigende wijze, werd nagemaakt in Amsterdam in de laatste dagen van de bezetting.
<table style='table-layout:fixed;width:100%'>
<tr>
<td style='width:50%;padding-top:17px'><iframe src='https://flo.uri.sh/story/1797936/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='height:600px;width:100%' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe></td>
<td style='width:50%;padding-top:0px'><img src="images/ddd_010448596_mpeg21_p001_image.jpg"></td>
</tr>
<tr>
<td style='width:50%'>25 april 1941</td>
<td style='width:50%'>29 april 1945</td>
</tr>
</table>

_Figuur 4: Twee versies van Storm SS: de originele nazistische versie (links, trek de zwarte stip naar links om het artikel te bekijken) en de imitatie door het Amsterdamse verzet (rechts)_ Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

 

### 3. Ongelijk medialandschap

Om tot een goede afweging te komen van de betekenis van de verschillende publicaties tijdens de Tweede Wereldoorlog, is het van belang om te beseffen dat het medialandschap in die jaren ongelijk was. Het autocratische bezettingsregime in Nederland liet geen vrijheid van meningsuiting toe en had als doel om via de kranten de Nederlandse publieke opinie te winnen voor Hitler’s Derde Rijk. Bladen die werden uitgegeven door de NSB of andere nationaal-socialistische organisaties, deden dit vanuit ideologische overtuiging en waren open doorgeefkanalen voor de nazi-propaganda uit Berlijn. Deze kranten bevatten extremistische uitingen, zoals een virulent antisemitisme.[^1] Wat jodenhaat betreft, spande het weekblad _De Misthoorn_ de kroon.

<iframe src='https://flo.uri.sh/story/1797931/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

_De misthoorn_, 5 september 1942

_Figuur 5: Een voorbeeld van antisemitisme in het kranten-materiaal_. Trek de zwarte stip naar links om het artikel te bekijken. Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

Bestaande kranten van andere politieke signatuur mochten blijven bestaan maar werden onder strikte controle gesteld (gelijkgeschakeld), door middel van censuur en ‘vertrouwelijke mededelingen’, richtlijnen die elke dag werden uitgedeeld tijdens een persconferentie.[^2] Na de bevrijding, in 1945, verbeeldde de cartoonist Leo Jordaan dit _top-down_ informatiesysteem op iconische wijze.

![Cartoon Leo Jordaan over de gelijkgeschakelde kranten](images/urn-gvn-EVDO02-NIOD05_7999-large.jpg) 

_Figuur 6: Spotprent van Leo Jordaan over de gelijkgeschakelde kranten (1945)._

Bron: Het Geheugen [https://geheugen.delpher.nl/nl/geheugen/view?identifier=EVDO02%3ANIOD05_7999](https://geheugen.delpher.nl/nl/geheugen/view?identifier=EVDO02%3ANIOD05_7999).

De bezettingsautoriteiten gebruikten niet alleen dwangmiddelen om journalisten te bewegen om de gewenste artikelen te plaatsen in hun kranten. Ze gebruikten ook verleiding. Zo werden de arbeidsomstandigheden van journalisten aanzienlijk verbeterd door middel van wetgeving. Ook werden er zomerkampen georganiseerd in Kasteel Cannenburgh, waar het Nederlandse journaille op ontspannen wijze kon kennismaken met kopstukken van de bezettingsautoriteiten (zie deze [propagandafilm](https://mediasuite.clariah.nl/tool/resource-viewer?id=oai:openimages.eu:1128181&cid=open-beelden-beeldengeluid&st=%22EERSTE%20NEDERLANDSE%20JOURNALISTENKAMP%20OP%20DE%20CANNENBURGH%20TE%20VAASSEN%22) uit 1941). 

De omgang met de verzetskranten was totaal anders. Medewerkers van illegale bladen werden zeer streng vervolgd door de bezettingsautoriteiten, die actief jacht maakten op de faciliteiten van de ondergrondse pers om zo te voorkomen dat deze kranten in omloop kwamen. Bovendien waren de straffen zeer streng en er zijn dan ook veel illegale journalisten, drukkers en bezorgers ter dood gebracht voor het vuurpeloton of in concentratiekampen: de erelijst van gevallenen telt 777 namen.[^3] Het werken onder absolute geheimhouding maakte het moeilijk om kranten te maken en te distribueren. Veel kranten werden dan ook lokaal gemaakt en verspreid door aparte redacties, om de pakkans zo veel mogelijk te verkleinen. Dit verklaart waardoor 97,9% van de kranten in de categorie ‘illegaal’ is gecategoriseerd als regionaal/lokaal, tegenover 68,1% in de categorie ‘gelijkgeschakeld’. Grotere verzetsgroepen, die zich bezighielden met de illegale pers, werkten dan ook vaak met lokale redacties, waardoor er verschillende edities ontstonden. Zo bevat de Delpher dataset 40 verschillende uitgaves van het protestantse verzetsblad _Trouw_, dat werd opgericht in de eerste maanden van 1943.

Deze contrasten, voortgekomen uit de machtsongelijkheid in de bezettingsperiode, vertalen zich in de kwantitatieve data: de gelijkgeschakelde kranten tellen veruit de meeste artikelen. Om dit te kunnen uitbeelden hebben we visualisaties gemaakt van de aantallen krantenartikelen per categorie. De Media Suite biedt de mogelijkheid voor dit soort analyses niet, omdat deze specifiek zijn per onderzoeker. Naast de Media Suite wordt daarom een omgeving opgezet waarin de data geanalyseerd kan worden via [Jupyter Notebooks](https://mediasuite.clariah.nl/documentation/howtos/jupyter-notebooks), een laagdrempelige manier voor onderzoekers om aan de slag te gaan met data en visualisaties. Deze omgeving is nu alleen binnen het online domein van Beeld en Geluid beschikbaar maar zal binnenkort breder toegankelijk worden gemaakt.

<iframe src='https://flo.uri.sh/visualisation/11870031/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

_Figuur 7: Totaal aantal artikelen per categorie._

### 4. Ontwikkeling over tijd: afname van genazificeerde kranten, groei anti-nazi kranten

De ongelijkheden in het medialandschap waren niet constant tijdens de gehele bezetting. Zoals figuur 8 laat zien, kalfde de gelijkgeschakelde pers af tijdens de periode 1940-1945 en groeide de illegale pers. Uit de laatste maanden van de oorlog bevat het corpus zelfs meer materiaal uit de illegale pers dan uit de genazificeerde pers.

<iframe src='https://flo.uri.sh/visualisation/11868560/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/11868560/?utm_source=embed&utm_campaign=visualisation/11868560' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

_Figuur 8: Aantal artikelen per categorie kranten, over tijd_ 

Deze trends zijn te verklaren met behulp van de bestaande literatuur. Ten eerste is aangetoond dat de bezettingsautoriteiten steeds strenger werden en in de loop van de oorlog meer kranten verboden (soms tijdelijk, soms permanent), waardoor er in de loop van de tijd minder gelijkgeschakelde titels verschenen.[^4] Aan de andere kant werden de illegale bladen steeds beter georganiseerd. Waar in de eerste maanden individuen veelal alleen werkten, ontstonden er later tijdens de bezetting steeds uitgebreidere netwerken die de productie van bladen faciliteerden. Een belangrijke impuls voor de groei van de illegale pers was het verbod op radio-ontvangst-toestellen in mei 1943. Dat verbod werd door de bezettingsautoriteiten ingevoerd om te voorkomen dat mensen luisterden naar zenders die vanuit Londen uitzonden. Verzetsgroepen in verschillende steden namen daarom het initiatief om illegale bladen te maken op basis van die radio-uitzendingen, zodat mensen er toch kennis van konden nemen, zonder dat zij het risico hoefden te nemen om een radio in huis te hebben.[^5] De radiozenders uit Londen waren zich bewust van deze praktijken en maakten in de laatste fase van de oorlog speciale uitzendingen op dicteer-snelheid zodat de Nederlandse verzetsmensen de berichten goed konden overtypen, zoals te horen is in dit [audiofragment](https://mediasuite.clariah.nl/tool/resource-viewer?id=2101608150134284931&cid=daan-catalogue-aggr&bodyClass=noHeader&singleResource=1&startTime=200). Veel titels van illegale bladen verwezen naar de Britse zenders, zoals de _Hier is Londen!_ en _B.B.C. Nieuws_.

<table style='table-layout:fixed;width:100%'>
<tr>
<td style='width:50%'><img src="images/ddd_010425436_mpeg21_p001_image.jpg"></td>
<td style='width:50%'><img src="images/ddd_010420801_mpeg21_p001_image.jpg"></td>
</tr>
<tr>
<td style='width:50%'><i>Hier is Londen!</i>, 28 oktober 1944</td>
<td style='width:50%'><i>B.B.C. Nieuws</i>, 27 december 1944</td>
</tr>
</table>

_Figuur 9: Krantentitels die verwijzen naar de radio-uitzendingen uit Londen._ Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

Er is ook een materiële verklaring voor de dalende trend in de genazificeerde pers en de opgaande trend in de anti-nazi pers. Verzetsgroepen werden steeds succesvoller in het stelen van papier en inkt, zodat zij steeds meer middelen kregen om hun kranten te maken, terwijl de toegestane kranten met steeds grotere schaarste werden geconfronteerd. Daarnaast kregen de redacties van verzetsbladen ook steeds meer toegang tot professioneel materieel om hun drukwerk te maken.[^6] Zo werd de Amsterdamse editie van het illegale blad _Het Parool_ na sluitingstijd gedrukt op de burelen van de gelijkgeschakelde krant _De Telegraaf_. _Het Parool_, dat zijn oorsprong had in _De Nieuwsbrief van Pieter ‘t Hoen,_ zag er daardoor ook steeds professioneler uit. Deze ontwikkelingen in layout bevestigen de grafieken met de kwantitatieve data trends.

<table style='table-layout:fixed;width:100%'>
<tr>
<td style='width:50%'><img src="images/ddd_010432846_mpeg21_p001_image.jpg"></td>
<td style='width:50%'><img src="images/ddd_010900793_mpeg21_p001_image.jpg"></td>
</tr>
<tr>
<td style='width:50%'><img src="images/ddd_010900818_mpeg21_p001_image.jpg"></td>
<td style='width:50%'><img src="images/ddd_010436622_mpeg21_p001_image.jpg"></td>
</tr>
</table>

_Figuur 10: Nieuwsbrief van Pieter ’t Hoen_, 25 juli 1940 (linksboven) en _Het Parool_, 10 mei 1941 (rechtsboven), 10 mei 1942 (linksonder) en 5 mei 1945 (rechtsonder). De vormgeving werd steeds professioneler Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

Na deze reflectie op de manier waarop de historische kennis over het Nederlandse medialandschap
tijdens de Tweede Wereldoorlog zich verhoudt tot de data in de CLARIAH Media Suite, richten
we ons nu op manieren waarop dit materiaal gebruikt kan worden voor mediahistorisch
onderzoek. We richten ons daarbij op twee verschillende strategieën: _Named Entity Recognition_, die
draait om automatische data-extractie, en _keyword searches_, waarbij de onderzoekers zelf
trefwoorden formuleren.

### 5. Geografische termen: onderzoek met Named Entity Recognition (NER)

De bestaande literatuur over de oorlogsmedia richt zich sterk op de Nederlandse nationale context. Het project Mediaoorlog probeert aandacht te vragen voor de transnationale context van de propagandastrijd in de Nederlandstalige media. Onze hypothese is dat het Nederlandse medialandschap gezien kan worden als een slagveld van de twee machtsblokken die tegenover elkaar stonden in Europa: de asmogendheden en de geallieerden. Om dat te onderzoeken, hebben we gekeken naar alle voorpagina’s in de krantendataset. Het uitgangspunt hierbij is, dat dit deel van een krant het meest belangrijke nieuws bevat. Ook was het, in de tijd die we onderzoeken, niet gebruikelijk om advertenties op de voorpagina te plaatsen, zodat deze data vooral bestaat uit prominent en ‘hard’ nieuws.

Deze krantendataset bestaat uit ingescande voorpagina’s waaruit met behulp van optische tekenherkenning (OCR, optical character recognition) de tekst is geëxtraheerd. Vervolgens is eigennamen-extractie (NER, named entity recognition) gebruikt om de geopolitieke context in kaart te brengen. Op deze manier kunnen zowel de verschillende spellingsvarianten, zoals Duitsland/Duitschland, als varianten zoals Duitachland en Duitsohland, die ontstaan zijn door OCR-fouten, worden geïdentificeerd (zie figuren 11 t/m 14). Omdat het gebruikte algoritme niet alle geografische termen herkent (precision 0.78, recall 0.76, F-score 0.77) hebben we de meest voorkomende geografische termen (inclusief spelling-variaties) vervolgens gezocht en geteld.

![Duitsland](images/werkgelegenheid.jpg)

_Figuur 11: ‘Duitşland’_, bron: _Het Volk_, 06-06-1940. [https://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:011117564:mpeg21:a0052](https://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:011117564:mpeg21:a0052)

![Duitschland](images/duitschland.PNG)

_Figuur 12: ‘Duitschland’_, bron: _Zutphensche Courant_, 06-06-1940. [https://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:010695301:mpeg21:a0077](https://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:010695301:mpeg21:a0077) 

![Duitachland](images/de joden in duitsland.PNG)

_Figuur 13: ‘Duitachland’_, bron: _Residentiebode_, 04-10-1941. [https://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:011062607:mpeg21:a0212](https://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:011062607:mpeg21:a0212) 

![Duitsohland](images/duitsohland.PNG)

_Figuur 14: ‘Duitsohland’_, bron: _Het nieuws_, 21-03-1945. [https://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:010431700:mpeg21:a0002](https://www.delpher.nl/nl/kranten/view?coll=ddd&identifier=ddd:010431700:mpeg21:a0002)

Om de spellingsvarianten mee te nemen, hebben we deze geclusterd voor een aantal belangrijke geografische termen, bepaald aan de hand van een eerste inventarisatie van de frequenties van alle spellingsvarianten. 

<iframe src='https://flo.uri.sh/visualisation/9972759/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/9972759/?utm_source=embed&utm_campaign=visualisation/9972759' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

_Figuur 15: Uitkomsten van de NER-analyse van geografische termen op voorpagina’s_

Figuur 15 laat zien dat het Nederlandse medialandschap tijdens de Tweede Wereldoorlog gericht was op de internationale context. Met name de strijd tussen nazi-Duitsland en het laatste bastion van de geallieerden in Noordwest Europa, Engeland, was vaak voorpagina-nieuws. Het feit dat de twee hoofdsteden van deze landen, Berlijn en Londen, op plekken 5 en 6 staan, onderstreept deze dynamiek. In de huidige literatuur wordt de geschiedenis van de kranten tijdens de Nederlandse bezetting nog vaak in strikte nationale context bezien.[^7] Deze visualisatie laat echter zien dat het Nederlandse medialandschap in transnationaal perspectief geplaatst moet worden. Via de geschreven pers hadden Nederlanders toegang tot informatie over de gebeurtenissen buiten de grenzen die het lot van hun eigen land in grote mate bepaalden. Die informatie was niet neutraal en lezers waren zich hiervan bewust, zoals blijkt uit egodocumenten die zij achter hebben gelaten.[^8] Bovendien, als we naar de NER-grafieken van afzonderlijke categorieën kijken, zien we interessante verschillen in de top 4. Een nadere blik op deze uitkomsten roept nieuwe reflecties op.

Vanwege het grote aantal locaties was clustering niet haalbaar voor alle geografische termen; dit is alleen gedaan voor een beperkt aantal termen die in deze inventarisatie naar voren kwamen. Deze analyse van het hele corpus voorpagina’s laat zien dat vier geografische termen duidelijk meer genoemd worden dan andere:



1. Engeland
2. Duitsland
3. Nederland
4. Europa

#### Europa domineert in Nazi-partij kranten

<iframe src='https://flo.uri.sh/visualisation/9972939/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/9972939/?utm_source=embed&utm_campaign=visualisation/9972939' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

_Figuur 16: Uitkomsten NER-analyse van geografische termen op voorpagina’s voor de categorie nazi-partij-kranten_

Een van de uitkomsten van de NER-analyse is dat ‘Europa’ de meest voorkomende geografische aanduiding is op de voorpagina’s van de nazi-partijkranten. Hoewel Hitler uitsluitend geïnteresseerd was in het belang van Duitsland, maakten de nazi’s, vooral in hun propaganda gericht op de bezette gebieden, veelvuldig gebruik van het ideaal ‘Europa’ om hun oorlogsdoelen en bezettingspolitiek te legitimeren. De wijze waarop door de nazi-autoriteiten en hun collaborateurs invulling werd gegeven aan ‘Europa’, was echter divers, veranderlijk, soms conflicterend en dikwijls vaag. Na capitulatie van Frankrijk in juni 1940 promootten de nazi’s een toekomstige, nieuwe orde in Europa, die gekenmerkt zou worden door een behoud van nationale eigenheden, autarkie, vrede en welvaart en gecontrasteerd werd met het Verenigd Koninkrijk als imperialistische macht die slechts uit was op chaos en verdeeldheid op het Europese continent. De nazi-plannen voor deze nieuwe Europese orde in vredestijd waren het meest concreet op het gebied van de economie en kregen onder andere gestalte in het door de Duitse minister van Economische Zaken, Walther Funk, in juli 1940 gelanceerde plan voor een Europese betalingsunie. 

Met de inval van de Sovjet-Unie op 22 juni 1941 kreeg het idee van Europa voor de nazi’s een nieuwe urgentie. De oorlog tegen het ‘Aziatische bolsjewisme’ werd door Hitler en Goebbels voorgesteld als een gemeenschappelijke Europese kruistocht voor een nieuw Europa en het behoud van de Europese beschaving. Ook op radio Hilversum en in de Nederlandstalige gelijkgeschakelde pers en nazi-partij kranten werd deze voorstelling van een strijd van en voor het nieuwe Europa, tegen het anti-Europese Sovjet-bolsjewisme en de Britse (en vanaf december 1941 Brits-Amerikaanse) plutocratie, voortdurend aangehaald. Een voorbeeld is het onderstaande artikel van Anton Mussert op de voorpagina van het NSB partijblad _Volk en Vaderland_, waarin de NSB-leider, een dag na het begin van de Duitse inval, de oorlog tegen de Sovjet-Unie prijst als “het eenige middel dat mogelijk is om een nieuw Europa te bouwen”. 

<iframe src='https://flo.uri.sh/story/1797938/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

_Figuur 17: Voorpagina Volk en Vaderland_, 23 juni 1941, over de Duitse aanval op de Sovjet-Unie. Trek de zwarte stip naar links om het artikel te bekijken. Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

#### Nederland domineert in illegale pers

<iframe src='https://flo.uri.sh/visualisation/9973014/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/9973014/?utm_source=embed&utm_campaign=visualisation/9973014' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

_Figuur 18: Uitkomsten NER-analyse van geografische termen op voorpagina’s voor de categorie illegale kranten_

In de illegale pers is het trefwoord ‘Nederland’ de meest voorkomende geografische term. Deze nadruk laat zich verklaren doordat de auteurs in deze categorie kranten met name bezig waren met de bestrijding van het nazi-bezettingsregime in eigen land. Dit kan ook verklaren waarom ‘Duitsland’ en ‘Berlijn’ ook hoog scoren. Een belangrijke bron van inspiratie voor dit verzet was het nationale verleden, met name de vrijheidsstrijd tegen Spanje tijdens de Tachtigjarige Oorlog, die vaak werd aangehaald als voorbeeld voor de twintigste-eeuwse ‘geuzen’ die het nazisme bestreden. 

In de laatste twee jaar van de oorlog, toen steeds duidelijker werd dat het Hitler-regime het onderspit zou delven tegen de geallieerden, functioneerden de illegale kranten bovendien als belangrijke fora voor discussies over de toekomst van Nederland na de bevrijding.[^9] _Vrij Nederland_ was de titel van een van de meest bekende verzetsbladen maar dit waren ook gevleugelde woorden die het opkomende optimisme over de eindoverwinning van de geallieerden tot uitdrukking brachten. De focus op Nederland in de illegale pers kan ook een van de redenen zijn waarom in de naoorlogse literatuur zoveel nadruk lag op de nationale context van de bezettingsgeschiedenis. Zoals vaker in het verleden werd ook in Nederland de geschiedenis geschreven door de overwinnaars. Veel journalisten die voor de illegale pers hadden geschreven, werden prominente stemmen in het historische debat over de Tweede Wereldoorlog.

![Ons Vrije Nederland](images/ddd_010435281_mpeg21_p001_image.jpg)

_Figuur 19: Ons Vrije Nederland_, 29 April 1945, naar aanleiding van de aanstaande bevrijding van Nederland. Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

### 6. Trefwoorden

Een andere strategie waarmee we in het project MediaOorlog hebben gewerkt, is het uitvoeren van _keyword searches_, om inzicht te krijgen in de semantische patronen in het Nederlandse gedigitaliseerde krantenmateriaal uit de Tweede Wereldoorlog. In deze strategie, die vaak wordt
toegepast in historisch onderzoek naar digitale bronnen, neemt de onderzoeker niet automatisch gegenereerde data-patronen als uitgangspunt maar zelf-geformuleerde trefwoorden die zijn gebaseerd op haar/zijn inzichten uit de bestaande literatuur. Om deze methode werkbaar te maken, gezien de grote hoeveelheid data, gebruiken de onderzoekers de _compare_-functie in de Media Suite, waarin verschillende trefwoord-_queries_ met elkaar kunnen worden vergeleken. Op deze manier kunnen onderzoekers semantische patronen over de tijd heen zichtbaar maken en momenten selecteren die nader kunnen worden onderzocht. In de _compare-functie_ van de Media Suite is het mogelijk een selectie van artikelen te bekijken en daarna door te klikken naar het oorspronkelijke gedigitaliseerde materiaal op de website van Delpher, waar het materiaal nader kan worden onderworpen aan historische bronnenkritiek.

Het werken met _keyword searches_ leert dat het belangrijk is om de termen zo specifiek mogelijk te
maken. Een algemene term als ‘propaganda’, bijvoorbeeld, levert geen duidelijk patroon op, omdat
die gedurende de bezetting relatief ongeveer evenveel werd genoemd in verschillende
categorieën kranten. Een goede manier om een afbakening te maken, is om een specifieke
gebeurtenis als uitgangspunt te nemen, door bijvoorbeeld de geografische naam te gebruiken waar
die gebeurtenis plaatsvond. Voor deze Data Story hebben we gekozen voor het trefwoord
’Stalingrad’, waar een grote veldslag plaatsvond. Het voordeel van dit trefwoord is dat er buiten
deze strijd niet of nauwelijks naar deze plek werd verwezen in de Nederlandse kranten, dus dat de
grafieken verwijzen naar relevant materiaal over de veldslag. Daarom is het een geschikte term
om te laten hoe een _keyword search_ in de oorlogskranten werkt.

#### Casestudy: Stalingrad

In Nederlandse kranten werd veel aandacht besteed aan de oorlog tussen nazi-Duitsland en de Sovjet-Unie, die begon in de zomer van 1941 met de verrassingsaanval van de Wehrmacht. In de genazificeerde pers werden Nederlanders opgeroepen om dienst te nemen in de Waffen-SS en zo een bijdrage te leveren aan de strijd tegen het communisme aan het Oostfront. Daarom kreeg de opmars van het Duitse leger en de slagen die het leverde met het Rode Leger veel aandacht in de Nederlandse kranten. De Slag bij Stalingrad, die plaatsvond tussen september 1942 en februari 1943,  was een belangrijk mediamoment en figuur 20 laat duidelijk zien dat er een verhoogde aandacht was voor ‘Stalingrad’ gedurende deze slag.

Figuur 20 geeft het percentage artikelen waarin ‘Stalingrad’ voorkomt per categorie weer relatief aan het totaal aantal artikelen in de collectie van dit onderzoek op een bepaald moment in de tijd. Echter toont dit een vertekend beeld, vanwege de onbalans in de dataset. Het is logisch dat de gelijkgeschakelde categorie de hoogste pieken toont, gezien deze categorie veruit het meeste materiaal bevat en dus een groot aandeel heeft in de collectie. Daaruit vallen dus geen betekenisvolle conclusies te trekken over de relatieve aandacht voor Stalingrad binnen de verschillende categorieën. 

<iframe src='https://flo.uri.sh/visualisation/12388756/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/12388756/?utm_source=embed&utm_campaign=visualisation/12388756' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

_Figuur 20: Percentages van trefwoord 'Stalingrad' ten opzichte van het totale aantal artikelen_

Om deze reden hebben we nieuwe functionaliteit toegevoegd aan de compare-functie om _query_-resultaten relatief tot hun eigen categorie te tonen - of in de termen van de Media Suite: ‘relative to query facet’. Figuur 21 geeft een heel ander beeld van de aandacht voor Stalingrad in de verschillende Nederlandse kranten.


<iframe src='https://flo.uri.sh/visualisation/12388726/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/12388726/?utm_source=embed&utm_campaign=visualisation/12388726' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

_Figuur 21: Percentages van trefwoord ‘Stalingrad’ ten opzichte van het totale aantal artikelen per
categorie._

Figuur 21 laat zien dat tijdens de eerste fase van de slag (september-oktober 1942) ‘Stalingrad’ relatief gezien ongeveer evenveel aandacht kreeg in de categorieën ‘gelijkgeschakeld’, ‘nazi-partij’ en ‘illegaal’. Als we kijken naar de genazificeerde pers, zien we  dat dit materiaal veel loftuitingen bevat op het Duitse leger en afkeer van de Sovjet-troepen. Toen de slag in een stadsoorlog uitmondde, met bloedige straat-tot-straat-gevechten, werd de kracht van de Duitse artillerie benadrukt, die de stad tot puin schoot. Foto’s van in lompen gehulde Russische soldaten die werden afgevoerd en van een uitgebrande tank in het vernietigde stadscentrum ‘sierden’ de voorpagina van het _Rotterdamsch Nieuwsblad_ op 3 November 1942. Het bijschrift meldde: ‘De Bolsjewisten verdedigen zich tot hun vernietiging’.

![Foto's over Stalingrad](images/stalingrad.jpg)

_Figuur 22: Foto’s over de slag bij Stalingrad, Rotterdamsch Nieuwsblad_ op 3 November 1942 Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

In de tweede fase van de slag (november 1942-februari 1943) zien we  dat de aandacht in de genazificeerde kranten afnam, terwijl de illegale pers juist meer ging schrijven over Stalingrad. Dat is te verklaren door het feit dat de slag uiteindelijk werd gewonnen door het Rode Leger. Die overwinning werd in februari 1943 vooral breed uitgemeten in de communistische illegale pers. _De Waarheid_ pakte groots uit met een illustratie op de voorpagina, die de overwinning van het Rode Leger verheerlijkte, verpersoonlijkt door aanstormende tanks die een Duitse soldaat de handen in de lucht doet steken.

![Berichtgeving over Stalingrad](images/de weg vooruit.jpg)

_Figuur 23: Berichtgeving over Stalingrad, De Waarheid_, 16 februari 1943 Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

Aanvankelijk waren illegale bladen van andere politieke signatuur minder uitgesproken over de overwinning van het Rode Leger. Naarmate de tijd verstreek, echter, werd het belang van Stalingrad ook door deze kranten benadrukt, zoals de piekjes in figuur 21 laten zien. In dit soort beschouwingen, die vaak verschenen rond het jubileum van het einde van de slag (in februari 1944 en 1945), werd deze gebeurtenis getypeerd als een ‘keerpunt’, omdat het Duitse leger vanaf dat moment in het defensief werd gedwongen aan het Oostfront in Europa. Een beschouwing in het conservatief-protestantse blad _Trouw_ uit februari 1945 illustreerde dit met twee kaartjes: een die Hitler-Duitsland op zijn hoogtepunt toonde en een die het sterk gereduceerde grondgebied in het begin van 1945 liet zien.


![Reflectie op de slag bij Stalingrad](images/ddd_010442860_mpeg21_p003_image.jpg)

_Figuur 24: Reflectie op de betekenis van de Slag bij Stalingrad, Trouw_, 24 februari 1945 Bron: [Delpher.](https://www.delpher.nl/nl/kranten)

### 7. Ter conclusie

In deze Data Story hebben we inzicht gegeven in onze pogingen om grip te krijgen op een grote en ingewikkelde dataset van historische mediabronnen. De ongelijke machtsverhoudingen in Nederland tijdens de Tweede Wereldoorlog vertalen zich in een onbalans in het corpus van gedigitaliseerde kranten uit die periode, die een vertekend beeld geeft van het materiaal als het in absolute termen wordt beschouwd. Om deze problemen aan te pakken, is er eerst een categorisering gemaakt van de krantentitels: ze werden onderverdeeld in nazi-, gelijkgeschakelde, en illegale kranten en kranten uit bevrijd gebied. Deze categorisering diende als basis voor _queries_ in de Media Suite en zijn een duurzame verrijking van de digitale onderzoeksinfrastructuur. Op basis van de visualisaties van deze categorieën kon het krantenmateriaal in verband worden gebracht met de bestaande literatuur over de media tijdens de Tweede Wereldoorlog en zo gevalideerd voor gebruik. 

Om semantische patronen te kunnen identificeren in de dataset, hebben we in dit onderzoek verschillende strategieën toegepast. We hebben geëxperimenteerd met Named Entity Recognition om patronen in geografische termen te onderscheiden, die aantonen dat het Nederlandse krantenlandschap tijdens de Tweede Wereldoorlog als geheel gericht was op een transnationale context - met name de strijd tussen nazi-Duitsland en de geallieerden onder leiding van Groot-Brittannië in Noordwest Europa. Afzonderlijke categorieën laten echter verschillende accenten zien, zoals de focus van illegale kranten op de nationale context in Nederland en de focus van nazi-partij kranten op het concept ‘Europa’. Een andere onderzoeksstrategie was het werken met meer gespecificeerde trefwoorden om zo opmerkelijke mediamomenten in de verschillende categorieën, die we hebben toegevoegd in de Media Suite, te identificeren. Onderzoekers kunnen deze momenten visualiseren en analyseren met behulp van de _compare_-functie, die toegang geeft tot het gedigitaliseerde krantenmateriaal in Delpher.

De vijf historici die betrokken zijn geweest bij het MediaOorlog onderzoek hebben
gebruikt gemaakt van de bovengenoemde _tools_ in hun onderzoek naar verschillende
deelonderwerpen, zoals de berichtgeving over frontlinies en de Jodenvervolging. De uitkomsten van
deze onderzoeken verschijnen in een themanummer van het _Tijdschrift voor Geschiedenis_
(jaargang 135.2, 2023), dat _open access_ beschikbaar is. Ondanks het feit dat zij via de Media Suite
veel relevant materiaal hebben gevonden in het krantencorpus uit de Tweede Wereldoorlog, hebben deze projecten slechts het topje van de ijsberg aan beschikbaar materiaal blootgelegd. Wat dat betreft hopen we dat de inzichten die zijn gepresenteerd in deze Data Story aanleiding zijn voor andere mensen om zelf onderzoek te gaan doen met deze dataset. De verrijkte _queries_ die aan de begin van deze Data Story  staan, zijn daarom ter beschikking gesteld aan alle gebruikers van de Media Suite.


<!-- Footnotes themselves are at the bottom. -->
## Bronnen

[^1]:
     Voor een bloemlezing: B. Kromhout red., _Fout! 1940-1945: wat Hollandse nazi-kranten schreven over Nederland, joden en verzet_ (Veen: Amsterdam [2016]).

[^2]:
     R. Vos, _Niet voor publicatie. De legale Nederlandse pers tijdens de Tweede Wereldoorlog_ (Sijthoff: Amsterdam 1988).

[^3]:
     H. Wijfjes, ‘Erelijst van gevallenen’, in: H. van den Heuvel en G. Mulder red., _Het vrije woord. De illegale pers in Nederland_ (SDU: Den Haag 1990), 196-261.

[^4]:
     Vos, _Niet voor publicatie_, 113.

[^5]:
     R.S. Zimmerman-Wolf, ‘Inleiding’, in: L. Winkel red., _Het woord als wapen. Keur uit de Nederlandse ondergrondse pers 1940-1945_ (M. Nijhoff: ‘s Gravenhage 1952), 47-8.

[^6]:
      L. de Jong,_ Het Koninkrijk der Nederlanden in de Tweede Wereldoorlog, 1939-1945. Deel 7: mei ‘43 - juni ‘44 _(Martinus Nijhoff: ‘s Gravenhage 1976), 846.

[^7]:
     M. Verburg, 'Nederlandse blik op de oorlog nog steeds beperkt'; (Duitsland Instituut, 03-05-2018). Zie: [https://duitslandinstituut.nl/artikel/25902/nederlandse-blik-op-de-oorlog-nog-steeds-beperkt](https://duitslandinstituut.nl/artikel/25902/nederlandse-blik-op-de-oorlog-nog-steeds-beperkt) [12-07-2022].

[^8]:
     B. van der Boom, _‘We leven nog’. De stemming in bezet Nederland_ (Boom: Amsterdam 2003), 104.

[^9]:
     J. Foray, _Visions of Empire in the Nazi-Occupied Netherlands_ (Cambridge University Press: Cambridge 2012).
