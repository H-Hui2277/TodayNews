# 新闻数据源记录

## 可用的API/数据源

### 1. Dev.to (推荐)
**状态**: ✅ 可用
**API**: `https://dev.to/api/articles?tag={tag}&per_page=10`
**示例**:
- AI新闻: `https://dev.to/api/articles?tag=ai&per_page=10`
- 技术新闻: `https://dev.to/api/articles?tag=technology&per_page=10`

**返回字段**:
- title, description, url, published_timestamp
- tag_list, user.name, reading_time_minutes
- positive_reactions_count, comments_count

**特点**: 内容质量高，开发者社区文章，适合科技/AI资讯

---

### 2. GitHub API (可用)
**状态**: ✅ 可用
**API**: `https://api.github.com/repos/{owner}/{repo}`
**示例**:
- 趋势仓库: `https://api.github.com/search/repositories?q=AI+OR+LLM&sort=stars`

**特点**: 获取开源项目动态，了解最新热门仓库

---

### 3. Hacker News API (不稳定)
**状态**: ⚠️ 有时可用
**API**: `https://hacker-news.firebaseio.com/v0/topstories.json`
**获取详情**: `https://hacker-news.firebaseio.com/v0/item/{id}.json`

**特点**: 技术社区热点新闻，但API有时返回空

---

## 不可用的数据源

### Reddit
**状态**: ❌ 被阻止
**原因**: 需要认证或被防火墙阻止

### Google News RSS
**状态**: ❌ 无法访问
**原因**: 网络限制

### 传统新闻API
**状态**: ❌ 大部分需要API Key
**如**: NewsAPI, Bing News API

---

## 采集命令模板

```bash
# Dev.to AI新闻
curl -s "https://dev.to/api/articles?tag=ai&per_page=10"

# Dev.to 技术新闻
curl -s "https://dev.to/api/articles?tag=technology&per_page=10"

# Dev.to 特定关键词
curl -s "https://dev.to/api/articles?tag=openai&per_page=5"
```

---

## 可用的Tag标签

Dev.to支持的主要标签:
- `ai` - 人工智能
- `machinelearning` - 机器学习
- `technology` - 科技
- `programming` - 编程
- `webdev` - Web开发
- `opensource` - 开源
- `news` - 新闻
- `discuss` - 讨论
- `mcp` - Model Context Protocol
- `gemini` - Google Gemini
