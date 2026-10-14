# Close the door and see the scenery

个人博客 —— 基于 [Jekyll](https://jekyllrb.com/) + [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) 主题,部署在 GitHub Pages。

- 线上地址:<https://1985891.xyz>
- 仓库:<https://github.com/WHOIHI/whoihi.github.io>

## 本地运行

```bash
# 首次:安装依赖
bundle install

# 本地预览(默认 http://127.0.0.1:4000)
bundle exec jekyll serve

# 只构建
bundle exec jekyll build
```

> Windows 上 `bundle install` 需要 C 编译环境(`wdm` gem)。若没有 DevKit,可改用
> `jekyll serve` / `jekyll build` 直接运行(跳过 Bundler)。

## 部署

推送到 `main` 分支后,GitHub Actions(`.github/workflows/pages-deploy.yml`)会自动构建并发布。

> 仓库设置里需要把 **Settings → Pages → Source** 选为 **GitHub Actions**。
> 自定义域名 `1985891.xyz` 由根目录的 `CNAME` 文件维持。

## 目录结构

```text
.
├── _config.yml              # 站点配置(站名、URL、头像、评论、分页等)
├── CNAME                    # 自定义域名
├── Gemfile                  # Ruby 依赖(主题以 gem 方式引入)
├── .github/workflows/       # GitHub Actions 部署工作流
├── _data/
│   ├── contact.yml          # 侧栏联系图标
│   └── share.yml            # 文章底部分享按钮
├── _plugins/                # 自定义插件(文章最后修改时间)
├── _posts/                  # 博客文章(Markdown)
├── _tabs/                   # 页面:关于 / 归档 / 分类 / 标签
├── assets/                  # 头像等自定义资源
├── index.html               # 首页
└── tools/                   # 本地运行脚本
```

主题本身的模板、样式、脚本由 `jekyll-theme-chirpy` gem 提供,不在本仓库内;
只有需要覆盖时才在对应目录(`_includes/`、`_layouts/`、`_sass/`、`assets/`)放同名文件。

## 写一篇新文章

在 `_posts/` 下新建 `YYYY-MM-DD-标题.md`:

```yaml
---
title: "文章标题"
date: 2026-10-14 10:00:00 +0800
categories: [技术, 前端]
tags: [AI]
description: 一句话摘要,会显示在列表和 SEO 元信息里。
pin: false            # 设为 true 可置顶
toc: true             # 是否显示右侧目录
---
```

正文用 Markdown 书写。URL 规则为 `/:year/:month/:day/:title/`(在 `_config.yml` 的 `defaults` 中配置),
与迁移前的旧站保持一致。

### 其他常用写法

- 提示块:`{: .prompt-tip }` / `.prompt-info` / `.prompt-warning` / `.prompt-danger`
- 数学公式:行内 `$$ ... $$`,块级用 `$$` 独占一行
- Mermaid 图表:代码块语言写 `mermaid`
- 图片路径默认放在 `/assets/img/` 下,用相对路径引用

完整语法见 [Chirpy 官方文档](https://github.com/cotes2020/jekyll-theme-chirpy/wiki)。

## 自定义

| 想改什么 | 改哪里 |
| --- | --- |
| 站名 / 副标题 / 描述 | `_config.yml` 顶部 |
| 头像 | `assets/img/avatar.png`,路径在 `_config.yml` 的 `avatar` |
| 侧栏联系图标 | `_data/contact.yml` |
| 分享按钮 | `_data/share.yml` |
| 评论系统 | `_config.yml` 的 `comments`(支持 giscus / utterances / disqus) |
| 页面顺序 | `_tabs/*.md` 里的 `order` 字段 |
| 深浅色默认 | `_config.yml` 的 `theme_mode`(留空则跟随系统) |

## 注意

- 标签归档页由 `jekyll-archives` 生成,标签名会被转成小写 slug(例如标签 `AI` → `/tags/ai/`)。
- 文章里若要展示 Liquid 语法(`{{ ... }}`、`{% ... %}`),必须用 `{% raw %}...{% endraw %}` 包裹。
- `Gemfile.lock` 未纳入版本控制:本地(Windows)与 CI(Linux)平台不同,各自解析依赖更稳妥。
