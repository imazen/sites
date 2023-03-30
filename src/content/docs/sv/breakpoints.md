---
title: Breakpoints & bilder
description: Varför vissa (men inte alla) breakpoints är viktiga för dina bilder
taskInputHash: 656ef63f6a07cec4
lang: sv
---
### Bakgrund

Små skärmar och stora skärmar behöver olika layouter. För att använda `srcset` och `sizes`, behöver vi veta vid vilken punkt layouten förändras.

Webbutvecklare måste bestämma vad som ska krympas, döljas eller flyttas på mindre skärmar - eller mer vanligt, vad som ska expandera, visas eller läggas till på större skärmar. De har också mycket lite information att gå på. Är användaren på en surfplatta eller telefon i landskapsläge - eller fönster för en liten webbläsare?

Vi måste välja en godtycklig viewport-breddenhet där layouten förändras. Detta kallas en **breakpoint**. Det är ett godtyckligt antal CSS-pixlar ([inte enhetspixlar](/sv/pixels-not-pixels)). Polypane har en [stor artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) om vanligtvis använda breakpoints.

Vissa bilder (som logotyper eller ikoner eller knappar) kan vara immuna mot layoutskiften som orsakas av dessa breakpoints (och fungerar bra med [srcset density descriptors](/sv/density-descriptors)).

Huvudinnehållsbilder kommer att begränsas av storleken på deras behållare. Vanligtvis kommer huvudinnehållsytan på en sida att begränsas till en viss bredd på de största skärmarna, en `max-breddenhet`, men på små skärmar kommer huvudinnehållsytan att fylla hela viewporten.

Om du har mer än en kolumn vid vissa breakpoints kommer det att bli svårare att beräkna effektiva storleksregler, eftersom procentandelen av viewportens bredd som bilden tar upp kommer att ändras.

### Det enkla sättet

Det sagt, övertänk inte detta. Du kommer förmodligen att vara mycket OK med följande approximering:

1. Vid vilken storlek slutar huvudkolumnen (eller bildens behållare) växa? Upp till den viewport-breddenheten kan vi använda `100vw` för bildens `sizes` attribut för att säga att bilden tar upp 100% av viewportens bredd.
2. Vad är den största bredden som behållaren någonsin uppnår? Vi kan sätta det som en fast `width` för allt annat.

Om ditt svar på 1 var 700px och ditt svar på 2 var 800px, kan du använda följande `sizes` attribut:

```html
<!-- Dessa är CSS-pixlar, inte enhetspixlar eller bildpixlar. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Du skulle kunna tro att webbläsaren kan hantera alla dessa beräkningar snyggt åt oss baserat på CSS:n. Tyvärr är webbläsare aggressivt ivriga att välja en bild-URL *innan* stylesheetsen laddas ner. Så vi måste göra beräkningarna själva, och det är rätt åt dem om vi inte får det perfekt.
