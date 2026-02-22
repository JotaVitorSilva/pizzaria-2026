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
