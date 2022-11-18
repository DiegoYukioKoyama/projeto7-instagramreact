import Sugestao from "./Sugestao";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    <span>
                        Catana
                        <ion-icon name="pencil"></ion-icon>
                    </span>
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Sugestao imagem="assets/img/bad.vibes.memes.svg" usuario="bad.vibes.memes" texto="Segue você" />
                <Sugestao imagem="assets/img/chibirdart.svg" usuario="chibirdart" texto="Segue você"/>
               
                <Sugestao imagem="assets/img/razoesparaacreditar.svg" usuario="razoesparaacreditar" texto="Novo no Instagram" />

                <Sugestao imagem="assets/img/adorable_animals.svg" usuario="adorable_animals" texto="Segue você" />

                <Sugestao imagem="assets/img/smallcutecats.svg" usuario="smallcutecats" texto="Segue você" />

                <div class="sugestao">
                    <div class="usuario">
                        <img src="assets/img/smallcutecats.svg" />
                        <div class="texto">
                            <div class="nome">smallcutecats</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}