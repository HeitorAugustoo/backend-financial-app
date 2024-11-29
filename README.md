# 💰 App de Controle de Despesas - Financee Control

Este é um aplicativo desenvolvido para como tema de TCC e para ajudar os usuários a gerenciar suas finanças pessoais. Ele permite o cadastro de despesas, categorização e análise simples, além de fornecer insights rápidos com a integração de uma API de inteligência artificial (Gemini).

---

## 🚀 Funcionalidades

### ✅ Core
- **Cadastro de despesas**: Adicione valores, categorias e datas.
- **Organização por categorias**: Visualize suas despesas agrupadas.
- **Autenticação e Autorização**: Senhas criptografadas, rotas protegidas.

### 🤖 Integração com a API Gemini
- Faça a perguntas como:
  - *"Como posso economizar mais dinheiro?"*
  - *"Quais são as melhores práticas para controle financeiro?"*
- **Contexto contínuo no chat**: As respostas consideram mensagens anteriores na mesma sessão.

---

## 🛠️ Tecnologias Utilizadas (API)

- **Node.js**: runtime JavaScript.
- **TypeScript**: tipagem estática.
- **Express.js**: framework web.
- **Prisma ORM**: interação com banco de dados PostgreSQL.
- **JWT**: autenticação segura.
- **Gemini API**: para insights baseados em IA.

---

## ⚙️ Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e siga o exemplo do arquivo env-example
   

4. Rode as migrações para configurar o banco de dados:
    ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
    ```bash
   npm run dev
   ```

---

## 🔗 Endpoints da API


---

## 📖 Endpoints da API

### **Usuários**
| Método | Endpoint             | Descrição                     |
|--------|----------------------|-------------------------------|
| POST   | `/users`             | Cria um novo usuário.         |
| POST   | `/session`           | Faz login do usuário.         |
| GET    | `/me`                | Detalhes do usuário logado.   |
| PUT    | `/user/edit`         | Edita informações do usuário. |
| DELETE | `/delete-user`       | Exclui o usuário logado.      |

### **Despesas**
| Método | Endpoint               | Descrição                               |
|--------|------------------------|-----------------------------------------|
| POST   | `/expense`             | Adiciona uma nova despesa.             |
| GET    | `/expenses`            | Lista todas as despesas do usuário.    |
| GET    | `/expense/detail`      | Detalhes de uma despesa específica.    |
| GET    | `/category/expenses`   | Lista despesas por categoria.          |
| PUT    | `/expense/status`      | Marca despesa como paga.               |
| DELETE | `/delete-expense`      | Exclui uma despesa.                    |

### **Categorias**
| Método | Endpoint               | Descrição                                |
|--------|------------------------|------------------------------------------|
| POST   | `/category`            | Cria uma nova categoria.                |
| GET    | `/categories`          | Lista todas as categorias do usuário.   |
| DELETE | `/delete-category`     | Exclui uma categoria.                   |
| PUT    | `/category/edit`       | Edita uma categoria existente.          |

### **IA Insights**
| Método | Endpoint         | Descrição                         |
|--------|------------------|-------------------------------------|
| POST   | `/api/insight`   | Gera insights com base na pergunta. |


---

Com base na imagem enviada, atualizei a seção de estrutura do projeto no README:

```markdown
## 📂 Estrutura do projeto

```
backend/
├── node_modules/          # Dependências do projeto
├── prisma/                # Arquivos do Prisma (esquema, migrações)
├── src/                   # Código fonte principal
│   ├── @types/            # Definições de tipos personalizados
│   ├── controllers/       # Controladores para lidar com requisições
│   ├── middlewares/       # Middlewares de autenticação e validação
│   ├── prisma/            # Configuração e inicialização do cliente Prisma
│   ├── services/          # Lógica de negócios e serviços
│   ├── router.ts          # Configuração das rotas
│   ├── server.ts          # Inicialização do servidor
├── .env                   # Variáveis de ambiente
├── .gitignore             # Arquivos a serem ignorados pelo Git
├── package.json           # Configurações do projeto e dependências
├── package-lock.json      # Controle de versão das dependências
├── readme                 # Documentação do projeto
├── tsconfig.json          # Configuração do TypeScript
├── yarn.lock              # Controle de versão das dependências para Yarn
```


## 📝 Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---

## 💬 Contato

Se tiver dúvidas ou sugestões, entre em contato:

- **LinkedIn**: (https://linkedin.com/in/heitor-augusto-dev)

---
