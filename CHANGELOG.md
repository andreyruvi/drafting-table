# Changelog

All notable changes to this project are recorded here.
This project follows [Semantic Versioning](https://semver.org/).

## [1.0.0] — 2026-09-11

First release of drafting-table as a standalone project.

### Starting point

| | |
|---|---|
| Replaced a fork of | https://github.com/pages-themes/architect |
| Original authors | Jason Long, GitHub, Inc. |
| Original licence | CC0-1.0 (public domain dedication, no conditions) |
| This theme's licence | CC0-1.0 |

Because CC0 waives copyright entirely, nothing had to be preserved. The theme
was rewritten rather than reskinned; see `NOTICE.md` for the honest account of
what carried over (Jekyll's own conventions) and what did not.

### Added

**A project data model for building work.** Projects are a Jekyll collection in
`_projects/`, and each one declares the figures a drawing set carries: site
area, gross floor area, plot ratio, storeys, structure, status, building type,
software and scope. Every field is optional, so an early-stage project and a
completed one both render cleanly. The area unit is configurable, so a set in
square feet needs one line in `_config.yml`, not a find-and-replace.

**A sheet index instead of an image gallery.** Drawings are declared in
drawing-set order with sheet number, title, scale and paper size, and render
with a title block beside each one. A sheet with no image yet shows a labelled
placeholder carrying its number, so an in-progress set reads correctly instead
of showing broken images.

**A print stylesheet that produces a sheet.** A4 portrait by default with an A3
landscape page rule available, serif body text, navigation and the viewer
dropped, the specification table and title blocks kept, `break-inside: avoid`
on each sheet so none is split across a page, and link targets printed after
their text. The original theme's print styles were a narrowed web page.

**An accessible drawing viewer.** Sheet images open full-screen so a plan can be
read: the dialog takes focus, Tab is trapped, Escape closes, focus returns to
the thumbnail, and the backdrop is clickable. With JavaScript off the links
still open the image directly.

**Four layouts and a small include API** — `default`, `home`, `page`,
`project`, plus `head`, `masthead`, `colophon` and `spec-table` — so a site can
override one piece without forking the theme.

**A stylesheet built on design tokens**, with a full dark theme via
`prefers-color-scheme`, tabular figures on every number, visible focus rings,
`prefers-reduced-motion` honoured, and a layout that reflows to one column at
phone width.

**CI that actually checks the theme.** Every push builds the site with Jekyll —
which fails on any Liquid or Sass error — then asserts that the expected pages
and assets were generated, that the project layout rendered its data (headings,
a real area figure, a sheet number, a scale), and that the accessibility
scaffolding is present. The original theme had a build script but no assertions
about output.

### Removed

- The web fonts and background images of the original theme, in favour of a
  system font stack and CSS-drawn surfaces.
- The Google Analytics include.
- The `html5shiv` conditional comment for Internet Explorer 8.
- The download-as-zip/tarball sidebar buttons, which belong to a code project
  rather than a portfolio.
