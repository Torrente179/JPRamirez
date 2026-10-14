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
| Case study | The project picture morphs from the card into a tilted hero (view transition). Clicking it opens the screenshot viewer |
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
- Chrome glass must stay readable without the blur: nav, app bar and tab bar fills
  are 84–88% opaque, so text behind them is only a texture. A `view-transition-name`
  goes on the glass element itself, never on a wrapper: a named element is a
  backdrop root, and a blur inside it has nothing behind it to blur.
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
  callouts). QBank's member screens come from the plugin's browser fixture with
  sample questions in place of the test data, never from member accounts. Its
  admin screens are from the live admin, with every student detail blurred into
  the image before it is saved (never a CSS blur, which would ship the data).
  Walkthrough notes live in `lib/data/qbank-shots.ts`. To add one,
  change `media` in `lib/data/projects.ts`.
- About: six personal photos in `public/images/about/`.
- `site.portrait` (the full seafront photo) is the Person schema image.
- Link preview: `public/og/en.jpg` and `public/og/es.jpg` (1200x630, set in
  `site.og`) are drawn like the Home hero (surname behind the cut-out, photo
  light, one glass card) from `scripts/og/og.html`. The Spanish line sits in
  `data-es` and gets a slightly wider card so it stays at three lines. Re-render
  both with `node scripts/og/render.mjs <path-to-playwright>` after changing the
  photo, the line on the card, or the type.

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
| `Nav` | Desktop: centred glass pill, fixed, with the language toggle before Contact. Phone: app bar with logo, language toggle and Málaga clock |
| `LangToggle` | EN \| ES segmented pill (Geist Mono 12px, white/14 thumb). Two links to the same page in each language; the thumb slides on tap, the click writes the `lang` cookie, links aren't prefetched, and scroll position is kept |
| `TabBar` | Phone only. Floating glass bar, 5 tabs (Home, Projects, Work, Now, About). Stack is reached from Home and the footer |
| `Footer` | Glass contact panel + link row |
| `Hero` | Home only. Name behind cut-out, intro card (sheet on phone), info card (desktop) |
| `HeroDepth` | Pointer depth wrapper for the hero |
| `PageHero` | Subpage header: big page name, lede, actions, optional metrics row, ambient light |
| `Ambient` | Photo light, `fade="bottom"` for page tops, `"both"` for sections |
| `ProjectMedia` | Card / frame / hero variants; carries the view-transition name |
| `ShotGallery` | Case-study screenshots as `data-shot` buttons. Two shots keep the turned pair; shots with a `group` become a grid per group in a "Screens" section after the write-up |
| `ShotViewer` | Client. Full-screen native `<dialog>` with every screenshot: scroll-snap swiping, arrows and ←/→, group jumps, and numbered note boxes in periwinkle (`notes` on each shot, boxes in % of the image). Renders nothing until opened |
| `StatusLabel` | Dot + text; colour never carries meaning alone |
| `SiteList` | Native `<details>` of maintained sites |
| `StudyMap` | Now page, client component |
| `PhotoStack` | About page, client component |
| `MalagaClock` | `useSyncExternalStore`, server renders `--:--` |
| `NotFoundPage` | The 404 document for `app/global-not-found.tsx`. Prerendered in English; switches to Spanish after hydration when the address starts with `/es` |

## 8. Phone = app, not a shrunken desktop

- App bar on top, floating tab bar at the bottom (`md:hidden`).
- Home: cover with the name over the portrait's head, then the intro as a glass sheet with quick links and the CV button.
- Horizontal snap carousels for status and projects; plain lists where 3D stacks would crowd (Home experience, Experience timeline rail hidden).
- Bottom padding on the footer clears the tab bar.
- The tab bar is at most 440px wide and centred, so the tall foldable and wide
  phones don't stretch it. On short screens (`max-height: 500px`, a phone held
  sideways) it drops the labels to a slim icon bar; the labels stay for screen readers.
- Tablets and the open foldable (768px and up) use the desktop pill. On touch
  screens (`pointer-coarse`) its items grow to 44px.
- The screenshot viewer keeps less height for its controls on short screens: the
  footer hides and the arrows move up next to Close.

Checked in WebKit at iPhone SE to Pro Max (portrait and landscape), a foldable
(390 folded, 890x626 and 626x890 open), and iPad mini, iPad and iPad Pro 11 and 13
in both orientations: no sideways scroll, nothing cut off, touch targets 44px.

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

### Spanish

Latin American Spanish, written by hand from the English, never machine
translated. The same rules apply (first person, plain sentences, no em dashes in
body copy), plus:

- Neutral Latin American vocabulary: celular, computadora, carros, video, reportes,
  malecón. No vosotros and no Spain-only words (ordenador, móvil, coger, vale).
- The reader is addressed as tú, matching the informal English.
- Numbers follow the RAE: no separator in four digits, a non-breaking space from
  five (4800, 163 000, 160 000 USD). Dates are "1 de octubre de 2026"; role
  periods follow LinkedIn's Spanish style ("sept. 2023 — actualidad").
- Product names, tech names and UI labels that appear in a screenshot stay as
  they are (QBank's app is in English, and its notes name buttons like Review).
- The About letter is translated in JP's voice; if he edits the English, the
  Spanish needs the same edit. Recommendation quotes stay in English with
  `lang="en"`; only the relationship line is translated.
- Short labels that would wrap and strand a word use non-breaking spaces
  ("ingeniero de IA", "Sistemas de IA").

## 10. Performance budget

- Every route is static (SSG), in both languages. Keep it that way.
- App JavaScript is small: client components are the nav, language toggle, tab
  bar, clock, hero depth, study map, photo stack, screenshot viewer and the 404. Don't add animation libraries; CSS does the
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
- `<html lang>` is `en` or `es-419`. English text inside a Spanish page (the
  recommendation quotes) carries `lang="en"`; each toggle link carries its own
  `lang` and an accessible name in that language.

## 12. Languages

English at the unprefixed URLs (`/projects`), Spanish under `/es` (`/es/projects`).
Slugs are the same in both.

- Routes live in `app/[lang]`; `next.config.ts` rewrites unprefixed paths to
  `/en/...` and redirects `/en/...` back to the unprefixed URL.
- A first visit to an unprefixed page from a browser whose first language is
  Spanish is sent to `/es` (307), so it never reaches the browser's translate
  prompt. Once someone uses the toggle, the `lang` cookie decides, and `lang=es`
  keeps sending unprefixed links to Spanish. `/es/...` URLs are never redirected.
- Every page sets `translate="no"`, the `notranslate` class and
  `<meta name="google" content="notranslate">`: each version is written by hand,
  so browsers shouldn't machine-translate either one.
- Each page sets its canonical and `hreflang` links (`en`, `es`, `x-default`)
  with `pageAlternates`; the sitemap lists both versions.
- Copy: anything with words is a `{ en, es }` pair (`Text` in `lib/i18n.ts`).
  Data types take a `<S>` parameter (`Project<Text>` in the data, `Project` once
  `localize(data, lang)` has picked a language). UI strings sit next to the
  component that shows them. Case study write-ups are `<slug>.mdx` and
  `<slug>.es.mdx`.
- The 404 is `app/global-not-found.tsx`, because the root layout sits under
  `[lang]`.
