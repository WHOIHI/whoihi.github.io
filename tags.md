---
layout: page
title: 标签
subtitle: 按主题浏览全部文章
permalink: /tags/
---

{% assign sorted_tags = site.tags | sort %}

<div class="tag-cloud">
  {% for tag in sorted_tags %}
    <a class="tag tag-lg" href="{{ '/tags/' | append: tag[0] | append: '/' | relative_url }}">
      {{ tag[0] }} <span class="count">{{ tag[1] | size }}</span>
    </a>
  {% else %}
    <p class="empty">还没有标签。</p>
  {% endfor %}
</div>

{% for tag in sorted_tags %}
<section class="tag-section">
  <h2 class="tag-section-title">{{ tag[0] }}</h2>
  <ul class="archive-list">
    {% for post in tag[1] %}
    <li class="archive-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%Y-%m-%d' }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
