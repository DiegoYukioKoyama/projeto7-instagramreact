import { useState } from "react"   
export default function UsuarioSidebar(props) {
    const [nome, setNome] = useState(props.usuario)
    const [imagem, setImagem] = useState(props.imagem)
    return(
        <div className="usuario">
        <img onClick={() => setImagem(prompt("Qual o link da imagem?"))} src={imagem} />
        <div className="texto">
            <strong>{props.usuario}</strong>
            <span>
                {nome}
                <ion-icon onClick={() => setNome(prompt("Qual o seu nome?"))} name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
     
}


