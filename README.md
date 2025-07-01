# 🚀 Pack de Design PRO - Landing Page

Esta é uma landing page de alta conversão, construída com React e Tailwind CSS, para a venda de um pack de design. O projeto foi criado para ser visualmente impactante, rápido e focado em levar o usuário à compra.

## ✨ Funcionalidades

- **Design Moderno e Agressivo**: Estilo "infoproduto underground" com cores vibrantes e tipografia de impacto.
- **Totalmente Responsivo**: Layout mobile-first que se adapta perfeitamente a qualquer tamanho de tela.
- **Componentes Reutilizáveis**: Estrutura em React com componentes bem definidos para cada seção.
- **Animações e Efeitos**: Efeitos de _glow_, animações sutis e um botão de CTA pulsante para chamar a atenção.
- **Timer de Urgência**: Contador regressivo para criar um senso de escassez.
- **Sem Build-Step**: Utiliza CDNs para React e Tailwind CSS, permitindo rodar o projeto diretamente no navegador sem a necessidade de um processo de compilação.

## 🛠️ Tecnologias Utilizadas

- **React 19**: Para a construção da interface de usuário.
- **TypeScript**: Para adicionar tipagem estática ao JavaScript.
- **Tailwind CSS**: Para estilização rápida e utilitária.
- **Google Fonts**: Para a fonte 'Poppins'.
- **ESM via Import Maps**: Para carregar módulos ES diretamente no navegador.

## 🏃‍♂️ Como Executar o Projeto

Como este projeto não possui um passo de _build_, você pode executá-lo de forma muito simples.

### 1. Servidor Local (Recomendado)

Para evitar problemas com CORS e garantir que tudo funcione como esperado, sirva os arquivos com um servidor local. Se você tem Python instalado, pode usar o seguinte comando na raiz do projeto:

```bash
# Para Python 3
python -m http.server
```

Depois, abra seu navegador e acesse `http://localhost:8000`.

### 2. Abrindo o Arquivo Diretamente

Você também pode simplesmente abrir o arquivo `index.html` diretamente no seu navegador. No entanto, o uso de um servidor local é a prática recomendada.

## 📂 Estrutura de Arquivos

```
.
├── components/         # Contém todos os componentes React
│   ├── ActionButton.tsx
│   ├── Benefits.tsx
│   ├── Bonus.tsx
│   ├── FAQ.tsx
│   ├── FixedCTA.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Offer.tsx
│   ├── Testimonials.tsx
│   └── Timer.tsx
├── App.tsx             # Componente principal que une todas as seções
├── index.html          # Arquivo HTML principal
├── index.tsx           # Ponto de entrada do React
├── metadata.json       # Metadados do aplicativo
├── LICENSE             # Licença do projeto
├── .gitignore          # Arquivos e pastas a serem ignorados pelo Git
└── README.md           # Este arquivo
```
