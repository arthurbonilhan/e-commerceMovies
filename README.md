# E-commerce Website with React, TypeScript, Tailwind CSS, and Atomic Design

## Descrição do Projeto

Este projeto consiste na criação de um site de e-commerce simplificado, desenvolvido utilizando React com TypeScript, estilizado com Tailwind CSS, e organizado conforme o Atomic Design. O site possui três principais módulos/telas:

- **Home**: Mostra uma lista de filmes obtidos através de uma requisição à API. Cada filme pode ser adicionado ao carrinho de compras.
- **Carrinho**: Exibe os itens adicionados ao carrinho, calcula o valor total baseado nos itens adicionados e permite a remoção de itens. Se o carrinho estiver vazio, exibe uma tela de "empty" com a opção de retornar à tela inicial.
- **Compra Realizada**: Após confirmar o pedido na tela do carrinho, o usuário é direcionado para esta tela de confirmação de pedido, com a opção de retornar à tela inicial.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e customizável.
- **Atomic Design**: Metodologia de design que facilita a criação e manutenção de sistemas de design escaláveis.

## Requisitos Cumpridos

- Implementação das três telas/módulos especificados.
- Requisição à API para obter a lista de filmes na tela inicial.
- Funcionalidade completa do carrinho de compras, incluindo cálculo do total e remoção de itens.
- Transição para a tela de confirmação de pedido após a finalização da compra.

## Estrutura do Projeto

- Componentes organizados por Atomic Design
- Componentes React reutilizáveis

## Iniciando a aplicação atraves de clone

1. Clone o Projeto
2. Rode `npm install` ou `yarn install` na raiz do projeto.<br />
3. Rode `yarn start` e acesse `http://localhost:3000/`.<br />
4. Em caso de dúvidas, favor entrar em contato.

## Melhorias que eu faria:

- Adicionaria um esquema de rotas com react-router-dom ou algo parecido
- Melhoria a responsividade("Não deu tempo para finalizar")
- Colocaria um sistema de avaliação
- Busca por filmes
- Lista de desejos
- Autenticação
