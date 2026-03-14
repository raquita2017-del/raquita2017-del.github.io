# Leonel Wosniach — Site de Construção e Remodelação

Site profissional para divulgar serviços de construção e remodelação em Mafra, Portugal.

---

## Como publicar no GitHub Pages (passo a passo)

### 1. Criar conta no GitHub
Aceda a [github.com](https://github.com) e crie uma conta gratuita se ainda não tiver.

### 2. Criar um repositório novo
- Clique em **"New repository"** (botão verde)
- Nome do repositório: `leonelwosniach` (ou o nome que preferir)
- Marque **"Public"**
- Clique em **"Create repository"**

### 3. Fazer upload dos ficheiros
Na página do repositório recém-criado:
- Clique em **"uploading an existing file"**
- Arraste os 3 ficheiros: `index.html`, `style.css`, `script.js`
- Clique em **"Commit changes"**

### 4. Ativar o GitHub Pages
- Vá a **Settings** (no menu do repositório)
- No menu lateral clique em **Pages**
- Em "Source" selecione **Deploy from a branch**
- Em "Branch" selecione **main** e pasta **/ (root)**
- Clique em **Save**

### 5. O site fica online em:
```
https://SEU_UTILIZADOR.github.io/leonelwosniach/
```
(demora 1-2 minutos a ficar disponível)

---

## Personalizar o site

### Número de telefone e email
No ficheiro `index.html`, procure por:
- `+351 XXX XXX XXX` → substitua pelo número real (aparece 2 vezes)
- `geral@leonelwosniach.pt` → substitua pelo email real

### Formulário de orçamento (receber emails)
1. Crie conta gratuita em [formspree.io](https://formspree.io)
2. Crie um novo "Form" e copie o ID (ex: `xaabbccdd`)
3. No `index.html` substitua `SEU_ID_AQUI` pelo ID copiado:
   ```html
   action="https://formspree.io/f/xaabbccdd"
   ```

### Adicionar fotos reais
Crie uma pasta `images/` e adicione as suas fotos.
No `index.html` substitua os divs `.portfolio-item` por:
```html
<div class="portfolio-item">
  <img src="images/casa-banho-mafra.jpg" alt="Remodelação casa de banho Mafra"/>
  <div class="portfolio-overlay"><span>Casa de banho — Mafra</span></div>
</div>
```

### Domínio personalizado (ex: leonelwosniach.pt)
1. Compre o domínio em [namecheap.com](https://namecheap.com) ou [dns.pt](https://dns.pt)
2. Nas Settings > Pages do GitHub, adicione o domínio em "Custom domain"
3. Configure os DNS do domínio para apontar para o GitHub (instruções em [docs.github.com/pages](https://docs.github.com/pages))

---

## Ficheiros incluídos

| Ficheiro | Descrição |
|----------|-----------|
| `index.html` | Estrutura completa do site |
| `style.css` | Design e estilos visuais |
| `script.js` | Menu mobile e interatividade |
| `README.md` | Este guia |

---

## SEO — Como aparecer no Google

1. **Google Business Profile**: registe a empresa em [business.google.com](https://business.google.com) — gratuito e essencial
2. **Palavras-chave** já incluídas: remodelação casa de banho Mafra, construção Mafra, remodelação vivenda Ericeira, empreiteiro Mafra
3. **Peça avaliações** a cada cliente satisfeito no Google
4. **Publique fotos** reais de obra regularmente no Google Business

---

*Site criado com HTML, CSS e JavaScript puro — sem frameworks, carrega rapidamente em qualquer dispositivo.*
