---
title: Style-Forge.Base
titleTemplate: false
description: "Style-Forge.Base: foundational CSS variables, base styles, typography, colors, utilities for consistent design."

head:
  - - meta
    - name: keywords
      content: style-forge, base, CSS, variables, styles, design, web development, frontend, responsive, typography, colors, system-ui, HSL, lightweight, performance, consistent
  - - meta
    - property: og:title
      content: Style-Forge.Base
  - - meta
    - property: og:description
      content: "Style-Forge.Base: foundational CSS variables, base styles, typography, colors, utilities for consistent design."
  - - meta
    - property: og:url
      content: https://style-forge.dev/base/
  - - meta
    - name: twitter:title
      content: Style-Forge.Base
  - - meta
    - name: twitter:description
      content: "Style-Forge.Base: foundational CSS variables, base styles, typography, colors, utilities for consistent design."
---

# Style-Forge.Base

<div class="shields">

![npm](https://img.shields.io/npm/v/style-forge.base)
![npm](https://img.shields.io/npm/dm/style-forge.base)
![license](https://img.shields.io/npm/l/style-forge.base)
![build](https://github.com/Sarmaged/style-forge.base/actions/workflows/publish.yml/badge.svg)

</div>

`Style-Forge.Base` provides the foundational CSS variables and base styles for the Style Forge framework. It includes essential typography, color schemes, and utility classes, ensuring a consistent and customizable design system for your web projects.

## Installation

You can install the package via npm or yarn:

```bash
npm install style-forge.base
```

```bash
yarn add style-forge.base
```

## Usage

After installation, you can import the CSS file into your project:

```css
@import "style-forge.base";
```

Or, if you are using Webpack or another module bundler:

```js
import 'style-forge.base';
```

## Variables

`--sf-c` - these are colors in HSL

```css
:root {
  --sf-base-ff: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --sf-base-fw: 400;
  --sf-base-fz: 1rem;
  --sf-base-lh: 0.8;

  --sf-h1: 3rem;
  --sf-h2: 2.5rem;
  --sf-h3: 2rem;
  --sf-h4: 1.5rem;
  --sf-h5: 1.25rem;
  --sf-h6: 1rem;

  --sf-txt-small: 0.75rem;

  --sf-disabled: 0.4; /* opacity */

  --sf-c-link: 225 73% 57%; /* <a> - color */

  --sf-c-mark-bg: 60 100% 50%; /* <mark> - background */
  --sf-c-mark-txt: 0 0% 10%; /* <mark> - color */

  --sf-c-txt: 0 0% 10%; /* All color */
  --sf-c-bg: 0 0% 100%; /* All background */
  --sf-c-shape-bg: 0 0% 90%; /* <pre> - background */
  --sf-c-backdrop: 0 0% 10%; /* ::backdrop */
  --sf-table-c-bd: 0 0% 75%; /* Table border */
  --sf-form-c-bd: 0 0% 10%; /* All Elements Form border */
}
```
