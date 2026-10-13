# Design System — Depth

The design decisions actually shipped on this site. When adding or changing UI,
conform to this file; when a decision here changes, update this file in the
same commit.

## 1. Concept

**Depth.** One dark field. Light comes from JP's own photographs, blurred, and
content sits on glass layers at different distances. A few elements are turned
slightly in 3D so the page reads as layered space rather than flat cards.

Each page gets one memorable moment; everything else stays quiet:

| Page | The moment |
|---|---|
| Home | Giant "Ramirez" behind the cut-out portrait; glass intro card floating over it; mouse depth on desktop |
| Projects | Alternating rows; each screenshot sits in a glass frame turned toward the text |
| Case study | The project picture morphs from the card into a tilted hero (view transition) |
| Experience | Timeline of glass role cards; MemberDev's 31 sites in a native disclosure |
| Now | Seven-stop study map; equal stops, no progress state |
| Stack | Group panels; the three "How I use AI" cards fan out in 3D |
| About | JP's letter beside a stack of photos that shuffles forward |

## 2. Typography

| Role | Face | Rules |
|---|---|---|
| Display + body | **Geist** (`next/font/google`, variable) | Page titles use `.display`: weight 500, `-0.055em` tracking, `0.88` leading, `clamp()` sizes. Section titles `-0.045em`. Body 15–18px, leading 1.6–1.8, measure ≤ 720px |
| Labels, metrics, meta | **Geist Mono** | `.label` (11px, uppercase, `0.14em`) and `.meta` (12px). Never for body copy |

- Numbers use `.nums` (tabular).
- No italic accent words, no rotating headline. The home line is a plain sentence.

## 3. Color

Single dark theme. Tokens live in `:root` in `app/globals.css`.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#05070c` | Page field |
| `--fg` | `#e8ecf4` | Primary text |
| `--fg-2` | `#c3c9d6` | Secondary text (`text-muted-foreground`) |
| `--fg-3` | `#aab3c5` | Labels, meta (`text-subtle`) |
| `--brand` | `#a5b8ff` | Primary buttons, active dots, one accent per view. **The only decorative color** |
| `--ok` | `#34d399` | Status semantics only: Production, Present |
| `--glass` / `--glass-2` | white at 5.5% / 8.5% | Glass fills |
| `--glass-line` / `--glass-line-2` | white at 13% / 20% | Glass borders |
| `--line` | white at 10% | Hairlines inside glass |

Rules: don't add colors. Light comes from photographs (see Imagery), never from
CSS gradients. The only gradients are the mask fades on ambient light.

## 4. Surfaces & layout

- Container: `max-w-7xl` (1280px), `px-4 sm:px-8`.
- `.glass`: translucent fill + border + inner top highlight. Use for most cards.
- `.glass-2`: stronger fill + deep shadow. Use for the one card that should feel closest (hero intro, current role, case study frame).
- `.glass-blur`: real `backdrop-filter`. **Only** on chrome (nav, app bar, tab bar) and the home hero cards. Never on lists or repeated cards: it is the most expensive thing on the page.
- Radii: 16–20px inner media, 22–28px cards, 30–32px large panels, pills `999px`.
- 3D turns are static `rotateY`/`rotateX` of 6–14°, always on a direct child of a `perspective` parent (or with `perspective()` inside the transform). Straighten on hover.
- Section rhythm: `pt-24`–`pt-40` between sections; generous is correct.

## 5. Imagery

- **Hero portrait**: `public/images/hero/jp-depth.webp`, cut out of the seafront
  photo (`~/Downloads/Photos/f44884a7-…jpg`) on-device with Apple Vision:
  `scripts/person-matte.swift` (person matte, follows the hair) and
  `scripts/hero-cutout.swift` (foreground mask, keeps the body solid). Then
  `scripts/refine-cutout.py` re-estimates the hair edge from the photo's own
  colours so strands are partly transparent, removes the sky colour from them
  (no pale fringe), fades the frame-cut left arm and the bottom, and saves WebP
  with alpha. Re-run all three if the photo changes, then update
  `site.heroCutout` with the new size.
- **Ambient light**: `public/images/ambient/*.webp`, ~40px images pre-blurred by
  the same script. `<Ambient>` scales them up with `background-size: cover`;
  bilinear upscaling does the blur for free. Never use CSS `filter: blur()` on
  large images.
