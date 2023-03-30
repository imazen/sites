---
title: CSS-Effekte und Rahmen
description: Wie man einem Bild CSS-Effekte und Rahmen hinzufügt
taskInputHash: 8fc9fd8a5ada1dc6
lang: de
---
Um CSS-Effekte und Rahmen zu einem Bild hinzuzufügen, können Sie die folgenden Schritte ausführen:
1. Wählen Sie das Bild-Element in Ihrem HTML-Code aus. Sie können dies durch Verwendung eines ID- oder Klassenselektors tun oder das `<img>` -Element direkt auswählen.
2. Definieren Sie einen CSS-Klassen- oder ID-Selektor, der die gewünschten Stile auf das Bild anwendet. Sie können beispielsweise den folgenden Code verwenden, um einen einfachen Rahmen um das Bild zu erstellen:

```css
.my-image {
  border: 2px solid black;
}
```

3. Wenden Sie den CSS-Klassen- oder ID-Selektor auf das Bildelement an. Wenn Sie beispielsweise den `.my-image` -Selektor in Schritt 2 verwendet haben, können Sie den folgenden Code zu Ihrem HTML hinzufügen, um die Stile auf das Bild anzuwenden:

```arduino
<img src="pfad/zum/bild.jpg" class="my-image">
```


4. Passen Sie die Stile nach Bedarf an. Neben Rahmen können Sie eine breite Palette von CSS-Effekten auf Bilder anwenden, wie Filter, Opazität, Übergänge und Animationen. Hier sind einige Beispiele für CSS-Code, der verwendet werden kann, um Effekte auf Bilder anzuwenden:

```css
/* Fügen Sie einen Schatteneffekt hinzu */
.my-image {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Fügen Sie einen Graustufenfiltereffekt hinzu */
.my-image {
  filter: grayscale(100%);
}

/* Fügen Sie auf Hover-Ereignis einen Zoom-Übergangseffekt hinzu */
.my-image {
  transition: transform 0.3s ease;
}
.my-image:hover {
  transform: scale(1.1);
}
```


Dies sind nur einige Beispiele für die vielen CSS-Effekte und Rahmen, die Sie verwenden können, um Ihre Bilder zu verbessern. Experimentieren Sie mit verschiedenen Stilen, um diejenigen zu finden, die für Ihr Design am besten geeignet sind.
