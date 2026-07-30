---
taskInputHash: bfa175834db5aadd
title: CSS-Effekte und Rahmen
description: Wie man CSS-Effekte und Rahmen zu einem Bild hinzufügt
date_published: '2026-07-30'
date_modified: '2026-07-30'
lang: de
---
Um CSS-Effekte und Rahmen zu einem Bild hinzuzufügen, können Sie die folgenden Schritte ausführen: 
1. Wählen Sie das Bild-Element in Ihrem HTML-Code aus. Dies können Sie tun, indem Sie einen ID- oder Klassenselektor verwenden oder das `<img>`-Element direkt auswählen. 
2. Definieren Sie einen CSS-Klassen- oder ID-Selektor, der die gewünschten Stile auf das Bild anwendet. Zum Beispiel könnten Sie den folgenden Code verwenden, um einen einfachen Rahmen um das Bild zu erstellen:

```css
.my-image {
  border: 2px solid black; /* Einfacher schwarzer Rahmen */
}
```

3. Wenden Sie den CSS-Klassen- oder ID-Selektor auf das Bild-Element an. Wenn Sie beispielsweise den `.my-image`-Selektor in Schritt 2 verwendet haben, könnten Sie den folgenden Code zu Ihrem HTML hinzufügen, um die Stile auf das Bild anzuwenden:

```html
<img src="path/to/image.jpg" class="my-image">
```

4. Passen Sie die Stile nach Wunsch an. Zusätzlich zu Rahmen können Sie eine Vielzahl von CSS-Effekten auf Bilder anwenden, wie Filter, Transparenz, Übergänge und Animationen. Hier sind einige Beispiele für CSS-Code, der verwendet werden kann, um Effekte zu Bildern hinzuzufügen:

```css
/* Einen Schatteneffekt hinzufügen */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Weicher Schatten */
}

/* Einen Graustufenfilter-Effekt hinzufügen */
.my-image {
  filter: grayscale(100%); /* Bild in Graustufen */
}

/* Zoom-Übergangseffekt beim Überfahren hinzufügen */
.my-image {
  transition: transform 0.3s ease; /* Sanfter Übergang */
}
.my-image:hover {
  transform: scale(1.1); /* Leichter Zoom beim Hover-Effekt */
}
```

Dies sind nur einige Beispiele für die vielen CSS-Effekte und Rahmen, die Sie verwenden können, um Ihre Bilder zu verbessern. Experimentieren Sie mit verschiedenen Stilen, um die zu finden, die am besten zu Ihrem Design passen.
