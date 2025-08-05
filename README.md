# Magia do Bruxo

## Indice

## Descrição

O projeto consiste em uma landing page para a produto digital "Magia do Bruxo". O intúito principal é a divulgar o produto e prover os materiais necessários para tal objetivo.

## Tecnologias

| Tecnologia                                          | Objetivo                            | Versão |
| --------------------------------------------------- | ----------------------------------- | ------ |
| [React](https://react.dev/)                         | Biblioteca para criação de SPAs     | 19.0.0 |
| [NextJS](https://nextjs.org/)                       | Framework de desenvolvimento web    | 15.1.7 |
| [React Hook Form](https://www.react-hook-form.com/) | Biblioteca de gestão de formulários | 7.54.2 |
| [Zod](https://github.com/colinhacks/zod)            | Biblioteca de validação de schemas  | 3.24.2 |
| [Tailwind CSS](https://google.com/)                 | Framework de CSS                    | 3.4.1  |

## Instalação

### Pré-requisitos

- [Node JS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Extensões para o VS Code

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Configuração

1. Clone o Repositório

```bash
git clone
```

2. Instale as dependencias do projeto

```bash
yarn
```

ou

```bash
yarn install
```

## Como contribuir com o projeto?

1. Clone o repositório na sua máquina e crie uma branch utilizando da convenção de nomeação de branch

   - feat: nova feature (funcionalidade)
   - fix: correções
   - chore: atualização e/ou inclusão de nova biblioteca

2. Faça um commit utilizando dos [conventional commits](https://medium.com/linkapi-solutions/conventional-commits-pattern-3778d1a1e657), exemplo:

   - feat: modal de inscrição
   - refactor: correção da lógica de validação do formulário
   - fix: correção do comportamento da abertura do modal

3. Faça o push para sua branch:

```bash
git push origin feat/nome-da-feature
```

4. Abra um Pull request no repositório:

   1. Adicione uma descrição **clara** e objetiva do que foi feito
   2. Adicione um screenshot, gif ou links para facilitar a visualização do que foi feito.
   3. Adicione um título claro e objetivo para o seu pull request.

5. Caso haja conflitos, o autor do Pull Request será o responsável por resolve-los antes de efetuar o merge.

## Arquitetura

### Divisão dos components

Aqui estamos utilizando o padrão conhecido como atomic design, este realiza separação dos componentes em átomos (atoms), moléculas (molecules) e organismos (organisms).

1. Átomos: São componentes de menor complexidade, como um botão ou um input
2. Moléculas: São componentes construídos a partir de dois ou mais Átomos, como um input field que contém um Label e um Input
3. Organismos: são compostos de duas ou mais Moléculas, como um formulário

### Estrutura de pastas

```markdown
manual-do-bruxo
├── public -> assets públicos ao projeto
├── src -> contém todos os itens referentes a aplicação
│ ├── app -> onde se concentram as páginas/rotas da aplicação e css global
│ ├── components -> ondem ficam todos os componentes utilizados na aplicação
│ │ ├── atoms -> componentes átomos
│ │ ├── molecules -> componentes moléculas
│ │ └── organisms -> componentes organismos
│ └── hooks -> hooks personalizados
├── .editorconfig -> configurações padronizadas para a IDE
├── .gitignore -> arquivo de configuração do git
├── .prettierrc -> arquivo de configuração do prettier
├── eslint.config.mjs -> arquivo de configuração do eslint
├── next.config.ts -> arquivo de configuração do nextjs
├── package.json -> arquivo de configuração do node com as dependencias do projeto
├── yarn.lock -> arquivo que mantem padronizadas as dependencias do projeto
├── postcss.config.mjs -> arquivo de configuração do postcss
├── README.md -> Documentação do projeto
├── tailwind.config.ts -> arquivo de configuração do tailwind css
└── tsconfig.json -> arquivo de configuração do TypeScript
```

git commit --author="Rodrigo Lima contato@manualdobruxo.com" -m ""