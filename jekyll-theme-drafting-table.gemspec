# frozen_string_literal: true

Gem::Specification.new do |s|
  s.name        = "jekyll-theme-drafting-table"
  s.version     = "1.0.0"
  s.license     = "CC0-1.0"
  s.authors     = ["Duong L."]
  s.homepage    = "https://github.com/andreyruvi/drafting-table"
  s.summary     = "A Jekyll portfolio theme for building designers and drafters"
  s.description = "A portfolio theme whose project pages carry drawing-set " \
                  "metadata — GFA, site area, plot ratio, storeys, services — " \
                  "and print to paper sheet sizes."

  s.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  s.required_ruby_version = ">= 2.7.0"
  s.platform = Gem::Platform::RUBY

  s.add_runtime_dependency "jekyll", "> 3.5", "< 5.0"
  s.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
end
