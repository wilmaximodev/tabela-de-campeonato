FROM node:16.14-alpine

# Mudar para o diretório de trabalho /app-frontend

WORKDIR /app-frontend
# Copiar os package.json e package-lock.json para o container

COPY package.json .
COPY package-lock.json .
# Instalar as dependências Node

RUN npm install

# RUN ls -ls /app-frontend >  /app-frontend/ls_log2.txt

# Copiar o restante dos arquivos da aplicação para o container

# Sinalize que aplicação expõe a porta 3000
COPY .  .

# Sinalize que aplicação expõe a porta 3000
EXPOSE 3000
# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
# Dica: Leia a seção Docker e Docker-compose no README para mais informações
# Dica: Leia a seção Docker e Docker-compose no README para mais informações
ENTRYPOINT [ "npm", "run"]
CMD ["start"]