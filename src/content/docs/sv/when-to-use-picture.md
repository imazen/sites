---
taskInputHash: f77b680b627a7ed0
title: När ska du använda `<picture>`-elementet
description: Förklarar i vilka situationer du bör använda `<picture>`-elementet
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
Elementet `picture` används för att tillhandahålla flera versioner av en bild och avgör vilken version av bilden som ska visas baserat på vissa villkor. Det är särskilt användbart för att optimera bilder för olika skärmstorlekar och upplösningar, och används ofta i responsiv webbdesign. Här är några specifika scenarier där du kanske vill använda elementet `picture`:

* **Retina-skärmar:** Skärmar med hög densitet, som Apples Retina-skärmar, har en högre pixeldensitet, vilket innebär att bilder kan se suddiga eller pixlade ut om de inte är optimerade för hög upplösning. Med elementet `picture` kan du tillhandahålla en version av bilden som har dubbelt så många pixlar som den vanliga versionen, så den ser skarp och tydlig ut på Retina-skärmar.

* **Olika bildförhållanden:** Om du designar en webbplats som behöver visa bilder med olika bildförhållanden (som landskap vs. porträtt), kan du använda elementet `picture` för att tillhandahålla olika versioner av bilden som är optimerade för varje bildförhållande.

* **Bandbreddsbegränsningar:** Bilder kan vara stora filer som tar upp mycket bandbredd, särskilt på mobila enheter. Med elementet `picture` kan du tillhandahålla mindre versioner av bilden för enheter med mindre skärmar eller långsammare internetanslutningar, vilket kan hjälpa till att minska sidladdningstider.

* **Konstnärligt riktade layouter:** Ibland kan du vilja presentera en bild på ett visst sätt beroende på layouten på resten av sidan. Till exempel kan du vilja visa en närbild av en persons ansikte på mobila enheter, men en bredare bild på stationära enheter. Elementet `picture` låter dig tillhandahålla olika versioner av bilden som är optimerade för olika layouter.

Sammanfattningsvis är elementet `picture` ett kraftfullt verktyg som kan hjälpa dig att optimera dina bilder för en mängd olika användningsfall och se till att de ser fantastiska ut oavsett vilken enhet eller skärmstorlek de visas på.
