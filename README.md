# Close the door and see the scenery

个人博客 —— 基于 [Jekyll](https://jekyllrb.com/) 的静态站点,部署在 GitHub Pages。

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

# 清理构建产物
bundle exec jekyll clean
```

## 部署

推送到 `main` 分支后,GitHub Actions(`.github/workflows/pages.yml`)会自动:

1. 用 Ruby 3.4 安装依赖
2. 执行 `jekyll build` 生成 `_site`
3. 发布到 GitHub Pages

> 仓库设置里需要把 **Settings → Pages → Source** 选为 **GitHub Actions**。
> 自定义域名 `1985891.xyz` 由仓库根目录的 `CNAME` 文件维持。

## 目录结构

```text
.
├── _config.yml              # 站点配置(站名、URL、导航、插件)
├── CNAME                    # 自定义域名
├── Gemfile                  # Ruby 依赖
├── .github/workflows/       # GitHub Actions 部署工作流
├── _layouts/                # 页面布局
│   ├── default.html         # 基础骨架
│   ├── home.html            # 首页
│   ├── post.html            # 文章页
│   ├── page.html            # 普通页面
│   └── tag.html             # 标签页
├── _includes/               # 可复用片段
├── _plugins/                # 自定义插件(标签页生成器)
├── _posts/                  # 博客文章(Markdown)
├── _notes/                  # 短笔记(集合)
├── assets/                  # CSS / JS / 图片
├── index.html               # 首页
├── about.md                 # 关于
├── archive.md               # 归档(/archives/)
├── tags.md                  # 标签总览(/tags/)
└── 404.html                 # 404 页
```

## 写一篇新文章

在 `_posts/` 下新建 `YYYY-MM-DD-标题.md`,开头加 Front Matter:

```yaml
---
layout: post
title: "文章标题"
date: 2026-10-13 10:00:00 +0800
categories: [技术]
tags: [AI]
description: 一句话摘要,会显示在列表和 SEO 元信息里。
---
```

正文用 Markdown 书写。URL 由 `_config.yml` 的 `permalink` 决定:`/:year/:month/:day/:title/`。

### 关于草稿

Front Matter 里写 `published: false` 的文章不会出现在构建结果中,但会保留在仓库里。
`_posts/` 下三篇早期示例文章和 `_notes/` 下的两篇示例目前就是这样处理的,可以随时改成 `true` 或直接删掉。

## 自定义

| 想改什么 | 改哪里 |
| --- | --- |
| 站名 / 描述 / 作者 | `_config.yml` 顶部 |
| 导航菜单 | `_config.yml` 的 `nav` |
| 社交链接 | `_config.yml` 的 `social` |
| 主题色 / 字体 | `assets/css/style.css` 顶部的 `:root` 变量 |
| 页面结构 | `_layouts/` 与 `_includes/` |

## 注意

- 文章里若要展示 Liquid 语法(`{{ ... }}`、`{% ... %}`),必须用 `{% raw %}...{% endraw %}` 包裹,否则构建会报语法错误。
- `Gemfile.lock` 未纳入版本控制:本地(Windows)与 CI(Linux)平台不同,各自解析依赖更稳妥。
