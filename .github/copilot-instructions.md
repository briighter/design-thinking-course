# Design Thinking Course — Copilot Instructions

## Project Overview
A React + Vite single-page application delivering a 6-phase design thinking course with an interactive workbook. Hosted on GitHub Pages via GitHub Actions.

---

## Tech Stack
- **React 18** with hooks (no class components)
- **Vite** for build tooling
- **Inline styles only** — no CSS files, no CSS modules, no Tailwind
- **No external UI libraries** — all components are hand-crafted
- **SVG illustrations** — all inline, no image files

---

## File Structure

```
src/
  theme.js                          # Color palette, phase config, light/dark tokens
  ThemeContext.jsx                  # React context + useTheme() hook
  App.jsx                           # Root: ThemeContext.Provider + mode/dark state
  main.jsx                          # Vite entry point
  hooks/
    usePersisted.js                 # localStorage persistence hook
  data/
    courseContent.js                # Course lessons, exercises, quotes (pure data, no JSX)
    workbookData.jsx                # Workbook exercises with JSX workspace renderers
  components/
    PhaseChip.jsx                   # Shared phase nav chip (used in both apps)
    course/
      CourseApp.jsx                 # Course root + 2-row sticky nav
      HomePage.jsx                  # Hero + phase map cards
      PhaseView.jsx                 # Phase lessons + quote + exercises
      ExerciseCard.jsx              # Read-only expand/collapse exercise card
      PhaseIllustrations.jsx        # 6 large header SVGs (Illu*) + ILLUS map
      ExerciseIllustrations.jsx     # ExIllu with all illustration type variants
    workbook/
      WorkbookApp.jsx               # Workbook root + 2-row sticky nav
      WorkbookHome.jsx              # Workbook home screen
      PhaseWorkbook.jsx             # Workbook phase view
      WorkbookExercise.jsx          # Exercise accordion with workspace inputs
      WorkbookPhaseIllu.jsx         # Small 80px SVGs per phase
      WorkspaceInputs.jsx           # WriteBox, TwoColBox, FourQuadrant, TableBox, StoryboardGrid
design-thinking-course.jsx          # Legacy root (preserved, not modified)
```

---

## Design System

### Color Palette (`src/theme.js` → `P`)
Never introduce new colors. All colors come from the established palette:

| Token     | Hex       | Use                              |
|-----------|-----------|----------------------------------|
| `coral`   | `#F4623A` | Phase 01 Empathize               |
| `sky`     | `#2DAAE2` | Phase 02 Define                  |
| `sun`     | `#F7C325` | Phase 03 Ideate, CTAs, accents   |
| `mint`    | `#3AB795` | Phase 04 Prototype               |
| `plum`    | `#8B4B8C` | Phase 00 Opportunity             |
| `navy`    | `#1B2A4A` | Phase 05 Test, hero backgrounds  |
| `cream`   | `#FBF8F2` | Page background (light)          |
| `sand`    | `#F0EAD8` | Secondary backgrounds, chips     |
| `ink`     | `#1A1A2E` | Heading text (light mode)        |
| `gray`    | `#6B7280` | Muted/secondary text             |
| `lgray`   | `#E8E4DC` | Borders, disabled states         |

### Phase Configuration
Each phase has: `id`, `num` (string "00"–"05"), `label` (display with `\n` for wrapping), `short` (abbreviated), `color`, `lightBg`, `darkBg`, `accent`.

- `color` — the vivid phase color, unchanged in both light and dark modes
- `lightBg` — pale tint for card/lesson backgrounds in light mode
- `darkBg` — deep tint for card/lesson backgrounds in dark mode
- `accent` — for done-state chips in light mode

### Surface Tokens (`TOKENS.light` / `TOKENS.dark`)
Access via `useTheme()` as `t`:

| Token         | Light          | Dark       | Use                              |
|---------------|----------------|------------|----------------------------------|
| `surface`     | `#FFFFFF`      | `#1C1C2E`  | Cards, navs, exercise backgrounds|
| `pageBg`      | `#FBF8F2`      | `#12121E`  | Page-level background            |
| `sand`        | `#F0EAD8`      | `#252535`  | Chip backgrounds, dividers       |
| `border`      | `#E8E4DC`      | `#35354A`  | Card and nav borders             |
| `borderLight` | `#F0EAD8`      | `#2A2A40`  | Subtle dividers                  |
| `textHeading` | `#1A1A2E`      | `#F0EAD8`  | Titles, labels, emphasis         |
| `textBody`    | `#374151`      | `#C8C3B8`  | Body paragraph text              |
| `textMuted`   | `#6B7280`      | `#9CA3AF`  | Secondary, time badges, chips    |
| `navBg`       | `#FFFFFF`      | `#1C1C2E`  | Sticky nav background            |

### Typography
Two fonts only — no Google Fonts, no external CDN:

| Use                         | Font                        | Notes                              |
|-----------------------------|-----------------------------|------------------------------------|
| Body, headings, quotes      | `Georgia, serif`            | Warm, editorial feel               |
| Labels, codes, badges, chips| `'Courier New', monospace`  | All-caps, tight letter-spacing     |

