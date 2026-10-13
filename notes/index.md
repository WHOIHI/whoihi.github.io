---
layout: page
title: 笔记
subtitle: 短小的想法与速记
permalink: /notes/
---

<div class="notes-grid">
  {% assign notes = site.notes | sort: 'date' | reverse %}
  {% for note in notes %}
    <a class="note-card" href="{{ note.url | relative_url }}">
      <h3>{{ note.title }}</h3>
      <p>{{ note.description | default: note.excerpt | strip_html | truncate: 90 }}</p>
      <time datetime="{{ note.date | date_to_xmlschema }}">{{ note.date | date: '%Y-%m-%d' }}</time>
    </a>
  {% else %}
    <p class="empty">还没有笔记。在 <code>_notes</code> 目录新建 <code>标题.md</code> 即可。</p>
  {% endfor %}
</div>
