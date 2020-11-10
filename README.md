# Kanban Board Web App [![GitHub license](https://img.shields.io/badge/license-MIT-blue)](./LICENSE.md) ![version](https://img.shields.io/badge/version-v1.0.1-green)

![react](https://img.shields.io/badge/react-v16.13.1-orange) 
![react_icons](https://img.shields.io/badge/react_icons-v3.11.0-orange) 
![styled_components](https://img.shields.io/badge/styled_components-5.2.0-orange)

## Introdução

Esta aplicação web apresenta um painel de cartões para gerenciamento de tarefas baseado em Kanban e desenvolvido com React JS.

## Utilização

A aplicação é intuitiva e inicia com um modelo padrão do tipo "a fazer". Sua estrutura pode ser dividida em:

#### Colunas
As colunas de tarefas organizam os cartões de acordo com seu estado, e podem ser inseridas, movidas ou excluidas, permitindo uma extrutura flexivel a necessidade do utilizador.

#### Cartões
Os cartões das tarefas podem ser inseridos a qualquer momento e em qualquer coluna, bem como movidos entre as colunas de acordo com o progresso da tarefa. Também contam com data de inicio, previsão de conclusão, prioridade, podem ser personalizados com cores, possuem visão expandida, podem ser bloqueados para edição e marcados como concluidos.

## Funções adicionais

A aplicação conta ainda com suporte a temas e importação e exportação do arquivo de dados.


## Contribuições

Contribuições são bem vindas sempre, o projeto se desenvolve nos termos da [licença MIT](./LICENSE.md)

### Limitações conhecidas
A aplicação é um projeto em desenvolvimento e pode conter bugs. Contudo existem limitações conhecidas que foram ignoradas, na maior parte das vezes, visando garantir a usuabilidade da aplicação.

#### Boas e más escolhas:

Essa aplicação é um protótipo usável desenvolvido como parte de um portifólio e não tem o objeitvo de se tornar comercial, ainda que o projeto possa se desenolver ganhando correções, melhorias e novas funcionalidades.

* **Deixando todo o trabalho com o navegador...**

  Toda a aplicação foi desenvolvida em react e javascript por dois motivos.

  1. Permite a execução direta no navegador não exigindo nenhum recurso de backend adicional;
  2. Flexibiliza o desenvolvimento permitindo alta compatibilidade e responsividade;

  É claro que essa escolha acerreta em impactos negativos como o alto uso de recursos de memoria em alguns navegadores, entretanto correções e otimização poderão ocorrer no futuro. 

* **Porque usar apenas armazenamento persistente?**

  Utilzar o armazenamento local permite que a aplicação se torne realmente útil ainda que como um protótipo, consumindo o minimo de recursos de hospedagem e flexibilizando o acesso do usuario, permitindo que ele mantenha seus cartões e personalizações de interface, ao menos enquanto não limpar os dados do seu navegador, e em contra partida exigindo o minimo de manutenção.

  É altamente viável a implementação de um banco de dados principalmente se baseado em documentos, como o `FireStore`, entretando exige a implementação de autenticação e uma atenção maior com aspectos de privacidade e segurança.

### Futuro

Inumeras melhorias podem ser implementadas em proximas versões, entre elas:

    1. suporte a arrastar e soltar;
    2. suporte a personalização de temas;
    3. suporte a banco de dados;
    4. autenticação com Firebase;
    5. suporte a multiplos usuários;
