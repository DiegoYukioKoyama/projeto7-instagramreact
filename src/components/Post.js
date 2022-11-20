import { useState } from "react"
export default function Post(props) {
  let contador = 0
  const [salvarPost, setSalvarPost] = useState(<ion-icon data-test="save-post" onClick={salvar} name="bookmark-outline"></ion-icon>)
  const [like, setLike] = useState(<ion-icon data-test="like-post" onClick={curtir} name="heart-outline"></ion-icon>)
  const [likeImg, setLikeImg] = useState(props.imagem2)
  const [curtidas, setCurtidas] = useState(props.curtidas)
  let curtidasI = curtidas
  let curtidasS = String(Number(curtidas.replaceAll(".", "")) + 1)
  let nCurtidas = Math.floor(curtidasS.length - 3)
  nCurtidas = curtidasS.substring(0, nCurtidas)+"."+curtidasS.substring(nCurtidas)

  function salvar(){
    if(contador === 0){
      setSalvarPost(<ion-icon data-test="save-post" onClick={salvar} name="bookmark"></ion-icon>)
      contador++
    } else if(contador === 1){
      setSalvarPost(<ion-icon data-test="save-post" onClick={salvar} name="bookmark-outline"></ion-icon>)
      contador--
    }
  }

  function curtir(){
    if(contador === 0){
      setLike(<div className="coracao"><ion-icon data-test="like-post" onClick={curtir} name="heart"></ion-icon></div>)
      setCurtidas(nCurtidas)
      contador++
    }
    else {
      setLike(<ion-icon data-test="like-post" onClick={curtir} name="heart-outline"></ion-icon>)
      setCurtidas(curtidasI)
      contador--
    }
  }

  function curtirImg(){
    if(contador === 0){
      setLike(<div className="coracao"><ion-icon data-test="like-post" onClick={curtir} name="heart"></ion-icon></div>)
      setCurtidas(nCurtidas)
    }
  }
  return (
    <div data-test="post" className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imagem} />
          {props.usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img data-test="post-image" onClick={curtirImg} src={likeImg} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div className="iconesFundo" >
            {like}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {salvarPost}
          </div>
        </div>

        <div className="curtidas">
          <img src={props.imagem3} />
          <div className="texto">
            Curtido por <strong>{props.usuario2}</strong> e <strong data-test="likes-number">{props.texto} {curtidas} {props.texto2}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}