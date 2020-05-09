# Node
Curso da Rocketseat.

# Executar aplicação
npm run dev

## Instalação
1. iniciar projeto
  npm init -y

2. instalr express
  npm install express

3. intalar nodemon em tempo de desenvolvimento - reiniciar o servido automaticamente.
  npm install -D nodemon  
  a) adicionar na tag script do package.json
     "dev": "nodemon server.js"


4. instalar o docker

5. baixar o container docker mongo
   docker pull mongo
6. executar o container
   docker run --name mongodb -p 27017:27017 -d mongo
7. listar imagens 
  docker image ls

8. listar containers
    docker ps
9. remover todas imagens
  docker system prune -a

10. client mongodb
  https://robomongo.org/download

11. imagem docker pausadas
    docker ps -a

12. subir imagem
  docker start <nome-imagem>
  
13. instalar mongoose

  npm install mongoose

  13. install requeri-dir
    npm install require-dir


