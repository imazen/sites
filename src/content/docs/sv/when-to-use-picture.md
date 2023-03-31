---
title: När du ska använda <picture>-elementet
description: Förklarar i vilka situationer du bör använda <picture>-elementet
taskInputHash: be2190453a34daf1
lang: sv
ignore: '/* cSpell:locale sv,en*/'
date_published: '2023-03-27'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Elementet `picture` används för att tillhandahålla flera versioner av en bild och avgör vilken version av bilden som ska visas baserat på vissa villkor. Det är särskilt användbart för att optimera bilder för olika skärmstorlekar och upplösningar och används ofta i responsiv webbdesign.
Här är några specifika scenarier där du kan vilja använda `picture`-elementet:

* **Retina-skärmar:** Skärmar med hög densitet som Apples Retina-skärmar har högre pixeltäthet, vilket innebär att bilder kan se suddiga eller pixelerade ut om de inte är optimerade för hög upplösning. Med `picture`-elementet kan du tillhandahålla en version av bilden som har dubbelt så många pixlar som den vanliga versionen, så att den ser skarp och tydlig ut på Retina-skärmar.

* **Olika bildformat:** Om du utformar en webbplats som behöver visa bilder med olika bildförhållanden (t.ex. liggande eller stående), kan du använda `picture`-elementet för att tillhandahålla olika versioner av bilden som är optimerade för varje bildförhållande.

* **Bandbreddsbegränsningar:** Bilder kan vara stora filer som tar upp mycket bandbredd, särskilt på mobila enheter. Med `picture`-elementet kan du tillhandahålla mindre versioner av bilden för enheter med mindre skärmar eller långsammare internetanslutningar, vilket kan hjälpa till att minska sidlastningstiderna.

* **Konstnärlig layout:** Ibland vill du kanske presentera en bild på ett visst sätt beroende på layouten för resten av sidan. Till exempel kan du vill visa en närbild av en persons ansikte på mobila enheter, men en bredare bild på stationära enheter. `Picture`-elementet låter dig tillhandahålla olika versioner av bilden som är optimerade för olika layouter.

Sammanfattningsvis är `picture`-elementet ett kraftfullt verktyg som kan hjälpa dig att optimera dina bilder för olika användningsområden och se till att de ser bra ut oavsett vilken enhet eller skärmstorlek de visas på.
