---
title: När man ska använda <picture>-elementet
description: Förklarar i vilka situationer du bör använda <picture>-elementet
taskInputHash: 22cea24f0bea57f5
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
`picture`-elementet används för att ge flera versioner av en bild och bestämmer vilken version av bilden som ska visas baserat på vissa villkor. Det är särskilt användbart för att optimera bilder för olika skärmstorlekar och upplösningar och används vanligtvis i responsiv webbdesign. 

Här är några specifika scenarier där du kanske vill använda `picture`-elementet:

* **Retina-skärmar:** Skärmar med hög densitet, som Apples Retina-skärmar, har en högre pixel densitet, vilket innebär att bilder kan se suddiga eller pixelerade ut om de inte är optimerade för hög upplösning. Med `picture`-elementet kan du tillhandahålla en version av bilden som har dubbelt så många pixlar som normalversionen, så att den ser skarp och tydlig ut på Retina-skärmar.

* **Olika ytförhållanden:** Om du utformar en webbplats som behöver visa bilder med olika ytformat (som landskap vs porträtt), kan du använda `picture`-elementet för att tillhandahålla olika versioner av bilden som är optimerade för varje ytformat.

* **Bandbreddsgränser**: Bilder kan vara stora filer som tar upp mycket bandbredd, speciellt på mobila enheter. Med `picture`-elementet kan du tillhandahålla mindre versioner av bilden för enheter med mindre skärmar eller långsammare internetanslutningar, vilket kan hjälpa till att minska sidbelastningstiderna.

* **Art-directad layouter:** Ibland vill du kanske presentera en bild på ett visst sätt beroende på layouten av resten av sidan. Till exempel kan du vilja visa en närbild av en persons ansikte på mobila enheter, men en bredare bild på stationära enheter. `picture`-elementet gör att du kan tillhandahålla olika versioner av bilden som är optimerade för olika layouter.

Övergripande sett är `picture`-elementet ett kraftfullt verktyg som kan hjälpa dig att optimera dina bilder för en mängd olika användningsfall och se till att de ser bra ut oavsett vilken enhet eller skärmstorlek de visas på.
