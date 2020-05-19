---
title: Stencil
order: 2
coverImage:
  src: stencil-splash.png
  alt: Stencil Splash Screen and Logo
websiteUrl: https://websdev.github.io/stencil/
meta:
  hideTitle: true
  highlightColor: rgba(60, 61, 66, 0.7)
  thumb:
    row: span 3
    column: span 3
categories:
- development
tags:
- Component Library
- React
- SCSS
images:
- src: stencil-splash.png
  alt: Stencil Splash Screen and Logo
  meta:
    usage:
    - hero
- src: stencil-buttons.png
  alt: Stencil Button Documentation
- src: stencil-colors.png
  alt: Stencil Color Palette Documentation
- src: stencil-home.png
  alt: Stencil Documentation Home Page
- src: stencil-media-cards.png
  alt: Stencil Media Cards Documentation
- src: stencil-package-cards.png
  alt: Stencil Package Cards Documentation
---
Stencil was built to serve as component library for customer facing pages within Vistaprint Digital.
Namely, it services our product pages by exposing commonly used UI assets prebaked, reusable, React components.
Stencil was built in close collaboration with the design team within Vistaprint Digital and its usage
has been widely adopted.

While building Stencil I served as UI architect and primary contributor. My experience with building component libraries
informed much of the CSS design. We follow BEM with a strong emphasis on shallow selectors.
This design is critical for scaling CSS. We encapsulated each of these UI components
into React components that can be easily imported and customized by other developers.
