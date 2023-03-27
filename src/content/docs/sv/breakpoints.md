---
title: Brytpunkter & bilder
description: Varför vissa (men inte alla) brytpunkter är viktiga för dina bilder
taskInputHash: 8f3cf4c303246d47
lang: sv
---
### Bakgrund

Små skärmar och stora skärmar kräver olika layouter. För att `srcset` och `sizes` ska fungera behöver vi beskriva bilder i olika storlekar.

Webbutvecklare måste bestämma vad som ska krympas, döljas eller flyttas till mindre skärmar - eller oftare, vad som ska expandera, avslöjas eller läggas till på större skärmar. De har också mycket lite information att gå på. Är användaren på en surfplatta eller en telefon i landskapsläge - eller ett litet webbläsarfönster?

Vi måste välja en godtycklig bredd där layouten ändras. Detta kallas en **brytpunkt**. Det är ett godtyckligt antal CSS-pixlar ([inte enhetspixlar](/sv/pixels-not-pixels)). Polypane har en [utmärkt artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) om vanligtvis använda brytpunkter.

Vissa bilder (som logotyper eller ikoner eller knappar) kanske inte påverkas av layoutskift som orsakas av dessa brytpunkter (och fungerar bra med [srcset density descriptors](/sv/density-descriptors)).

Huvudinnehållsbilder kommer att begränsas av storleken på deras container. Vanligtvis kommer huvudinnehållsytan på en sida att begränsas till en viss bredd på de största skärmarna, en `max-width`, men på små skärmar kommer huvudinnehållsytan att fylla hela bildskärmen.

Om du har mer än en kolumn vid vissa brytpunkter blir det svårare att beräkna de effektiva dimensioneringsreglerna, eftersom andelen av bildskärmsbredden som bilden tar upp kommer att ändras.

### Den enkla metoden

Sagt det så här, överväga inte detta för mycket. Du kommer förmodligen mycket bra överens med följande ungefärliga metod:

1. Vid vilken storlek slutar huvudkolumnen (eller bildens container) att växa? Upp till den bildskärmsbredden kan vi använda `100vw` för bildens `sizes`-attribut för att säga att bilden tar upp 100% av bildskärmsbredden.
2. Vad är den maximala bredden som containern någonsin uppnår? Vi kan ställa in det som en fast `width` för allt annat.

Om ditt svar på 1 var 700 pixlar och ditt svar på 2 var 800 pixlar kan du använda följande `sizes`-attribut:

```html
<!-- Dessa är CSS-pixlar, inte enhetspixlar eller bildpixlar. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```


> Du skulle kunna tro att webbläsaren kunde hantera alla dessa beräkningar på ett bra sätt åt oss baserat på CSS:en. Tyvärr är webbläsare aggressivt ivriga att välja en bild-URL *innan* stylesheeten har laddats ner. Så vi måste göra beräkningarna själva, och det tjänar dem rätt om vi inte får det perfekt.
