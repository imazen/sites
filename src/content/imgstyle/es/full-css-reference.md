---
title: Referencia completa de CSS
description: 'Referencia completa de efectos CSS, con ejemplos'
taskInputHash: 2528ffac6924c613
lang: es
---
Aquí se encuentra una referencia completa de los efectos y bordes CSS que se pueden aplicar en imágenes, junto con ejemplos para cada uno:

1. **Borde**: Agrega un borde alrededor de la imagen.

```css
img {
  border: 2px solid black;
}
```

2. **Sombra de caja**: Agrega una sombra alrededor de la imagen.

```css
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
```

3. **Opacidad**: Ajusta la transparencia de la imagen.

```css
img {
  opacity: 0.5;
}
```

4. **Escala de grises**: Convierte la imagen a escala de grises.

```css
img {
  filter: grayscale(100%);
}
```

5. **Sepia**: Aplica un efecto sepia a la imagen.

```css
img {
  filter: sepia(100%);
}
```

6. **Desenfoque**: Desenfoca la imagen.

```css
img {
  filter: blur(5px);
}
```

7. **Brillo**: Ajusta el brillo de la imagen.

```css
img {
  filter: brightness(50%);
}
```

8. **Contraste**: Ajusta el contraste de la imagen.

```css
img {
  filter: contrast(200%);
}
```

9. **Rotación de tonos**: Rota los tonos de la imagen.

```css
img {
  filter: hue-rotate(90deg);
}
```

10. **Invertir**: Invierte los colores de la imagen.

```css
img {
  filter: invert(100%);
}
```

11. **Saturación**: Ajusta la saturación de la imagen.

```css
img {
  filter: saturate(200%);
}
```

12. **Sepia**: Aplica un efecto sepia a la imagen.

```css
img {
  filter: sepia(100%);
}
```

13. **Sombra arrojada**: Agrega un efecto de sombra arrojada a la imagen.

```css
img {
  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
}
```

14. **Transición**: Agrega un efecto de transición a la imagen.

```css
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.1);
}
```

15. **Animación**: Agrega un efecto de animación a la imagen.

```css
@keyframes slidein {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
img {
  animation: slidein 1s ease;
}
```

Estos son solo algunos ejemplos de los muchos efectos y bordes CSS que se pueden aplicar a las imágenes. ¡Experimenta con diferentes estilos para crear diseños únicos y atractivos!
