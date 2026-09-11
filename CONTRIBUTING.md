# Contributing

## Running the site locally

```bash
git clone https://github.com/andreyruvi/drafting-table.git
cd drafting-table
bundle install
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000.

`bundle install` needs Ruby and Bundler. The `Gemfile` pins the `github-pages`
gem, so a local preview matches what GitHub Pages builds.

## Using the theme on another site

Add it as a remote theme in that site's `_config.yml`:

```yaml
remote_theme: andreyruvi/drafting-table
plugins:
  - jekyll-seo-tag
```

Then copy the `collections:`, `defaults:`, `studio:` and `units:` blocks from
this repository's `_config.yml`, and put your own project files in `_projects/`.

## House rules

- Keep every project field optional. A project page must render correctly when
  a field is missing — that is the difference between a theme a working
  designer can use and one that needs every box filled in.
- A drawing that has no image gets a labelled placeholder, never a broken image
  and never a stock photo standing in for real work.
- Screen styles and print styles are both deliverables. A change to the project
  layout needs checking on paper as well as on screen.
- Colours come from the tokens at the top of `_sass/drafting-table.scss`, and
  every token needs a dark-theme value.
- CI builds the site and asserts on the output. If you add a layout feature,
  add the assertion that proves it rendered.
