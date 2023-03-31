---
title: Wann man das <picture>-Element verwenden sollte
description: 'Erklärt, in welchen Situationen das <picture>-Element verwendet werden sollte.'
taskInputHash: 0d098655c456a3e4
lang: de
ignore: '/* cSpell:locale de,en*/'
date_published: '2023-03-27'
date_modified: '2023-03-31'
date_updated: '2023-03-31'
---
Das `picture`-Element wird verwendet, um mehrere Versionen eines Bildes bereitzustellen und anhand bestimmter Bedingungen zu entscheiden, welche Version des Bildes angezeigt werden soll. Es ist besonders nützlich, um Bilder für verschiedene Bildschirmgrößen und Auflösungen zu optimieren und wird häufig in responsivem Webdesign verwendet.

Hier sind einige konkrete Szenarien, in denen Sie das `picture`-Element verwenden möchten:

* **Retina-Displays:** Hochauflösende Bildschirme wie Apples Retina-Displays haben eine höhere Pixeldichte, was bedeutet, dass Bilder unscharf oder pixelig aussehen können, wenn sie nicht für hohe Auflösungen optimiert sind. Mit dem `picture`-Element können Sie eine Version des Bildes zur Verfügung stellen, die doppelt so viele Pixel wie die normale Version hat, sodass es auf Retina-Displays scharf und klar aussieht.

* **Unterschiedliche Bildverhältnisse:** Wenn Sie eine Website gestalten, die Bilder mit unterschiedlichen Seitenverhältnissen anzeigen muss (z.B. Quer- vs. Hochformat), können Sie das `picture`-Element verwenden, um verschiedene Versionen des Bildes bereitzustellen, die für jedes Seitenverhältnis optimiert sind.

* **Bandbreitenbeschränkungen:** Bilder können große Dateien sein, die viel Bandbreite benötigen, insbesondere auf mobilen Geräten. Mit dem `picture`-Element können Sie kleinere Versionen des Bildes für Geräte mit kleineren Bildschirmen oder langsameren Internetverbindungen bereitstellen, um die Ladezeiten der Website zu reduzieren.

* **Art-directed Layouts:** Manchmal möchten Sie ein Bild auf bestimmte Weise präsentieren, abhängig vom Layout des Rests der Seite. Beispielsweise möchten Sie auf mobilen Geräten eine Nahaufnahme des Gesichts einer Person zeigen, auf Desktop-Geräten jedoch eine breitere Ansicht. Das `picture`-Element ermöglicht es Ihnen, verschiedene Versionen des Bildes bereitzustellen, die für unterschiedliche Layouts optimiert sind.

Insgesamt ist das `picture`-Element ein leistungsstarkes Werkzeug, mit dem Sie Ihre Bilder für eine Vielzahl von Anwendungsfällen optimieren und sicherstellen können, dass sie unabhängig vom Gerät oder der Bildschirmgröße großartig aussehen.
