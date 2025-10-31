# PickleSplit Design Guidelines

## Design Approach

**Selected Approach:** Design System - Clean Utility  
**Justification:** PickleSplit is a utility-focused financial tool where clarity, efficiency, and data readability are paramount. The design prioritizes information hierarchy and quick task completion over visual flourish.

**Primary Inspiration:** Linear (clean data presentation) + Stripe (trustworthy financial UI) + Notion (approachable productivity)

**Core Principles:**
- **Clarity First:** Financial data must be instantly readable and unambiguous
- **Efficiency:** Common tasks (create session, check balances) should be fast and frictionless
- **Trust:** Visual design instills confidence in calculations and settlements
- **Responsive:** Seamless experience from mobile to desktop

---

## Typography

**Font Families:**
- Primary: Inter (via Google Fonts) - excellent readability for data and UI
- Monospace: JetBrains Mono (for currency amounts and numbers)

**Hierarchy:**
- Page Titles: text-2xl/text-3xl, font-semibold
- Section Headers: text-xl, font-semibold
- Card Titles: text-lg, font-medium
- Body Text: text-base, font-normal
- Labels: text-sm, font-medium, uppercase tracking
- Currency Amounts: text-lg/text-xl, font-mono, font-semibold
- Small Meta: text-xs

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 3, 4, 6, 8, 12, and 16 for consistent rhythm  
(Examples: p-4, gap-6, mb-8, space-y-3)

**Container Structure:**
- Sidebar: Fixed width 240px (w-60) on desktop, collapsible to mobile menu
- Main Content: max-w-6xl with px-4 to px-8 responsive padding
- Cards/Sections: p-6 internal padding, mb-6 spacing between sections

**Grid Patterns:**
- Session Cards: Single column stack on mobile, 2-column on tablet (md:grid-cols-2)
- Balance Tables: Full-width responsive tables with horizontal scroll if needed
- Form Layouts: Single column with max-w-2xl for optimal form completion

---

## Component Library

### Navigation
**Sidebar (Desktop):**
- Fixed left sidebar with logo/app name at top
- Vertical navigation items with icons (Heroicons) + labels
- Active state: subtle background fill, accent border-left indicator
- Sections grouped: Sessions, Balances, History
- Bottom area: User switcher or settings (future)

**Mobile Navigation:**
- Top app bar with hamburger menu
- Slide-out drawer navigation
- Floating action button (FAB) for "New Session" on relevant pages

### Cards & Containers
**Session Card:**
- Clear visual hierarchy: payer name prominent, date subtle
- Currency amount in large monospace font
- Participant count and per-person split clearly displayed
- Subtle border, rounded corners (rounded-lg), soft shadow
- Hover state: slight shadow elevation

**Balance Summary Card:**
- Two-column layout: Name | Net Amount
- Positive amounts: success accent, Negative: warning/error accent
- Clear visual distinction between creditors and debtors
- Total balance at bottom with emphasized styling

**Settlement Row:**
- From → To relationship clearly visualized with arrow or directional indicator
- Amount prominent in monospace
- "Settle" button aligned right, primary action style
- Completed settlements: muted styling with checkmark

### Forms
**New Session Form:**
- Clean vertical layout with generous spacing (space-y-6)
- Clear field labels with text-sm font-medium
- Input fields: border, rounded, focus:ring accent
- Date picker: native input with calendar icon
- Currency input: VND symbol prefix, right-aligned monospace text
- Participant multi-select: checkbox list with "Select All" option
- Submit button: prominent, full-width on mobile, right-aligned on desktop

### Tables
**History/Transaction Tables:**
- Striped rows for readability (alternate subtle background)
- Header row: sticky on scroll, medium weight text, subtle bottom border
- Cell alignment: Text left, Numbers/Currency right
- Mobile: Card-based layout instead of table (stack data vertically)
- Empty states: centered icon + message

### Buttons
**Hierarchy:**
- Primary: solid fill, medium emphasis for main actions
- Secondary: outline style for alternative actions
- Ghost: minimal style for tertiary actions
- Danger: distinct styling for settlements/destructive actions

**Sizes:**
- Default: px-4 py-2, text-sm
- Large: px-6 py-3, text-base (for primary CTAs)
- Small: px-3 py-1.5, text-xs (for inline actions)

### Icons
**Library:** Heroicons (solid and outline variants via CDN)

**Usage:**
- Navigation: 20px outline icons
- Action buttons: 16px icons with text
- Status indicators: 16px solid icons
- Empty states: 48px outline icons

**Key Icons:**
- Sessions: CalendarIcon
- Balances: CurrencyDollarIcon or ScaleIcon
- History: ClockIcon or ListBulletIcon
- New Session: PlusCircleIcon
- Settle: CheckCircleIcon
- Users: UserGroupIcon

### Data Display
**Currency Formatting:**
- Always right-aligned in tables
- Monospace font for number alignment
- Thousand separators with periods: 300.000 ₫
- Symbol (₫) always follows number with space
- Positive: neutral or success tone
- Negative: warning/error tone with minus sign

**Date Display:**
- Short format in cards: "Apr 24"
- Full format in details: "April 24, 2024"
- Relative dates when recent: "Today", "Yesterday", "2 days ago"

### Empty States
- Centered layout with icon (48px), heading, and description
- Relevant action button below
- Examples:
  - No sessions: Calendar icon, "No sessions yet", "Create your first session" button
  - No balances: Scale icon, "All settled up!", encouraging message

### Loading States
- Skeleton screens for tables and cards
- Spinner for button actions
- Subtle pulse animation for loading content

---

## Accessibility & Polish

- Focus states: Visible ring on all interactive elements
- Form validation: Inline error messages below fields, error state styling
- Success feedback: Toast notifications for completed actions (top-right)
- Error handling: Clear error messages with retry options
- Keyboard navigation: Full support for tab order and shortcuts
- ARIA labels: Proper labeling for screen readers

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (base styles)
- Tablet: 768px - 1024px (md:)
- Desktop: > 1024px (lg:)

**Adaptations:**
- Sidebar → Hamburger menu on mobile
- 2-column layouts → Single column on mobile
- Tables → Stacked card layout on mobile
- Fixed action buttons → Floating on mobile
- Reduced padding and font sizes on mobile (scale appropriately)

---

## Visual Refinement

**Borders & Shadows:**
- Subtle borders (1px) for definition
- Minimal shadows: sm for cards, md for elevated states
- No heavy drop shadows

**Rounding:**
- Cards/Containers: rounded-lg (8px)
- Buttons: rounded-md (6px)
- Inputs: rounded-md (6px)
- Avatars (future): rounded-full

**Animations:**
- Minimal, functional only
- Transitions: 150-200ms ease for hover states
- No decorative animations
- Smooth page transitions (fade/slide)

---

## Images

**No hero images required** - This is a utility application, not a marketing site.

**Future Considerations:**
- User avatars: Small circular avatars (32px-40px) next to names
- Empty state illustrations: Simple, minimal line art if needed
- Icons only: All visual elements should be icon-based from Heroicons