// ==================== News Data ====================
// 直接内嵌数据，避免CORS问题
const NEWS_DATA = {
  "lastUpdated": "2026-03-04T14:00:00Z",
  "categories": [
    { "id": "ai", "name": "AI要闻", "description": "AI领域动态", "color": "#0ea5e9" },
    { "id": "tech", "name": "科技要闻", "description": "科技行业资讯", "color": "#06b6d4" }
  ],
  "articles": [
    {
      "id": "ai-2026-0304-006",
      "title": "构建CommonTrace：神经科学启发的AI编码代理知识库",
      "summary": "当AI编码代理在凌晨2点修复了一个棘手的部署问题后，这些知识在会话结束时就消失了。开发者构建了CommonTrace，一个受神经科学启发的知识库系统，让AI代理能够积累和共享知识。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/sheilles_/building-commontrace-a-neuroscience-inspired-knowledge-base-for-ai-coding-agents-c5e",
      "publishedAt": "2026-03-04",
      "createdAt": "2026-03-04T13:19:00Z",
      "tags": ["AI Agent", "知识库", "开源"]
    },
    {
      "id": "ai-2026-0304-007",
      "title": "比Perplexity更便宜、完全本地化的AI研究工具",
      "summary": "如果用过Perplexity Deep Research，你可能会感受到它的强大但价格昂贵。开发者构建了Agent Browser Workspace，一个本地运行的AI研究工具，价格更低且支持任何AI代理。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/kolomeitsev/cheaper-than-perplexity-but-local-and-works-with-any-agent-agent-browser-workspace-17bo",
      "publishedAt": "2026-03-04",
      "createdAt": "2026-03-04T12:49:00Z",
      "tags": ["AI研究", "本地化", "Perplexity"]
    },
    {
      "id": "ai-2026-0304-008",
      "title": "我构建了一个让Claude能图片水印的MCP服务器",
      "summary": "开发者构建了一个MCP服务器，让Claude能够为图片添加水印。这个工具可以帮助内容创作者轻松保护他们的图像作品。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/whitemarmot/i-built-an-mcp-server-that-lets-claude-watermark-images-heres-how-46mk",
      "publishedAt": "2026-03-04",
      "createdAt": "2026-03-04T13:20:00Z",
      "tags": ["MCP", "图片处理", "Claude"]
    },
    {
      "id": "ai-2026-0304-009",
      "title": "我构建了一个本地PR审核界面用于Claude Code计划",
      "summary": "开发者构建了一个GitHub PR审核UI，专门用于Claude Code生成的代码审查计划，帮助开发者更好地理解和审核AI生成的代码更改。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/eduardmaghakyan/building-a-local-pr-review-interface-for-claude-code-plans-57o2",
      "publishedAt": "2026-03-04",
      "createdAt": "2026-03-04T00:27:00Z",
      "tags": ["Claude Code", "PR审核", "工具"]
    },
    {
      "id": "ai-2026-0304-010",
      "title": "TokenBar - 一个精致的macOS Token管理工具",
      "summary": "开发者分享了一个名为TokenBar的macOS小工具，用于管理API Token。发布后获得了100+安装量，这个简单但实用的工具受到了开发者社区的欢迎。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/jack__altman__/i-launched-a-tiny-macos-tool-yesterday-and-woke-up-to-100-installs-280i",
      "publishedAt": "2026-03-04",
      "createdAt": "2026-03-04T06:00:00Z",
      "tags": ["macOS", "工具", "Token管理"]
    },
    {
      "id": "ai-2026-0304-001",
      "title": "Gemini 3.1 Flash-Lite 发布 - AI模型成本进一步降低",
      "summary": "Google发布了Gemini 3.1 Flash-Lite，这是一款针对开发者优化的高速模型。Flash-Lite保持了高质量输出的同时，大幅降低了推理成本，使得更多开发者能够负担得起使用强大的AI能力。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/ben/oooh-very-interesting-ohk",
      "publishedAt": "2026-03-03",
      "createdAt": "2026-03-04T12:40:00Z",
      "tags": ["Google", "Gemini", "大模型"]
    },
    {
      "id": "ai-2026-0304-002",
      "title": "我使用8个AI Agent部门运营单人公司",
      "summary": "开发者构建了8个AI Agent部门来运营公司，包括CEO、CFO、COO、律师、会计、市场营销、CTO和改进者。这些AI Agent共享内存、相互咨询并能够自我改进。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/setas/i-run-a-solo-company-with-ai-agent-departments-50nf",
      "publishedAt": "2026-03-03",
      "createdAt": "2026-03-04T12:41:00Z",
      "tags": ["AI Agent", "自动化", "创业"]
    },
    {
      "id": "ai-2026-0304-003",
      "title": "我创建了一个企业级MCP网关",
      "summary": "当开始构建超越简单实验的AI应用时，一切都变得不同。模型需要企业级的可靠性，安全性和可扩展性。作者分享了如何构建企业级MCP网关。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/anthonymax/i-created-an-enterprise-mcp-gateway-bg",
      "publishedAt": "2026-03-03",
      "createdAt": "2026-03-04T12:42:00Z",
      "tags": ["MCP", "企业级", "架构"]
    },
    {
      "id": "ai-2026-0304-004",
      "title": "我构建了一个AI文献综述自动化工具",
      "summary": "如果你曾经需要做系统性的文献综述，这位开发者构建了一个AI工具来自动化整个文献综述流程，大大提高了研究效率。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/devfuad/i-built-an-ai-that-automates-literature-reviews-heres-how-it-works-under-the-hood-5gpk",
      "publishedAt": "2026-03-03",
      "createdAt": "2026-03-04T12:43:00Z",
      "tags": ["AI应用", "研究", "工具"]
    },
    {
      "id": "ai-2026-0304-005",
      "title": "我构建了一个免费的AI工具目录(500+工具)",
      "summary": "ai123.help是一个全面的免费AI工具目录，帮助用户发现和比较各种AI工具，包含500多个AI工具并提供工具比较和提示词模板功能。",
      "category": "ai",
      "source": "Dev.to",
      "url": "https://dev.to/aimin_wang_7060db4544e521/i-built-a-free-ai-tools-directory-with-500-tools-comparisons-prompt-templates-3hpa",
      "publishedAt": "2026-03-04",
      "createdAt": "2026-03-04T12:44:00Z",
      "tags": ["AI工具", "目录", "资源"]
    }
  ]
};

