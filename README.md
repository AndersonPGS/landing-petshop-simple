# Landing Page Pet Shop

Uma landing page moderna e responsiva construída com Next.js 14, TypeScript e Tailwind CSS. Este projeto apresenta um site profissional de pet shop com múltiplas seções projetadas para engajar visitantes e mostrar serviços.

## ✨ Características

- Design moderno de interface
- Layout totalmente responsivo
- Renderização server-side com Next.js
- Desenvolvimento seguro com TypeScript
- Estilização customizável com Tailwind CSS
- Arquitetura baseada em componentes

## 📋 Seções da Página

A landing page consiste nas seguintes seções principais:

1. **Seção Hero** - Banner principal e chamada para ação
2. **Seção Sobre** - Informações sobre o pet shop
3. **Seção Serviços** - Exibição dos serviços disponíveis
4. **Seção Depoimentos** - Avaliações e feedback dos clientes
5. **Rodapé** - Informações de contato e links adicionais

## 🛠️ Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- clsx para classes condicionais
- tailwind-merge para resolução de conflitos de estilo
- Tailwind Animate para animações

## 🎨 Estilização

O projeto utiliza uma configuração de tema personalizada com:
- Esquema de cores personalizado usando variáveis HSL
- Sistema consistente de border radius
- Suporte ao modo escuro
- Componentes animados
- Padrões de design responsivo

## 🚦 Como Iniciar

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seunome/petshop-landing.git
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

\`\`\`
src/
├── app/
│   ├── _components/
│   │   ├── about.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   └── testimonials.tsx
│   └── page.tsx
├── components/
│   └── ui/
├── lib/
│   └── utils.ts
\`\`\`

## 🎯 Arquitetura de Componentes

A landing page segue uma arquitetura modular de componentes onde cada seção é um componente separado, tornando o código manutenível e reutilizável.

## 🔧 Configuração

O projeto inclui configurações personalizadas para:
- Next.js (next.config.ts)
- Tailwind CSS (tailwind.config.ts)
- TypeScript (tsconfig.json)

## 📱 Design Responsivo

A landing page é totalmente responsiva e funciona perfeitamente em:
- Dispositivos móveis
- Tablets
- Telas desktop
- Telas grandes

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.