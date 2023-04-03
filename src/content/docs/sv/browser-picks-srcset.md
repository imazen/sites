---
title: Hur webbläsaren väljer
description: Hur webbläsaren väljer mellan bilder som anges i srcset-attributet
taskInputHash: 8c5f60d1e3eafe9f
lang: sv
date_published: '2023-04-03'
date_modified: '2023-04-03'
date_updated: '2023-04-03'
---
Hur väljer webbläsaren mellan bilder som anges i srcset-attributet? Här är en steg-för-steg guide, med exempel för både bredd- och densitetsspecifikationer samt hur webbläsaren bestämmer baserat på enhet och vyport.

- När du använder `srcset` -attributet i HTML använder webbläsaren en uppsättning regler för att välja lämpligaste bild från en lista över tillhandahållna källor. Dessa regler beror på både enhetens visuella egenskaper (upplösning, pixeltäthet) och vyportstorleken. `Srcset` -attributet gör det möjligt att ange olika bilder baserat på bredd (med hjälp av `w` beskrivare) eller pixeltäthet (med hjälp av `x` beskrivare). Låt oss gå igenom varje fall med exempel.

1\. Breddbeskrivare (`w`):

Antag att vi har följande `srcset` -attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Exempelbild">

```

Webbläsaren kommer att följa dessa steg:

a. Avgör enhetens DPR (Device Pixel Ratio). En standarddisplay har till exempel en DPR på 1, medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Beräkna effektiv bredd för varje bild i `srcset`. Multiplicera breddbeskrivaren med DPR. För en enhet med en DPR på 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Jämför de effektiva bredderna med vyportens bredd. Anta att vyportens bredd är 420px. Webbläsaren kommer att välja den minsta bilden med en effektiv bredd större än eller lika med vyportens bredd. I detta fall kommer den att välja `example-medium.jpg`.

1\. Pixeltäthetsbeskrivare (`x`):

Antag att vi har följande `srcset` -attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Exempelbild">

```

Webbläsaren kommer att följa dessa steg:

a. Avgör enhetens DPR (Device Pixel Ratio). En standarddisplay har till exempel en DPR på 1, medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Jämför enhetens DPR med `x` beskrivare i `srcset`. I det här fallet har vi tre bilder med följande beskrivare:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Välj bilden med `x` beskrivare som är närmast enhetens DPR. För en enhet med en DPR på 1 väljer webbläsaren `example-1x.jpg`. För en enhet med en DPR på 2 väljer den `example-2x.jpg`, och så vidare.

Det är viktigt att notera att du också kan använda `sizes` -attributet i kombination med` srcset` -attributet för att tillhandahålla mer information om hur bilden visas på olika vyportbredder. Detta är särskilt användbart när man använder breddbeskrivaren (`w`). Här är ett exempel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
