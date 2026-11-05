# Usar a imagem oficial leve do Node.js LTS baseada em Alpine
FROM node:20-alpine

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar os descritores de dependências
COPY package*.json ./

# Instalar dependências de produção
RUN npm install --omit=dev

# Copiar o código fonte do backend
COPY . .

# Expor a porta da API
EXPOSE 5000

# Executar o inicializador do servidor
CMD ["node", "src/server.js"]
