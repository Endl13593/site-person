# Eduardo Nunes de Lima - Portfólio

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)

Site pessoal e portfólio profissional desenvolvido com Vue.js 2, apresentando projetos, habilidades e informações de contato.

🌐 **Site ao vivo**: [eduardonunesdelima.dev](https://eduardonunesdelima.dev)

## 🚀 Tecnologias

- **Vue.js 2.6** - Framework JavaScript progressivo
- **Vue Router** - Roteamento SPA
- **Tailwind CSS** - Framework CSS utility-first
- **Font Awesome** - Ícones
- **Prerender SPA Plugin** - SEO e performance
- **Netlify** - Hospedagem e deploy contínuo

## 📋 Pré-requisitos

- Node.js >= 18.0.0
- npm ou yarn

## 🔧 Instalação e Configuração

### 1. Clonar o repositório
```bash
git clone git@github.com:Endl13593/site-person.git
cd site-person
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Executar em desenvolvimento
```bash
npm run serve
```
O site estará disponível em `http://localhost:8080`

### 4. Build para produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`

### 5. Lint e correção de código
```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
site-person/
├── public/              # Arquivos estáticos
│   ├── index.html       # Template HTML principal
│   ├── favicon.ico      # Favicons
│   ├── sitemap.xml      # Sitemap para SEO
│   └── robots.txt       # Robots.txt
├── src/
│   ├── assets/          # Recursos (imagens, estilos)
│   ├── components/      # Componentes Vue
│   ├── router/          # Configuração de rotas
│   ├── views/           # Views/páginas
│   └── App.vue          # Componente raiz
├── dist/                # Build de produção (gerado)
└── netlify.toml         # Configuração Netlify

```

## 🎨 Personalização

### Tailwind CSS
O projeto usa Tailwind CSS. Configure em:
- `tailwind.config.js` - Configuração do Tailwind
- `postcss.config.js` - PostCSS plugins

Veja instruções detalhadas em: [TAILWIND_SETUP.md](./TAILWIND_SETUP.md)

### Vue Config
Configurações do Vue CLI em `vue.config.js`

## 🔍 SEO

O site está otimizado para SEO com:
- ✅ Meta tags (Open Graph, Twitter Cards)
- ✅ Schema.org JSON-LD (Person type)
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Pre-rendering para conteúdo estático
- ✅ Favicon otimizado para múltiplos dispositivos

### Favicon no Google
Se o favicon não aparecer corretamente nos resultados do Google, consulte: [FAVICON_GOOGLE_FIX.md](./FAVICON_GOOGLE_FIX.md)

## 🚀 Deploy

O projeto está configurado para deploy automático via Netlify:

1. Push para o repositório
2. Netlify detecta mudanças e inicia build
3. Deploy automático após build bem-sucedido

### Deploy manual
```bash
npm run build
# Upload da pasta dist/ para seu servidor
```

## 📝 Build Notes

Consulte [BUILD.md](./BUILD.md) para informações sobre o processo de build e otimizações.

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões são bem-vindas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de código aberto para fins educacionais e de portfólio.

## 👤 Autor

**Eduardo Nunes de Lima**
- Website: [eduardonunesdelima.dev](https://eduardonunesdelima.dev)
- GitHub: [@Endl13593](https://github.com/Endl13593)
- LinkedIn: [Eduardo Nunes de Lima](https://linkedin.com/in/eduardonunesdelima)

## 📚 Recursos e Referências

- [Vue.js Documentation](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vue CLI Configuration Reference](https://cli.vuejs.org/config/)
- [Netlify Documentation](https://docs.netlify.com/)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
