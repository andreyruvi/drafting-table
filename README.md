# drafting-table

A Jekyll portfolio theme for building designers, drafters and BIM consultants.

Most portfolio themes are built for photographers: a big image, a caption, next
slide. A building project is not that. It has a site area, a gross floor area, a
plot ratio, a storey count, a structure, a scope of services, and a set of
drawings with sheet numbers and scales. This theme is built around those.

**Live demo:** https://andreyruvi.github.io/drafting-table/

<!--
  Screenshots go in docs/screenshots/ and are referenced here once captured.
  ![Project index](docs/screenshots/home.png)
  ![A project page with its data table and sheet index](docs/screenshots/project.png)
-->

## What it does differently

- **Project data table.** Site area, GFA, plot ratio, storeys, structure,
  status, building type, software and scope — each one optional, so a concept
  project and a completed one both read cleanly.
- **A sheet index, not an image wall.** Drawings are listed in drawing-set order
  with sheet number, title, scale and paper size, each with a title block.
- **Unpublished drawings are labelled, not broken.** A sheet with no image yet
  renders a placeholder carrying its sheet number.
- **It prints properly.** A4 portrait by default (A3 landscape available),
  serif body text, navigation dropped, the data table and title blocks kept, and
  no sheet split across a page break.
- **Configurable units.** One line switches every area on the site between m²
  and square feet.
- **Accessible drawing viewer.** Full-screen sheet images with focus handling,
  focus trapping, Escape to close, and a working no-JavaScript fallback.
- **Dark theme**, tabular figures, visible focus rings, reduced-motion honoured.
- **No web fonts, no CDN, no analytics, no JavaScript dependencies.**

## Installation

### As a remote theme on your own site

In your site's `_config.yml`:

```yaml
remote_theme: andreyruvi/drafting-table
plugins:
  - jekyll-seo-tag
```

Then copy the `collections:`, `defaults:`, `studio:` and `units:` blocks from
[this repository's `_config.yml`](_config.yml), and add your projects to
`_projects/`.

### Running this repository directly

```bash
git clone https://github.com/andreyruvi/drafting-table.git
cd drafting-table
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000. This repository is both the theme and its own demo
site, so there is no `theme:` key in `_config.yml` — Jekyll uses the layouts and
styles in place.

## Usage

### Adding a project

Create `_projects/your-project.md`:

```yaml
---
title: Riverside Townhouses
subtitle: Six-unit terrace on a constrained river plot.
year: 2025
client: Example Developer Ltd
location: Example City
status: Permit set issued
building_type: Residential terrace
site_area: 1240
gfa: 2180
plot_ratio: 1.76
storeys: 3
structure: Reinforced concrete frame, brick infill
software: [Revit, AutoCAD, Lumion]
services:
  - Architectural permit drawing set
  - Structural and MEP coordination model
cover: /assets/projects/riverside/cover.jpg
cover_alt: Street view of the completed terrace
sheets:
  - number: A-101
    title: Site plan
    scale: "1:200"
    paper: A2
    image: /assets/projects/riverside/a-101.png
    alt: Site plan showing the six units and the river setback
---

Write the project description here, in Markdown.
```

Everything is optional except `title`. Omit a field and its row does not appear.

### Configuration

```yaml
studio:
  name: Architectural Design Studio
  role: Building design and BIM
  location: Vietnam
  email: you@example.com

units:
  area: "m²"        # or "sq ft"

nav:
  - title: Projects
    url: /
  - title: About
    url: /about/
```

### Images

Put project images under `assets/`. Drawings are best exported as PNG at a
readable width (1600–2400px); photographs and renders as JPEG. Cover images are
cropped to 4:3 in the project grid, so keep the subject central.

Always write an `alt` for a drawing that says what it shows — "Site plan showing
the six units and the river setback", not "site plan". That text is what a
screen-reader user gets instead of the drawing.

## Development

```bash
bundle exec jekyll build        # fails on any Liquid or Sass error
```

CI runs the same build on every push, then asserts that the expected pages and
assets were generated, that the project layout rendered its data, and that the
accessibility scaffolding is present.

## Project structure

```
drafting-table/
├── _config.yml                    demo site + theme configuration
├── _layouts/
│   ├── default.html               shell: head, masthead, main, colophon
│   ├── home.html                  project index grid
│   ├── project.html               data table, description, sheet index
│   └── page.html                  plain content page
├── _includes/
│   ├── head.html                  meta, SEO tag, stylesheets
│   ├── masthead.html              wordmark and navigation
│   ├── colophon.html              footer
│   └── spec-table.html            the project data table
├── _sass/
│   ├── drafting-table.scss        tokens, layout, components, dark theme
│   └── drafting-table-print.scss  A4/A3 sheet output
├── assets/
│   ├── css/style.scss             screen entry point
│   ├── css/print.scss             print entry point
│   └── js/lightbox.js             accessible drawing viewer
├── _projects/                     one Markdown file per project
├── index.md                       project index page
└── about.md                       about page
```

## Credits

This theme replaces a fork of
[pages-themes/architect](https://github.com/pages-themes/architect) by Jason
Long and GitHub, Inc., released under CC0-1.0. CC0 is a public-domain
dedication and requires no attribution; the credit is given anyway.
[NOTICE.md](NOTICE.md) sets out exactly what carried over — Jekyll's own theme
conventions — and what is new work here. [CHANGELOG.md](CHANGELOG.md) records
the detail.

This is not the Architect theme, is not endorsed by its authors, and uses none
of its name or branding.

## License

[CC0-1.0](LICENSE) — the same public-domain dedication the original carried, so
you may do anything you like with this, including using it commercially without
crediting anyone.
