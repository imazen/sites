---
taskInputHash: 2bd7f921d1f57fb7
title: Brytpunkter och bilder
description: Varför vissa (men inte alla) brytpunkter är viktiga för dina bilder
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---
### Bakgrund

Små skärmar och stora bildskärmar behöver olika layouter. För ändamålet med `srcset` och `sizes`, behöver vi veta vid vilken punkt layouten förändras.

Webbutvecklare måste bestämma vad som ska krympas, döljas eller flyttas på mindre skärmar - eller oftare, vad som ska utökas, visas eller läggas till på större skärmar. De har också väldigt lite information att gå på. Är användaren på en surfplatta eller en telefon i liggande läge - eller ett litet webbläsarfönster?

Vi måste välja en godtycklig viewport-bredd där layouten förändras. Detta kallas en **brytpunk**. Det är ett godtyckligt antal CSS-pixlar ([inte enhetspixlar](/sv/pixels-not-pixels)). Polypane har en [bra artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) om vanligt förekommande brytpunkter.

Vissa bilder (som logotyper eller ikoner eller knappar) kanske är immuna mot de layoutförändringar som orsakas av dessa brytpunkter (och klarar sig med [srcset densitetsbeskrivningar](/sv/density-descriptors)).

Huvudinnehållsbilder kommer att vara begränsade av storleken på deras behållare. Typiskt sett är huvudinnehållsområdet på en sida begränsat till en viss bredd på de största skärmarna, en `max-width`, men på små skärmar kommer huvudinnehållsområdet att fylla hela viewporten.

Om du har mer än en kolumn vid vissa brytpunkter, kommer det att bli svårare att beräkna de effektiva storleksreglerna, eftersom procentandelen av viewport-bredden som bilden tar upp kommer att förändras.

### Den enkla metoden

Med det sagt, överdriv inte detta. Du kommer förmodligen att klara dig mycket bra med följande approximation:

1. Vid vilken storlek slutar huvudkolumnen (eller bildens behållare) att växa? Upp till den viewport-bredden kan vi använda `100vw` för bildens `sizes`-attribut för att säga att bilden tar upp 100% av viewport-bredden.  
2. Vilken är den maximala bredd som behållaren någonsin uppnår? Vi kan sätta det som en fast `width` för allt annat.

Om ditt svar på 1 var 700px och ditt svar på 2 var 800px, kan du använda följande `sizes`-attribut:

```html
<!-- Detta är CSS-pixlar, inte enhetspixlar eller bildpixlar. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```

> Man skulle kunna tro att webbläsaren skulle kunna hantera alla dessa beräkningar åt oss baserat på CSS. Tyvärr är webbläsare aggressivt ivriga att välja en bild-URL *innan* stilmallarna har hämtats. Så vi måste göra beräkningarna själva, och det gynnar dem om vi inte får det perfekt.
