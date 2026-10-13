// Translates the English content object into another language at runtime using Google Translate's public endpoint. Results are cached in
// localStorage per language, so each sentence is only fetched once and edits to content.js are picked up automatically.

const ENDPOINT = 'https://translate.googleapis.com/translate_a/t';
const SKIP_KEYS = new Set(['id', 'url', 'primary', 'tech', 'skills']);

const GLOSSARY = {
  'zh-CN': {
    'Yong Man Ting': '杨漫莛',
    'Invictus International School': '茵维特国际学校',
    'View Architecture Poster': '查看海报',
    'View Final Presentation': '查看最终演示文稿',
    'Scratch Facilitator' : 'Scratch编程指导员',
  },
};

const cacheKey = (lang) => `portfolio-translations:${lang}`;

const readCache = (lang) => {
  try {
    return JSON.parse(localStorage.getItem(cacheKey(lang))) || {};
  } catch {
    return {};
  }
};

const writeCache = (lang, cache) => {
  try {
    localStorage.setItem(cacheKey(lang), JSON.stringify(cache));
  } catch {
  }
};

const collectStrings = (node, out = new Set()) => {
  if (typeof node === 'string') {
    out.add(node);
  } else if (Array.isArray(node)) {
    node.forEach((item) => collectStrings(item, out));
  } else if (node && typeof node === 'object') {
    Object.entries(node).forEach(([key, value]) => {
      if (!SKIP_KEYS.has(key)) collectStrings(value, out);
    });
  }
  return out;
};

const applyTranslations = (node, dict) => {
  if (typeof node === 'string') return dict[node] ?? node;
  if (Array.isArray(node)) return node.map((item) => applyTranslations(item, dict));
  if (node && typeof node === 'object') {
    return Object.fromEntries(
      Object.entries(node).map(([key, value]) => [
        key,
        SKIP_KEYS.has(key) ? value : applyTranslations(value, dict),
      ])
    );
  }
  return node;
};

const fetchTranslations = async (texts, lang) => {
  const body = new URLSearchParams();
  texts.forEach((text) => body.append('q', text));

  const res = await fetch(`${ENDPOINT}?client=gtx&sl=en&tl=${lang}`, {
    method: 'POST',
    body,
  });
  if (!res.ok) throw new Error(`Translation request failed: ${res.status}`);

  const data = await res.json();
  return Array.isArray(data) ? data : [data];
};

export const translateContent = async (content, lang) => {
  const glossary = GLOSSARY[lang] || {};
  const cache = readCache(lang);
  const missing = [...collectStrings(content)].filter(
    (text) => !(text in glossary) && !(text in cache)
  );

  if (missing.length) {
    const results = await fetchTranslations(missing, lang);
    missing.forEach((text, i) => {
      cache[text] = results[i];
    });
    writeCache(lang, cache);
  }

  return applyTranslations(content, { ...cache, ...glossary });
};
