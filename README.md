# Sistema de Processamento de Dados de Candidatos a Doadores de Sangue

## Descrição do Projeto

Este projeto tem como objetivo desenvolver um sistema web para processar e analisar dados de candidatos a doadores de sangue fornecidos por uma agência de banco de sangue. O sistema receberá um JSON com os dados dos candidatos e apresentará os seguintes resultados:

- Quantidade de candidatos por estado no Brasil.
- IMC (Índice de Massa Corporal) médio em cada faixa etária de dez em dez anos: 0 a 10; 11 a 20; 21 a 30, etc.
- Percentual de obesos entre homens e mulheres (considerando obeso quem tem IMC > 30).
- Média de idade para cada tipo sanguíneo.
- Quantidade de possíveis doadores para cada tipo sanguíneo receptor.

## Funcionalidades

1. **Quantidade de candidatos por estado:**
   - Exibe a quantidade de candidatos presentes na lista para cada estado do Brasil.

2. **IMC médio por faixa etária:**
   - Calcula e exibe o IMC médio para faixas etárias de dez em dez anos (0 a 10, 11 a 20, 21 a 30, etc.).

3. **Percentual de obesos:**
   - Calcula e exibe o percentual de candidatos obesos (IMC > 30) entre homens e mulheres.

4. **Média de idade por tipo sanguíneo:**
   - Calcula e exibe a média de idade dos candidatos para cada tipo sanguíneo.

5. **Possíveis doadores para cada tipo sanguíneo receptor:**
   - Exibe a quantidade de possíveis doadores para cada tipo sanguíneo receptor.

## Tecnologias Utilizadas
- **Frontend:**
  - **Angular:** Framework para construção de aplicações web dinâmicas.

## Estrutura do Projeto

### Frontend (Angular)

- **Components:** Componentes para exibição de dados e interação com o usuário.
- **Services:** Serviços para comunicação com o backend via HTTP.
- **Modules:** Módulos do Angular para organização do código.

## Como Executar o Projeto

### Pré-requisitos
- Node.js e npm

### Frontend

1. Navegue até o diretório do frontend.
2. Execute o comando `npm install` para instalar as dependências.
3. Execute o comando `ng serve` para iniciar o servidor de desenvolvimento do Angular.
4. Acesse o frontend no navegador através do endereço `http://localhost:4200`.
