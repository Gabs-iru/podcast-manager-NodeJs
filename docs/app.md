# Podcast Manager

## Descrição:
    Criando uma api que facilita a criaçao de um app estilo netflix para assistir episodios de podcasts
    
## Features:
    - Reconhecer os podcasts por nome, nome de episodio, capa e link
    - Separar cada video por Nome do podcast, nome de episodio e categoria
## Como implementar:
#### GET:
    - Vou utilizar uma api rest (json) o nome do podcast, nome do episodio, imagem de capa, link e categorias.

```js
    [
        {
            podcastName:"Flow",
            episodeName:"Flow ep #1",
            videoID:"hjDh77lfgTk",
            cover:"https://i.ytimg.com/vi/hjDh77lfgTk/maxresdefault.jpg",
            link:"https://www.youtube.com/watch?v=hjDh77lfgTk",
            categories:["saude", "açao"... ]
        },
        {
            podcastName:"Flow",
            episodeName:"Flow ep #1",
            videoID:"hjDh77lfgTk",
            cover:"https://i.ytimg.com/vi/hjDh77lfgTk/maxresdefault.jpg",
            link:"https://www.youtube.com/watch?v=hjDh77lfgTk",
            categories:["saude", "açao"... ]
        },
    ]

```