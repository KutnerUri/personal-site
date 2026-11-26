---
id: fdef0a85-e234-4e63-ab05-3ee9652f7f1a
title: Explore my projects for the personal site
status: in-progress  # queued | in-progress | blocked | done | dropped
---

# Explore my projects for the personal site

Find which projects under `~/Documents/projects` are worth featuring on the site, without reading any project in full.

## Goal

A shortlist of projects (web first) to add to "Things I made", chosen by me from cheap signals gathered for every project.

Done when: `project-exploration.research.md` holds a table of all projects with their signals and a suggested shortlist, and I have marked which ones to feature.

## Motivation

The site shows only the three live projects and two coming-soon ones. Most of my work sits in `~/Documents/projects`, and there are too many projects to read one by one.

## Next actions

> 2026-11-26: scan done (local + public GitHub), research file grouped into experiences / tools / experiments. Picks and decisions recorded; action items moved to `project-showcase.task.md`. Still open: keep looking for more projects before DNS is set up.

- [x] Write a Bun script, `scripts/scan-projects.ts`, that visits each project and collects only cheap signals:
  - [x] Project folders: children of `~/Documents/projects`, of `web/`, and of other grouping folders such as `AI/` whose children look like projects
  - [x] Git: remote URL, first and last commit dates, commit count (from `git log`, not from the code)
  - [x] README: first heading and first paragraph
  - [x] `package.json`: name, description, framework dependencies (astro, react, vite, electron and similar)
  - [x] Live URL: `site` in the Astro config, `public/CNAME`, or a `*.nefzen.dev` / `github.io` link in the README
  - [x] Deploy workflow in `.github/workflows`, a built `dist/`, and the number of tracked files
- [x] Run it and write the table, sorted by last activity, to `project-exploration.research.md`
- [x] Add a suggested shortlist: projects that are live, recently active, or have a long history and a README
- [x] Check GitHub Pages and live URLs without running anything (`--github <user>`), note dark mode and polish per site
- [x] Mark the projects I choose in the research file (two rounds, see "Decisions")
- [ ] Look further for projects not found yet (other folders, private GitHub repos, Cloudflare Workers)
- [x] Create a follow-up task to add the chosen projects to the site: `project-showcase.task.md` (polish, look, SEO, DNS, cards)

## Boundaries

- Read-only on the projects: never edit, build or install anything in them.
- Gather signals only; don't read source code beyond the README and `package.json`.
- Skip `node_modules`, `.git` internals and large files.
- No GitHub writes: Claude never pushes or changes anything remote.

## Reference

- Site goals and audience: `PURPOSE.md`.
- Project cards: `src/pages/index.astro`, section "Things I made".
- Already featured: retro-watch (retrograde.nefzen.dev), philosophers-timeline (philo.nefzen.dev), yinamp (yinamp.nefzen.dev). Coming soon: singularity, Body Simulator.
- Live projects deploy to GitHub Pages under `*.nefzen.dev`; newer ones start from the `astro+bun` template in `~/Documents/projects/web/templates`.
- My history in `~/Documents/projects/AI/unarchive` may help describe older work. Exploring it is separate from this task.
