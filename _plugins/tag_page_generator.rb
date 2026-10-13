module Jekyll
  # 为每个标签生成一个 /tags/<标签>/ 页面,保持与旧站 URL 一致。
  class TagPage < Page
    def initialize(site, base, tag, posts)
      @site = site
      @base = base
      @dir  = File.join("tags", tag.to_s)
      @name = "index.html"

      process(@name)
      read_yaml(File.join(base, "_layouts"), "tag.html")

      data["tag"]   = tag
      data["posts"] = posts
      data["title"] = "标签:#{tag}"
    end
  end

  class TagPageGenerator < Generator
    safe true
    priority :low

    def generate(site)
      grouped = Hash.new { |h, k| h[k] = [] }
      site.posts.docs.each do |post|
        post.data["tags"].to_a.each { |tag| grouped[tag] << post }
      end

      grouped.each do |tag, posts|
        site.pages << TagPage.new(site, site.source, tag, posts)
      end
    end
  end
end
