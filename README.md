## Quinzena 1 (Fevereiro) - Introdução ao ReactJS, Setup com Vite e Componentização

### Conteúdo

Esta quinzena visa estabelecer a base para o desenvolvimento em ReactJS, cobrindo desde a configuração do ambiente até a criação dos primeiros componentes reutilizáveis. Serão abordados os seguintes tópicos:

* **Apresentação da Disciplina e Objetivos:** Alinhamento com a ementa de DSA3, enfatizando o desenvolvimento front-end com ReactJS.
* **Revisão de JavaScript Moderno (ES6+):** Conceitos essenciais como `let`, `const`, arrow functions, desestruturação de objetos e arrays, métodos de array (`map`, `filter`, `reduce`) e módulos (import/export). Estes são pilares para entender o código React moderno.
* **Introdução ao ReactJS:**
  * **O que é ReactJS:** Uma biblioteca JavaScript para construir interfaces de usuário.
  * **Por que usar ReactJS:** Vantagens como reatividade, componentização, ecossistema robusto e grande comunidade.
  * **Virtual DOM:** Explicação de como o React otimiza a atualização da interface, comparando o Virtual DOM com o DOM real.
  * **JSX:** Sintaxe que permite escrever HTML dentro do JavaScript, facilitando a criação de componentes visuais.
  * **Componentes Funcionais:** A forma moderna de criar componentes no React, utilizando funções JavaScript.
  * **Props (Propriedades):** Como passar dados de um componente pai para um componente filho, garantindo a unidirecionalidade do fluxo de dados.
* **Setup do Ambiente de Desenvolvimento:**
  * **Node.js e npm/yarn:** Ferramentas essenciais para gerenciar pacotes e executar o ambiente de desenvolvimento JavaScript.
  * **Vite:** Um bundler de próxima geração que oferece uma experiência de desenvolvimento extremamente rápida, com Hot Module Replacement (HMR) instantâneo.
* **Estilização com Bootstrap e React-Bootstrap:**
  * **Bootstrap:** Um framework CSS popular para desenvolver interfaces responsivas e mobile-first.
  * **React-Bootstrap:** Uma reimplementação dos componentes do Bootstrap em React, utilizando componentes React em vez de JavaScript do Bootstrap, o que garante melhor integração e comportamento reativo.
