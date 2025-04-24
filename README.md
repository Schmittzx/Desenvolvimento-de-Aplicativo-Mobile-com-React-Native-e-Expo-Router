# Aplicativo de Catálogo  com React Native e Expo Router

Este é um aplicativo mobile desenvolvido conforme tópicos aprendidos em sala de aula, como Tabs, Stack, Link, StyleSheet, entre outros.

## Visão Geral

O aplicativo é um catálogo de produtos organizados por categorias, esta disponibilizada pelo nosso professor, que perimite a navegação entre diferentes seções pela TabBar com icons e uma estrutura baseada em Stack. A navegação principal é feita pelos ícones na parte inferior, representando **Início** (uma casa), **Categorias** (uma etiqueta) e **Sobre mim** (um busto). A navegação dentro da tab Categorias é para os detalhes dos produtos.

## Estrutura da Aplicação

A estrutura de pastas do projeto é a seguinte:
app/
_layout.tsx          # Layout de nível superior da aplicação (Stack principal)
index.tsx            # Tela inicial
+not-found.tsx       # Tela exibida para rotas não encontradas
(tabs)/
_layout.tsx      # Layout da Tab Bar principal com ícones
about.tsx          # Tela "Sobre Mim"
explore.tsx        # Tela de listagem de categorias
index.tsx          # Tela inicial dentro das tabs
category/
[id].tsx           # Tela de produtos de uma categoria específica (rota dinâmica)
product/
[id].tsx            # Tela de detalhes de um produto específico (rota dinâmica)
data/
index.ts            # Arquivo com os dados iniciais (categorias e produtos)
types/
index.ts            # Arquivo com as definições de tipo (Data, Category, Product)
category.ts         # Definição de tipo para Categoria
product.ts          # Definição de tipo para Produto

## Requisitos Técnicos

- **React Native com Expo:** O aplicativo foi desenvolvido utilizando o framework React Native e o ambiente de desenvolvimento Expo.
- **Navegação com Expo Router:** A navegação entre as telas é gerenciada pelo Expo Router, utilizando rotas do tipo Stack (para navegação entre Categorias, Produtos e seus detalhes) e Tabs (para a navegação principal entre Início, Categorias e Sobre Mim), agora com ícones na Tab Bar.
- **Componentes Funcionais com Hooks:** Os componentes da aplicação são implementados como componentes funcionais, utilizando hooks do React para gerenciar o estado e o ciclo de vida.
- **Simulação de Dados Local:** Os dados do catálogo (categorias e produtos) são simulados localmente a partir do arquivo `data/index.ts`, conforme fornecido pelo professor. Este arquivo contém arrays de categorias e produtos com suas respectivas informações.
- **Organização de Pastas e Rotas:** O projeto segue uma estrutura de pastas clara e organizada, facilitando a manutenção e o entendimento do fluxo de navegação definido pelo Expo Router.
- **Estilização Visual:** A estilização visual básica foi aplicada utilizando o `StyleSheet` do React Native para garantir uma interface clara e funcional. Ícones foram adicionados à Tab Bar principal utilizando a biblioteca `react-native-vector-icons` para melhorar a usabilidade e a estética da navegação.

## Como Executar o Projeto

1. **Clone este repositório** 
2. **Navegue até a pasta do projeto** no seu terminal: 'cd nome-do-repositorio'
3. **Instale as dependências:** 'npm install' ou 'yarn install'
4. **Inicie o aplicativo:** 'npx expo start' (com o emulador aberto ou dispositivo físico)

[Pablo Henrique Schmitt]
[Sistemas de Informação]
[Faculdade Assis Gurgacz]
