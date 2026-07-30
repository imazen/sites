---
title: 'Image Best Practices for 2024'
description: 'Current best practices for responsive images, performance, and loading strategies'
date_published: '2024-02-07'
date_modified: '2024-02-07'
---

**TL;DR: Use `loading="lazy"`, `decoding="async"`, specify dimensions to prevent layout shift, use `srcset` with multiple sizes, and serve WebP with JPEG fallback. That's 90% of what matters in 2024.**

```html
<img
  src="image.jpg" 
  srcset="image.webp?w=400 400w,
          image.webp?w=800 800w,
          image.webp?w=1200 1200w"
  sizes="(max-width: 768px) 100vw, 800px"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
  alt="Descriptive alt text"
/>
```

### Core Best Practices for 2024

1. **Prevent Layout Shift**
   - Always specify `width` and `height` attributes
   - Use `aspect-ratio` in CSS when dimensions are dynamic
   - Consider using `object-fit: cover` for variable-size containers

2. **Optimize Loading**
   - Use `loading="lazy"` for images below the fold (94%+ browser support)
   - Add `decoding="async"` to help browser prioritization
   - Preload critical images with `<link rel="preload">`
   - Consider LQIP (Low Quality Image Placeholders) for hero images

3. **Responsive Images**
   - Use `srcset` with width descriptors for responsive images
   - Provide at least 3-4 size variants (e.g., 400w, 800w, 1200w, 1600w)
   - Use the `sizes` attribute to help browsers choose correctly
   - Consider `picture` element for art direction needs

4. **Modern Formats**
   - Serve WebP by default (95%+ browser support in 2024)
   - Use AVIF for quality-critical images (77%+ support)
   - Maintain JPEG fallbacks for legacy support
   - Consider JXL for specialized use cases (limited support)

### Practical Implementation Examples

**Basic Responsive Image**
```html
<img
  src="https://i.zr.io/ri/i/glacier.jpg?w=800"
  srcset="https://i.zr.io/ri/i/glacier.jpg?w=400 400w,
          https://i.zr.io/ri/i/glacier.jpg?w=800 800w,
          https://i.zr.io/ri/i/glacier.jpg?w=1200 1200w"
  sizes="(max-width: 768px) 100vw, 800px"
  loading="lazy"
  decoding="async"
  width="800"
  height="1200"
  alt="Glacier landscape"
/>
```

**Format-Aware Picture Element**
```html
<picture>
  <source
    type="image/avif"
    srcset="image.avif?w=400 400w,
            image.avif?w=800 800w,
            image.avif?w=1200 1200w"
    sizes="(max-width: 768px) 100vw, 800px"
  />
  <source
    type="image/webp"
    srcset="image.webp?w=400 400w,
            image.webp?w=800 800w,
            image.webp?w=1200 1200w"
    sizes="(max-width: 768px) 100vw, 800px"
  />
  <img
    src="image.jpg?w=800"
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
    alt="Description"
  />
</picture>
```

### Performance Optimization

1. **Critical Images**
   ```html
   <link
     rel="preload"
     as="image"
     href="hero.webp"
     imagesrcset="hero.webp?w=400 400w, hero.webp?w=800 800w"
     imagesizes="100vw"
   />
   ```

2. **Lazy Loading with LQIP**
   ```html
   <div class="image-wrapper" style="background-image: url('tiny-blur.jpg');">
     <img
       src="full-image.jpg?w=1200"
       loading="lazy"
       class="fade-in"
       onload="this.classList.add('loaded')"
     />
   </div>
   ```

   ```css
   .image-wrapper {
     background-size: cover;
     background-position: center;
   }
   .fade-in {
     opacity: 0;
     transition: opacity 0.3s;
   }
   .fade-in.loaded {
     opacity: 1;
   }
   ```

### Common Patterns and Solutions

1. **Fixed-Size Container with Variable Image**
   ```css
   .image-container {
     aspect-ratio: 16/9;
     width: 100%;
   }
   
   .image-container img {
     width: 100%;
     height: 100%;
     object-fit: cover;
   }
   ```

2. **Responsive Gallery Images**
   ```css
   .gallery {
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
     gap: 1rem;
   }
   
   .gallery img {
     width: 100%;
     height: 100%;
     object-fit: cover;
     aspect-ratio: 1;
   }
   ```

### Browser Support Considerations (2024)

- `loading="lazy"`: 94%+ global support
- `decoding="async"`: 95%+ global support
- WebP: 95%+ global support
- AVIF: 77%+ global support
- `aspect-ratio`: 95%+ global support
- `object-fit`: 98%+ global support

### Performance Testing

1. Use Lighthouse in Chrome DevTools
2. Monitor Core Web Vitals in Search Console
3. Test Largest Contentful Paint (LCP) for hero images
4. Check Cumulative Layout Shift (CLS) scores
5. Verify lazy loading behavior with Performance tab

### Common Mistakes to Avoid

1. Don't skip `width` and `height` attributes
2. Don't lazy-load above-the-fold images
3. Don't serve oversized images to mobile devices
4. Don't forget to compress and optimize images
5. Don't ignore `alt` text for accessibility
6. Don't rely on client-side resizing
7. Don't use JPEG for images with text or sharp edges

### Conclusion

Focus on the fundamentals: prevent layout shift, optimize loading, use responsive images, and serve modern formats. The basics (proper dimensions, lazy loading, and srcset) will get you 90% of the way there. Test thoroughly across devices and monitor performance metrics to ensure your implementation works as intended.
