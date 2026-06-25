---
name: Precision Detail
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434656'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#3f4f65'
  on-tertiary: '#ffffff'
  tertiary-container: '#57677e'
  on-tertiary-container: '#d6e6ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  mono-technical:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 32px
  gutter: 24px
  section-gap: 64px
  sidebar-width: 260px
---

## Brand & Style

The design system is engineered for a premium car wash management ecosystem, targeting high-end service providers and discerning customers. The aesthetic sits at the intersection of **Precision SaaS** and **Luxury Service**, drawing heavy inspiration from the functional clarity of Linear and the refined polish of Stripe.

The visual language is rooted in **Modern Minimalism** with a focus on "high-definition" UI—where every pixel, border-radius, and micro-interaction feels intentional. The brand personality is professional, efficient, and technologically advanced, evoking the same sense of quality and trust that a customer expects when handing over the keys to a luxury vehicle.

Key characteristics include:
- **Utilitarian Elegance:** Every element serves a function, but is executed with premium styling.
- **Atmospheric Depth:** Using subtle gradients and layered shadows rather than heavy color blocks.
- **Expert Reliability:** A technical look that reassures business owners of the platform's power.

## Colors

The palette is anchored by a vibrant "Electric Blue" primary color, symbolizing precision and technology. This is balanced by a deep Slate secondary for text and structural elements, creating high-contrast readability.

- **Primary (#0052FF):** Used for primary actions, progress indicators, and active states.
- **Backgrounds:** The primary interface uses a pure white (`#FFFFFF`) for maximum clarity, while secondary panels and sidebar navigation use the neutral tint (`#F8FAFC`) to create subtle architectural separation.
- **Semantic Accents:** 
    - Success: Emerald 600 for completed washes.
    - Warning: Amber 500 for scheduling conflicts.
    - Border: A light, cool gray (`#E2E8F0`) is used for all hairline strokes to maintain the minimalist feel.

## Typography

This design system utilizes **Inter** for its incredible legibility and "tech-native" feel. To introduce a layer of precision, **Geist** is used for small labels and technical metadata, providing a sharp, monospaced-adjacent look for timestamps and pricing units.

Headlines should use tight letter-spacing and heavy weights to create a sense of authority. Body text is prioritized for legibility with generous line heights. For mobile, display and large headline sizes scale down to prevent text wrapping issues while maintaining the bold visual hierarchy.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid hybrid grid**:
- **Admin Dashboards:** Utilize a fixed-width sidebar (260px) with a fluid content area. Content is organized in a 12-column grid.
- **Customer Booking Flow:** A centered, fixed-width column (max-width 680px) to focus attention on the scheduling task.

The spacing rhythm is based on a **4px base unit**. All internal margins and paddings must be multiples of 8px (8, 16, 24, 32, 48, 64). Large gaps between sections (64px+) are encouraged to maintain the premium, breathable feel of a luxury brand.

**Breakpoints:**
- **Desktop:** 1200px+ (12 columns, 32px margins)
- **Tablet:** 768px - 1199px (8 columns, 24px margins)
- **Mobile:** < 767px (4 columns, 16px margins, vertical stack for all cards)

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **High-Fidelity Shadows**. We avoid heavy skeuomorphism in favor of subtle tactile cues:

- **Level 0 (Base):** `#FFFFFF` or `#F8FAFC`. Used for the canvas.
- **Level 1 (Cards):** White surface with a 1px solid border (`#E2E8F0`). A very soft shadow (Y: 1px, Blur: 3px, Opacity: 0.05) is used to differentiate from the background.
- **Level 2 (Modals/Dropdowns):** White surface with a more pronounced, diffused shadow (Y: 10px, Blur: 20px, Opacity: 0.1) and a subtle 1px inner stroke.
- **Interactive Depth:** Buttons utilize a subtle top-light inner shadow (0.5px white) to simulate a slightly raised "pressable" surface, common in modern SaaS tools.

## Shapes

The design system uses a **Rounded** shape language to balance the technical nature of the platform with an approachable, clean feel. 

- **Standard Elements (Buttons, Inputs, Small Cards):** `0.5rem` (8px).
- **Large Containers (Dashboards, Service Cards):** `1rem` (16px).
- **Specialty Elements (Chips, Status Tags):** Full pill-shape (`999px`).

Borders are strictly 1px wide. Avoid using 2px borders as they detract from the "precision" aesthetic.

## Components

### Buttons
- **Primary:** Solid `#0052FF`, white text. Subtle gradient overlay (top to bottom: 5% white to 0%) for depth.
- **Secondary:** White background, 1px `#E2E8F0` border, `#0F172A` text.
- **Ghost:** No border, `#64748B` text, appears on hover with a light gray background.

### Inputs
- **Text Inputs:** 1px border, 8px radius. Active state features a 2px Primary Blue focus ring with 10% opacity.
- **Selection Cards:** Used for service selection. Large 16px rounded containers with an icon, title, and price. Active state adds a 2px solid primary blue border.

### Chips & Status Indicators
- Use a "Dot + Label" format. For example, "Active" shows a 6px green dot next to the label. Backgrounds for chips should be high-transparency versions of the status color (e.g., 10% opacity).

### Cards
- Service cards should feature "Slot-based" layouts: Image/Icon on the left, Title/Description in the center, and Action/Price on the right. Use hairline horizontal dividers between list items.

### Navigation
- **Sidebar:** Dark Slate background (`#0F172A`) for the admin view, using high-contrast white text for active states and muted gray for inactive.
- **Customer Header:** Clean white background, thin bottom border, with the logo centered or left-aligned.