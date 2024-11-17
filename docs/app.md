# Podcast Manager

### Descrição 
Um app ao estilo netflix, aonde possa centralizar diferentes episódios podcasts separados por categoria

### Domínio
Podcats feitos em vídeos

### Features
- Listar os episódios podcats em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

### Como

#### Feature:

- Listar os episódios podcats em sessões de categorias

### Como vou implementar:

Vou retornar em uma api rest (json) o nome do podcast, nome do episódio, imagem de capa, link, categorias

GET: retorna lista de episodios

response:

```js
[
{
    podcastName: "flow",
    episode: "MILTON NEVES - Flow #412",
    videoId:"NE5aUYsswVQ"
    cover:"https://img.youtube.com/vi/NE5aUYsswVQ/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=NE5aUYsswVQ",
    categories: ["saúde", "bodybuilder"]
},
{
    podcastName: "flow",
    episode: "MILTON NEVES - Flow #412",
    cover:"https://img.youtube.com/vi/NE5aUYsswVQ/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=NE5aUYsswVQ",
    categories: ["saúde", "bodybuilder"]
}
],

```