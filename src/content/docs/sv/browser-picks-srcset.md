---
taskInputHash: 44602845c231b598
title: Hur webbläsaren väljer
description: Hur webbläsaren väljer mellan bilder som anges i srcset-attributet
date_published: '2025-02-07'
date_modified: '2025-02-07'
lang: sv
---
Hur väljer webbläsaren mellan bilder som anges i `srcset`-attributet? Här är en steg-för-steg guide, med exempel för både bredd- och täthetspecifikationer, och hur webbläsaren bestämmer baserat på enheten och viewporten.

- När man använder `srcset`-attributet i HTML, använder webbläsaren en uppsättning regler för att välja den mest lämpliga bilden från en lista med källor. Dessa regler beror på både enhetens visningsegenskaper (upplösning, pixeltäthet) och viewportens storlek. `Srcset`-attributet låter dig specificera olika bilder baserat på bredd (med `w`-deskriptor) eller pixeltäthet (med `x`-deskriptor). Låt oss gå igenom varje fall med exempel.

1\. Breddeskriptor (`w`):

Anta att vi har följande `srcset`-attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Exempelbild">

```

Webbläsaren följer dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel, en standarddisplay har en DPR på 1, medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Beräkna den effektiva bredden för varje bild i `srcset`. Multiplicera bredddesköpriptorn med DPR. För en enhet med en DPR på 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Jämför de effektiva bredderna med viewportens bredd. Anta att viewportens bredd är 420px. Webbläsaren väljer den minsta bilden med en effektiv bredd som är större än eller lika med viewportens bredd. I det här fallet kommer den att välja `example-medium.jpg`.

1\. Pixeltäthetseskriptor (`x`):

Anta att vi har följande `srcset`-attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Exempelbild">

```

Webbläsaren följer dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel, en standarddisplay har en DPR på 1, medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Jämför enhetens DPR med `x`-deskriptorerna i `srcset`. I det här fallet har vi tre bilder med följande deskriptorer:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Välj den bild med `x`-deskriptor som är närmast enhetens DPR. För en enhet med en DPR på 1 kommer webbläsaren att välja `example-1x.jpg`. För en enhet med en DPR på 2, kommer den att välja `example-2x.jpg`, och så vidare.

Det är viktigt att notera att du också kan använda `sizes`-attributet i kombination med `srcset`-attributet för att ge mer information om hur bilden kommer att visas vid olika viewportbredder. Detta är särskilt användbart när du använder bredddeskriptor (`w`). Här är ett exempel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
