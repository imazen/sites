---
title: Hur webbläsaren väljer
description: Hur webbläsaren väljer mellan bilder som listas i srcset-attributet
taskInputHash: ca195aa8819f20d7
lang: sv
ignore: '/* cSpell:locale sv,en*/'
date_published: '2023-03-24'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Hur väljer webbläsaren mellan bilder som listas i `srcset`-attributet? Här är en steg-för-steg-guide, med exempel för både bredd- och densitetsspecifikationer och hur webbläsaren väljer baserat på enhet och viewport.

- När man använder `srcset`-attributet i HTML använder webbläsaren en uppsättning regler för att välja den mest lämpliga bilden från en lista med angivna källor. Dessa regler beror på både enhetens skärminställningar (upplösning, pixeldensitet) och viewport-storlek. `Srcset`-attributet låter dig specificera olika bilder baserat på bredd (med hjälp av `w` descriptor) eller pixeldensitet (med hjälp av `x` descriptor). Låt oss gå igenom båda fallen med exempel.

1\. Breddspecifikation (`w`):

Antag att vi har följande `srcset`-attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Exempelbild">

```

Webbläsaren gör följande steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel har en standarddisplay en DPR på 1, medan en högupplösningsskärm (Retina) har en DPR på 2 eller högre.

b. Beräkna den effektiva bredden för varje bild i `srcset`. Multiplicera bredddescriptorn med DPR. För en enhet med en DPR på 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Jämför de effektiva bredderna med viewport-bredden. Antag att viewport-bredden är 420px. Webbläsaren väljer den minsta bilden med en effektiv bredd som är större än eller lika med viewport-bredden. I detta fall väljer den `example-medium.jpg`.

1\. Pixeldensitetsspecifikation (`x`):

Antag att vi har följande `srcset`-attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Exempelbild">

```

Webbläsaren gör följande steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel har en standarddisplay en DPR på 1, medan en högupplösningsskärm (Retina) har en DPR på 2 eller högre.

b. Jämför enhetens DPR med `x`-descriptorn i `srcset`. I detta fall har vi tre bilder med följande descriptorer:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Välj bilden med `x`-descriptorn som är närmast enhetens DPR. För en enhet med en DPR på 1 väljer webbläsaren `example-1x.jpg`. För en enhet med en DPR på 2 väljer den `example-2x.jpg`, och så vidare.

Det är viktigt att notera att du också kan använda `sizes`-attributet i kombination med `srcset`-attributet för att ge mer information om hur bilden visas vid olika viewport-breder. Detta är särskilt användbart när man använder bredddescriptor (`w`). Här är ett exempel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