- Project media: real screenshots from the project repos in
  `public/images/projects/`. Budget & Expense has no screenshot yet (icon plus
  callouts). QBank's shots come from the plugin's browser fixture with sample
  questions in place of the test data, never from member accounts. To add one,
  change `media` in `lib/data/projects.ts`.
- About: six personal photos in `public/images/about/`.
- `site.portrait` (the full seafront photo) is the Open Graph / Person schema image.

## 6. Motion

Feel: calm, springless, `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease`). Transform
and opacity only. No scroll-jacking library: scrolling is native.

| Pattern | Where | How |
|---|---|---|
| Entrance | Page tops (`.enter`, `.enter-settle`, `.enter-fade`, `--d` delay) | CSS keyframes on load. No JS |
| Reveal | Below the fold (`data-reveal`) | CSS scroll-driven (`animation-timeline: view()`), `translate` + opacity. Browsers without support just show content |
| Hero scroll | Home | Name drifts up, portrait sinks, light dims (`animation-timeline: scroll()`) |
| Mouse depth | Home hero, desktop only | `HeroDepth`: one rAF loop, sleeps when settled, writes `transform` on `[data-depth]` layers |
| Route change | Every navigation | View Transitions (`experimental.viewTransition`): page fades and rises; nav/tab bar stay anchored; project media morphs card to hero (`media-{slug}`) |
| Photo stack | About | Cards move between slots with transform/opacity; auto-advance pauses on hover, focus, hidden tab |
| Hover | Cards, buttons | Border/background lift, arrow nudges 3px, panels straighten |

**Reduced motion**: every keyframe and scroll animation sits inside
`prefers-reduced-motion: no-preference`; JS components return early; view
transitions are zeroed. Content is never hidden without motion enabled.

## 7. Components (`components/`)

| Component | Contract |
|---|---|
| `Nav` | Desktop: centred glass pill, fixed. Phone: app bar with logo and Málaga clock |
| `TabBar` | Phone only. Floating glass bar, 5 tabs (Home, Projects, Work, Now, About). Stack is reached from Home and the footer |
| `Footer` | Glass contact panel + link row |
| `Hero` | Home only. Name behind cut-out, intro card (sheet on phone), info card (desktop) |
| `HeroDepth` | Pointer depth wrapper for the hero |
| `PageHero` | Subpage header: big page name, lede, actions, optional metrics row, ambient light |
| `Ambient` | Photo light, `fade="bottom"` for page tops, `"both"` for sections |
| `ProjectMedia` | Card / frame / hero variants; carries the view-transition name |
| `StatusLabel` | Dot + text; colour never carries meaning alone |
| `SiteList` | Native `<details>` of maintained sites |
| `StudyMap` | Now page, client component |
| `PhotoStack` | About page, client component |
| `MalagaClock` | `useSyncExternalStore`, server renders `--:--` |

## 8. Phone = app, not a shrunken desktop

- App bar on top, floating tab bar at the bottom (`md:hidden`).
- Home: cover with the name over the portrait's head, then the intro as a glass sheet with quick links and the CV button.
- Horizontal snap carousels for status and projects; plain lists where 3D stacks would crowd (Home experience, Experience timeline rail hidden).
- Bottom padding on the footer clears the tab bar.

## 9. Voice

First person, plain sentences, the way JP would write an email. Specific facts,
no hype.

- No slogans, rotating phrases or cute pairs ("keep DNS boring").
- No one-line fragments as sentences, no colon-punchlines, no reflexive lists of
  three, no "X, Y, and the Z they run on".
- No em dashes in body copy. No exclamation points, no emoji.
- Page titles name the page.
- Facts come from `lib/data/*` and `content/projects/*.mdx`; pages never hardcode them.
- The About letter is JP's own text. Do not rewrite it unless he edits it.
  Recommendations are quotes; never edit them.

## 10. Performance budget

- Every route is static (SSG). Keep it that way.
- App JavaScript is small: client components are the nav, tab bar, clock, hero
  depth, study map and photo stack. Don't add animation libraries; CSS does the
  motion.
- One preloaded image per page at most (the hero portrait on Home, the project
  media on a case study).
- `backdrop-filter` only where §4 allows it.

## 11. Accessibility

- Focus: 2px periwinkle outline, 3px offset.
- Decorative layers (`Ramirez`, ambient light, hero portrait) are `aria-hidden`.
- Touch targets ≥ 44px; tab bar items 52px.
- External links open in a new tab with `↗`.
- Public work history starts at Hostinger (Aug 2020). Do not list 5CA / Epic Games.
