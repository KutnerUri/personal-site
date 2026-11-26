---
id: 64d075a1-a448-4d1e-80d9-5ac6936d66e1
title: Get my projects ready for "Things I made"
status: queued  # queued | in-progress | blocked | done | dropped
---

# Get my projects ready for "Things I made"

Polish the projects picked in `project-exploration.research.md` so they can sit on nefzen.dev, each on its own `*.nefzen.dev` domain, in one shared look.

## Goal

Every picked project is live on a `*.nefzen.dev` domain, has a facelift in the shared look (dark mode and SEO included), and has a card on the site, grouped as experiences, tools or experiments.

Done when: all picked projects pass the facelift checklist below, their DNS entries are set up together, and their cards are on the site.

## Motivation

There is more work worth showing than the site lists, but much of it predates my current standards: light-only, default page titles and styling, no custom domain. It deserves a refresh before it goes on the site.

## Next actions

### Shared foundation

- [ ] Settle on one look for all projects: modernist, minimalist, utilitarian, with a dash of taste. Write it down (type, colour, spacing, light/dark) so each facelift follows it.
- [ ] Consolidate a design system project: I keep recreating one in each project. One project with variations (one per site's flavour) and the components gathered from my sites.
  - [ ] Gather the tokens and colour work: `experiments/color-cards` (palette, accent system, tokens spec, dark mode, card variations; part of Mana Therapy's colour work), `manatheory` (`COLOR_SYSTEM.md`, colour palette plan), and the styles of the live sites.
  - [ ] Gather components, starting with `experiments/slidebutton`.
  - [ ] Use it as the base for every facelift below.
- [ ] Define the facelift checklist, applied to every project:
  - [ ] Follows system light/dark
  - [ ] The shared look
  - [ ] SEO: real `<title>`, description, Open Graph image, canonical URL on the project's domain
  - [ ] Credit and a link back to nefzen.dev
- [ ] Finish exploring before setting up domains (see `project-exploration.task.md`), so DNS is done once for everything.
- [ ] Prepare DNS entries for all picked projects together (Uri does DNS).

### Experiences

- [ ] **No Smoke** (`web/no-smoke`, live at nope.nefzen.workers.dev): finish the refactor and grow it into a whole site, not just the splash and onboarding.
- [ ] **Mana Therapy** (`manatheory`): paused; it's deployed twice (mana.nefzen.workers.dev and kutneruri.github.io/manatherapy). Keep one deployment, then show it as coming soon.

### Tools

- [ ] **Floating Tooltip React** (`popper`): facelift for the demo page.
- [ ] **Color Blender** (`web/color-blend`): facelift.

### Experiments and articles

- [ ] **Interactive button** (`experiments/interactions`): facelift, then pair it with the Medium article on interactive element states (it already links to it).
- [ ] **Sound FX** (`experiments/sounds`): facelift.
- [ ] **Surface Elevation** (`web/surfaces`): unfinished; needs performance and visual work. Finish it, then pair it with an upcoming article on transparency as a design token (idea: [transparency-as-a-design-token.md](../../AI/unarchive/4-work/projects/backlog/media-and-writing/transparency/transparency-as-a-design-token.md)).
- [ ] **qpong** (Oct 2025: vertical, fullscreen, touch play): promising, needs work to be presentable. Started alongside an earlier matchmaking experiment (`experiments/lobby`, `simple-voip`).

### Skipped

- `web/jsfighter` (physX): a short 2022 sketch of a 2D physics engine (vectors, gravity, ball collisions). Too early to show; possibly an article idea ("a physics engine from scratch").
- `experiments/heap` (js-data-structures): a heap and red-black tree exercise; code only.
- `experiments/virtual-keyboard`.
- `experiments/slidebutton` goes into the design system instead.

### Site

- [ ] Add the cards to "Things I made", grouped into experiences, tools and experiments, once each project is ready.

## Boundaries

- Each project is worked on in its own repo, one at a time, with Uri's go-ahead for that project.
- No GitHub writes: Claude never pushes or changes anything remote. Uri pushes.
- DNS is Uri's.

## Reference

- Site goals and audience: `PURPOSE.md`.
- Signals, live checks and the full project table: `project-exploration.research.md`.
- Re-run the scan: `bun scripts/scan-projects.ts --github KutnerUri`.
- Live projects deploy to GitHub Pages under `*.nefzen.dev`; newer ones start from the `astro+bun` template in `~/Documents/projects/web/templates`.
