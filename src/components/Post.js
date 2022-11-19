import { useState } from "react"
export default function Post(props) {
  let contador = 0
  const [salvarPost, setSalvarPost] = useState(<ion-icon onClick={salvar} name="bookmark-outline"></ion-icon>)
  function salvar(){
    if(contador === 0){
      setSalvarPost(<ion-icon onClick={salvar} name="bookmark"></ion-icon>)
      contador ++
    } else if(contador === 1){
      setSalvarPost(<ion-icon onClick={salvar} name="bookmark-outline"></ion-icon>)
      contador--
    }
  }
  return (
    <div className="post">
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
        <img src={props.imagem2} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            {salvarPost}
          </div>
        </div>

        <div className="curtidas">
          <img src="assets/img/respondeai.svg" />
          <div className="texto">
            Curtido por <strong>{props.usuario2}</strong> e <strong>{props.texto}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}