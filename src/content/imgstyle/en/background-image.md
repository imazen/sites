---
title: Modern Background Image CSS
description: Modern solutions for responsive background images in 2024
date_published: '2024-02-07'
date_modified: '2024-02-07'
---

Need a responsive hero image that works everywhere?

```css
.hero {
  aspect-ratio: 21/9;
  background-image: image-set(
    url("https://i.zr.io/ri/i/sahara.jpg?w=1200") 1x,
    url("https://i.zr.io/ri/i/sahara.jpg?w=2400") 2x
  );
  background-position: center;
  background-size: cover;
}
```

That's the baseline. Need more? Here are your common scenarios:

### Different Images for Mobile/Desktop
```css
.hero {
  aspect-ratio: 1/1;
  background-image: url("https://i.zr.io/ri/i/woman.jpg?w=800&mode=crop&width=1&height=1");
}

@media (min-width: 768px) {
  .hero {
    aspect-ratio: 21/9;
    background-image: url("https://i.zr.io/ri/i/sahara.jpg?w=1200");
  }
}
```

### Overlay Text on Image
```css
.hero {
  aspect-ratio: 21/9;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://i.zr.io/ri/i/sahara.jpg?w=1200");
  background-size: cover;
  color: white;
  display: grid;
  place-items: center;
}
```

### Full-Screen Background
```css
.fullscreen-bg {
  background-image: url("https://i.zr.io/ri/i/santorini.jpg?w=1200");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
}
```

## Modern Features You Should Know

### image-set() for Resolution Switching
```css
.hero {
  /* Fallback for older browsers */
  background-image: url("https://i.zr.io/ri/i/sahara.jpg?w=1200");
  /* Modern browsers */
  background-image: image-set(
    url("https://i.zr.io/ri/i/sahara.jpg?w=1200") 1x,
    url("https://i.zr.io/ri/i/sahara.jpg?w=2400") 2x
  );
}
```

### aspect-ratio for Stable Loading
```css
.hero {
  aspect-ratio: 21/9;
  background-image: url("https://i.zr.io/ri/i/sahara.jpg?w=1200");
  background-size: cover;
}
```

### Container Queries for Component-Based Design
```css
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-bg {
    background-image: url("https://i.zr.io/ri/i/pearl-tower.jpg?w=800");
  }
}
```

## Performance Tips

1. **Size Appropriately**: Match image dimensions to container size
   ```css
   /* For a 800px wide container */
   .hero {
     background-image: url("https://i.zr.io/ri/i/sahara.jpg?w=800");
   }
   ```

2. **Use WebP with Fallback**
   ```css
   .hero {
     background-image: url("https://i.zr.io/ri/i/sahara.jpg?w=1200&format=webp");
   }
   ```

3. **Lazy Load with Intersection Observer**
   ```javascript
   const lazyBackgrounds = document.querySelectorAll('.lazy-background');
   
   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.style.backgroundImage = entry.target.dataset.background;
         observer.unobserve(entry.target);
       }
     });
   });
   
   lazyBackgrounds.forEach(bg => observer.observe(bg));
   ```

   ```css
   .lazy-background {
     background-image: none;
     background-color: #f0f0f0; /* Placeholder color */
   }
   ```

## Common Patterns

### Parallax Effect (No JavaScript)
```css
.parallax {
  background-image: url("https://i.zr.io/ri/i/glacier.jpg?w=1200");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
}
```

### Ken Burns Effect
```css
.ken-burns {
  background-image: url("https://i.zr.io/ri/i/komodo-island.jpg?w=1200");
  background-size: cover;
  animation: kenburns 20s infinite;
}

@keyframes kenburns {
  0% {
    background-size: 100%;
  }
  50% {
    background-size: 120%;
  }
  100% {
    background-size: 100%;
  }
}
```

### Gradient Overlay Text Protection
```css
.text-protection {
  background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 0, 0, 0.7)
    ),
    url("https://i.zr.io/ri/i/lake-town.jpg?w=1200");
  background-size: cover;
  color: white;
}
```

## Browser Support (2024)

- `image-set()`: 95%+ global support
- `aspect-ratio`: 95%+ global support
- Container queries: 89%+ global support
- `background-size: cover`: 98%+ global support

For broader compatibility, always provide a basic background-image fallback before any modern syntax.

Remember: background images are decorative. If the image contains meaningful content, use an `<img>` tag instead for better accessibility and SEO.
