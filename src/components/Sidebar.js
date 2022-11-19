import Sugestao from "./Sugestao";
import UsuarioSidebar from "./UsuarioSidebar";

export default function Sidebar() {
    const sugestao = [
        {imagem: "assets/img/bad.vibes.memes.svg", usuario: "bad.vibes.memes", texto: "Segue você"},
        {imagem: "assets/img/chibirdart.svg", usuario: "chibirdart", texto: "Segue você"},
        {imagem: "assets/img/razoesparaacreditar.svg", usuario: "razoesparaacreditar", texto: "Novo no Instagram"},
        {imagem: "assets/img/adorable_animals.svg", usuario: "adorable_animals", texto: "Segue você"},
        {imagem: "assets/img/smallcutecats.svg", usuario: "smallcutecats", texto: "Segue você"}
    ]
    return (
        <div className="sidebar">
            <UsuarioSidebar imagem="assets/img/catanacomics.svg" usuario="catanacomics" texto="Catana"/>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestao.map((s) => <Sugestao imagem={s.imagem} usuario={s.usuario} texto={s.texto} />)}

            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}