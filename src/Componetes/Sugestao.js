export default function Sugestao(props){
    const {imagem, usuario, follow} = props
    return (
        <div class="sugestao">
          <div class="usuario">
            <img src={imagem} />
            <div class="texto">
              <div class="nome">{usuario}</div>
              <div class="razao">{follow}</div>
            </div>
          </div>
          <div class="seguir">Seguir</div>
        </div>
    )
}