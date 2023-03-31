---
title: Brytpunkter & bilder
description: Varför vissa (men inte alla) brytpunkter är viktiga för dina bilder
taskInputHash: 28770a79c61c9c7e
lang: sv
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
### Bakgrund

Små skärmar och stora skärmar behöver olika layouter. För `srcset` och `sizes` behöver vi veta vid vilken punkt layouten ändras.

Webbutvecklare måste besluta vad som ska krympas, döljas eller flyttas på mindre skärmar - eller oftare, vad som ska expandera, avslöjas eller läggas till på större skärmar. De har också väldigt lite information att gå på. Är användaren på en surfplatta, eller en telefon i liggande läge - eller en liten webbläsarfönster?

Vi måste välja en godtycklig viewport-breddenhet där layouten ändras. Detta kallas en **brytpunkt**. Det är en godtycklig siffra av CSS-pixlar ([inte enhetspixlar](/sv/pixels-not-pixels)). Polypane har en [bra artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) om vanligt använda brytpunkter.

Några bilder (som logotyper eller ikoner eller knappar) kan vara opåverkade av layoutskift som orsakas av dessa brytpunkter (och fungera bra med [srcset density descriptors](/en/density-descriptors)).

Huvudinnehållsbilder kommer att begränsas av storleken på deras behållare. Vanligtvis kommer huvudinnehållsområdet på en sida att begränsas till en viss bredd på de största skärmarna, en `max-width`, men på små skärmar kommer huvudinnehållsområdet att fylla hela viewporten.

Om du har mer än en kolumn vid vissa brytpunkter, blir det svårare att beräkna de effektiva dimensioneringsreglerna, eftersom den procentandel av viewportbredden som bilden tar upp kommer att ändras.

### Det enkla sättet

Med det sagt, överanalysera inte det här. Du kommer förmodligen att vara mycket OK med följande approximation:

1. Vid vilken storlek slutar huvudkolumnen (eller bildens behållare) att växa? Upp till den viewportbredden, kan vi använda `100vw` för bildens storleksattribut att säga att bilden tar upp 100% av viewportens bredd.
2. Vad är den maximala bredden som behållaren någonsin uppnår? Vi kan ställa in det som en fast `bredd` för allt annat.

Om ditt svar på 1 var 700px och ditt svar på 2 var 800px, kan du använda följande `sizes`-attribut:

```html
<!-- Detta är CSS-pixlar, inte enhetspixlar eller bildpixlar. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Du skulle tro att webbläsaren enkelt kan hantera alla dessa beräkningar för oss baserat på CSS:en. Tyvärr är webbläsare aggressivt angelägna om att välja en bild-URL *innan* stylesheetsen laddas ner. Så vi måste göra beräkningarna själva, och det tjänar dem rätt om vi inte får det perfekt.
