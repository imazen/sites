---
title: Brytpunkter och bilder
description: Varför vissa (men inte alla) brytpunkter är viktiga för dina bilder
taskInputHash: 67fe0daf8eb1aa7c
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
### Bakgrund

Små skärmar och stora skärmar behöver olika layouter. För att använda `srcset` och `sizes` korrekt måste vi veta vid vilken punkt layouten ändras.

Webbutvecklare måste bestämma vad som ska krympas, döljas eller flyttas på mindre skärmar - eller vanligare, vad som ska expandera, avslöjas eller läggas till på större skärmar. De har också mycket lite information att utgå ifrån. Är användaren på en surfplatta eller en telefon i landskapsläge - eller ett litet webbläsarfönster?

Vi måste välja en godtycklig viewport-bredd där layouten ändras. Detta kallas en **brytpunkt**. Det är ett godtyckligt antal CSS-pixlar ([inte enhetspixlar](/sv/pixels-not-pixels)). Polypane har en [utmärkt artikel](https://polypane.app/blog/the-breakpoints-we-tested-in-2021-and-the-ones-to-test-in-2022/#the-breakpoints-to-develop-on-in-2023) om vanligt använda brytpunkter.

Vissa bilder (som logotyper, ikoner eller knappar) kan vara immuna mot layoutförändringar som orsakas av dessa brytpunkter (och fungera bra med [srcset-tyngdpunkter](/sv/density-descriptors)).

Huvudinnehållsbilderna kommer att begränsas av storleken på deras behållare. Typiskt sett kommer huvudinnehållsområdet på en sida att begränsas till en viss bredd på de största skärmarna, en `max-bredden`. Men på små skärmar kommer huvudinnehållsområdet att fylla hela viewporten.

Om du har mer än en kolumn vid vissa brytpunkter, blir det svårare att beräkna de effektiva storleksreglerna, eftersom andelen av viewportbredden som bilden tar upp kommer att förändras.

### Den enkla metoden

Med det sagt, överanalysera inte detta. Du kommer förmodligen att vara mycket OK med följande approximation:

1. Vid vilken storlek slutar huvudkolumnen (eller bildens behållare) att växa? Upp till den viewport-bredd, kan vi använda `100vw` för bildens `sizes` attribut för att säga att bilden tar upp 100% av viewportens bredd.   
2. Vad är den maximala bredd som behållaren någonsin åstadkommer? Vi kan ställa in det som en fast `bredd` för allt annat.

Om ditt svar på 1 var 700 px och ditt svar på 2 var 800 px, kan du använda följande `sizes` attribut:

```html
<!-- Dessa är CSS-pixlar, inte enhetspixlar eller bildpixlar. -->
<img [...] sizes="(max-width: 700px) 100vw, 800px"  />
```



> Du skulle tro att webbläsaren kunde behandla alla dessa beräkningar åt oss baserat på CSS. Tyvärr är webbläsare aggressivt ivriga att välja en bild-URL *innan* stylesheets är nerladdade. Så vi måste göra beräkningarna själva, och det går dem helt rätt om vi inte får det perfekt.