**Never** use system-ui, sans-serif for UI chrome. It breaks the visual consistency.

Typography scale (rem):
- Page title: `clamp(2rem, 5vw, 3.2rem)`
- Phase title: `clamp(1.8rem, 4vw, 2.8rem)`
- Section title: `1rem`
- Body: `0.83–0.88rem`
- Labels/badges: `0.55–0.65rem` + `letterSpacing: "0.1–0.2em"` + `textTransform: "uppercase"`

---

## Dark Mode

### Implementation
Dark mode is provided by `ThemeContext` — **never** use CSS `filter: invert()`. Inversion breaks phase colors and SVG contrast.

```jsx
// Access theme in any component:
const { dark, t, phases } = useTheme();

// t gives surface tokens; phases[i].bg is already dark-aware
```

### SVG Illustrations
- Large header SVGs (`Illu*`) accept a `bg` prop for their background ellipse. Pass `phase.bg` from `useTheme()`.
- Small phase icons (`WorkbookPhaseIllu`) also accept `bg` prop.
- Exercise icon SVGs (`ExIllu`) use the phase `color` prop — no bg changes needed.
- All phase/accent colors stay the same in both modes (they're vivid enough for both).

### Contrast Rules
- Body text: always use `t.textBody` (never hardcode `#374151` in new code)
- Heading text: always use `t.textHeading` (never hardcode `#1A1A2E` in new code)
- Phase banner text: keep `rgba(255,255,255,0.85)` — phase color backgrounds maintain contrast in both modes
- Input/textarea backgrounds: use `t.surface`
- Table alternating rows: use `t.surface` and `t.sand`

---

## Navigation

### Two-Row Sticky Nav
Both apps use the same 2-row sticky navigation pattern:

```
Row 1: [🏠 Home] [Phase 00] [Phase 01] [Phase 02] [Phase 03] [Phase 04] [Phase 05]
─── subtle divider ───────────────────────────────────────────────────────────────
Row 2 (right-aligned):  [🌙 / ☀️ Dark toggle]  [✏️ Workbook] or [📘 Course]
```

- Row 1 chips wrap on small screens
- Row 2 stays right-aligned, minimal height
- Home button: house SVG icon, no text label
- Sticky top with `zIndex: 100`

### PhaseChip (shared)
Used in both course and workbook navs. States:
- Default: `t.sand` background, `t.textMuted` text
- Active: `phase.color` background, white text
- Done: `phase.accent` / `phase.darkBg` background, `phase.color` text

---

## SVG Conventions
- All SVGs are `fill="none"` at the root, with explicit fills on children
- `viewBox` set appropriately; large headers use `280 220`, small phase icons use `80 80`, exercise icons use `120 80`
- Opacity layering: use `opacity` attrs for depth (range 0.1–0.9)
- Do not use external SVG files — keep all illustrations inline
- `pointerEvents: "none"` and `userSelect: "none"` on decorative watermarks

---

## Component Patterns

### Style Objects
Keep style objects inline. For repeated styles (nav buttons), define a base object and spread:
```jsx
const btnBase = { padding:"5px 10px", borderRadius:"20px", border:"none", cursor:"pointer", fontFamily:"'Courier New',monospace", fontSize:"0.6rem" };
<button style={{ ...btnBase, background: t.sand }}>Label</button>
```

### Data Components
Workbook `Workspace` renderers are React components embedded in data objects. They're capitalized and receive `{ kp }` for localStorage key prefix:
```jsx
Workspace: ({ kp }) => (
  <>
    <WriteBox storageKey={`${kp}-0`} label="..." lines={3} color={P.plum} />
    <TableBox storageKey={`${kp}-1`} headers={[...]} rows={6} color={P.plum} />
  </>
)
```

### Persistence
All workbook inputs persist to localStorage via `usePersisted(storageKey, defaultValue)`. Keys follow the pattern `wb-{exerciseNum}-{fieldIndex}`. Completion state: `wb-{exerciseNum}-done`.

---

## Course Content Rules
- **Never modify** lessons, exercise descriptions, or quotes in `src/data/courseContent.js`
- **Never modify** the CONTENT object structure (tagline, lessons, exercises, quote)
- Exercise `num`, `title`, `time`, `desc`, `illu` fields are immutable
- Phase `num`, `label`, `short` are immutable

---

## Anti-Patterns to Avoid
- ❌ CSS `filter: invert()` for dark mode
- ❌ Hardcoded `"white"` or `"#FFFFFF"` for backgrounds in components (use `t.surface`)
- ❌ Hardcoded `"#1A1A2E"` or `"#374151"` for text in components (use `t.textHeading` / `t.textBody`)
- ❌ External fonts, icon libraries, or UI component libraries
- ❌ Separate CSS files — all styles are inline
- ❌ Modifying course content data
- ❌ Adding new colors outside the palette
- ❌ Using `margin: "0 auto"` on inner components (the max-width wrapper lives in the app root only)
