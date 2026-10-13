---
layout: page
title: 收藏的三个小工具
date: 2026-10-05 21:00:00 +0800
description: 一些每天都会用到、但很少被提起的轻量工具。
published: false
---

## 1. `rg`(ripgrep)

在项目里搜代码,比 `grep` 快一个数量级,而且默认忽略 `.gitignore`:

```bash
rg "TODO" --type md
```

## 2. `jq`

处理 JSON 的瑞士军刀。配合管道,能把一坨接口返回揉成想要的样子:

```bash
curl -s api.example.com/users | jq '.[] | {name, id}'
```

## 3. `bat`

`cat` 的加强版,带语法高亮和行号,读日志时心情都好一点:

```bash
bat _config.yml
```

工具不必多,顺手就好。
