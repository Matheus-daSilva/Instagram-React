import Acoes from "./Acoes";
import Acao from "./Acao";

export default function Post(props){
    const {imagemTopo, usuario, imagemConteudo, imagemCurtida, usuarioCurtida, numeroCurtidas} = props;
    return (
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={imagemTopo} />
                {usuario}
              </div>
              <Acao />
            </div>

            <div class="conteudo">
              <img src={imagemConteudo} />
            </div>

            <div class="fundo">
              <Acoes />
              <div class="curtidas">
                <img src={imagemCurtida} />
                <div class="texto">
                  Curtido por <strong>{usuarioCurtida}</strong> e <strong>{numeroCurtidas}</strong>
                </div>
              </div>
            </div>
          </div>
    )
}