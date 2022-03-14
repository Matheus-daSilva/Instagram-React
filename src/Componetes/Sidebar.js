import Sugestao from "./Sugestao";
import Usuario from "./Usuario";

export default function Sidebar(){
    let allSugestions = [
      {imagem:"assets/img/bad.vibes.memes.svg", usuario:"bad.vibes.memes", follow:"Segue você"},
      {imagem:"assets/img/chibirdart.svg", usuario:"chibirdart", follow:"Segue você"},
      {imagem:"assets/img/razoesparaacreditar.svg", usuario:"azoesparaacreditar", follow:"Novo no Instagram"},
      {imagem:"assets/img/adorable_animals.svg", usuario:"adorable_animals", follow:"Segue você"},
      {imagem:"assets/img/smallcutecats.svg", usuario:"smallcutecats", follow:"Segue você"}
    ]
    let userInfos = {imagem:"assets/img/catanacomics.svg", nickname:"catanacomics", host:"Catana"}
    return (
        <div class="sidebar">
        <Usuario imagem={userInfos.imagem} nickname={userInfos.nickname} host={userInfos.host}/>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {allSugestions.map(item => <Sugestao imagem={item.imagem} usuario={item.usuario} />)}
        </div>
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    );
}
