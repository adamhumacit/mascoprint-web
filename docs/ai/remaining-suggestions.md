# Remaining Site Improvement Suggestions

Audit date: 2026-02-20

## Accessibility (a11y)

### 1. Add `aria-expanded` to Header dropdown toggles
**File:** `src/components/layout/Header.tsx`
**Impact:** High

The Case Studies dropdown button has no `aria-expanded` attribute, so screen readers can't tell users whether the menu is open or closed. Add `aria-expanded={isOpen}` and `aria-haspopup="true"` to the dropdown trigger button.

### 2. Add `aria-live` region for form status messages
**File:** `src/components/ContactForm.tsx`
**Impact:** High

When the contact form is submitted, success/error messages appear visually but are not announced to screen readers. Wrap the status message area with `aria-live="polite"` so assistive technology announces the result.

### 3. Use `<address>` semantic element for contact info
**Files:** `src/components/layout/Footer.tsx`, `src/components/contact/ContactInfo.tsx`
**Impact:** Medium

Contact information (address, phone, email) uses generic `<div>` and `<p>` tags. Wrapping this content in an `<address>` element gives it semantic meaning for search engines and assistive technology.

### 4. Add `prefers-reduced-motion` support
**File:** `src/app/globals.css`
**Impact:** Medium

The shimmer animation and CSS transitions don't respect user motion preferences. Add a media query:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-shimmer {
    animation: none;
  }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 5. Add `aria-hidden="true"` to decorative elements
**Files:** Various case study pages, contact page, home page
**Impact:** Low

Large decorative numbers (e.g. "01", "02"), decorative SVG icons, and background gradient divs are read aloud by screen readers. Add `aria-hidden="true"` to purely decorative elements.

---

## Performance

### 6. Convert partner logos from PNG to WebP
**Files:** `public/images/partners/marabu.png`, `sericol.png`, `ulon.png`
**Impact:** Medium

The rest of the site uses WebP for images, but partner logos are still PNG. Converting them to WebP would reduce file size and improve consistency with the image optimization strategy.

### 7. Add `preconnect` for Cloudflare Turnstile
**File:** `src/app/layout.tsx`
**Impact:** Low

Google Fonts has a preconnect hint but Cloudflare Turnstile (used on the contact form) does not. Add:

```html
<link rel="preconnect" href="https://challenges.cloudflare.com" />
```

### 8. In-memory rate limiting doesn't persist
**File:** `src/lib/rate-limit.ts`
**Impact:** Low (unless scaling)

The rate limiter uses an in-memory `Map` that resets on server restart and doesn't share state across instances. Fine for a single-server deployment, but if scaling to multiple instances consider Redis or Cloudflare KV.

### 9. Unused MDX dependencies
**File:** `package.json`
**Impact:** Low

`@next/mdx` is installed and configured in `next.config.js` but no `.mdx` content files exist in the project. If MDX isn't planned, removing it would reduce bundle overhead.

---

## Code Quality

### 10. Extract shared contact details to a config file
**Files:** Header, Footer, ContactInfo, ContactForm, email.ts, StructuredData
**Impact:** Medium

Contact details (phone number, email, address, VAT number, company number) are repeated in 6+ files. Extract to a single `src/config/contact.ts` constants file to make updates easier and prevent inconsistencies.

Example:

```ts
// src/config/contact.ts
export const CONTACT = {
  phone: '+441582791190',
  phoneDisplay: '+44 (0)1582 791190',
  email: 'office@mascoprint.co.uk',
  address: {
    street: 'Stags End Cottage Barn',
    area: 'Gaddesden Row',
    city: 'Hemel Hempstead',
    county: 'Hertfordshire',
    postcode: 'HP2 6HN',
    country: 'GB',
  },
  companyNo: '1040660',
  vatNo: 'GB 196 9926 85',
} as const
```

### 11. Wrap Footer quick links in `<nav>`
**File:** `src/components/layout/Footer.tsx`
**Impact:** Low

The "Quick Links" section in the footer is a `<div>` containing a `<ul>` of navigation links. Wrapping it in `<nav aria-label="Quick Links">` gives it semantic meaning as a navigation landmark.

### 12. Add `aria-label` to partner logo links
**File:** `src/components/PartnerLogos.tsx`
**Impact:** Low

Partner logo links wrap images but only have `alt={partner.name}` on the image. The `<a>` element itself has no accessible name describing where the link goes. Add `aria-label={`Visit ${partner.name}`}` to each link.

---

## SEO (Verification Needed)

### 13. Verify Twitter/X account
**URL:** https://twitter.com/mascoprint
**Impact:** Low

The Twitter/X link in the footer and structured data points to `@mascoprint`. Verify this account exists and is active. If it's inactive, consider removing the link to avoid sending users to a dead profile.
