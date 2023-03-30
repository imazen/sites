---
title: Hur webbläsaren väljer
description: Hur webbläsaren väljer mellan bilder som anges i srcset-attributet
taskInputHash: 3fd2b41750391cb2
lang: sv
---
Hur väljer webbläsaren mellan bilder som anges i srcset-attributet? Här är en steg-för-steg-beskrivning, med exempel för både bredd- och densitetsspecifikationer samt hur webbläsaren väljer baserat på enhet och vyport.

- När man använder `srcset` -attributet i HTML används en uppsättning regler av webbläsaren för att välja den mest lämpliga bilden från en lista med tillhandahållna källor. Dessa regler beror på både enhetens displayegenskaper (upplösning, pixeltäthet) och vyport storlek. `Srcset` -attributet gör det möjligt att ange olika bilder baserat på bredd (med `w` -descriptor) eller pixeltäthet (med `x` -descriptor). Låt oss gå igenom varje fall med exempel.

1. Bredd-descriptor (`w`): 

Anta att vi har följande `srcset` -attribut:
```html
<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Exempelbild">
```

Webbläsaren följer dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel har en vanlig display ett DPR på 1, medan en högupplöst (Retina) display har ett DPR på 2 eller högre.

b. Beräkna den effektiva bredden för varje bild i `srcset`. Multiplicera bredd-descriptorn med DPR. För en enhet med en DPR på 1:

- example-small.jpg: 400 \* 1 = 400px

- example-medium.jpg: 800 \* 1 = 800px

- example-large.jpg: 1600 \* 1 = 1600px

c. Jämför de effektiva bredderna med vyportbredden. Antag att vyportbredden är 420px. Webbläsaren väljer den minsta bilden med en effektiv bredd större än eller lika med vyportbredden. I detta fall väljer den `example-medium.jpg`.

2. Pixel densitetsdescriptor (`x`): 

Anta att vi har följande `srcset` -attribut:

```html
<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Exempelbild">
```

Webbläsaren följer dessa steg:

a. Bestäm enhetens DPR (Device Pixel Ratio). Till exempel har en vanlig display ett DPR på 1, medan en högupplöst (Retina) display har ett DPR på 2 eller högre.

b. Jämför enhetens DPR med `x`-descriptorerna i `srcset`. I detta fall har vi tre bilder med följande descriptorer:

- example-1x.jpg: 1x

- example-2x.jpg: 2x

- example-3x.jpg: 3x

c. Välj bilden med `x`-descriptor som är närmast enhetens DPR. För en enhet med en DPR på 1 väljer webbläsaren `example-1x.jpg`. För en enhet med en DPR på 2 väljer den `example-2x.jpg` och så vidare.

Det är viktigt att notera att man även kan använda `sizes` -attributet i kombination med `srcset`-attributet för att ange mer information om hur bilden visas vid olika vyportbredder. Detta är särskilt användbart vid användning av bredd-descriptorn (`w`). Här är ett exempel:

```html
<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,
```