* **Arquitetura de Projetos:** Organização de pastas e padronização para manter o código limpo, escalável e de fácil manutenção (ex: `src/components`, `src/pages`, `src/services`).
* **Componentes Reutilizáveis:** A importância de criar componentes genéricos que podem ser usados em diferentes partes da aplicação, promovendo a DRY (Don't Repeat Yourself).
* **Uso de IA para Geração de Prompts de Código:** Introdução a como ferramentas de IA (como GitHub Copilot, ChatGPT) podem auxiliar na geração de boilerplate, sugestões de código e refatoração, acelerando o desenvolvimento.

### Materiais de Referência

* **Documentação Oficial do React:** [pt-br.reactjs.org/docs/getting-started.html]
* **Documentação Oficial do Vite:** [vitejs.dev/guide/]
* **Documentação Oficial do React-Bootstrap:** [react-bootstrap.github.io/]
* **Guia de JavaScript Moderno (ES6+):** [developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const]
* **React Patterns - Componentes Reutilizáveis:** [reactpatterns.com/]
* **Clean Architecture no Frontend:** [blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html]

### Atividade Prática: Setup do Projeto Pizzaria e Componentes Iniciais

**Objetivo:** Configurar o ambiente de desenvolvimento React com Vite, integrar o React-Bootstrap para estilização e criar os primeiros componentes reutilizáveis para o projeto da Pizzaria Digital. Este tutorial detalhado servirá como base para o vídeo no YouTube e para o laboratório dos alunos.

**Roteiro Detalhado para Vídeo e Laboratório:**

#### **Passo 1: Preparação do Ambiente (Verificação e Instalação do Node.js)**

Antes de iniciar, é fundamental ter o Node.js instalado, pois ele inclui o npm (Node Package Manager), que será usado para gerenciar as dependências do projeto. O Yarn é uma alternativa popular ao npm.

1. **Verificar Instalação do Node.js e npm/yarn:**
   * Abra o terminal (ou Prompt de Comando/PowerShell no Windows).
   * Digite os seguintes comandos e pressione Enter:
     ```bash
     node -v
     npm -v
     yarn -v # Opcional, se preferir usar Yarn
     ```
   * Se os comandos retornarem números de versão (ex: `v18.17.1`, `9.6.7`), significa que estão instalados. Caso contrário, você precisará instalá-los.
2. **Instalar Node.js (se necessário):**
   * Acesse o site oficial do Node.js: [nodejs.org/pt-br/download].
   * Baixe e instale a versão LTS (Long Term Support), que é a mais estável e recomendada para a maioria dos usuários.
   * Siga as instruções do instalador. Ele geralmente já inclui o npm.
   * Após a instalação, feche e reabra o terminal para que as alterações entrem em vigor e verifique novamente as versões.

#### **Passo 2: Criação do Projeto React com Vite**

O Vite é uma ferramenta de build que oferece uma experiência de desenvolvimento front-end muito rápida. Vamos usá-lo para criar nosso projeto React.

1. **Abrir o Terminal:** Navegue até a pasta onde você deseja criar o projeto (ex: `C:\Projetos` no Windows, ou `~/Documents/Projetos` no Linux/macOS).
   
   ```bash
   # Exemplo no Windows
   cd C:\Users\SeuUsuario\Documents\Projetos
   # Exemplo no Linux/macOS
   cd ~/Documents/Projetos
   ```
2. **Criar o Projeto Vite:** Execute o comando abaixo. Ele irá perguntar o nome do projeto e qual framework usar.
   
   ```bash
   npm create vite@latest
   ```
   
   * **Project name:** `my-pizzaria-app` (ou o nome que preferir, mas usaremos este como exemplo).
   * **Select a framework:** `React`
   * **Select a variant:** `JavaScript` (ou `TypeScript` se o professor preferir, mas para simplificar, usaremos JavaScript).
3. **Navegar para a Pasta do Projeto e Instalar Dependências:**
   
   ```bash
   cd my-pizzaria-app
   npm install
   ```
   
   * Este comando instala todas as bibliotecas e ferramentas necessárias para o projeto, definidas no arquivo `package.json`.
4. **Rodar o Projeto para Verificar:**
   
   ```bash
   npm run dev
   ```
   
   * Após executar, o terminal mostrará um endereço local (ex: `http://localhost:5173/`). Abra este endereço no seu navegador. Você deverá ver a página inicial padrão do Vite + React.
   * Mantenha este terminal aberto, pois o Vite recarrega automaticamente as alterações no código.

#### **Passo 3: Integração do React-Bootstrap para Estilização**

Vamos adicionar o React-Bootstrap para ter acesso a componentes de UI pré-estilizados e responsivos.

1. **Instalar React-Bootstrap e Bootstrap:**
   * Abra um **novo terminal** na pasta `my-pizzaria-app` (mantendo o terminal do `npm run dev` aberto).
   * Execute o comando:
     ```bash
     npm install react-bootstrap bootstrap
     ```
2. **Importar o CSS do Bootstrap:**
   * Abra o projeto no seu editor de código (ex: VS Code).
   * Localize o arquivo `src/main.jsx` (ou `src/main.tsx` se usou TypeScript).
   * Adicione a seguinte linha no **início** do arquivo para importar o CSS global do Bootstrap:
     ```jsx
     // src/main.jsx
     import 'bootstrap/dist/css/bootstrap.min.css';
     import React from 'react';
     import ReactDOM from 'react-dom/client';
     import App from './App.jsx';
     import './index.css';
     
     ReactDOM.createRoot(document.getElementById('root')).render(
       <React.StrictMode>
         <App />
       </React.StrictMode>,
     );
     ```
   * Salve o arquivo. Você não verá uma mudança visual imediata, mas o Bootstrap estará pronto para ser usado.

#### **Passo 4: Organização de Pastas e Criação de Componentes Básicos**

Uma boa estrutura de pastas é crucial para a manutenção do projeto. Vamos criar algumas pastas e os primeiros componentes.

1. **Criar Estrutura de Pastas:**
   * Dentro da pasta `src`, crie as seguintes subpastas:
     * `src/components`: Para componentes reutilizáveis (botões, cards, navbar, footer).
     * `src/pages`: Para componentes que representam páginas inteiras da aplicação.
     * `src/assets`: Para imagens, ícones, etc.
2. **Criar Componente `Header` (Navbar):**
   * Crie o arquivo `src/components/Header.jsx` com o seguinte conteúdo:
     ```jsx
     // src/components/Header.jsx
     import React from 'react';
     import { Navbar, Container, Nav } from 'react-bootstrap';
     
     function Header() {
       return (
         <Navbar bg="dark" variant="dark" expand="lg">
           <Container>
             <Navbar.Brand href="#home">Pizzaria Digital</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                 <Nav.Link href="#home">Home</Nav.Link>
                 <Nav.Link href="#cardapio">Cardápio</Nav.Link>
                 <Nav.Link href="#carrinho">Carrinho</Nav.Link>
                 <Nav.Link href="#login">Login</Nav.Link>
               </Nav>
             </Navbar.Collapse>
           </Container>
         </Navbar>
       );
     }
     
     export default Header;
     ```
   * **Explicação:** Usamos componentes `Navbar`, `Container` e `Nav` do React-Bootstrap para criar uma barra de navegação responsiva. O `href` será ajustado na próxima quinzena com o React Router DOM.
3. **Criar Componente `Footer`:**
   * Crie o arquivo `src/components/Footer.jsx` com o seguinte conteúdo:
     ```jsx
     // src/components/Footer.jsx
     import React from 'react';
     import { Container } from 'react-bootstrap';
     
     function Footer() {
       return (
         <footer className="bg-dark text-white text-center py-3 mt-5">
           <Container>
             <p>© {new Date().getFullYear()} Pizzaria Digital. Todos os direitos reservados.</p>
           </Container>
         </footer>
       );
     }
     
     export default Footer;
     ```
   * **Explicação:** Um rodapé simples com texto de copyright, estilizado com classes utilitárias do Bootstrap (`bg-dark`, `text-white`, `text-center`, `py-3`, `mt-5`).
4. **Integrar `Header` e `Footer` no `App.jsx`:**
   * Abra o arquivo `src/App.jsx`.
   * Remova o conteúdo padrão e substitua-o pelo seguinte, importando e usando os novos componentes:
     ```jsx
     // src/App.jsx
     import React from 'react';
     import Header from './components/Header';
     import Footer from './components/Footer';
     import { Container } from 'react-bootstrap';
     
     function App() {
       return (
         <div className="d-flex flex-column min-vh-100"> {/* Garante que o footer fique no final da página */}
           <Header />
           <Container className="flex-grow-1 mt-4">
             {/* Conteúdo principal da aplicação será renderizado aqui */}
             <h1>Bem-vindo à Pizzaria Digital!</h1>
             <p>Explore nosso delicioso cardápio e faça seu pedido.</p>
           </Container>
           <Footer />
         </div>
       );
     }
     
     export default App;
     ```
   * **Explicação:** O `App.jsx` agora age como o layout principal. Usamos `d-flex flex-column min-vh-100` no `div` principal e `flex-grow-1` no `Container` para garantir que o rodapé sempre fique na parte inferior da página, mesmo com pouco conteúdo.

#### **Passo 5: Verificação e Encerramento da Quinzena 1**

1. **Verificar no Navegador:** Volte ao navegador onde o projeto está rodando (`http://localhost:5173/`). Você deverá ver a Navbar escura no topo, o título "Bem-vindo à Pizzaria Digital!" no centro e o rodapé na parte inferior.
2. **Revisão:** Verifique se não há erros no console do navegador (F12).
3. **Encerramento do Vídeo/Laboratório:** Resuma o que foi feito (setup do projeto, instalação de dependências, criação de componentes básicos e organização de pastas). Mencione que na próxima quinzena será implementado o roteamento para as diferentes páginas.

## Quinzena 2 (Março) - Roteamento com React Router DOM

### Conteúdo

Nesta quinzena, os alunos aprenderão a implementar a navegação entre as diferentes seções da aplicação de pizzaria utilizando o React Router DOM, uma biblioteca padrão para roteamento em aplicações React de página única (SPA).

* **Introdução ao React Router DOM:**
  * **O que é:** Uma biblioteca para roteamento declarativo em React.
  * **Por que usar:** Permite criar Single Page Applications (SPAs) com URLs amigáveis e navegação sem recarregar a página.
  * **Conceitos de Roteamento SPA:** Como as SPAs simulam múltiplas páginas usando JavaScript para renderizar diferentes componentes com base na URL.
* **Instalação e Configuração Básica:**
  * `BrowserRouter`: O componente principal que envolve toda a aplicação para habilitar o roteamento.
  * `Routes`: Um container para definir as rotas da aplicação.
  * `Route`: O componente que mapeia um caminho (path) da URL a um componente React.
* **Navegação Programática com `useNavigate`:** Como redirecionar o usuário para outra rota via código JavaScript, útil após ações como login ou submissão de formulário.
* **Parâmetros de Rota e `useParams`:** Como extrair informações dinâmicas da URL (ex: o ID de uma pizza em `/pizza/123`) usando o hook `useParams`.
* **Links de Navegação com `Link` e `NavLink`:**
  * `Link`: Componente para criar links internos que evitam o recarregamento da página.
  * `NavLink`: Uma versão especial do `Link` que adiciona automaticamente classes de estilo (ex: `active`) quando a rota correspondente está ativa, ideal para menus de navegação.
* **Criação de Layouts Aninhados:** Como estruturar rotas para compartilhar layouts entre diferentes páginas, usando o componente `Outlet`.

### Materiais de Referência

* **Documentação Oficial do React Router DOM:** [reactrouter.com/en/main/start/overview]
* **Tutorial React Router DOM v6:** [www.freecodecamp.org/news/react-router-v6-tutorial/]

### Atividade Prática: Navegação na Pizzaria com React Router DOM

**Objetivo:** Implementar o roteamento para as diferentes páginas da Pizzaria Digital, permitindo que os usuários naveguem entre Home, Cardápio, Carrinho e Login, além de visualizar detalhes de pizzas específicas.

**Roteiro Detalhado para Vídeo e Laboratório:**

#### **Passo 1: Instalação do React Router DOM**

1. **Abrir o Terminal:** Certifique-se de estar na pasta raiz do seu projeto `my-pizzaria-app`.
2. **Instalar a Biblioteca:**
   
   ```bash
   npm install react-router-dom
   ```
   
   * Este comando adiciona o React Router DOM às dependências do seu projeto.

#### **Passo 2: Configuração Básica do Roteamento**

Vamos envolver nossa aplicação com o `BrowserRouter` e definir as rotas principais.

1. **Envolver `App` com `BrowserRouter`:**
   
   * Abra o arquivo `src/main.jsx`.
   * Importe `BrowserRouter` e envolva o componente `<App />` com ele:
     ```jsx
     // src/main.jsx
     import 'bootstrap/dist/css/bootstrap.min.css';
     import React from 'react';
     import ReactDOM from 'react-dom/client';
     import App from './App.jsx';
     import './index.css';
     import { BrowserRouter } from 'react-router-dom'; // Importar BrowserRouter
     
     ReactDOM.createRoot(document.getElementById('root')).render(
       <React.StrictMode>
         <BrowserRouter> {/* Envolver App com BrowserRouter */}
           <App />
         </BrowserRouter>
       </React.StrictMode>,
     );
     ```
   * Salve o arquivo.
2. **Definir `Routes` e `Route` no `App.jsx`:**
   
   * Abra o arquivo `src/App.jsx`.
   * Importe `Routes` e `Route`.
   * Crie as pastas `src/pages` e adicione arquivos vazios para as páginas que vamos criar:
     * `src/pages/HomePage.jsx`
     * `src/pages/CardapioPage.jsx`
     * `src/pages/CarrinhoPage.jsx`
     * `src/pages/LoginPage.jsx`
   * Modifique `App.jsx` para definir as rotas. O `Header` e `Footer` ficarão fora do `Routes` para serem exibidos em todas as páginas:
     ```jsx
     // src/App.jsx
     import React from 'react';
     import Header from './components/Header';
     import Footer from './components/Footer';
     import { Container } from 'react-bootstrap';
     import { Routes, Route } from 'react-router-dom'; // Importar Routes e Route
     
     // Importar os componentes das páginas
     import HomePage from './pages/HomePage';
     import CardapioPage from './pages/CardapioPage';
     import CarrinhoPage from './pages/CarrinhoPage';
     import LoginPage from './pages/LoginPage';
     
     function App() {
       return (
         <div className="d-flex flex-column min-vh-100">
           <Header />
           <Container className="flex-grow-1 mt-4">
             <Routes> {/* Definir as rotas aqui */}
               <Route path="/" element={<HomePage />} />
               <Route path="/cardapio" element={<CardapioPage />} />
               <Route path="/carrinho" element={<CarrinhoPage />} />
               <Route path="/login" element={<LoginPage />} />
               {/* Adicionaremos a rota de detalhes da pizza mais tarde */}
             </Routes>
           </Container>
           <Footer />
         </div>
       );
     }
     
     export default App;
     ```
   * Salve o arquivo.

#### **Passo 3: Criação das Páginas (Conteúdo Simples)**

Vamos adicionar um conteúdo mínimo a cada página para que possamos identificá-las durante a navegação.

1. **`src/pages/HomePage.jsx`:**
   
   ```jsx
   // src/pages/HomePage.jsx
   import React from 'react';
   
   function HomePage() {
     return (
       <div>
         <h1>Bem-vindo à Pizzaria Digital!</h1>
         <p>Explore nosso delicioso cardápio e faça seu pedido.</p>
       </div>
     );
   }
   
   export default HomePage;
   ```
2. **`src/pages/CardapioPage.jsx`:**
   
   ```jsx
   // src/pages/CardapioPage.jsx
   import React from 'react';
   
   function CardapioPage() {
     return (
       <div>
         <h1>Nosso Cardápio</h1>
         <p>Aqui você encontrará todas as nossas deliciosas pizzas.</p>
       </div>
     );
   }
   
   export default CardapioPage;
   ```
3. **`src/pages/CarrinhoPage.jsx`:**
   
   ```jsx
   // src/pages/CarrinhoPage.jsx
   import React from 'react';
   
   function CarrinhoPage() {
     return (
       <div>
         <h1>Seu Carrinho de Compras</h1>
         <p>Itens adicionados ao seu pedido.</p>
       </div>
     );
   }
   
   export default CarrinhoPage;
   ```
4. **`src/pages/LoginPage.jsx`:**
   
   ```jsx
   // src/pages/LoginPage.jsx
   import React from 'react';
   
   function LoginPage() {
     return (
       <div>
         <h1>Login</h1>
         <p>Acesse sua conta para fazer pedidos.</p>
       </div>
     );
   }
   
   export default LoginPage;
   ```
   
   * Salve todos os arquivos das páginas.

#### **Passo 4: Implementando Links de Navegação no `Header`**

Agora, vamos substituir os `href` estáticos no `Header` por componentes `Link` do React Router DOM.

1. **Modificar `src/components/Header.jsx`:**
   * Importe `Link` e `NavLink` do `react-router-dom`.
   * Substitua `Nav.Link href="#..."` por `NavLink as={Link} to="/..."` para aproveitar a estilização do React-Bootstrap e a funcionalidade do `NavLink`.
     ```jsx
     // src/components/Header.jsx
     import React from 'react';
     import { Navbar, Container, Nav } from 'react-bootstrap';
     import { Link, NavLink } from 'react-router-dom'; // Importar Link e NavLink
     
     function Header() {
       return (
         <Navbar bg="dark" variant="dark" expand="lg">
           <Container>
             <Navbar.Brand as={Link} to="/">Pizzaria Digital</Navbar.Brand> {/* Usar Link para a marca */}
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                 <NavLink as={Link} to="/" className="nav-link">Home</NavLink> {/* NavLink para destacar a página ativa */}
                 <NavLink as={Link} to="/cardapio" className="nav-link">Cardápio</NavLink>
                 <NavLink as={Link} to="/carrinho" className="nav-link">Carrinho</NavLink>
                 <NavLink as={Link} to="/login" className="nav-link">Login</NavLink>
               </Nav>
             </Navbar.Collapse>
           </Container>
         </Navbar>
       );
     }
     
     export default Header;
     ```
   * **Explicação:** O `NavLink` é usado com `as={Link}` para que ele se comporte como um `Link` do React Router DOM, mas ainda receba as classes de estilo do `Nav.Link` do React-Bootstrap. A classe `nav-link` é importante para a estilização correta.
   * Salve o arquivo.

#### **Passo 5: Parâmetros de Rota e `useParams` (Detalhe da Pizza)**

Vamos criar uma rota para exibir os detalhes de uma pizza específica, usando parâmetros de rota.

1. **Criar `src/pages/DetalhePizzaPage.jsx`:**
   
   ```jsx
   // src/pages/DetalhePizzaPage.jsx
   import React from 'react';
   import { useParams } from 'react-router-dom'; // Importar useParams
   
   function DetalhePizzaPage() {
     const { id } = useParams(); // Extrair o parâmetro 'id' da URL
   
     return (
       <div>
         <h1>Detalhes da Pizza #{id}</h1>
         <p>Aqui serão exibidas as informações detalhadas da pizza com ID: {id}.</p>
         {/* Em quinzenas futuras, buscaremos os dados reais da pizza aqui */}
       </div>
     );
   }
   
   export default DetalhePizzaPage;
   ```
2. **Adicionar Rota no `App.jsx`:**
   
   * Abra `src/App.jsx` e adicione a nova rota dentro de `<Routes>`:
     ```jsx
     // src/App.jsx (trecho das rotas)
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/cardapio" element={<CardapioPage />} />
       <Route path="/carrinho" element={<CarrinhoPage />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/pizza/:id" element={<DetalhePizzaPage />} /> {/* Nova rota com parâmetro */}
     </Routes>
     ```
   * Salve o arquivo.
3. **Testar a Rota de Detalhes:**
   
   * No navegador, digite manualmente na barra de endereço: `http://localhost:5173/pizza/1` ou `http://localhost:5173/pizza/margherita`.
   * Você deverá ver a página "Detalhes da Pizza #1" (ou #margherita), confirmando que o `useParams` está funcionando.

#### **Passo 6: Navegação Programática com `useNavigate` (Exemplo Simulado)**

Vamos simular um login e usar `useNavigate` para redirecionar o usuário.

1. **Modificar `src/pages/LoginPage.jsx`:**
   
   * Importe `useNavigate`.
   * Adicione um botão e uma função que simula um login e redireciona:
     ```jsx
     // src/pages/LoginPage.jsx
     import React from 'react';
     import { useNavigate } from 'react-router-dom'; // Importar useNavigate
     import { Button } from 'react-bootstrap';
     
     function LoginPage() {
       const navigate = useNavigate(); // Inicializar useNavigate
     
       const handleLogin = () => {
         // Simular um processo de login bem-sucedido
         alert('Login simulado realizado com sucesso!');
         navigate('/'); // Redirecionar para a página inicial
       };
     
       return (
         <div>
           <h1>Login</h1>
           <p>Acesse sua conta para fazer pedidos.</p>
           <Button variant="primary" onClick={handleLogin}>Entrar (Simulado)</Button>
         </div>
       );
     }
     
     export default LoginPage;
     ```
   * Salve o arquivo.
2. **Testar Navegação Programática:**
   
   * No navegador, vá para a página de Login (`http://localhost:5173/login`).
   * Clique no botão "Entrar (Simulado)". Você deverá ver o alerta e ser redirecionado para a página Home.

#### **Passo 7: Verificação e Encerramento da Quinzena 2**

1. **Testar Navegação Completa:** Clique em todos os links da Navbar e verifique se as páginas corretas são exibidas sem recarregar o navegador.
2. **Revisão:** Verifique o console do navegador para quaisquer erros ou avisos.
3. **Encerramento do Vídeo/Laboratório:** Resuma a importância do React Router DOM para SPAs, como configurar rotas, usar `Link`/`NavLink` e `useParams`/`useNavigate`. Mencione que na próxima quinzena será abordado o gerenciamento de estado global para o carrinho de compras.

---

## Quinzena 3 (Março) - Gerenciamento de Estado com Context API e Reducers

### Conteúdo

Esta quinzena aprofundará no gerenciamento de estado em aplicações React, focando em soluções para compartilhar dados entre componentes distantes de forma eficiente. Serão abordados:

* **Revisão de `useState` e `useEffect`:** Reforço sobre como esses hooks gerenciam o estado local de um componente e lidam com efeitos colaterais, respectivamente.
* **Introdução à Context API:**
  * **Problema do Prop Drilling:** Explicação do cenário onde props precisam ser passadas por muitos níveis de componentes, tornando o código verboso e difícil de manter.
  * **Criação de Contexto:** Como criar um contexto para armazenar dados que precisam ser acessados por múltiplos componentes na árvore.
  * **`Context.Provider`:** O componente que fornece o valor do contexto para todos os seus descendentes.
  * **`useContext`:** O hook que permite aos componentes filhos consumir o valor de um contexto, eliminando a necessidade de `Context.Consumer`.
* **`useReducer`:**
  * **Gerenciamento de Estado Mais Complexo:** Quando `useState` se torna insuficiente para estados com lógica de atualização complexa ou que dependem de estados anteriores.
  * **Ações e `dispatch`:** Como definir ações que descrevem o que aconteceu e usar a função `dispatch` para enviá-las ao reducer.
  * **Função Reducer:** Uma função pura que recebe o estado atual e uma ação, e retorna um novo estado.
* **Combinando `useContext` e `useReducer`:** A poderosa combinação para gerenciar estados globais complexos de forma organizada e escalável, similar ao Redux, mas nativo do React.
* **Persistência de Estado Simples (ex: `localStorage`):** Como salvar e carregar o estado da aplicação (como o carrinho de compras) no armazenamento local do navegador para que os dados não sejam perdidos ao recarregar a página.

### Materiais de Referência

* **Documentação Oficial do React - Context:** [pt-br.reactjs.org/docs/context.html]
* **Documentação Oficial do React - useReducer:** [pt-br.reactjs.org/docs/hooks-reference.html#usereducer]
* **Guia Completo Context API + useReducer:** [www.freecodecamp.org/news/react-context-api-with-usereducer-hook/]

### Atividade Prática: Carrinho de Compras com Context API e useReducer

**Objetivo:** Implementar um carrinho de compras funcional para a Pizzaria Digital, utilizando a Context API e o hook `useReducer` para gerenciar o estado global dos itens no carrinho, com persistência de dados no `localStorage`.

**Roteiro Detalhado para Vídeo e Laboratório:**

#### **Passo 1: Criação do Contexto e Reducer do Carrinho**

Vamos criar a estrutura para o nosso carrinho de compras, incluindo o contexto e a lógica de como o estado do carrinho será atualizado.

1. **Criar Pasta `src/context`:** Se ainda não existir, crie a pasta `src/context`.
2. **Criar `src/context/CartContext.jsx`:** Este arquivo conterá o contexto, o reducer e o provider.
   
   ```jsx
   // src/context/CartContext.jsx
   import React, { createContext, useReducer, useEffect, useContext } from 'react';
   
   // 1. Definir o estado inicial do carrinho
   const initialState = {
     items: [],
     total: 0,
   };
   
   // 2. Definir a função reducer
   const cartReducer = (state, action) => {
     switch (action.type) {
       case 'ADD_ITEM':
         {
           const existingItemIndex = state.items.findIndex(
             (item) => item.id === action.payload.id
           );
   
           if (existingItemIndex > -1) {
             // Item já existe, aumentar quantidade
             const updatedItems = [...state.items];
             const existingItem = updatedItems[existingItemIndex];
             const updatedItem = {
               ...existingItem,
               quantity: existingItem.quantity + 1,
             };
             updatedItems[existingItemIndex] = updatedItem;
             return {
               ...state,
               items: updatedItems,
               total: state.total + action.payload.price,
             };
           } else {
             // Novo item, adicionar ao carrinho
             const newItem = { ...action.payload, quantity: 1 };
             return {
               ...state,
               items: [...state.items, newItem],
               total: state.total + newItem.price,
             };
           }
         }
       case 'REMOVE_ITEM':
         {
           const existingItemIndex = state.items.findIndex(
             (item) => item.id === action.payload.id
           );
   
           if (existingItemIndex === -1) {
             return state; // Item não encontrado
           }
   
           const existingItem = state.items[existingItemIndex];
           const updatedTotal = state.total - existingItem.price;
   
           if (existingItem.quantity === 1) {
             // Remover item completamente se a quantidade for 1
             const updatedItems = state.items.filter(
               (item) => item.id !== action.payload.id
             );
             return {
               ...state,
               items: updatedItems,
               total: updatedTotal,
             };
           } else {
             // Diminuir quantidade do item
             const updatedItems = [...state.items];
             const updatedItem = {
               ...existingItem,
               quantity: existingItem.quantity - 1,
             };
             updatedItems[existingItemIndex] = updatedItem;
             return {
               ...state,
               items: updatedItems,
               total: updatedTotal,
             };
           }
         }
       case 'CLEAR_CART':
         return initialState; // Limpar o carrinho, voltando ao estado inicial
       default:
         return state;
     }
   };
   
   // 3. Criar o Contexto
   export const CartContext = createContext(initialState);
   
   // 4. Criar o Provider
   export const CartProvider = ({ children }) => {
     // Carregar estado do localStorage na inicialização
     const storedCart = JSON.parse(localStorage.getItem('cart')) || initialState;
     const [cartState, dispatch] = useReducer(cartReducer, storedCart);
   
     // Salvar estado no localStorage sempre que o carrinho mudar
     useEffect(() => {
       localStorage.setItem('cart', JSON.stringify(cartState));
     }, [cartState]);
   
     return (
       <CartContext.Provider value={{ cartState, dispatch }}>
         {children}
       </CartContext.Provider>
     );
   };
   
   // 5. Hook customizado para facilitar o uso do contexto
   export const useCart = () => {
     return useContext(CartContext);
   };
   ```
   
   * **Explicação:**
     * `initialState`: Define a estrutura inicial do nosso carrinho (uma lista de itens e o total).
     * `cartReducer`: É a função central que decide como o estado do carrinho muda em resposta a diferentes `actions` (`ADD_ITEM`, `REMOVE_ITEM`, `CLEAR_CART`).
     * `CartContext`: O objeto de contexto criado.
     * `CartProvider`: Um componente que envolve a aplicação e fornece o `cartState` e a função `dispatch` para todos os componentes filhos. Ele também lida com a persistência no `localStorage` usando `useEffect`.
     * `useCart`: Um hook customizado para simplificar o consumo do contexto.
   * Salve o arquivo.

#### **Passo 2: Integrar o `CartProvider` na Aplicação**

Para que o carrinho esteja disponível em toda a aplicação, precisamos envolver o `App` com o `CartProvider`.

1. **Modificar `src/main.jsx`:**
   * Importe `CartProvider` e envolva o `<App />` com ele (dentro do `BrowserRouter`):
     ```jsx
     // src/main.jsx
     import 'bootstrap/dist/css/bootstrap.min.css';
     import React from 'react';
     import ReactDOM from 'react-dom/client';
     import App from './App.jsx';
     import './index.css';
     import { BrowserRouter } from 'react-router-dom';
     import { CartProvider } from './context/CartContext'; // Importar CartProvider
     
     ReactDOM.createRoot(document.getElementById('root')).render(
       <React.StrictMode>
         <BrowserRouter>
           <CartProvider> {/* Envolver App com CartProvider */}
             <App />
           </CartProvider>
         </BrowserRouter>
       </React.StrictMode>,
     );
     ```
   * Salve o arquivo.

#### **Passo 3: Criar Componente `PizzaCard` e Consumir o Contexto**

Vamos criar um componente para exibir cada pizza e um botão para adicioná-la ao carrinho.

1. **Criar `src/components/PizzaCard.jsx`:**
   
   ```jsx
   // src/components/PizzaCard.jsx
   import React from 'react';
   import { Card, Button } from 'react-bootstrap';
   import { useCart } from '../context/CartContext'; // Importar o hook useCart
   
   function PizzaCard({ pizza }) {
     const { dispatch } = useCart(); // Obter a função dispatch do contexto
   
     const handleAddToCart = () => {
       dispatch({ type: 'ADD_ITEM', payload: pizza });
       alert(`${pizza.name} adicionada ao carrinho!`);
     };
   
     return (
       <Card style={{ width: '18rem', marginBottom: '20px' }}>
         <Card.Img variant="top" src={pizza.image} alt={pizza.name} />
         <Card.Body>
           <Card.Title>{pizza.name}</Card.Title>
           <Card.Text>
             {pizza.description}
             <br />
             <strong>R$ {pizza.price.toFixed(2)}</strong>
           </Card.Text>
           <Button variant="primary" onClick={handleAddToCart}>Adicionar ao Carrinho</Button>
         </Card.Body>
       </Card>
     );
   }
   
   export default PizzaCard;
   ```
   
   * **Explicação:** O componente `PizzaCard` recebe um objeto `pizza` via props. Ele usa o `useCart` para acessar a função `dispatch` e, ao clicar no botão, despacha uma ação `ADD_ITEM` com os dados da pizza.
   * Salve o arquivo.

#### **Passo 4: Exibir o Cardápio e Adicionar Pizzas**

Vamos simular algumas pizzas e exibi-las na página de cardápio, permitindo que sejam adicionadas ao carrinho.

1. **Modificar `src/pages/CardapioPage.jsx`:**
   * Remova os dados `pizzas` simulados diretamente no arquivo.
   * Importe `PizzaCard` e `Row`, `Col` do React-Bootstrap.
   * Crie um array de pizzas simuladas.
   * Mapeie as pizzas para renderizar `PizzaCard`s.
     ```jsx
     // src/pages/CardapioPage.jsx
     import React from 'react';
     import { Row, Col } from 'react-bootstrap';
     import PizzaCard from '../components/PizzaCard'; // Importar PizzaCard
     
     // Dados de pizzas simulados
     const pizzas = [
       {
         id: 'p1',
         name: 'Pizza Margherita',
         description: 'Molho de tomate, mussarela e manjericão.',
         price: 45.00,
         image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Margherita'
       },
       {
         id: 'p2',
         name: 'Pizza Calabresa',
         description: 'Molho de tomate, mussarela, calabresa e cebola.',
         price: 50.00,
         image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Calabresa'
       },
       {
         id: 'p3',
         name: 'Pizza Frango com Catupiry',
         description: 'Molho de tomate, mussarela, frango desfiado e catupiry.',
         price: 55.00,
         image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Frango'
       },
     ];
     
     function CardapioPage() {
       return (
         <div>
           <h1>Nosso Cardápio</h1>
           <p>Escolha suas pizzas favoritas!</p>
           <Row>
             {pizzas.map((pizza) => (
               <Col key={pizza.id} sm={12} md={6} lg={4}>
                 <PizzaCard pizza={pizza} />
               </Col>
             ))}
           </Row>
         </div>
       );
     }
     
     export default CardapioPage;
     ```
   * Salve o arquivo.

#### **Passo 5: Exibir e Gerenciar o Carrinho de Compras**

Agora, vamos exibir os itens no carrinho e permitir que o usuário remova ou limpe o carrinho.

1. **Modificar `src/pages/CarrinhoPage.jsx`:**
   * Importe `useCart`, `ListGroup`, `Button`, `Row`, `Col`.
   * Exiba os itens do `cartState`, com botões para remover e limpar.
     ```jsx
     // src/pages/CarrinhoPage.jsx
     import React from 'react';
     import { useCart } from '../context/CartContext'; // Importar o hook useCart
     import { ListGroup, Button, Row, Col } from 'react-bootstrap';
     
     function CarrinhoPage() {
       const { cartState, dispatch } = useCart(); // Obter estado e dispatch
     
       const handleRemoveItem = (id) => {
         dispatch({ type: 'REMOVE_ITEM', payload: { id } });
       };
     
       const handleClearCart = () => {
         dispatch({ type: 'CLEAR_CART' });
         alert('Carrinho limpo!');
       };
     
       return (
         <div>
           <h1>Seu Carrinho de Compras</h1>
           {cartState.items.length === 0 ? (
             <p>Seu carrinho está vazio.</p>
           ) : (
             <>
               <ListGroup>
                 {cartState.items.map((item) => (
                   <ListGroup.Item key={item.id}>
                     <Row className="align-items-center">
                       <Col xs={6}>{item.name} (x{item.quantity})</Col>
                       <Col xs={3}>R$ {(item.price * item.quantity).toFixed(2)}</Col>
                       <Col xs={3} className="text-end">
                         <Button
                           variant="danger"
                           size="sm"
                           onClick={() => handleRemoveItem(item.id)}
                         >
                           Remover
                         </Button>
                       </Col>
                     </Row>
                   </ListGroup.Item>
                 ))}
               </ListGroup>
               <h3 className="mt-3">Total: R$ {cartState.total.toFixed(2)}</h3>
               <Button variant="warning" onClick={handleClearCart} className="mt-3">
                 Limpar Carrinho
               </Button>
               <Button variant="success" className="mt-3 ms-2">
                 Finalizar Pedido
               </Button>
             </>
           )}
         </div>
       );
     }
     
     export default CarrinhoPage;
     ```
   * Salve o arquivo.

#### **Passo 6: Adicionar Contador de Itens no Header (Opcional, mas recomendado)**

Para melhorar a experiência do usuário, vamos exibir o número de itens no carrinho na Navbar.

1. **Modificar `src/components/Header.jsx`:**
   * Importe `useCart` e `Badge` do React-Bootstrap.
   * Adicione um `Badge` ao lado do link do carrinho.
     ```jsx
     // src/components/Header.jsx
     import React from 'react';
     import { Navbar, Container, Nav, Badge } from 'react-bootstrap'; // Importar Badge
     import { Link, NavLink } from 'react-router-dom';
     import { useCart } from '../context/CartContext'; // Importar useCart
     
     function Header() {
       const { cartState } = useCart(); // Obter o estado do carrinho
       const totalItems = cartState.items.reduce((sum, item) => sum + item.quantity, 0);
     
       return (
         <Navbar bg="dark" variant="dark" expand="lg">
           <Container>
             <Navbar.Brand as={Link} to="/">Pizzaria Digital</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                 <NavLink as={Link} to="/" className="nav-link">Home</NavLink>
                 <NavLink as={Link} to="/cardapio" className="nav-link">Cardápio</NavLink>
                 <NavLink as={Link} to="/carrinho" className="nav-link">
                   Carrinho <Badge bg="secondary">{totalItems}</Badge> {/* Exibir total de itens */}
                 </NavLink>
                 <NavLink as={Link} to="/login" className="nav-link">Login</NavLink>
               </Nav>
             </Navbar.Collapse>
           </Container>
         </Navbar>
       );
     }
     
     export default Header;
     ```
   * Salve o arquivo.

#### **Passo 7: Verificação e Encerramento da Quinzena 3**

1. **Testar o Carrinho:**
   * No navegador, vá para a página de Cardápio (`/cardapio`). Observe o spinner de carregamento e a lista de pizzas.
   * Clique em "Adicionar ao Carrinho" em algumas pizzas. Observe o contador no `Header` e os itens na página do Carrinho (`/carrinho`).
   * Tente remover itens e limpar o carrinho.
   * Recarregue a página (F5) e verifique se os itens do carrinho persistem (graças ao `localStorage`).
2. **Revisão:** Verifique o console do navegador para quaisquer erros ou avisos.
3. **Encerramento do Vídeo/Laboratório:** Resuma como a Context API e o `useReducer` foram usados para gerenciar o estado global do carrinho, e como o `localStorage` garante a persistência dos dados. Mencione que na próxima quinzena serão abordadas as requisições HTTP com Axios.

## Quinzena 4 (Maio) - Requisições HTTP com Axios e Hooks Customizados

### Conteúdo

Esta quinzena focará na comunicação da aplicação React com um backend, utilizando a biblioteca Axios para realizar requisições HTTP e criando hooks customizados para encapsular a lógica de acesso a dados.

* **Introdução a Requisições HTTP em React:**
  * **`fetch` API nativa:** Breve revisão da API `fetch` do navegador.
  * **Axios:** Apresentação do Axios como uma alternativa popular e mais robusta ao `fetch`.
  * **Vantagens do Axios:** Interceptores de requisição/resposta, tratamento automático de JSON, cancelamento de requisições, API mais amigável.
* **Instalação e Configuração do Axios:** Como adicionar o Axios ao projeto e realizar configurações básicas (ex: `baseURL`).
* **Realizando Requisições CRUD (GET, POST, PUT, DELETE):** Exemplos práticos de como usar o Axios para interagir com uma API RESTful.
* **Tratamento de Erros e Estados de Carregamento:** Como exibir mensagens de carregamento (`loading`) e de erro (`error`) para o usuário durante as requisições assíncronas.
* **Criação de Hooks Customizados para API (`useFetch`, `useAxios`):**
  * **Motivação:** Abstrair a lógica repetitiva de requisições HTTP (estados de loading, error, data) em um hook reutilizável.
  * **Implementação:** Como criar um hook que encapsula `useState`, `useEffect` e as chamadas Axios.
* **Integração com o Backend (Simulado ou Real):** Utilização de uma API simulada (ex: JSON Server ou mock de dados) para testar as requisições, ou integração com um backend real se disponível.

### Materiais de Referência

* **Documentação Oficial do Axios:** [axios-http.com/docs/intro]
* **Documentação React - Reusing Logic with Custom Hooks:** [react.dev/learn/reusing-logic-with-custom-hooks]
* **Tutorial: Como usar Axios com React:** [www.freecodecamp.org/news/how-to-use-axios-with-react/]

### Atividade Prática: Listagem de Pizzas e Detalhes com Axios e Hook Customizado

**Objetivo:** Buscar a lista de pizzas e os detalhes de uma pizza específica de uma API (simulada com dados estáticos por enquanto) usando Axios e um hook customizado, exibindo estados de carregamento e erro.

**Roteiro Detalhado para Vídeo e Laboratório:**

#### **Passo 1: Instalação do Axios**

1. **Abrir o Terminal:** Certifique-se de estar na pasta raiz do seu projeto `my-pizzaria-app`.
2. **Instalar a Biblioteca:**
   
   ```bash
   npm install axios
   ```
   
   * Este comando adiciona o Axios às dependências do seu projeto.

#### **Passo 2: Criar um Hook Customizado para Requisições de API (`useApi`)**

Vamos criar um hook genérico que pode ser usado para qualquer requisição GET, gerenciando os estados de carregamento, erro e dados.

1. **Criar Pasta `src/hooks`:** Se ainda não existir, crie a pasta `src/hooks`.
2. **Criar `src/hooks/useApi.js`:**
   
   ```jsx
   // src/hooks/useApi.js
   import { useState, useEffect } from 'react';
   import axios from 'axios';
   
   const useApi = (url) => {
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
   
     useEffect(() => {
       const fetchData = async () => {
         try {
           setLoading(true);
           const response = await axios.get(url);
           setData(response.data);
         } catch (err) {
           setError(err);
         } finally {
           setLoading(false);
         }
       };
   
       fetchData();
     }, [url]); // O efeito é re-executado se a URL mudar
   
     return { data, loading, error };
   };
   
   export default useApi;
   ```
   
   * **Explicação:**
     * O hook `useApi` recebe uma `url` como parâmetro.
     * Ele usa `useState` para gerenciar `data`, `loading` e `error`.
     * `useEffect` é usado para disparar a requisição Axios quando o componente que usa o hook é montado ou quando a `url` muda.
     * A função `fetchData` é assíncrona, usando `try-catch-finally` para lidar com sucesso, erro e estado de carregamento.
   * Salve o arquivo.

#### **Passo 3: Simular Dados da API (Temporário)**

Para testar nosso hook, vamos criar um arquivo com dados de pizzas que nosso hook `useApi` irá "buscar". Em um projeto real, esses dados viriam de um backend.

1. **Criar `src/data/pizzas.js`:**
   * Crie a pasta `src/data`.
   * Adicione o seguinte conteúdo:
     ```jsx
     // src/data/pizzas.js
     const pizzasData = [
       {
         id: 'p1',
         name: 'Pizza Margherita',
         description: 'Molho de tomate fresco, mussarela de búfala e manjericão.',
         price: 45.00,
         image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Margherita'
       },
       {
         id: 'p2',
         name: 'Pizza Calabresa',
         description: 'Molho de tomate, mussarela, calabresa fatiada e cebola roxa.',
         price: 50.00,
         image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Calabresa'
       },
       {
         id: 'p3',
         name: 'Pizza Frango com Catupiry',
         description: 'Molho de tomate, mussarela, frango desfiado temperado e catupiry original.',
         price: 55.00,
         image: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Frango'
       },
       {
         id: 'p4',
         name: 'Pizza Quatro Queijos',
         description: 'Mussarela, provolone, parmesão e gorgonzola.',
         price: 60.00,
         image: 'https://via.placeholder.com/150/FFFF00/000000?text=4Queijos'
       },
       {
         id: 'p5',
         name: 'Pizza Portuguesa',
         description: 'Molho de tomate, mussarela, presunto, ovos, cebola e azeitonas.',
         price: 58.00,
         image: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Portuguesa'
       },
     ];
     
     export default pizzasData;
     ```
   * Salve o arquivo.

#### **Passo 4: Integrar `useApi` no `CardapioPage.jsx` para Listar Pizzas**

Vamos usar nosso novo hook para buscar e exibir a lista de pizzas.

1. **Modificar `src/pages/CardapioPage.jsx`:**
   * Remova os dados `pizzas` simulados diretamente no arquivo.
   * Importe `useApi` e `pizzasData` (para simular a API).
   * Use `useApi` para buscar os dados e renderize condicionalmente.
     ```jsx
     // src/pages/CardapioPage.jsx
     import React from 'react';
     import { Row, Col, Spinner, Alert } from 'react-bootstrap'; // Importar Spinner e Alert
     import PizzaCard from '../components/PizzaCard';
     import useApi from '../hooks/useApi'; // Importar o hook customizado
     import pizzasData from '../data/pizzas'; // Importar dados simulados
     
     function CardapioPage() {
       // Simular a URL da API. Em um backend real, seria algo como '/api/pizzas'
       // Por enquanto, vamos usar os dados locais como se viessem de uma API
       // const { data: pizzas, loading, error } = useApi('/api/pizzas'); // Para API real
     
       // Para simular, vamos apenas usar os dados locais e simular loading/error
       const [pizzas, setPizzas] = React.useState([]);
       const [loading, setLoading] = React.useState(true);
       const [error, setError] = React.useState(null);
     
       React.useEffect(() => {
         // Simular um atraso de rede
         setTimeout(() => {
           try {
             setPizzas(pizzasData);
             setLoading(false);
           } catch (err) {
             setError('Erro ao carregar as pizzas.');
             setLoading(false);
           }
         }, 1000); // Atraso de 1 segundo
       }, []);
     
       if (loading) {
         return (
           <div className="text-center mt-5">
             <Spinner animation="border" role="status">
               <span className="visually-hidden">Carregando...</span>
             </Spinner>
             <p>Carregando cardápio...</p>
           </div>
         );
       }
     
       if (error) {
         return <Alert variant="danger">Erro: {error}</Alert>;
       }
     
       return (
         <div>
           <h1>Nosso Cardápio</h1>
           <p>Escolha suas pizzas favoritas!</p>
           <Row>
             {pizzas.map((pizza) => (
               <Col key={pizza.id} sm={12} md={6} lg={4}>
                 <PizzaCard pizza={pizza} />
               </Col>
             ))}
           </Row>
         </div>
       );
     }
     
     export default CardapioPage;
     ```
   * **Observação:** Para esta quinzena, o `useApi` foi demonstrado, mas para simplificar a simulação de dados e o `loading`/`error` sem um backend real, usei `useState` e `useEffect` diretamente no `CardapioPage`. Se houvesse um backend real, o `useApi('/api/pizzas')` seria a forma correta.
   * Salve o arquivo.

#### **Passo 5: Integrar `useApi` no `DetalhePizzaPage.jsx` para Exibir Detalhes**

Vamos usar o hook para buscar os detalhes de uma pizza específica.

1. **Modificar `src/pages/DetalhePizzaPage.jsx`:**
   * Importe `useParams`, `Spinner`, `Alert` e `pizzasData`.
   * Use `useApi` (simulado) para buscar a pizza pelo ID.
     ```jsx
     // src/pages/DetalhePizzaPage.jsx
     import React from 'react';
     import { useParams } from 'react-router-dom';
     import { Spinner, Alert, Card, Button } from 'react-bootstrap';
     import pizzasData from '../data/pizzas'; // Importar dados simulados
     
     function DetalhePizzaPage() {
       const { id } = useParams();
       const [pizza, setPizza] = React.useState(null);
       const [loading, setLoading] = React.useState(true);
       const [error, setError] = React.useState(null);
     
       React.useEffect(() => {
         setTimeout(() => {
           try {
             const foundPizza = pizzasData.find(p => p.id === id);
             if (foundPizza) {
               setPizza(foundPizza);
             } else {
               setError('Pizza não encontrada.');
             }
             setLoading(false);
           } catch (err) {
             setError('Erro ao carregar detalhes da pizza.');
             setLoading(false);
           }
         }, 500); // Atraso de 0.5 segundo
       }, [id]);
     
       if (loading) {
         return (
           <div className="text-center mt-5">
             <Spinner animation="border" role="status">
               <span className="visually-hidden">Carregando...</span>
             </Spinner>
             <p>Carregando detalhes da pizza...</p>
           </div>
         );
       }
     
       if (error) {
         return <Alert variant="danger">Erro: {error}</Alert>;
       }
     
       if (!pizza) {
         return <Alert variant="info">Nenhuma pizza encontrada com este ID.</Alert>;
       }
     
       return (
         <Card className="mt-4">
           <Card.Img variant="top" src={pizza.image} alt={pizza.name} style={{ maxHeight: '300px', objectFit: 'cover' }} />
           <Card.Body>
             <Card.Title as="h1">{pizza.name}</Card.Title>
             <Card.Text>{pizza.description}</Card.Text>
             <h4>Preço: R$ {pizza.price.toFixed(2)}</h4>
             <Button variant="primary">Adicionar ao Carrinho</Button> {/* Funcionalidade a ser implementada */}
           </Card.Body>
         </Card>
       );
     }
     
     export default DetalhePizzaPage;
     ```
   * **Observação:** Similar ao `CardapioPage`, a simulação de `useApi` é feita diretamente com `useState` e `useEffect` para usar os dados locais. Em um cenário real, o `useApi` seria usado com a URL da API real.
   * Salve o arquivo.

#### **Passo 6: Verificação e Encerramento da Quinzena 4**

1. **Testar Listagem e Detalhes:**
   * No navegador, vá para a página de Cardápio (`/cardapio`). Observe o spinner de carregamento e a lista de pizzas.
   * Clique em uma pizza (ou navegue para `/pizza/p1`, `/pizza/p2`, etc.) e veja os detalhes. Tente um ID inexistente (ex: `/pizza/p99`) para ver a mensagem de erro.
2. **Revisão:** Verifique o console do navegador para quaisquer erros ou avisos.
3. **Encerramento do Vídeo/Laboratório:** Resuma a importância do Axios para requisições HTTP e como hooks customizados como `useApi` ajudam a organizar e reutilizar a lógica de acesso a dados, incluindo o tratamento de estados de carregamento e erro. Mencione que na próxima quinzena serão abordados os formulários com React Hook Form.

---

## Quinzena 5 (Maio) - Formulários com React Hook Form e Validação

### Conteúdo

Esta quinzena abordará a criação e validação de formulários em React, utilizando a biblioteca React Hook Form, que otimiza a performance e simplifica o gerenciamento de estados de formulário.

*   **Desafios de Gerenciamento de Formulários em React:** Discussão sobre as complexidades de lidar com estados de input, validação e submissão em formulários React tradicionais (componentes controlados).
*   **Introdução ao React Hook Form:**
    *   **O que é:** Uma biblioteca para gerenciar formulários de forma eficiente no React.
    *   **Vantagens:** Performance otimizada (evita re-renderizações desnecessárias), validação simplificada, API intuitiva, integração com componentes de UI.
*   **Instalação e Configuração Básica:**
    *   `useForm`: O hook principal para inicializar o formulário e obter métodos e estados.
    *   `register`: Função para registrar inputs no React Hook Form, conectando-os ao estado do formulário.
    *   `handleSubmit`: Função que envolve a lógica de submissão, disparando a validação antes de executar o callback de sucesso.
    *   `formState`: Objeto que contém informações sobre o estado do formulário (erros, dirty, touched, isValid, etc.).
*   **Validação de Formulários:**
    *   **Regras de Validação:** Como aplicar regras built-in (ex: `required`, `minLength`, `maxLength`, `pattern`, `min`, `max`) diretamente no `register`.
    *   **Validação Customizada:** Como criar suas próprias regras de validação.
*   **Exibição de Mensagens de Erro:** Como acessar os erros via `formState.errors` e exibi-los de forma amigável para o usuário.
*   **Integração com Bibliotecas de UI (React-Bootstrap):** Como usar o React Hook Form com componentes de formulário do React-Bootstrap, mantendo a estilização e a acessibilidade.

### Materiais de Referência

*   **Documentação Oficial do React Hook Form:** [react-hook-form.com/get-started]
*   **Tutorial React Hook Form com Validação:** [www.freecodecamp.org/news/react-hook-form-tutorial-with-validation/]

### Atividade Prática: Formulário de Pedido de Pizza com Validação

**Objetivo:** Criar um formulário de pedido de pizza completo, utilizando o React Hook Form para gerenciar os inputs e aplicar validações robustas, exibindo mensagens de erro para o usuário.

**Roteiro Detalhado para Vídeo e Laboratório:**

#### **Passo 1: Instalação do React Hook Form**

1.  **Abrir o Terminal:** Certifique-se de estar na pasta raiz do seu projeto `my-pizzaria-app`.
2.  **Instalar a Biblioteca:**
    ```bash
    npm install react-hook-form
    ```
    *   Este comando adiciona o React Hook Form às dependências do seu projeto.

#### **Passo 2: Criar o Componente `PedidoForm`**

Vamos criar um componente para o formulário de pedido, que incluirá campos para informações do cliente e detalhes do pedido.

1.  **Criar `src/components/PedidoForm.jsx`:**
    ```jsx
    // src/components/PedidoForm.jsx
    import React from 'react';
    import { useForm } from 'react-hook-form'; // Importar useForm
    import { Form, Button, Row, Col } from 'react-bootstrap';

    function PedidoForm() {
      const { register, handleSubmit, formState: { errors } } = useForm(); // Inicializar useForm

      const onSubmit = (data) => {
        console.log('Dados do Pedido:', data);
        alert('Pedido realizado com sucesso! Verifique o console para os dados.');
        // Aqui você enviaria os dados para o backend
      };

      return (
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <h2>Seus Dados</h2>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNome">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Seu nome"
                {...register('nome', { required: 'Nome é obrigatório' })}
              />
              {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="seu@email.com"
                {...register('email', {
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                  }
                })}
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridEndereco">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              placeholder="Rua, número, bairro"
              {...register('endereco', { required: 'Endereço é obrigatório' })}
            />
            {errors.endereco && <p className="text-danger">{errors.endereco.message}</p>}
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTelefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                {...register('telefone', {
                  required: 'Telefone é obrigatório',
                  pattern: {
                    value: /^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/,
                    message: 'Formato de telefone inválido'
                  }
                })}
              />
              {errors.telefone && <p className="text-danger">{errors.telefone.message}</p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPagamento">
              <Form.Label>Forma de Pagamento</Form.Label>
              <Form.Select
                defaultValue="Dinheiro"
                {...register('pagamento', { required: 'Forma de pagamento é obrigatória' })}
              >
                <option value="Dinheiro">Dinheiro</option>
                <option value="CartaoCredito">Cartão de Crédito</option>
                <option value="CartaoDebito">Cartão de Débito</option>
                <option value="Pix">Pix</option>
              </Form.Select>
              {errors.pagamento && <p className="text-danger">{errors.pagamento.message}</p>}
            </Form.Group>
          </Row>

          <Button variant="success" type="submit">
            Finalizar Pedido
          </Button>
        </Form>
      );
    }

    export default PedidoForm;
    ```
    *   **Explicação:**
        *   `useForm()` é inicializado para obter `register`, `handleSubmit` e `formState: { errors }`.
        *   Cada `Form.Control` do React-Bootstrap é conectado ao React Hook Form usando o spread operator `{...register('nomeDoCampo', { regrasDeValidacao })}`.
        *   As regras de validação (`required`, `pattern`) são definidas diretamente no `register`.
        *   As mensagens de erro são exibidas condicionalmente usando `errors.nomeDoCampo && <p className="text-danger">{errors.nomeDoCampo.message}</p>`.
        *   A função `onSubmit` é chamada apenas se o formulário for válido.
    *   Salve o arquivo.

#### **Passo 3: Integrar o `PedidoForm` na Página do Carrinho**

Vamos adicionar o formulário de pedido à página do carrinho, para que o usuário possa finalizar a compra.

1.  **Modificar `src/pages/CarrinhoPage.jsx`:**
    *   Importe `PedidoForm`.
    *   Adicione o componente `PedidoForm` abaixo do resumo do carrinho.
        ```jsx
        // src/pages/CarrinhoPage.jsx (trecho do return)
        import React from 'react';
        import { useCart } from '../context/CartContext';
        import { ListGroup, Button, Row, Col } from 'react-bootstrap';
        import PedidoForm from '../components/PedidoForm'; // Importar PedidoForm

        function CarrinhoPage() {
          const { cartState, dispatch } = useCart();

          const handleRemoveItem = (id) => {
            dispatch({ type: 'REMOVE_ITEM', payload: { id } });
          };

          const handleClearCart = () => {
            dispatch({ type: 'CLEAR_CART' });
            alert('Carrinho limpo!');
          };

          return (
            <div>
              <h1>Seu Carrinho de Compras</h1>
              {cartState.items.length === 0 ? (
                <p>Seu carrinho está vazio. Adicione algumas pizzas do <a href="/cardapio">cardápio</a>!</p>
              ) : (
                <>
                  <ListGroup>
                    {cartState.items.map((item) => (
                      <ListGroup.Item key={item.id}>
                        <Row className="align-items-center">
                          <Col xs={6}>{item.name} (x{item.quantity})</Col>
                          <Col xs={3}>R$ {(item.price * item.quantity).toFixed(2)}</Col>
                          <Col xs={3} className="text-end">
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              Remover
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                  <h3 className="mt-3">Total: R$ {cartState.total.toFixed(2)}</h3>
                  <Button variant="warning" onClick={handleClearCart} className="mt-3">
                    Limpar Carrinho
                  </Button>
                  {/* O botão de finalizar pedido agora estará no formulário */}
                  <hr className="my-4" />
                  <PedidoForm /> {/* Adicionar o formulário de pedido */}
                </>
              )}
            </div>
          );
        }

        export default CarrinhoPage;
        ```
    *   Salve o arquivo.

#### **Passo 4: Verificação e Encerramento da Quinzena 5**

1.  **Testar o Formulário:**
    *   No navegador, adicione algumas pizzas ao carrinho (`/cardapio`).
    *   Vá para a página do Carrinho (`/carrinho`).
    *   Tente submeter o formulário sem preencher os campos obrigatórios. Observe as mensagens de erro.
    *   Preencha o formulário corretamente e submeta. Verifique o console para os dados do pedido.
2.  **Revisão:** Verifique o console do navegador para quaisquer erros ou avisos.
3.  **Encerramento do Vídeo/Laboratório:** Resuma como o React Hook Form simplifica a criação e validação de formulários, melhorando a performance e a experiência do desenvolvedor. Destaque o uso de `register`, `handleSubmit` e `formState.errors`. Mencione que na próxima quinzena será abordada a autenticação de usuários.

## Quinzena 6 (Junho) - Autenticação e Rotas Protegidas

### Conteúdo

Esta quinzena abordará a implementação de um sistema de autenticação básico em uma aplicação React, focando na gestão do estado de autenticação e na proteção de rotas para usuários logados.

*   **Conceitos de Autenticação e Autorização em SPAs:**
    *   **Autenticação:** Verificação da identidade do usuário (quem você é).
    *   **Autorização:** Verificação das permissões do usuário (o que você pode fazer).
    *   **Tokens (ex: JWT):** Como tokens são usados para manter o estado de autenticação sem sessões no servidor (stateless).
*   **Simulação de Login/Logout:** Implementação de um fluxo básico de login e logout, com armazenamento de um token (simulado) no `localStorage` do navegador.
*   **Criação de um `AuthContext`:**
    *   **Motivação:** Gerenciar o estado de autenticação (usuário logado, token) globalmente e disponibilizá-lo para toda a aplicação.
    *   **`AuthProvider`:** Componente que envolve a aplicação e fornece o contexto de autenticação.
    *   **`useAuth`:** Hook customizado para consumir o `AuthContext`.
*   **Implementação de Rotas Protegidas com React Router DOM:**
    *   **`Outlet`:** Componente do React Router DOM usado para renderizar rotas filhas em layouts aninhados.
    *   **Componentes de Wrapper (`ProtectedRoute`):** Criação de um componente que verifica o status de autenticação antes de renderizar o conteúdo da rota, redirecionando o usuário se não estiver autenticado.
*   **Redirecionamento de Usuários Não Autenticados:** Como usar `useNavigate` para enviar usuários para a página de login quando tentam acessar uma rota protegida sem permissão.
*   **Exibição Condicional de Elementos da UI:** Como mostrar ou ocultar partes da interface (ex: botão de login/logout, itens de menu) com base no status de autenticação do usuário.

### Materiais de Referência

*   **Tutorial: Autenticação em React com Context API:** [www.freecodecamp.org/news/how-to-handle-authentication-in-react-with-context-api/]
*   **React Router DOM - Protected Routes:** [reactrouter.com/en/main/components/outlet]
*   **Entenda o que é JWT:** [jwt.io/introduction/]

### Atividade Prática: Login e Proteção de Rotas na Pizzaria

**Objetivo:** Implementar um sistema de login/logout funcional e proteger rotas específicas da Pizzaria Digital, garantindo que apenas usuários autenticados possam acessá-las. O estado de autenticação será gerenciado globalmente via Context API.

**Roteiro Detalhado para Vídeo e Laboratório:**

#### **Passo 1: Criação do `AuthContext`**

Vamos criar o contexto que gerenciará o estado de autenticação do usuário.

1.  **Criar `src/context/AuthContext.jsx`:**
    ```jsx
    // src/context/AuthContext.jsx
    import React, { createContext, useState, useContext, useEffect } from 'react';

    // 1. Criar o Contexto de Autenticação
    export const AuthContext = createContext(null);

    // 2. Criar o Provider de Autenticação
    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [token, setToken] = useState(localStorage.getItem('authToken') || null);

      // Efeito para carregar o usuário/token do localStorage na inicialização
      useEffect(() => {
        if (token) {
          // Em um cenário real, você decodificaria o JWT ou faria uma requisição para validar o token
          // Por simplicidade, vamos apenas simular um usuário
          setUser({ name: 'Usuário Teste', email: 'teste@pizzaria.com' });
        }
      }, [token]);

      const login = (newToken) => {
        setToken(newToken);
        localStorage.setItem('authToken', newToken);
        // Simular o usuário após o login
        setUser({ name: 'Usuário Teste', email: 'teste@pizzaria.com' });
      };

      const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
      };

      const isAuthenticated = !!user; // true se user não for null

      return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };

    // 3. Hook customizado para facilitar o uso do contexto
    export const useAuth = () => {
      return useContext(AuthContext);
    };
    ```
    *   **Explicação:**
        *   `AuthContext`: O contexto em si.
        *   `AuthProvider`: Gerencia o estado `user` e `token`, e as funções `login` e `logout`. Ele também persiste o `token` no `localStorage`.
        *   `useAuth`: Hook customizado para consumir o contexto.
    *   Salve o arquivo.

#### **Passo 2: Integrar o `AuthProvider` na Aplicação**

Assim como o `CartProvider`, o `AuthProvider` precisa envolver a aplicação para que o estado de autenticação esteja disponível globalmente.

1.  **Modificar `src/main.jsx`:**
    *   Importe `AuthProvider` e envolva o `<App />` com ele (dentro do `BrowserRouter` e `CartProvider`):
        ```jsx
        // src/main.jsx
        import 'bootstrap/dist/css/bootstrap.min.css';
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        import App from './App.jsx';
        import './index.css';
        import { BrowserRouter } from 'react-router-dom';
        import { CartProvider } from './context/CartContext';
        import { AuthProvider } from './context/AuthContext'; // Importar AuthProvider

        ReactDOM.createRoot(document.getElementById('root')).render(
          <React.StrictMode>
            <BrowserRouter>
              <CartProvider>
                <AuthProvider> {/* Envolver App com AuthProvider */}
                  <App />
                </AuthProvider>
              </CartProvider>
            </BrowserRouter>
          </React.StrictMode>,
        );
        ```
    *   Salve o arquivo.

#### **Passo 3: Criar a Página de Login (`LoginPage.jsx`)**

Vamos refatorar a página de login para usar o React Hook Form e interagir com o `AuthContext`.

1.  **Modificar `src/pages/LoginPage.jsx`:**
    *   Importe `useForm`, `Form`, `Button`, `Alert` do React-Bootstrap e `useAuth`, `useNavigate`.
    *   Implemente o formulário de login e a lógica de autenticação.
        ```jsx
        // src/pages/LoginPage.jsx
        import React, { useState } from 'react';
        import { useForm } from 'react-hook-form';
        import { Form, Button, Alert } from 'react-bootstrap';
        import { useNavigate } from 'react-router-dom';
        import { useAuth } from '../context/AuthContext'; // Importar useAuth

        function LoginPage() {
          const { register, handleSubmit, formState: { errors } } = useForm();
          const { login, isAuthenticated } = useAuth(); // Obter login e isAuthenticated do contexto
          const navigate = useNavigate();
          const [loginError, setLoginError] = useState(null);

          // Se já estiver autenticado, redirecionar para a home
          React.useEffect(() => {
            if (isAuthenticated) {
              navigate('/');
            }
          }, [isAuthenticated, navigate]);

          const onSubmit = (data) => {
            // Simular chamada de API de login
            if (data.email === 'teste@pizzaria.com' && data.password === '123456') {
              const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVzdWFyaW8gVGVzdGUiLCJpYXQiOjE1MTYyMzkwMjJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
              login(fakeToken); // Chamar a função login do contexto
              navigate('/'); // Redirecionar para a página inicial
            } else {
              setLoginError('Email ou senha inválidos.');
            }
          };

          if (isAuthenticated) {
            return <p>Você já está logado. Redirecionando...</p>;
          }

          return (
            <div>
              <h1>Login</h1>
              <p>Acesse sua conta para fazer pedidos.</p>
              {loginError && <Alert variant="danger">{loginError}</Alert>}
              <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    {...register('email', { required: 'Email é obrigatório' })}
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    {...register('password', { required: 'Senha é obrigatória' })}
                  />
                  {errors.password && <p className="text-danger">{errors.password.message}</p>}
                </Form.Group>

                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </Form>
            </div>
          );
        }

        export default LoginPage;
        ```
    *   **Explicação:** O formulário usa React Hook Form para validação. Ao submeter, ele simula um login e, se bem-sucedido, chama `login` do `AuthContext` e redireciona. Se o usuário já estiver logado, ele é redirecionado automaticamente.
    *   Salve o arquivo.

#### **Passo 4: Criar Componente de Rota Protegida (`ProtectedRoute.jsx`)**

Este componente será usado para envolver rotas que só podem ser acessadas por usuários autenticados.

1.  **Criar `src/components/ProtectedRoute.jsx`:**
    ```jsx
    // src/components/ProtectedRoute.jsx
    import React from 'react';
    import { Navigate, Outlet } from 'react-router-dom';
    import { useAuth } from '../context/AuthContext'; // Importar useAuth

    function ProtectedRoute() {
      const { isAuthenticated } = useAuth(); // Verificar se o usuário está autenticado

      if (!isAuthenticated) {
        // Se não estiver autenticado, redireciona para a página de login
        return <Navigate to="/login" replace />; // 'replace' impede que o usuário volte para a página protegida com o botão 'voltar'
      }

      // Se estiver autenticado, renderiza o conteúdo da rota filha
      return <Outlet />;
    }

    export default ProtectedRoute;
    ```
    *   **Explicação:** O `ProtectedRoute` usa `useAuth` para verificar `isAuthenticated`. Se falso, ele redireciona para `/login` usando `Navigate`. Caso contrário, ele renderiza o `Outlet`, que é o componente da rota filha que ele está protegendo.
    *   Salve o arquivo.

#### **Passo 5: Proteger Rotas no `App.jsx`**

Agora, vamos aplicar a proteção às rotas que exigem autenticação.

1.  **Modificar `src/App.jsx`:**
    *   Importe `ProtectedRoute`.
    *   Use `ProtectedRoute` para envolver as rotas `/carrinho` e `/pedido` (se houver).
        ```jsx
        // src/App.jsx (trecho das rotas)
        import React from 'react';
        import Header from './components/Header';
        import Footer from './components/Footer';
        import { Container } from 'react-bootstrap';
        import { Routes, Route } from 'react-router-dom';

        import HomePage from './pages/HomePage';
        import CardapioPage from './pages/CardapioPage';
        import CarrinhoPage from './pages/CarrinhoPage';
        import LoginPage from './pages/LoginPage';
        import DetalhePizzaPage from './pages/DetalhePizzaPage';
        import ProtectedRoute from './components/ProtectedRoute'; // Importar ProtectedRoute

        function App() {
          return (
            <div className="d-flex flex-column min-vh-100">
              <Header />
              <Container className="flex-grow-1 mt-4">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/cardapio" element={<CardapioPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/pizza/:id" element={<DetalhePizzaPage />} />

                  {/* Rotas Protegidas */}
                  <Route element={<ProtectedRoute />}> {/* Envolve as rotas protegidas */}
                    <Route path="/carrinho" element={<CarrinhoPage />} />
                    {/* Adicione outras rotas protegidas aqui, ex: <Route path="/perfil" element={<ProfilePage />} /> */}
                  </Route>

                  {/* Rota para 404 - Página não encontrada */}
                  <Route path="*" element={<h1>404 - Página Não Encontrada</h1>} />
                </Routes>
              </Container>
              <Footer />
            </div>
          );
        }

        export default App;
        ```
    *   **Explicação:** A rota `<Route element={<ProtectedRoute />}>` age como um layout para suas rotas filhas. Se o `ProtectedRoute` permitir, ele renderiza o `Outlet`, que por sua vez renderiza o `CarrinhoPage`.
    *   Salve o arquivo.

#### **Passo 6: Exibição Condicional no `Header` (Login/Logout)**

Vamos ajustar o `Header` para mostrar opções diferentes dependendo se o usuário está logado ou não.

1.  **Modificar `src/components/Header.jsx`:**
    *   Importe `useAuth`.
    *   Use `isAuthenticated` e `logout` do contexto para renderizar condicionalmente os links.
        ```jsx
        // src/components/Header.jsx
        import React from 'react';
        import { Navbar, Container, Nav, Badge, Button } from 'react-bootstrap'; // Importar Button
        import { Link, NavLink, useNavigate } from 'react-router-dom'; // Importar useNavigate
        import { useCart } from '../context/CartContext';
        import { useAuth } from '../context/AuthContext'; // Importar useAuth

        function Header() {
          const { cartState } = useCart();
          const { isAuthenticated, user, logout } = useAuth(); // Obter isAuthenticated, user e logout
          const navigate = useNavigate();
          const totalItems = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

          const handleLogout = () => {
            logout();
            navigate('/login'); // Redirecionar para login após logout
          };

          return (
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand as={Link} to="/">Pizzaria Digital</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <NavLink as={Link} to="/" className="nav-link">Home</NavLink>
                    <NavLink as={Link} to="/cardapio" className="nav-link">Cardápio</NavLink>
                    <NavLink as={Link} to="/carrinho" className="nav-link">
                      Carrinho <Badge bg="secondary">{totalItems}</Badge>
                    </NavLink>
                  </Nav>
                  <Nav>
                    {isAuthenticated ? (
                      <> {/* Fragmento para agrupar elementos */}
                        <Navbar.Text className="me-3">Olá, {user?.name}!</Navbar.Text>
                        <Button variant="outline-light" onClick={handleLogout}>Sair</Button>
                      </>
                    ) : (
                      <NavLink as={Link} to="/login" className="nav-link">Login</NavLink>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

        export default Header;
        ```
    *   **Explicação:** O `Header` agora verifica `isAuthenticated`. Se verdadeiro, mostra uma mensagem de boas-vindas e um botão "Sair". Caso contrário, mostra o link "Login". O botão "Sair" chama `logout` do contexto e redireciona para a página de login.
    *   Salve o arquivo.

#### **Passo 7: Verificação e Encerramento da Quinzena 6**

1.  **Testar o Fluxo de Autenticação:**
    *   Abra a aplicação no navegador. Tente acessar `/carrinho` diretamente. Você deverá ser redirecionado para `/login`.
    *   Vá para `/login` e use `teste@pizzaria.com` e `123456` para logar. Observe que o `Header` muda para "Olá, Usuário Teste!" e um botão "Sair".
    *   Agora, tente acessar `/carrinho` novamente. Você deverá ter acesso.
    *   Clique em "Sair". Você deverá ser redirecionado para `/login` e o `Header` voltará ao normal.
    *   Recarregue a página após o login e verifique se o status de autenticação persiste (graças ao `localStorage`).
2.  **Revisão:** Verifique o console do navegador para quaisquer erros ou avisos.
3.  **Encerramento do Vídeo/Laboratório:** Resuma a importância da autenticação em SPAs, como a Context API foi usada para gerenciar o estado de autenticação globalmente, e como o React Router DOM permite proteger rotas. Destaque o uso de `ProtectedRoute` e a exibição condicional de UI. Mencione que este é o fim do primeiro trimestre, e os alunos têm uma base sólida para continuar desenvolvendo aplicações React.
