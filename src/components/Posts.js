import Post from "./Post"
export default function Posts(){
  const posts = [
    {imagem: "assets/img/meowed.svg", imagem2: "assets/img/gato-telefone.svg", usuario: "meowed", usuario2: "respondeai", texto: "outras 101.523 pessoas"},
    {imagem: "assets/img/barked.svg", imagem2: "assets/img/dog.svg", usuario: "barked", usuario2: "adorable_animals", texto: "outras 99.159 pessoas" }
  ]
    return (
    <div className="posts">
      {posts.map((p) => <Post imagem={p.imagem} imagem2={p.imagem2} usuario={p.usuario} usuario2={p.usuario2} texto={p.texto} />)}
    </div>
    )
}