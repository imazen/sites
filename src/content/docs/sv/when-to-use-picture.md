---
title: När man ska använda <picture>-elementet
description: Förklarar i vilka situationer du bör använda <picture>-elementet
taskInputHash: 639923b41acd7168
lang: sv
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
`Picture`-elementet används för att tillhandahålla flera versioner av en bild och bestämmer vilken version av bilden som ska visas baserat på vissa villkor. Det är särskilt användbart för att optimera bilder för olika skärmstorlekar och upplösningar och används vanligtvis i responsiv webbdesign.

Här är några specifika scenarier där du kanske vill använda `picture`-elementet:

* **Retina-skärmar:** Skärmar med hög densitet som Apples Retina-skärmar har högre pixel densitet, vilket betyder att bilder kan se suddiga eller pixelerade ut om de inte är optimerade för hög upplösning. Med `picture`-elementet kan du tillhandahålla en version av bilden som har dubbelt så många pixlar som normalversionen, så den ser skarp och tydlig ut på Retina-skärmar.

* **Olika bildförhållanden:** Om du designar en webbplats som behöver visa bilder med olika bildförhållanden (som landskaps- vs porträttläge) kan du använda `picture`-elementet för att tillhandahålla olika versioner av bilden som är optimerade för varje bildförhållande.

* **Bandbreddsgränser:** Bilder kan vara stora filer som tar upp mycket bandbredd, särskilt på mobila enheter. Med `picture`-elementet kan du tillhandahålla mindre versioner av bilden för enheter med mindre skärmar eller långsammare internetanslutningar, vilket kan hjälpa till att minska sidbelastningstiderna.

* **Art-directade layouter:** Ibland kan du vilja presentera en bild på ett visst sätt beroende på layouten på resten av sidan. Till exempel kan du vilja visa en närbild av en persons ansikte på mobila enheter, men en bredare bild på skrivbordsdatorer. `Picture`-elementet gör det möjligt att tillhandahålla olika versioner av bilden som är optimerade för olika layouter.

Övergripande sett är `picture`-elementet ett kraftfullt verktyg som kan hjälpa dig att optimera dina bilder för en rad olika användningsfall och se till att de ser bra ut oavsett vilken enhet eller skärmstorlek de visas på.
