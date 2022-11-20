import Post from "./Post"
export default function Posts(){
  const posts = [
    {imagem: "assets/img/meowed.svg", imagem2: "assets/img/gato-telefone.svg", usuario: "meowed", imagem3: "assets/img/respondeai.svg", usuario2: "respondeai", texto: "outras ", curtidas: "101.523", texto2: "pessoas"},
    {imagem: "assets/img/barked.svg", imagem2: "assets/img/dog.svg", usuario: "barked", imagem3: "assets/img/adorable_animals.svg", usuario2: "adorable_animals", texto: "outras ", curtidas: "99.159", texto2: "pessoas"}
  ]
    return (
    <div className="posts">
      {posts.map((p) => <Post imagem={p.imagem} imagem2={p.imagem2} usuario={p.usuario} imagem3={p.imagem3} usuario2={p.usuario2} texto={p.texto} curtidas={p.curtidas} texto2={p.texto2} />)}
    </div>
    )
}