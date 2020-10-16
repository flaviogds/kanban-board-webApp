# Kanban Board Web App

## Introdução

Kanban Board Web App é uma aplicação simples e intuitiva para gerenciar fluxos de tarefas no dia-a-dia.

## Utilização

A aplicação inicia com um modelo padrão do tipo "a fazer", com as colunas: a fazer, em processo, concluido.

#### Colunas
Novas colunas podem ser criadas para atender a demanda de processos mais segmentados (como por exemplo um processo de testes).

#### Cartões
Os cartões podem ser inseridos a qualquer momento e em qualquer coluna, apesar de não ser indicado (não é um problema da aplicação, só não é produtivo).
Os cartões contem data de inicio, previsão de conclusão, prioridade e podem ser personalizados com cores.


## Limitações conhecidas
A aplicação é um projeto em desenvolvimento e pode (muito provalmente irá) conter bugs.
Contudo existem limitações conhecidas que foram ignoradas, como por exemplo o uso e compatibilidade do `localStorage` com alguns navegadores.

#### Por que usar o localStorage?

Essa aplicação é um protótipo usável desenvolvido como parte de um portifólio e não tem o objeitvo de se tornar comercial, ainda que o projeto possa (e irá) se desenolver ganhando correções, melhorias e novas funcionalidades.

Utilzar o localStorage permite ao usuario manter seus cartões e personalizações de interface, ao menos enquanto não limpar os dados do seu navegador.

#### Boas e más escolhas...

A aplicação utiliza apenas o armazenamento persistente do localStorage, e o utliza apenas para manter os objetos de interesse do usuario.

## Contribuições

Contribuições são bem vindas sempre, o projeto se desenvolve nos termos da [licença MIT](./LICENCE.md)

Este projeto foi desenvolvido utilizando [Create React App](https://github.com/facebook/create-react-app).

Você pode clonar este repositório e no diretório do projeto rodar `npm install` (ou `yarn install` se o gerenciador de pacotes estiver instalado) para instalar todas as dependencias do projeto.

E então use `npm start` (ou `yarn start`)
