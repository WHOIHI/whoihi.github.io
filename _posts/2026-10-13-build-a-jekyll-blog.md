---
layout: post
title: "用 Jekyll 从零搭建一个静态博客"
date: 2026-10-13 10:00:00 +0800
categories: [技术]
tags: [jekyll, 静态站点, 博客]
description: 从安装环境到本地预览,完整走一遍 Jekyll 站点的搭建流程,并解释每个目录的作用。
published: false
---

Jekyll 是一个把 Markdown 编译成静态网页的工具。它没有数据库、没有后台,所有内容都是文件——这让写作变得异常轻快。

## 一、环境准备

Jekyll 需要 Ruby。装好之后安装 Jekyll 与 Bundler:

```bash
gem install jekyll bundler
jekyll -v   # 应输出类似 jekyll 4.4.x
```

## 二、目录结构

一个标准的 Jekyll 站点长这样:

```text
.
├── _config.yml     # 全局配置
├── _posts/         # 文章(Markdown)
├── _layouts/       # 页面骨架
├── _includes/      # 可复用片段
├── _site/          # 构建产物(自动生成)
├── assets/         # CSS / JS / 图片
└── index.html      # 首页
```

下划线开头的目录不会被直接输出,它们只在构建时参与渲染。

## 三、写一篇文章

在 `_posts/` 下新建 `2026-10-13-hello.md`,开头写上 Front Matter:

```yaml
---
layout: post
title: "Hello Jekyll"
date: 2026-10-13 10:00:00 +0800
categories: [随笔]
tags: [hello]
---
```

正文用 Markdown 写即可。Jekyll 会读取文件名里的日期,并按 `_config.yml` 中配置的 `permalink` 规则生成链接。

## 四、本地预览

```bash
bundle exec jekyll serve
```

然后打开 <http://127.0.0.1:4000> 就能看到站点。修改文件后会自动重新构建。

> 小提示:如果 `serve` 报错,可以先用 `bundle exec jekyll build` 只做构建,再用任意静态服务器托管 `_site` 目录。

## 五、部署

最常见的做法是推到 GitHub,开启仓库的 GitHub Pages,选择 `main` 分支即可自动构建上线。

到这里,一个可用的静态博客就跑起来了。接下来要做的,只是持续地写。
