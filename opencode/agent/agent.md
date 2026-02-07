```md
# Thirumala Landing Page – Development Guide

## Project Overview
Convert the Figma design located in `/opencode/design` into a **pixel-perfect, responsive landing page** for **Thirumala Manufacturing Solutions**, an industrial engineering services company.

This document defines **design rules, technical requirements, component structure, and development standards**. Follow it strictly.

---

## Tech Stack Requirements

- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm (MANDATORY)
- **Build Tool**: Vite

---

## Design Specifications

- **Desktop Width**: 1440px (fixed reference)
- **Total Height**: ~4979px (scrollable)
- **Layout Flow**: Vertical sections
- **Section Gap**: 120px
- **Primary Brand Color**: Orange `#FF6B35`
- **Dark Background**: `#000000`
- **Light Background**: `#FFFFFF`

---

## Code Quality Standards

- Production-ready code only
- Semantic HTML5 (`section`, `header`, `footer`, `nav`, `main`)
- Strong TypeScript typing
- React functional components + hooks
- Tailwind utilities (avoid excessive arbitrary values)
- Clean component boundaries
- Meaningful naming
- No `console.log` in final code
- Comments only where business logic exists

---

## Asset Management Rules

All assets must live inside `src/assets/`

```

src/assets/
├── bg/
│   └── hero-bg.gif
├── img/
│   └── hero-img.png
├── images/
├── icons/
└── animations/

````

### Missing Asset Rule
If an asset is missing:
- Use a placeholder (gray box or generic image)
- Add a comment:
```ts
// TODO: replaceimg - [description of needed asset]
````

Always check `/opencode/design` before asking for assets.

---

## Page Structure & Sections

---

### 1. Hero Section

**Background**

* Black animated GIF
  Path: `src/assets/bg/hero-bg.gif`
* Dark gradient overlay for text readability

**Layout**

* Two-column layout

  * Left: Headline, description, CTA
  * Right: Industrial hero illustration

**Headline**

> Complete CNC Manufacturing Solutions for Industrial Engineering Needs

**CTA Button**

* Orange background
* White text
* Rounded corners
* Hover: scale + shadow

**Special Overlay**

* Hammer image overlay positioned at the very bottom of the hero
* Path: `src/assets/img/hero-img.png`
* Absolute positioned, bottom-aligned
* Must not affect hero height or layout flow

**Height**

* `100vh`

---

### 2. Services / Features Section

**Background**

* Light (`#FFFFFF`)

**Layout**

* 3-column grid (desktop)
* Stack vertically on mobile

**Card Content**

* Icon or image
* Service title
* Short description

**Hover Effects**

* Translate Y `-4px`
* Shadow increase

**Services**

* Manufacturing Capabilities
* Engineering Solutions
* Quality Assurance

---

### 3. Testimonials / Clients Section

**Background**

* Light

**Layout**

* 2–3 testimonial or client cards

**Card Structure**

* Orange quote icon
* Testimonial text
* Client name and designation
* Company logo (Tata Engineering visible in design)

**Styling**

* Rounded corners
* Subtle shadows

---

### 4. Process / Technical Details Section

**Background**

* Dark (`#000000`)

**Layout**

* Two-column structure

  * Left: Manufacturing process description
  * Right: Technical specifications / benefits

**Styling**

* White text
* Orange accent borders or dividers
* Orange CTA button

---

### 5. Comparison / FAQ Section

**Background**

* White

**Layout Options**

* Feature comparison table
  OR
* Accordion-style FAQ

**Content**

* Feature list or FAQs
* Checkmarks or icons
* Clean visual hierarchy

---

### 6. Final CTA Section

**Background**

* Light
* Card-style or bordered container

**Content**

* CTA headline
* Supporting value proposition
* Contact button or contact form

**Button**

* Orange
* Prominent placement

---

### 7. Footer

**Background**

* Dark (`#000000`)

**Layout**

* Multi-column footer

  * Company information
  * Quick links
  * Contact details
  * Social media icons (if present)

**Logo**

* Thirumala logo (white version)

**Copyright**

* Bottom aligned
* Small text

---

## Responsive Design Rules

**Desktop-first approach**

Breakpoints:

* Desktop: `≥1440px`
* Laptop: `1024–1439px`
* Tablet: `768–1023px`
* Mobile: `<768px`

Rules:

* Stack columns on mobile
* Scale typography proportionally
* Maintain image aspect ratios
* Minimum touch target height: `44px`

---

## Typography

* **Primary Font**: Inter / Poppins / modern sans-serif
* **H1**: 48–64px, bold
* **H2**: 36–48px, semibold
* **H3**: 24–32px, medium
* **Body**: 16–18px
* **Line Height**

  * Headings: 1.2
  * Body: 1.5
* WCAG AA contrast compliance required

---

## Color Palette

```css
--primary-orange: #FF6B35;
--dark-bg: #000000;
--light-bg: #FFFFFF;
--light-gray: #F8F9FA;
--text-dark: #1A1A1A;
--text-light: #FFFFFF;
--accent-gray: #6B7280;
--border-color: #E5E7EB;
```

---

## Animations & Interactions

* Smooth scroll enabled
* Button hover:

  * Scale `1.05`
  * Increased shadow
* Card hover:

  * Translate Y `-4px`
* Fade-in on scroll using Intersection Observer
* Animation duration: `200–300ms`
* Animations must remain subtle

---

## Component Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── ProcessSection.tsx
│   ├── Comparison.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionWrapper.tsx
├── assets/
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

---

## Development Checklist

* Initialize Vite + React + TypeScript using pnpm
* Install and configure Tailwind CSS
* Set up folder structure
* Build reusable UI components
* Implement all sections
* Add animations and smooth scrolling
* Responsive testing across breakpoints
* Lazy-load below-the-fold images
* Accessibility audit (ARIA, keyboard navigation)
* Pixel-perfect review against Figma

---

## Commands Reference (pnpm Only)

```bash
pnpm create vite thirumala-landing --template react-ts
pnpm install
pnpm install -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
pnpm dev
pnpm build
pnpm preview
```

---

## Final Deliverable

* Fully functional landing page
* Pixel-perfect match with Figma design
* Responsive on all screen sizes
* Clean, production-ready codebase
* Explicit TODO comments for missing assets
* This document included in the repository

```
```
