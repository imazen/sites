---
title: CSS-Effekte und Rahmen
description: Wie man einem Bild CSS-Effekte und -Ränder hinzufügen kann.
taskInputHash: 8fc9fd8a5ada1dc6
lang: de
---
Um CSS-Effekte und -Rahmen zu einem Bild hinzuzufügen, können Sie folgende Schritte unternehmen:
1. Wählen Sie das Bild-Element in Ihrem HTML-Code aus. Dies können Sie durch Verwendung eines ID- oder Klassen-Selektors tun oder durch direkte Auswahl des `<img>`-Elements.
2. Definieren Sie einen CSS-Klassen- oder ID-Selektor, der die gewünschten Styles auf das Bild anwendet. Beispielsweise könnten Sie den folgenden Code verwenden, um einen einfachen Rahmen um das Bild zu erstellen:

```css
.mein-bild {
  border: 2px solid black;
}
```


3. Wenden Sie den CSS-Klassen- oder ID-Selektor auf das Bild-Element an. Wenn Sie beispielsweise im Schritt 2 den Selector '.mein-bild' verwendet haben, könnten Sie den folgenden Code zu Ihrem HTML hinzufügen, um die Styles auf das Bild anzuwenden:

```arduino
<img src="pfad/zum/bild.jpg" class="mein-bild">
```


4. Passen Sie die Styles nach Belieben an. Neben Rahmen können Sie eine Vielzahl von CSS-Effekten auf Bilder anwenden, wie Filter, Transparenz, Übergänge und Animationen. Hier sind einige Beispiele von CSS-Code, die zur Hinzufügen von Effekten auf Bilder verwendet werden können:

```css
/* Fügen Sie einen Schatten-Effekt hinzu */
.mein-bild {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Fügen Sie einen Grau-Effekt hinzu */
.mein-bild {
  filter: grayscale(100%);
}

/* Fügen Sie einen Zoom-Übergangseffekt on hover hinzu */
.mein-bild {
  transition: transform 0.3s ease;
}
.mein-bild:hover {
  transform: scale(1.1);
}
```


Dies sind nur wenige Beispiele von vielen CSS-Effekten und -Rahmen, die Sie zur Verbesserung Ihrer Bilder verwenden können. Experimentieren Sie mit verschiedenen Styles, um diejenigen zu finden, die am besten zu Ihrem Design passen.
