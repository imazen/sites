---
title: Wie der Browser auswählt
description: Wie der Browser zwischen Bildern im "srcset"-Attribut auswählt
taskInputHash: 21fa78dd27583003
lang: de
date_published: "2023-03-31T15:01:44-06:00"
date_updated: "2023-03-31T15:01:44-06:00"
---
Wie wählt der Browser zwischen Bildern, die im "srcset"-Attribut aufgeführt sind? Hier ist eine Schritt-für-Schritt-Anleitung mit Beispielen sowohl für Breiten- als auch Dichteangaben und wie der Browser anhand des Geräts und des Viewports entscheidet.

- Beim Verwenden des "srcset"-Attributs in HTML verwendet der Browser eine Reihe von Regeln, um das am besten geeignete Bild aus einer Liste bereitgestellter Quellen auszuwählen. Diese Regeln hängen sowohl von den Anzeigeeigenschaften des Geräts (Auflösung, Pixeldichte) als auch von der Größe des Viewports ab. Das "srcset"-Attribut ermöglicht es Ihnen, unterschiedliche Bilder auf der Grundlage von Breite (mit dem "w"-Deskriptor) oder Pixeldichte (mithilfe des "x"-Deskriptors) zu spezifizieren. Lassen Sie uns in beiden Fällen mit Beispielen durchgehen.

1\. Breitendeskriptor ("w"):

Angenommen, wir haben folgendes "srcset"-Attribut:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" alt="Beispielbild">

```

Der Browser wird folgende Schritte ausführen:

a. Bestimmen Sie die DPR (Device Pixel Ratio) des Geräts. Ein Standarddisplay hat beispielsweise eine DPR von 1, während ein hochauflösendes (Retina-)Display eine DPR von 2 oder höher hat.

b. Berechnen Sie die effektive Breite für jedes Bild im "srcset". Multiplizieren Sie den Breitendeskriptor mit dem DPR. Für ein Gerät mit einer DPR von 1:

- Beispiel-small.jpg: 400 \* 1 = 400px

- Beispiel-medium.jpg: 800 \* 1 = 800px

- Beispiel-large.jpg: 1600 \* 1 = 1600px

c. Vergleichen Sie die effektiven Breiten mit der Viewport-Breite. Angenommen, die Viewport-Breite beträgt 420px. Der Browser wählt das kleinste Bild mit einer effektiven Breite aus, die größer oder gleich der Viewport-Breite ist. In diesem Fall wird "example-medium.jpg" ausgewählt.

1\. Pixeldichtedeskriptor ("x"):

Angenommen, wir haben folgendes "srcset"-Attribut:

```html

<img src="example-1x.jpg" srcset="example-1x.jpg 1x, example-2x.jpg 2x, example-3x.jpg 3x" alt="Beispielbild">

```

Der Browser wird folgende Schritte ausführen:

a. Bestimmen Sie die DPR (Device Pixel Ratio) des Geräts. Ein Standarddisplay hat beispielsweise eine DPR von 1, während ein hochauflösendes (Retina-)Display eine DPR von 2 oder höher hat.

b. Vergleichen Sie die DPR des Geräts mit den "x"-Deskriptoren im "srcset". In diesem Fall haben wir drei Bilder mit den folgenden Deskriptoren:

- Beispiel-1x.jpg: 1x

- Beispiel-2x.jpg: 2x

- Beispiel-3x.jpg: 3x

c. Wählen Sie das Bild mit dem "x"-Deskriptor, der dem DPR des Geräts am nächsten kommt. Für ein Gerät mit einer DPR von 1 wählt der Browser "example-1x.jpg" aus. Für ein Gerät mit einer DPR von 2 wählt er "example-2x.jpg" aus und so weiter.

Es ist wichtig zu beachten, dass Sie auch das "sizes"-Attribut in Kombination mit dem "srcset"-Attribut verwenden können, um weitere Informationen darüber bereitzustellen, wie das Bild bei verschiedenen Viewport-Breiten angezeigt wird. Dies ist besonders nützlich, wenn Sie den Breitendeskriptor ("w") verwenden. Hier ist ein Beispiel:

```html

<img src="example-small.jpg" srcset="example-small.jpg 400w, example-medium.jpg 800w, example-large.jpg 1600w" sizes="(max-width: 480px) 100vw, (max-width: 960px) 50vw,
