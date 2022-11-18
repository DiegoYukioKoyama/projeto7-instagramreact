export default function UsuarioSidebar(props) {
    return(
        <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
            <strong>{props.usuario}</strong>
            <span>
                {props.texto}
                <ion-icon name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}


