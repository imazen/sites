---
taskInputHash: df2c0c7f01c93609
title: När man ska använda elementet `<picture>`
description: Förklarar i vilka situationer du bör använda elementet `<picture>`
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---
Elementet `picture` används för att tillhandahålla flera versioner av en bild och avgör vilken version av bilden som ska visas baserat på vissa villkor. Det är särskilt användbart för att optimera bilder för olika skärmstorlekar och upplösningar och används ofta i responsiv webbdesign. Här är några specifika scenarier där du kanske vill använda elementet `picture`:

* **Retinadisplayer:** Skärmar med hög densitet, som Apples Retinadisplayer, har en högre pixeltäthet, vilket innebär att bilder kan se suddiga eller pixlade ut om de inte är optimerade för hög upplösning. Med elementet `picture` kan du tillhandahålla en version av bilden som har dubbelt så många pixlar som den vanliga versionen, så den ser skarp och tydlig ut på Retinadisplayer.

* **Olika bildförhållanden:** Om du designar en webbplats som behöver visa bilder med olika bildförhållanden (som liggande versus stående), kan du använda elementet `picture` för att tillhandahålla olika versioner av bilden som är optimerade för varje bildförhållande.

* **Begränsad bandbredd:** Bilder kan vara stora filer som tar upp mycket bandbredd, särskilt på mobila enheter. Med elementet `picture` kan du tillhandahålla mindre versioner av bilden för enheter med mindre skärmar eller långsammare internetanslutningar, vilket kan hjälpa till att minska sidladdningstiderna.

* **Konstnärliga layouter:** Ibland kan du vilja presentera en bild på ett visst sätt beroende på resten av sidans layout. Till exempel kanske du vill visa en närbild av ansiktet på en person på mobila enheter, men en bredare bild på stationära enheter. Elementet `picture` låter dig tillhandahålla olika versioner av bilden som är optimerade för olika layouter.

Sammanfattningsvis är elementet `picture` ett kraftfullt verktyg som kan hjälpa dig att optimera dina bilder för olika användningsområden och säkerställa att de ser bra ut oavsett vilken enhet eller skärmstorlek de visas på.
