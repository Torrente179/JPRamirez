# Design System — jp·ramirez

The design decisions actually shipped on this site. When adding or changing UI,
conform to this file; when a decision here changes, update this file in the
same commit.

## 1. Concept

**A quiet operations console.** The site of someone who keeps production
systems calm. Dark, precise, data-flavored — expressed through typography and
status readouts, never cosplay (no fake terminals, no typing cursors, no
scanlines).

Each page gets exactly **one memorable moment**; everything else stays quiet:

| Page | The moment |
|---|---|
| Home | Giant "Ramirez" sinking behind the color portrait + rotating headline. Mobile home is an app cover, not a scaled desktop. |
| About | Bordered patio portrait beside the bio |
| Experience | Role list with MemberDev sites I maintain |
| Projects | Status dots treating side projects like monitored services |
| Stack | Hairline tool list, grouped by AI / code / hosting / WordPress / support |
| Now | A 7-node study map (equal steps, no progress state) plus the apps being built |

## 2. Typography

| Role | Face | Rules |
|---|---|---|
| Display + body | **General Sans** (variable, self-hosted `app/fonts/`, weights 200–700) | Headings: `font-medium`, tight leading (`leading-[0.92]`–`[1.06]`), negative tracking (`-0.02em` to `-0.035em`). Body: 15–16px, `leading-relaxed`/`[1.8]`, max measure `max-w-xl`/`max-w-2xl` |
| Labels, metrics, nav, code | **JetBrains Mono** (via `next/font/google`) | The "ops" voice. Labels: 10–11px, uppercase, tracked `0.14em`–`0.16em` (`.eyebrow`). Never used for body copy |

- The hero name scale: desktop `clamp(4.2rem, 19.5vw, 17rem)` on `.hero-anchor`;
  mobile app cover `clamp(3.05rem, 16.5vw, 4.35rem)`.
- Last ~32% of the giant name (`clip-path: inset(0 0 0 68%)` on
  `.hero-name-front`) paints in front of the portrait so the last letters read
  on top of the image; the rest stays behind the foliage.
- One italic accent word per headline, colored `text-brand` — this is the
  signature type gesture (`calm`, `systems`, `engineering`, `built`,
  `infrastructure`, `studying`). The word is part of a normal sentence, not a punchline.
- All numbers render with `tabular-nums` (`.nums` utility).

## 3. Color

Single dark theme; values live in `:root` in `app/globals.css` (no `.dark`
class, `color-scheme: dark`).

| Token | Value | Use |
|---|---|---|
| `--background` | `#0a0a0c` | Page field |
| `--foreground` | `#ededf0` | Primary text |
| `--surface` / `--card` | `#101014` | Cards (status board) |
| `--surface-2` | `#16161c` | Card hover |
| `--muted-foreground` | `#9b9ba6` | Secondary text |
| `--subtle` | `#6e6e7a` | Tertiary/labels |
| `--border` | `rgba(255,255,255,0.08)` | Hairlines everywhere |
| `--brand` | `#7de2f0` (cyan) | Accent words, active nav, hover titles, links. **The only decorative color** |
| `--brand-dim` | `#22d3ee` | Small status dots (non-"up" states) |
| `--ok` | `#34d399` (emerald) | Status semantics only: Production dots, Present dots. Never decorative |
| `--ring` | `rgba(125,226,240,0.55)` | Focus outlines |

Rules: green = "system up" semantics, cyan = brand. Don't add colors. Don't
use gradients for decoration — the only gradients are the baked photo fade and
hairline transitions.

## 4. Space & layout

- Container: `max-w-6xl` (1152px), `px-5 sm:px-8`.
- Section rhythm: `mt-24`–`mt-28` between sections; generous is correct.
- **Hairlines over boxes**: lists are `border-t` rows (`.hairline`), not cards.
  Cards (rounded `rounded-xl border bg-surface`) are reserved for the status
  board and chips.
- Section headers: mono eyebrow `01 — Section name` (cyan index, `SectionHeading`),
  echoing the CV's numbered sections. Home: `01` projects, `02` work, `03` stack.
- Hero vertical logic (desktop): capped flex spacer above the name (`max-h-12`)
  so tall viewports push extra space *below* content, never above the name. The
  cap is deliberately small — the location line should read as a label attached
  to the name lockup, and the giant type already carries ~24px of optical
  leading above its cap height.
- The desktop portrait is absolutely positioned **from the name's box**
  (`.hero-anchor`), so the letters-behind-foliage overlap is viewport-height-proof.
  Portrait `top` is `calc(3.5rem + 0.2em)` — 20% of the name size more of the
  last letters sit above the photo than the original `top-14`.
- Mobile home hero is an **app cover**: full-bleed photo (`54svh`), name locked
  to the top of the cover, copy + hairline actions in a profile sheet below.
  Breakpoint matches the TabBar (`md`). Do not scale the desktop lockup down.

## 5. Imagery

- One photographic power move on Home; About gets a bordered portrait; no
  other photography.
