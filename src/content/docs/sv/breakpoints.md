---
taskInputHash: ea573dfae3324af2
title: Brytpunkter och bilder
description: Varför vissa (men inte alla) brytpunkter är viktiga för dina bilder
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
### Bakgrund

Små skärmar och stora bildskärmar behöver olika layouter. För syftet med `srcset` och `sizes` behöver vi veta vid vilken punkt layouten ändras.

Webbutvecklare måste bestämma vad som ska krympas, döljas eller flyttas på mindre skärmar - eller mer vanligt, vad som ska expanderas, visas eller läggas till på större skärmar. De har också väldigt lite information att gå efter. Är användaren på en surfplatta eller en telefon i liggande läge - eller ett litet webbläsarfönster?

Vi måste välja en godtycklig vyportsbredd där layouten ändras. Detta kallas en **brytpunkt**. Det är ett godtyckligt antal CSS-pixlar ([inte enhetspixlar](/sv/pixels-not-pixels)). Polypane har en [utmärkt artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) om vanligt använda brytpunkter.

Vissa bilder (som logotyper, ikoner eller knappar) kan vara immuna mot de layoutförskjutningar som orsakas av dessa brytpunkter (och klara sig med [beskrivningar av densitet](/sv/density-descriptors)).

De huvudsakliga innehållsbilderna kommer att begränsas av storleken på deras container. Vanligtvis kommer huvudområde på en sida att begränsas till en viss bredd på de största skärmarna, en `max-width`, men på små skärmar kommer huvudområdet att fylla hela vyporten.

Om du har mer än en kolumn vid vissa brytpunkter, blir det svårare att beräkna de effektiva storleksreglerna, eftersom procentandelen av vyportsbredden som bilden upptar, kommer att förändras.

### Den enkla metoden

Med det sagt, överdriv inte detta. Du kommer antagligen att klara dig mycket bra med följande approximation:

1. Vid vilken storlek slutar huvudkolumnen (eller bildens container) att växa? Upp till den vyportsbredden kan vi använda `100vw` för bildens `sizes`-attribut för att säga att bilden tar upp 100% av vyportsbredden.  
2. Vad är den maximala bredden som containern någonsin uppnår? Vi kan ställa in det som en fast `width` för allt annat.

Om ditt svar på 1 var 700px och ditt svar på 2 var 800px, kan du använda följande `sizes`-attribut:

```html
<!-- Detta är CSS-pixlar, inte enhetspixlar eller bildpixlar. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Man skulle kunna tro att webbläsaren kunde hantera alla dessa beräkningar åt oss baserat på CSS. Tyvärr är webbläsare ivrigt engagerade att välja en bild-URL *innan* stilmallarna har laddats ned. Så vi måste göra beräkningarna själva, och de förtjänar det om vi inte får det helt perfekt.
