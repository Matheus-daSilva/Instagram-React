export default function Usuario(props){
    const {imagem, nickname, host} = props;
    return (
        <div class="usuario">
          <img src={imagem} />
          <div class="texto">
            <strong>{nickname}</strong>
            {host}
          </div>
        </div>
    )
}