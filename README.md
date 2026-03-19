# Network Port Scanner (TS)

Um scanner de portas de rede desenvolvido com **TypeScript** e **Node.js**. Esta ferramenta foi projetada para realizar auditorias rápidas em infraestruturas, utilizando execução paralela e tratamento rigoroso de timeouts.

##  Diferenciais Técnicos
- **Performance de Elite**: Utiliza `Promise.all` para escanear múltiplas portas simultaneamente, reduzindo drasticamente o tempo de espera.
- **Resiliência de Rede**: Implementação de `socket.setTimeout` para evitar que o scanner trave em portas filtradas ou redes instáveis.
- **Interface de Auditoria**: Saída formatada no terminal com cores (ANSI) e alinhamento de colunas para leitura profissional.
- **Análise de Risco**: Resumo final detalhado com contagem de vulnerabilidades (portas abertas) e status de proteção.

##  Estrutura do Projeto
```text
port-scanner/
├── src/
│   ├── scanner.ts      # Motor: Lógica de Sockets com Timeout e Tratamento de Erro
│   └── index.ts        # Interface: Orquestração paralela e Relatório Visual
├── .gitignore          # Filtro de arquivos para o Git
├── package.json        # Gerenciador de dependências e scripts (tsx)
├── tsconfig.json       # Configurações de compilador moderno (ESM)
└── README.md           # Documentação técnica detalhada
