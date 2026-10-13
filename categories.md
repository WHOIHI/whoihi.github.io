---
layout: page
title: 分类
subtitle: 按分类浏览全部文章
permalink: /categories/
---

{% assign sorted_cats = site.categories | sort %}

<div class="classify-filter">
  <a class="tag-filter active" data-cat="all" href="#all">全部 <span class="count">{{ site.posts | size }}</span></a>
  {% for cat in sorted_cats %}
    <a class="tag-filter" data-cat="{{ cat[0] }}" href="#{{ cat[0] }}">{{ cat[0] }} <span class="count">{{ cat[1] | size }}</span></a>
  {% endfor %}
</div>

{% for cat in sorted_cats %}
<section class="classify-section" data-cat="{{ cat[0] }}" id="{{ cat[0] }}">
  <h2 class="classify-title">
    <a href="{{ '/categories/' | append: cat[0] | append: '/' | relative_url }}">{{ cat[0] }}</a>
    <span class="count">{{ cat[1] | size }}</span>
  </h2>

  <ul class="classify-list">
    {% for post in cat[1] %}
    <li class="classify-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y-%m-%d' }}</time>
      <a class="classify-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="classify-badges">
        {% for t in post.tags %}
          <a class="tag" href="{{ '/tags/' | append: t | append: '/' | relative_url }}">{{ t }}</a>
        {% endfor %}
      </span>
    </li>
    {% endfor %}
  </ul>
</section>
{% else %}
<p class="empty">还没有文章,快去 <code>_posts</code> 目录写下第一篇吧。</p>
{% endfor %}
