source "https://rubygems.org"

# 使用 GitHub Pages 时,可改为:gem "github-pages", group: :jekyll_plugins
gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
end

# Windows 下的时区支持
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Windows 下文件监听支持(需要编译环境;若安装失败可注释掉,
# 并用 `jekyll build` + 静态服务器替代 `jekyll serve --watch`)
# gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# 本地服务器与监听
gem "webrick", "~> 1.8"
