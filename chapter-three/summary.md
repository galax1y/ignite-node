## Docker

Ferramenta para criação e de **`containers`**

Um container, de forma geral, é um **ambiente isolado** que contém somente o mínimo necessário para rodar as aplicações, tornando mais leve o deploy.

Uma imagem do Docker é um template que contém instruções pra criar um container. É um pacote de pre-configurações para o ambiente que pode ou não ser compartilhada.

Arquivos de configuração:
**`Dockerfile`** Arquivo de configuração principal do Docker, contém todas as instruções de tecnologia a ser usada, como coletar os arquivos locais, colocá-los dentro do container, qual porta expor, como rodar a aplicação e muitas outra opções.
**`.dockerignore`** Igual o .gitignore, mas para o container do Docker

Comandos:

**`docker build t- rentx .`**
`docker build` para criar uma imagem
`-t` é para colocar uma tag `-t rentx`
`.` é o path

**`docker run -p 3333:3333 rentx`**
`docker run` para rodar um container
`-p` porta para publicar (expor) o container para o host na porta indicada `-p 3333:3333`
`rentx` é a imagem a ser utilizada

**`docker ps`**
Listagem de containers

**`docker exec -it rentx /bin/bash`**
Acessa os arquivos contidos no container

**`docker logs rentx`**
Mostra os últimos logs da aplicação
Adicionandoo comando **`-f`** é possível ficar observando os logs continuamente

**`docker start <container-id>`**
Roda um container

**`docker rm <container-id>`**
Remover um container (não pode estar em execução)

## Docker Compose

Ferramenta para orquestração de containers.
Iniciar, parar, subir e remover um ou mais containers

Quando fazemos alterações no código, com o **`docker-compose`** as alterações são aplicadas imediatamente.

1. Criar o **`docker-compose.yml`** e adicionar as configurações
2. Usar o comando **`docker-compose up`** ou **`docker-compose up -d`** para rodar em background

Comandos
**`docker-compose up`**
Cria o container, aplica tudo o que for necessário e inicia a execução do container

**`docker-compose Start`**
Inicia a execução do container

**`docker-compose stop`**
Para a execução do container

**`docker-compose down`**
Remove o container completamente