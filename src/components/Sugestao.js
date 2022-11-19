export default function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imagem} />
                <div className="texto">
                    <div className="nome">{props.usuario}</div>
                    <div className="razao">{props.texto}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}