// ==================== App Configuration ====================
const CONFIG = {
  useEmbedded: true,
  defaultCategory: 'all',
  itemsPerPage: 5  // 每页显示5条
};

// ==================== State ====================
let currentCategory = CONFIG.defaultCategory;
let currentPage = 1;
let newsData = null;

// ==================== DOM Elements ====================
const elements = {
  newsList: document.getElementById('newsList'),
  emptyState: document.getElementById('emptyState'),
  lastUpdated: document.getElementById('lastUpdated'),
  countAll: document.getElementById('count-all'),
  countAi: document.getElementById('count-ai'),
  countTech: document.getElementById('count-tech'),
  categoryBtns: document.querySelectorAll('.category-btn'),
  pagination: document.getElementById('pagination'),
  prevPage: document.getElementById('prevPage'),
  nextPage: document.getElementById('nextPage'),
  pageNumbers: document.getElementById('pageNumbers'),
  pageInfo: document.getElementById('pageInfo')
};

// ==================== Initialize ====================
function init() {
  try {
    loadData();
    renderCounts();
    renderNews();
    setupEventListeners();
  } catch (error) {
    console.error('Failed to initialize:', error);
    showEmptyState();
  }
}

// ==================== Data Loading ====================
function loadData() {
  if (CONFIG.useEmbedded) {
    newsData = NEWS_DATA;
  } else {
    throw new Error('Use embedded data');
  }
}

// ==================== Rendering ====================
function renderCounts() {
  const articles = getFilteredArticles();
  const aiCount = articles.filter(a => a.category === 'ai').length;
  const techCount = articles.filter(a => a.category === 'tech').length;

  elements.countAll.textContent = articles.length;
  elements.countAi.textContent = aiCount;
  elements.countTech.textContent = techCount;
}

function getFilteredArticles() {
  if (currentCategory === CONFIG.defaultCategory) {
    return newsData?.articles || [];
  }
  return (newsData?.articles || []).filter(a => a.category === currentCategory);
}

function getTotalPages() {
  const articles = getFilteredArticles();
  return Math.ceil(articles.length / CONFIG.itemsPerPage);
}

