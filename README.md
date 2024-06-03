cat <<EOF >README.md
# Testes e2e para Funcionalidade de Login

Este projeto contém testes automatizados para a funcionalidade de login usando Cypress, empregando o padrão de projeto Page Objects. Ele valida alguns cenários de login, servindo de padrão para a criação de outros projetos.

## Tecnologias Utilizadas

- **Cypress**: Utilizado para criar e executar testes end-to-end automatizados.
- **JavaScript**: Linguagem de programação usada para escrever os testes.

## Estrutura do Projeto

- **support/pageObjects/**: Contém os objetos de página que encapsulam métodos para interagir com a interface do usuário, facilitando a manutenção do código de teste.
- **e2e/**: Contém os arquivos de teste, como o exemplo **login.cy.js**, que executam testes específicos de login.

## Configuração do Projeto

Para configurar o projeto, siga os passos abaixo:

1. Clone o repositório para sua máquina local.
2. Navegue até a pasta do projeto.
3. Execute o comando abaixo para instalar as dependências relacionadas ao Cypress:

```
npm install
``` 

## Executando os Testes

Para interagir com os testes de forma visual:

```
npm run open:dev
```

Para executar os testes em modo headless (sem interface visual):

```
npm run test:dev
``` 

### Observações

1. Caso sejam criados outros environments, devem ser adicionados scripts específicos para cada um deles no \`package.json\`.

2. O código de exemplo foi feito em um ambiente público para testes, caso seja realizado em um ambiente privado ou que contenha dados sensíveis ou pessoais, adicione o arquivo de configuração de ambientes ao .gitignore, pois caso contrário, os dados ficarão expostos.

