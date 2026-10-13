module Jekyll
  # 为每个分类生成一个 /categories/<分类>/ 页面。
  class CategoryPage < Page
    def initialize(site, base, category, posts)
      @site = site
      @base = base
      @dir  = File.join("categories", category.to_s)
      @name = "index.html"

      process(@name)
      read_yaml(File.join(base, "_layouts"), "category.html")

      data["category"] = category
      data["posts"]    = posts
      data["title"]    = "分类:#{category}"
    end
  end

  class CategoryPageGenerator < Generator
    safe true
    priority :low

    def generate(site)
      grouped = Hash.new { |h, k| h[k] = [] }
      site.posts.docs.each do |post|
        post.data["categories"].to_a.each { |cat| grouped[cat] << post }
      end

      grouped.each do |category, posts|
        site.pages << CategoryPage.new(site, site.source, category, posts)
      end
    end
  end
end
