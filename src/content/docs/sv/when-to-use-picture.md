---
title: När man ska använda <bilden>-elementet
description: Förklarar i vilka situationer du bör använda <bilden>-elementet
taskInputHash: 639923b41acd7168
lang: sv
---
`Bilden`-elementet används för att tillhandahålla flera versioner av en bild och avgör vilken bildversion som ska visas baserat på vissa förhållanden. Det är särskilt användbart för att optimera bilder för olika skärmstorlekar och upplösningar, och används vanligtvis i responsiv webbdesign.
Här är några specifika scenarier där du kanske vill använda `bilden`-elementet:

* **Retina-skärmar:** Skärmar med hög densitet som Apple Retina-skärmar har en högre pixel densitet, vilket innebär att bilder kan se suddiga eller pixelerade ut om de inte är optimerade för hög upplösning. Med `bilden`-elementet kan du tillhandahålla en version av bilden som har dubbelt så många pixlar som den vanliga versionen, så den ser skarp ut på Retina-skärmar.

* **Olika sidförhållanden:** Om du utformar en webbplats som behöver visa bilder med olika sidförhållanden (som landskap kontra porträtt), kan du använda `bilden`-elementet för att tillhandahålla olika versioner av bilden som är optimerade för varje sidförhållande.

* **Bandbreddsgränser:** Bilder kan vara stora filer som tar upp mycket bandbredd, särskilt på mobila enheter. Med `bilden`-elementet kan du tillhandahålla mindre versioner av bilden för enheter med mindre skärmar eller långsammare internetanslutningar, vilket kan hjälpa till att minska sidbelastningstiden.

* **Konstnärlig riktning i layouten:** Ibland kan du vilja presentera en bild på ett visst sätt beroende på layouten på resten av sidan. Till exempel kanske du vill visa en närbild av en persons ansikte på mobila enheter, men en bredare bild på stationära datorer. `Bilden`-elementet gör det möjligt att tillhandahålla olika versioner av bilden som är optimerade för olika layouter.

`Bilden`-elementet är övergripande sett ett kraftfullt verktyg som kan hjälpa dig att optimera dina bilder för en mängd olika användningsfall och se till att de ser bra ut oavsett vilken enhet eller skärmstorlek de visas på.
