import { useState } from "react"   
export default function UsuarioSidebar(props) {
    const [nome, setNome] = useState(props.usuario)
    const [imagem, setImagem] = useState(props.imagem)
    return(
        <div data-test="user" className="usuario">
        <img data-test="profile-image" onClick={() => setImagem(prompt("Qual o link da imagem?"))} src={imagem} />
        <div className="texto">
            <strong>{props.usuario}</strong>
            <span>
                <span data-test="name" >{nome}</span>
                <ion-icon data-test="edit-name" onClick={() => setNome(prompt("Qual o seu nome?"))} name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
     
}


