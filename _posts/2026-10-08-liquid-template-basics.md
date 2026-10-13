---
layout: post
title: "Liquid 模板入门:让静态页面动起来"
date: 2026-10-08 09:30:00 +0800
categories: [技术]
tags: [liquid, jekyll, 模板]
description: Jekyll 使用 Liquid 作为模板语言。这篇笔记整理了最常用的标签、过滤器与变量。
published: false
---

Jekyll 的页面之所以能"动",靠的是 Liquid 模板语言。它只有三类语法,却足够强大。

## 三种基本语法

{% raw %}
| 语法 | 用途 | 示例 |
| --- | --- | --- |
| `{{ ... }}` | 输出变量 | `{{ page.title }}` |
| `{% ... %}` | 逻辑标签 | `{% if %}` `{% for %}` |
| `{%- -%}` | 去除空白 | 控制输出换行 |
{% endraw %}

## 常用标签

### 循环

```liquid
{% raw %}{% for post in site.posts %}
  <a href="{{ post.url }}">{{ post.title }}</a>
{% endfor %}{% endraw %}
```

### 条件

```liquid
{% raw %}{% if page.title %}
  <h1>{{ page.title }}</h1>
{% else %}
  <h1>未命名</h1>
{% endif %}{% endraw %}
```

### 包含片段

```liquid
{% raw %}{% include post-card.html post=post %}{% endraw %}
```

`include` 让公共结构只写一次,多处复用。

## 常用过滤器

过滤器用 `|` 串联,对输出做加工:

```liquid
{% raw %}{{ post.date | date: '%Y-%m-%d' }}
{{ post.excerpt | strip_html | truncate: 120 }}
{{ '/assets/css/style.css' | relative_url }}{% endraw %}
```

- `date` — 格式化日期
- `strip_html` — 去掉 HTML 标签
- `truncate` — 截断字符串
- `relative_url` — 自动补上 `baseurl`,部署到子目录时尤其重要

## 一个实用技巧

想按年份分组文章,可以这样:

```liquid
{% raw %}{% assign by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}{% endraw %}
```

`group_by_exp` 是 Jekyll 对 Liquid 的扩展,比手写循环干净得多。

掌握了这几条,Liquid 就基本够用了。
