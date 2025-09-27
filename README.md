# Desenvolvimento React Web AT

Um projeto de aprendizado e prática em React.js, utilizando diversos conceitos e bibliotecas modernas, como rotas, formulários, estilização, notificações e consumo de APIs externas.

## 🚀 Tecnologias utilizadas

- React 19
- Styled-components – Estilização com temas dinâmicos
- React Router DOM – Gerenciamento de rotas
- React Hook Form – Manipulação de formulários
- React Select – Dropdowns customizados
- React Toastify – Notificações estilizadas
- React Icons – Ícones prontos para uso
- Faker.js – Geração de dados falsos para testes

## 📂 Estrutura de páginas

O projeto contém diferentes páginas acessíveis através de um menu principal:

- Quiz – Página de perguntas e respostas
- Inline Event – Exemplo de evento inline
- Handle Event – Exemplo de evento via função handler
- Handle Event x Inline Event – Comparação entre os dois tipos
- Admin Page
  - `/admin-page/admin-on` → Administrador selecionado
  - `/admin-page/admin-off` → Colaborador selecionado
- Select Countries – Dropdown de países com dados da API RestCountries
- Products – Lista de 100 produtos gerados com Faker e filtrados via input
- Select Food – Dropdown de categorias de pratos (API TheMealDB)
- Formulários (com query params para preencher os campos):
  - `/simple-form` – Formulário simples
  - `/simple-form-validation` – Formulário simples com validação -`/hook-form` – Formulário usando React Hook Form
  - `/hook-form-validation` – Formulário com validação usando React Hook Form

## 🛠️ Como rodar o projeto

1. Clonar o repositório:
   ```bash
   git clone https://github.com/DevMatheusMonteiro/DesenvolvimentoReactWebAT.git
   cd DesenvolvimentoReactWebAT
   ```
2. Instalar as dependências:
   ```bash
   npm install
   ```
3. Executar:
   ```bash
   npm run dev
   ```

## 🎨 Temas

O projeto conta com suporte a tema claro e escuro, definidos em lightTheme e darkTheme, integrados ao ThemeProvider do styled-components.

## 📌 Funcionalidades extras

- Notificações globais com React Toastify (warning, error, success, info).
- Filtros em listas com dados falsos gerados via faker.
- Formulários dinâmicos preenchidos via query params (URLSearchParams).