- The hero image is `public/images/jp-hero-alpha.webp`: color, full pose,
  **alpha baked into the file** (smoothstep edge fades all four sides +
  radial focus falloff, generated with PIL from
  `~/Desktop/Fotos JP/DSC07481.ARW.jpg`). Because the fade is alpha, the
  giant name ghosts *through* the semi-transparent foliage — do not replace
  with CSS masks (they can't make letters show through) and never use a
  hard-edged rectangle.
- Treatment: `contrast-[1.04] saturate-[1.05]`, dimmed to `brightness-[0.8]`
  on mobile where copy overlaps it.
- If the photo changes: keep a dark-clothing/dark-ambience shot or re-check
  copy contrast over it.

## 6. Motion

Feel: **calm and springless**. Custom cubic-bezier `power3.out`-family easing;
no bounce, no parallax stacks, nothing loops except the status dot pulse.

| Pattern | Where | Spec |
|---|---|---|
| Stagger entrance | Page heroes (`Stagger`, `[data-stagger]`) | GSAP fromTo, y:26→0, alpha 0→1, 1.05s, stagger 0.085 |
| Scroll reveal | Everything below the fold (`Reveal`) | One pattern reused: y:24→0 + fade, 0.9s, trigger `top 88%`, once |
| Rotating headline | Home only (`RotatingText`) | Blur-morph swap: out (blur 9px, y −12, 0.38s) → in (0.65s), 3s hold |
| Page transition | `template.tsx` + `.page-enter` | CSS: fade + 10px rise, 0.55s |
| Smooth scroll | `SmoothScroll` (Lenis) | lerp 0.115, synced to GSAP ScrollTrigger via `gsap.ticker` |
| Status pulse | `.status-dot` | 2.6s soft ring, `--ok` only |
| Micro-interactions | Links/cards | Hover: title → cyan, arrow `translate-x-1`, card bg → surface-2. Touch: `active:scale-[0.985–0.99]` |

**Reduced motion**: every JS component early-returns on
`prefers-reduced-motion` (content stays fully visible — no opacity-0 states
ever ship in markup), and globals.css kills CSS animations.

**GSAP gotchas (learned the hard way):**
- GSAP owns the inline `transform` of `[data-stagger]`/`Reveal` elements —
  position them with `top`/`margin`, never transforms.
- Tailwind v4 does not compile arbitrary translate utilities
  (`-translate-y-[70%]` → nothing). Use plain CSS or top/margin utilities.

## 7. Components (`components/`)

| Component | Contract |
|---|---|
| `Nav` | Fixed top, blur. Desktop: mono links, active = cyan. Mobile: app bar — logo `jp·` only |
| `TabBar` | Mobile only (`md:hidden`). 5 tabs (home/projects/work/now/about), lucide icons, cyan active, safe-area padding |
| `Hero` | Home only. Desktop: giant name + portrait weave. Mobile (`md:hidden`): app cover + profile sheet. |
| `StatusBoard` | 3 dashboard cards (NOW / WORK / SHIPPING) fed from `lib/data/now.ts` — labels have tone dots, meta on the right |
| `ProjectRow` | Hairline row: index, name, status dot, tagline, mono stack line, sliding arrow |
| `ExperienceRow` | Same row contract as `ProjectRow`: index, company, Present/`ok` or period/`subtle` dot, tagline, mono title, sliding arrow. Links to `/experience#slug`. |
| `CvDownload` | Same-origin `public/cv.pdf` with `download` filename. Used on Home (work section), Experience header, and Footer. |
| `SiteList` | Native `<details>` under MemberDev. Summary is a compact metric: brand count (`text-xl`) + `Sites I maintain` in row type, `+`/`−` marker. Open state: hairline rows, hostname + `↗`. |
| `SectionHeading` | `01 — Title` mono eyebrow |
| `PageHeader` | Subpage hero: eyebrow, display title (accent word), optional lede, optional `action` (used on Experience for CV download) |
| `Reveal` / `Stagger` | The only two motion wrappers; don't invent new ones per page |
| shadcn/ui | Installed (button/badge/separator/tooltip) but restyled via tokens; never ship default-looking components |

## 8. Mobile = app, not shrunken desktop

- Bottom `TabBar` is primary navigation; top bar is an app bar with the logo.
  Both appear below `md`.
- Home hero below `md` is a cover photo with the name on it and a profile
  sheet underneath — never the desktop giant-name-plus-offset-portrait scaled
  down.
- `main` gets `pb-20` clearance for the tab bar and `overflow-x-clip` so the
  hero photo can bleed to the screen edge without horizontal scroll.
- Touch feedback (`active:scale`) on every tappable card/row.
- Stack page is intentionally not a tab: reachable from Home's stack section
  and the footer.

## 9. Voice

First person, plain sentences. No slogans, no "not X" punchlines, no poster
headlines. Honest about status ("Private beta — it runs my training week").

Juan Pablo is an AI engineer with DevOps and WebOps behind it. English and
Spanish. Write the way he would in an email: clear, specific, a bit of heat.
Complete sentences. Not US-editorial, not try-hard casual, not a support
ticket bio, not translated-from-Spanish stiffness.

Mono labels stay ops vocabulary: SHIPPING, PHASE labels only
where they mark a map, not a personal progress tracker.
Page titles name the page. No exclamation points, no emoji, no buzzword chains.

## 10. Accessibility & states

- Focus: visible 2px cyan `outline` with 3px offset on everything.
- Hero portrait is `aria-hidden` + empty alt (decorative); the About portrait
  carries real alt text.
- Status/tone dots always pair with text — color is never the only signal.
- External links: `target="_blank" rel="noopener noreferrer"` + `↗`.
- Content data lives in `lib/data/*.ts` + `content/projects/*.mdx` — pages
  never hardcode facts.
- Public work history starts at Hostinger (Aug 2020). Do not list 5CA /
  Epic Games on the site.

## 11. Don't

- No light mode (tokens are ready, but it's a deliberate v2+).
- No new accent colors, no gradient text, no glows beyond the status pulse.
- No emoji or clip-art icons; lucide line icons only, and only in the TabBar.
- No boxed card grids where a hairline list would do.
- No motion that doesn't clarify or reward — if in doubt, leave it out.
