---
title: Hur webbläsaren väljer
description: Hur webbläsaren väljer mellan bilder som anges i srcset-attributet.
taskInputHash: 6ccb397ac05689fe
lang: sv
---
Hur väljer webbläsaren mellan bilder som anges i `srcset`-attributet? Här är steg för steg, med exempel på både bredds- och densitetsspecifikationer och hur webbläsaren väljer baserat på enhet och vyport.

- När man använder `srcset`-attributet i HTML använder webbläsaren en uppsättning regler för att välja den mest lämpliga bilden från en lista med tillgängliga källor. Dessa regler beror på enhetens displayegenskaper (upplösning, pixeldensitet) och vyportens storlek. `Srcset`-attributet gör det möjligt att specificera olika bilder baserat på bredd (med `w`-descriptorn) eller pixeldensitet (med `x`-descriptorn). Låt oss gå igenom varje fall med exempel.

1\. Bredd descriptorn (`w`):

Antag att vi har följande `srcset`-attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Exempelbild">

```

Webbläsaren kommer att följa dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel har en standarddisplay en DPR på 1 medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Beräkna den effektiva bredden för varje bild i `srcset`. Multiplicera bredddescriptorn med DPR. För en enhet med en DPR på 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Jämför de effektiva bredderna med vyportens bredd. Antag att vyportens bredd är 420px. Webbläsaren väljer den minsta bilden med en effektiv bredd som är större än eller lika med vyportens bredd. I detta fall kommer det att välja `example-medium.jpg`.

1\. Densitet descriptorn (`x`):

Antag att vi har följande `srcset`-attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Exempelbild">

```

Webbläsaren kommer att följa dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel har en standarddisplay en DPR på 1 medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Jämför enhetens DPR med `x`-descriptorn i `srcset`. I detta fall har vi tre bilder med följande descriptorer:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Välj bilden med `x`-descriptorn som är närmast enhetens DPR. För en enhet med en DPR på 1 väljer webbläsaren `example-1x.jpg`. För en enhet med en DPR på 2, kommer den att välja `example-2x.jpg`, och så vidare.

Det är viktigt att notera att man också kan använda `sizes`-attributet i kombination med `srcset`-attributet för att tillhandahålla mer information om hur bilden kommer att visas vid olika vyportbredder. Detta är särskilt användbart när man använder bredd descriptorn (`w`). Här är ett exempel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-bredden: 480px) 100vw, (max-bredden: 960px) 50vw,

```
