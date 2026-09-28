---
title: "Hoe de namen zijn gevonden"
date: "2026-09-29T09:00:00.000Z"
description: "De handgeschreven regels per reeks en de letterlijke instructie aan het taalmodel."
---

## Hoe de namen zijn gevonden

Deze bijlage hoort bij [Wie is de meest gevraagde talkshowgast bij de publieke omroep?](/talkshow-gasten/).

### De handgeschreven regels

Voor twintig reeksen is een regel geschreven die de gastnamen uit een vaste zinswending haalt. De kolom *vondsten* laat zien hoeveel naamvermeldingen die regel opleverde — en dus ook waar de aanpak tegen haar grens loopt.

| reeks | tier | bron | methode | vondsten |
| --- | :---: | --- | --- | ---: |
| Op1 | B | korte omschrijving | opsomming | 5123 |
| DE NACHTZOEN | A | titel | heel veld | 1815 |
| BAREND & WITTEMAN | B | korte omschrijving | cue-zin | 1008 |
| PAUW & WITTEMAN | B | meerdere velden | meerdere velden | 981 |
| DE WERELD DRAAIT DOOR | B | meerdere velden | meerdere velden | 912 |
| RONDOM TIEN | B | korte omschrijving | cue-zin | 840 |
| JINEK | A | titel | heel veld | 800 |
| TIJD VOOR MAX | A | meerdere velden | meerdere velden | 761 |
| BOEKEN | A | titel | heel veld | 602 |
| PAUW | B | meerdere velden | meerdere velden | 527 |
| HET VERMOEDEN | A | titel | heel veld | 381 |
| DE VERWONDERING | A | titel | heel veld | 373 |
| B&W | B | korte omschrijving | cue-zin | 263 |
| WNL OP ZONDAG | B | meerdere velden | meerdere velden | 215 |
| BUITENHOF | B | meerdere velden | meerdere velden | 180 |
| Khalid & Sophie | B | meerdere velden | meerdere velden | 175 |
| DE WANDELING | A | titel | heel veld | 172 |
| KNEVEL & VAN DEN BRINK | B | meerdere velden | meerdere velden | 129 |
| TV SHOW | B | scènebeschrijvingen (laag onder het programma) | cue-zin | 6 |
| HET CAPITOOL | C | — | — | 0 |

*Het Capitool* staat op tier C: daar leverde geen enkele zinswending een bruikbaar patroon op. Dat gat is later gedicht door het tweede tekstveld (zie paragraaf 3.3 van het artikel). Bij *TV Show* werkt de regel wel, maar raakt hij slechts een handvol afleveringen.

### De instructie aan het taalmodel

Het model kreeg per aflevering één instructie, zonder systeemprompt. `{presenters}` werd vervangen door de bekende presentatoren van die reeks, `{text}` door de beschrijvende tekst van die aflevering.  Beide taalmodelstappen gebruikten dezelfde instructie.

```
Je krijgt een Nederlandse beschrijving van een aflevering van een tv-praatprogramma.

Bepaal wie de GASTEN zijn: mensen die ZELF in de studio aanwezig zijn om over een onderwerp te praten of geinterviewd te worden.

Regels:
- Neem NIET de vaste presentator(en) van het programma op als gast, ook niet als die in de tekst genoemd wordt. Bekende presentator(en) van dit programma: {presenters}
- Neem WEL iemand op als die duidelijk de hoofdpersoon/geinterviewde is, ook als die normaal soms zelf presenteert.
- Neem NIET iemand op die alleen het ONDERWERP is van een nieuwsitem, tv-fragment, sketch, cabaretnummer of terugkerende rubriek (bv. "Fokke & Sukke over ...", "Lucky tv: ...", "persiflage van ...", "aandacht voor X die ..."). Die persoon is niet zelf aanwezig, ook al wordt de naam wel genoemd.
- Neem alleen concrete, met naam genoemde personen op die zelf spreken/aanwezig zijn - geen groepen ("diverse ouders"), geen organisaties, geen losse rollen zonder naam.
- Gebruik de volledige naam zoals die in de tekst staat.

Beschrijving:
\"\"\"{text}\"\"\"

Antwoord ALLEEN met JSON in dit format, niets anders:
{{"gasten": ["Volledige Naam", ...]}}
```

#### Wijziging tijdens het onderzoek

De derde regel — die voorschrijft dat iemand die alleen het *onderwerp* van een item is niet als gast meetelt — is pas tijdens het onderzoek toegevoegd, nadat bleek dat het model mensen opnam die in een rubriek of nieuwsitem werden genoemd zonder zelf aanwezig te zijn. De aangescherpte instructie is daarna toegepast op de 6.773 afleveringen die de toenmalige top-100 voedden, niet op het volledige corpus: dat leverde daar zes procent minder namen op, waarbij 1.522 afleveringen (22 procent) daadwerkelijk wijzigden.

De versie van vóór die wijziging is niet apart bewaard; zij verschilde van de bovenstaande uitsluitend doordat die derde regel ontbrak.
