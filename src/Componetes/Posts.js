import Post from "./Post";

export default function Posts(){
    let allPosts = [
      {
      imagemTopo:"assets/img/meowed.svg", 
      usuario:"meowed", 
      imagemConteudo:"assets/img/gato-telefone.svg", 
      imagemCurtida:"assets/img/respondeai.svg",
      usuarioCurtida:"respondeai",
      numeroCurtidas:"outras 101.523 pessoas"
      },
      {
      imagemTopo:"assets/img/barked.svg", 
      usuario:"barked", 
      imagemConteudo:"assets/img/dog.svg", 
      imagemCurtida:"assets/img/adorable_animals.svg",
      usuarioCurtida:"adorable_animals",
      numeroCurtidas:"outras 101.523 pessoas"
    }
    ]
    return (
        
      <div class="posts">
          {allPosts.map(item =>
            <Post imagemTopo={item.imagemTopo} usuario={item.usuario} imagemConteudo={item.imagemConteudo} imagemCurtida={item.imagemCurtida} usuarioCurtida={item.usuarioCurtida} numeroCurtidas={item.numeroCurtidas}/>
          )}
      </div>
    )
}