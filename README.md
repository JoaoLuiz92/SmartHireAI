# SmartHireAI

SmartHireAI é uma aplicação web que permite o upload e análise de currículos utilizando inteligência artificial. O projeto é desenvolvido com React no frontend e Node.js no backend, utilizando Tailwind CSS para estilização.

## Estrutura do Projeto

O projeto segue os princípios de Domain-Driven Design (DDD) e SOLID para garantir uma arquitetura limpa, escalável e de fácil manutenção.

### Domain-Driven Design (DDD)

- **Domain**: Contém os modelos de domínio e lógica de negócios.
- **Application**: Contém componentes e lógica de aplicação que orquestram a interação entre o domínio e a infraestrutura.
- **Infrastructure**: Contém a implementação de detalhes técnicos, como chamadas de API e controladores.
- **Presentation**: Contém componentes de apresentação, como páginas e componentes de interface do usuário.

### Princípios SOLID

- **Single Responsibility Principle (SRP)**: Cada classe ou módulo tem uma única responsabilidade.
- **Open/Closed Principle (OCP)**: Os módulos estão abertos para extensão, mas fechados para modificação.
- **Liskov Substitution Principle (LSP)**: Os objetos de uma classe podem ser substituídos por instâncias de suas subclasses sem alterar o funcionamento do programa.
- **Interface Segregation Principle (ISP)**: Muitas interfaces específicas são melhores do que uma interface única e abrangente.
- **Dependency Inversion Principle (DIP)**: Dependa de abstrações, não de concretizações.


## Tecnologias Utilizadas

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **AI**: OpenAI API

## Configuração do Projeto

### Pré-requisitos

- Node.js
- npm ou yarn

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/smarthireAI.git
   cd smarthireAI


### Instale as dependências do frontend e backend:
```bash
cd frontend
npm install
cd ../backend
npm install
```

### Configure as variáveis de ambiente no arquivo .env:
OPENAI_API_KEY=your_openai_api_key_here

## Executando o Projeto

### Inicie o backend:
```
cd backend
npm start
```
### Inicie o frontend:
```
cd frontend
npm start
```
## Acesse a aplicação em http://localhost:3000.

# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

# Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