function getCurrentPageArticles() {
  const articles = getFilteredArticles()
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const start = (currentPage - 1) * CONFIG.itemsPerPage;
  const end = start + CONFIG.itemsPerPage;
  return articles.slice(start, end);
}

function renderNews() {
  const articles = getCurrentPageArticles();
  const totalPages = getTotalPages();

  if (getFilteredArticles().length === 0) {
    showEmptyState();
    hidePagination();
    return;
  }

  hideEmptyState();

  if (totalPages <= 1) {
    hidePagination();
  } else {
    showPagination();
    renderPagination(totalPages);
  }

  elements.newsList.innerHTML = articles.map(article => createNewsItem(article)).join('');
  updatePageInfo();
}

function createNewsItem(article) {
  const categoryInfo = getCategoryInfo(article.category);
  const date = formatDate(article.publishedAt);
  const time = formatTime(article.publishedAt);
  const tags = article.tags || [];

  return `
    <article class="news-item">
      <div class="news-date-badge">
        <span class="news-date-day">${date.day}</span>
        <span class="news-date-month">${date.month}</span>
      </div>
      <div class="news-content">
        <div class="news-header">
          <span class="news-category ${article.category}">
            ${categoryInfo.icon} ${categoryInfo.name}
          </span>
          <span class="news-time">${time}</span>
        </div>
        <h2 class="news-title">
          <a href="${article.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(article.title)}</a>
        </h2>
        <p class="news-summary">${escapeHtml(article.summary)}</p>
        <div class="news-meta">
          <span class="news-source">${escapeHtml(article.source)}</span>
          ${tags.length > 0 ? `
            <div class="news-tags">
              ${tags.slice(0, 3).map(tag => `<span class="news-tag">${escapeHtml(tag)}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

function getCategoryInfo(categoryId) {
  const categories = newsData?.categories || [];
  const category = categories.find(c => c.id === categoryId);
  const icons = { ai: '🤖', tech: '💻' };
  return {
    name: category?.name || (categoryId === 'ai' ? 'AI要闻' : '科技要闻'),
    icon: icons[categoryId] || '📰'
  };
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  return {
    day: date.getDate(),
    month: months[date.getMonth()]
  };
}

function formatTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ==================== Pagination ====================
function renderPagination(totalPages) {
  elements.pageNumbers.innerHTML = '';

  // 最多显示7个页码
  let startPage = Math.max(1, currentPage - 3);
  let endPage = Math.min(totalPages, startPage + 6);
  startPage = Math.max(1, endPage - 6);

  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
    pageBtn.textContent = i;
    pageBtn.addEventListener('click', () => goToPage(i));
    elements.pageNumbers.appendChild(pageBtn);
  }

  // 更新 prev/next 按钮状态
  elements.prevPage.disabled = currentPage <= 1;
  elements.nextPage.disabled = currentPage >= totalPages;
}

function goToPage(page) {
  currentPage = page;
  renderNews();
  // 滚动到列表顶部
  elements.newsList.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updatePageInfo() {
  const totalPages = getTotalPages();
  elements.pageInfo.textContent = `${currentPage} / ${totalPages}`;
}

function showPagination() {
  elements.pagination.style.display = 'flex';
}

function hidePagination() {
  elements.pagination.style.display = 'none';
}

// ==================== UI State ====================
function showEmptyState() {
  elements.newsList.style.display = 'none';
  elements.emptyState.style.display = 'block';
}

function hideEmptyState() {
  elements.newsList.style.display = 'flex';
  elements.emptyState.style.display = 'none';
}

function updateLastUpdated() {
  if (newsData?.lastUpdated) {
    const date = new Date(newsData.lastUpdated);
    elements.lastUpdated.textContent = date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

// ==================== Event Handlers ====================
function setupEventListeners() {
  // 分类按钮
  elements.categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      setActiveCategory(category);
      currentPage = 1;  // 切换分类时重置到第一页
      renderNews();
    });
  });

  // 翻页按钮
  elements.prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  });

  elements.nextPage.addEventListener('click', () => {
    if (currentPage < getTotalPages()) {
      goToPage(currentPage + 1);
    }
  });

  updateLastUpdated();
}

function setActiveCategory(category) {
  currentCategory = category;
  elements.categoryBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
}

// ==================== Start App ====================
document.addEventListener('DOMContentLoaded', init);
