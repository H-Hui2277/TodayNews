# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**今日要闻 (TodayNews)** - 一个简单的本地新闻记录与展示系统，用于收集和展示AI、科技领域的最新资讯。

## Project Structure

```
TodayNews/
├── data/                    # 数据存储目录
│   ├── news.json            # 主索引文件（备份）
│   └── news-YYYY-MM.json    # 按月份拆分的数据文件
├── public/                  # 前端展示
│   ├── index.html           # 主页面
│   ├── css/style.css        # 样式文件
│   └── js/app.js            # 前端逻辑（含内嵌数据）
├── start.bat                # 一键启动服务器（可选）
└── CLAUDE.md                # 项目说明
```

## How to Run

**两种方式都可以**：

### 方式1: 直接双击打开（推荐）
直接双击 `public/index.html` 即可查看，因为数据已内嵌到JS中。

### 方式2: HTTP服务器
如果需要实时从JSON加载：
```bash
cd public
python -m http.server 8080
# 访问 http://localhost:8080
```

## Git Workflow

### 提交代码步骤

**每次更新新闻前，必须先拉取最新代码：**

```bash
# 1. 拉取最新代码
git pull origin main

# 2. 添加要提交的文件
git add public/js/app.js data/news.json data/news-YYYY-MM.json

# 3. 提交（使用conventional commits格式）
git commit -m "feat: 添加2026年3月AI要闻

- 更新5条AI要闻
- 修复前端CORS问题，使用内嵌数据"

# 4. 推送到远程
git push origin main
```

### 提交格式

```
<type>: <description>

<optional body>
```

Types:
- `feat`: 新功能（新增新闻）
- `fix`: 修复问题
- `refactor`: 重构
- `docs`: 文档更新
- `chore`: 其他更新

## Update News Workflow

当用户要求更新新闻时，按以下步骤操作：

### 1. 拉取最新代码（必须）
```bash
git pull origin main
```

### 2. 查询新闻
```bash
# Dev.to AI新闻 (推荐)
curl -s "https://dev.to/api/articles?tag=ai&per_page=10"

# Dev.to 技术新闻
curl -s "https://dev.to/api/articles?tag=technology&per_page=10"

# Dev.to 特定主题
curl -s "https://dev.to/api/articles?tag=openai&per_page=5"
curl -s "https://dev.to/api/articles?tag=gemini&per_page=5"
curl -s "https://dev.to/api/articles?tag=machinelearning&per_page=5"
```

### 3. 整理新闻
每条新闻需要包含：
- `title`: 标题
- `summary`: 100-200字摘要
- `category`: ai 或 tech
- `source`: 来源媒体
- `url`: 原文链接
- `publishedAt`: 发布日期 (YYYY-MM-DD)
- `createdAt`: 收录时间 (ISO格式)
- `tags`: 相关标签数组

### 4. 写入数据（重要：两处都要更新！）

**必须同时更新以下两个文件：**

1. `data/news.json` - 数据备份
2. `public/js/app.js` - 前端显示用的NEWS_DATA变量

在 `public/js/app.js` 中更新 `NEWS_DATA.articles` 数组，并更新 `lastUpdated` 时间戳。

### 5. 提交代码
```bash
git add public/js/app.js data/news.json
git commit -m "feat: 添加X条AI/科技要闻"
git push origin main
```

### 6. 告知用户
告诉用户更新了多少条新闻，分类情况。

## Data Format

```json
{
  "id": "ai-2026-0304-001",
  "title": "新闻标题",
  "summary": "摘要内容",
  "category": "ai",
  "source": "来源",
  "url": "链接",
  "publishedAt": "2026-03-04",
  "createdAt": "2026-03-04T12:00:00Z",
  "tags": ["标签1", "标签2"]
}
```

## Categories

- **ai**: AI要闻 - 大模型、AI应用、行业动态、研究突破
- **tech**: 科技要闻 - 硬件、互联网公司、行业趋势
