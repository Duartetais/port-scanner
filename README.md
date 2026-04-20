![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Cybersecurity](https://img.shields.io/badge/Cybersecurity-FF0000?style=for-the-badge&logo=shield&logoColor=white)

# 🔍 Network Port Scanner (TS)

Scanner de portas de rede desenvolvido com **TypeScript** e **Node.js**. 
Ferramenta para auditoria rápida de infraestruturas, com execução paralela e 
tratamento  de timeouts.

## 🚀 Como Usar

``` bash
# Clone o repositório
git clone https://github.com/Duartetais/port-scanner.git
cd port-scanner

# Instale as dependências
npm install

# Compile o TypeScript (se necessário)
npm run build

# Execute o scanner
npm start
```
### 🎨 **Diferenciais Técnicos**

* ⚡ **Performance de Elite:** `Promise.all` para escanear múltiplas portas simultaneamente.
* 🛡️ **Resiliência de Rede:** `socket.setTimeout` para evitar travamentos em portas filtradas.
* 🎨 **Interface Profissional:** Saída colorida (ANSI) com alinhamento de colunas.
* 📊 **Análise de Risco:** Resumo detalhado com contagem de vulnerabilidades.

### 🏗️ Estrutura do Projeto

```text
port-scanner/
├── src/
│   ├── scanner.ts # Motor: Lógica de Sockets com Timeout
│   └── index.ts   # Interface: Orquestração paralela
├── package.json   # Dependências e scripts
├── tsconfig.json  # Configuração TypeScript (ESM)
└── README.md      # Documentação
```
## 🔗 Conecte-se Comigo

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Duartetais)

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Duartetais)
