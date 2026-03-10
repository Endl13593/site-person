# 🚀 Guia de Build - Site Person

## Build de Produção

### Build Padrão (Recomendado)
```bash
npm run build
```

Este comando gera uma build otimizada em `dist/` com:
- ✅ JavaScript minificado e otimizado (~41 KB gzipped)
- ✅ CSS extraído e minificado (~11 KB gzipped)
- ✅ Code splitting automático (vendors separados)
- ✅ Source maps desabilitados
- ✅ Tree shaking aplicado

**Tamanho do bundle:**
- `vendors.js`: 99.76 KB (34.76 KB gzipped)
- `about.js`: 24.91 KB (4.82 KB gzipped)
- `app.js`: 3.73 KB (1.75 KB gzipped)

---

## Build com Prerender (SEO Otimizado)

### Quando usar?
Use prerender quando precisar de:
- 🔍 SEO otimizado (crawlers veem HTML completo)
- 📱 Melhor compartilhamento social (Open Graph)
- ⚡ Performance inicial melhorada

### Requisitos
O prerender requer Chromium instalado. Instale com:

```bash
npx puppeteer browsers install chrome
```

### Executar build com prerender
```bash
ENABLE_PRERENDER=true npm run build
```

---

## Otimizações Implementadas

### ✅ JavaScript
1. **Bootstrap removido** (-4.7MB)
2. **jQuery removido** (-1.6MB)
3. **Code splitting** com vendors separados
4. **Babel otimizado** com polyfills mínimos
5. **Source maps desabilitados** em produção

### ✅ CSS
1. **Tailwind purge** ativo (remove CSS não usado)
2. **Font Awesome** otimizado
3. **CSS extraction** configurado

### ✅ Imagens
1. **LCP otimizado** com `fetchpriority="high"`
2. **Lazy loading desabilitado** na imagem principal

---

## Deploy

O diretório `dist/` está pronto para deploy em qualquer servidor estático:

### Netlify
```bash
# netlify.toml já está configurado
npm run build
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Copiar conteúdo de dist/ para gh-pages branch
```

### Servidor manual
```bash
npm run build
# Fazer upload do conteúdo de dist/ para seu servidor
```

---

## Desenvolvimento

```bash
npm run serve
```

Servidor de desenvolvimento em `http://localhost:8080`

---

## Análise de Bundle

Para ver o tamanho detalhado dos módulos:

```bash
npm run build -- --report
```

Isso gera um relatório visual em `dist/report.html`

---

## Performance Checklist

- [x] JavaScript otimizado (41 KB gzipped)
- [x] CSS otimizado (11 KB gzipped)
- [x] LCP image com fetchpriority
- [x] Code splitting implementado
- [x] Lazy loading de rotas
- [x] Source maps desabilitados
- [ ] Prerender habilitado (opcional)
- [ ] WebP para imagens (próxima otimização)

---

## Troubleshooting

### Erro de Puppeteer
Se o build com prerender falhar:
```bash
# Instalar Chromium
npx puppeteer browsers install chrome

# OU desabilitar prerender
npm run build  # (sem ENABLE_PRERENDER)
```

### Build muito grande
Verifique se o Tailwind purge está configurado em `tailwind.config.js`:
```javascript
purge: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
```
