---
layout: page
title: 归档
subtitle: 按年份浏览全部文章
permalink: /archives/
---

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
<section class="archive-year">
  <h2 class="archive-year-title">{{ year.name }} <span class="count">{{ year.items | size }}</span></h2>
  <ul class="archive-list">
    {% for post in year.items %}
    <li class="archive-item">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: '%m-%d' }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</section>
{% else %}
<p class="empty">还没有文章,快去 <code>_posts</code> 目录写下第一篇吧。</p>
{% endfor %}
