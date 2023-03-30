---
title: Hur webbläsaren väljer
description: Hur webbläsaren väljer mellan bilder som listas i srcset-attributet
taskInputHash: 3fd2b41750391cb2
lang: sv
---
Hur väljer webbläsaren mellan bilder listade i `srcset`-attributet? Här är en steg-för-steg-beskrivning, med exempel för både bredd- och densitetsspecifikationer och hur webbläsaren väljer baserat på enhet och viewport storlek.

- När man använder `srcset`-attributet i HTML, använder webbläsaren en uppsättning regler för att välja den mest lämpliga bilden från en lista med angivna källor. Dessa regler beror på både enhetens displayegenskaper (upplösning, pixeldensitet) och viewport-storleken. `Srcset`-attributet låter dig specificera olika bilder baserat på bredd (genom att använda `w`-deskriptorn) eller pixeldensitet (genom att använda `x`-deskriptorn). Låt oss gå igenom varje fall med exempel.

1. Bredd-deskriptor (`w`):

Antag att vi har följande `srcset`-attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

Webbläsaren följer dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel har en standarddisplay en DPR på 1, medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Beräkna den effektiva bredden för varje bild i källorna. Multiplera bredd-deskriptorn med DPR. För en enhet med en DPR på 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Jämför de effektiva bredderna med viewportens bredd. Antag att viewport-bredd är 420px. Webbläsaren väljer den minsta bilden med en effektiv bredd större än eller lika med viewportens bredd. I detta fall väljer den `example-medium.jpg`.

2. Pixeldensitetsdeskriptor (`x`):

Antag att vi har följande `srcset`-attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

Webbläsaren följer dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel har en standarddisplay en DPR på 1, medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Jämför enhetens DPR med `x`-deskriptorerna i `srcset`. I detta fall har vi tre bilder med följande deskriptorer:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Välj bilden med `x`-deskriptorn som är närmast enhetens DPR. För en enhet med en DPR på 1 väljer webbläsaren `example-1x.jpg`. För en enhet med en DPR på 2 väljer den `example-2x.jpg`, och så vidare.

Det är viktigt att notera att du också kan använda `sizes`-attributet i kombination med `srcset`-attributet för att ge mer information om hur bilden visas vid olika viewportbredder. Detta är särskilt användbart när du använder bredd-deskriptorn (`w`). Här är ett exempel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
