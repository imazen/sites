---
taskInputHash: e84f5e6c2580cb50
title: Hur webbläsaren väljer
description: Hur webbläsaren väljer mellan bilder angivna i `srcset`-attributet
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: sv
---
Hur väljer webbläsaren mellan bilder angivna i `srcset`-attributet? Här är en steg-för-steg-guide, med exempel för både bredd- och densitetsspecifikationer och hur webbläsaren bestämmer sig baserat på enhet och viewport.

- När man använder `srcset`-attributet i HTML använder webbläsaren ett antal regler för att välja den mest lämpliga bilden från en lista av angivna källor. Dessa regler beror både på enhetens bildskärmskarakteristik (upplösning, pixeltäthet) och viewportens storlek. `Srcset`-attributet gör det möjligt att specificera olika bilder baserat på bredd (med `w`-deskriptor) eller pixeltäthet (med `x`-deskriptor). Låt oss gå igenom varje fall med exempel.

1\. Bredd-deskriptor (`w`):

Anta att vi har följande `srcset`-attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Example Image">

```

Webbläsaren följer dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel, en standarddisplay har en DPR på 1, medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Beräkna den effektiva bredden för varje bild i `srcset`. Multiplicera bredd-deskriptor med DPR. För en enhet med DPR på 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Jämför de effektiva bredderna med viewport-bredden. Anta att viewport-bredden är 420px. Webbläsaren väljer den minsta bilden med en effektiv bredd som är större än eller lika med viewport-bredden. I detta fall kommer den att välja `example-medium.jpg`.

1\. Pixeltäthet-deskriptor (`x`):

Anta att vi har följande `srcset`-attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Example Image">

```

Webbläsaren följer dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel, en standarddisplay har en DPR på 1, medan en högupplöst (Retina) display har en DPR på 2 eller högre.

b. Jämför enhetens DPR med `x`-deskriptorn i `srcset`. I detta fall har vi tre bilder med följande deskriptorer:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Välj bilden med `x`-deskriptorn som är närmast enhetens DPR. För en enhet med DPR på 1, kommer webbläsaren att välja `example-1x.jpg`. För en enhet med DPR på 2, kommer den att välja `example-2x.jpg`, och så vidare.

Det är viktigt att notera att du också kan använda `sizes`-attributet i kombination med `srcset`-attributet för att ge mer information om hur bilden kommer att visas vid olika viewport-bredder. Detta är särskilt användbart när du använder bredd-deskriptorn (`w`). Här är ett exempel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,

```
