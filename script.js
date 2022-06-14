let musicas = [

    {
        titulo: 'Porque eu te amo ', 
        artista:'AnaVitoria', 
        src:'music/porqueeuteamo.mp3',
        img:'img/porqueeuteaamo.jpeg'},

    {
        titulo: 'Agente-junto',
        artista:'AnaVitoria',
        src:'music/agentejunto.mp3',
        img:'img/agentejunto.jpeg',
        
    },
    {
        titulo:'Tua',
        artista:'AnaVitoria',
        src:'music/anavitoria_tua_audio_mp3_48156.mp3',
        img:'img/tua.jpeg',
    },

    {
        titulo:'Dengo',
        artista:'AnaVitoria',
        src:'music/dengo.mp3',
        img:'img/dengo.jpeg',
    },

    {
        titulo:'Calendario',
        artista:'AnaVitoria', 
        src:'music/calendario.mp3',
        img:'img/calendario.jpeg'
    },

    {

        titulo:'Explodir',
        artista:'AnaVitoria', 
        src:'music/anavitoria_explodir.mp3',
        img:'img/explodir.jpeg'
    },

    {
        titulo:'Nós',
        artista:'AnaVitoria', 
        src:'music/anavitoria_nos.mp3',
        img:'img/nos.jpeg'
    },

    {
        titulo:'Singular',
        artista:'AnaVitoria', 
        src:'music/anavitoria_singular.mp3',
        img:'img/singular.jpeg'
    },

    {
        titulo:'Pupila',
        artista:'AnaVitoria', 
        src:'music/pupila.mp3',
        img:'img/pupila.jpeg' 
    },

    {
        titulo:'cor de marte',
        artista:'Anavitoria',
        src:'music/cor_de_marte.mp3',
        img:'img/cor-de-marte.jpeg'
    },

  {
        titulo:'Partilhar',
        artista:'Anavitoria',
        src:'music/partilhar.mp3',
        img:'img/partilhar.jpeg'
    },

    {
        titulo:'Lisboa',
        artista:'Anavitoria',
        src:'music/lisboa.mp3',
        img:'img/lisboa.jpeg'
    },
    
    {
        titulo:'Trevo',
        artista:'Anavitoria',
        src:'music/trevo.mp3',
        img:'img/trevo.jpeg'
    },

    {
        titulo:'Cigarra',
        artista:'Anavitoria',
        src:'music/cigarra.mp3',
        img:'img/cigarra.jpeg'
    },

    {
        titulo:'Perdoa',
        artista:'Anavitoria',
        src:'music/perdoa.mp3',
        img:'img/perdoa.jpeg'
    },

    {
        titulo:'Doi sem tanto',
        artista:'Anavitoria',
        src:'music/doi_sem_tanto.mp3',
        img:'img/doisemtanto.jpeg'
    },

    {
        titulo:'Fica',
        artista:'Anavitoria',
        src:'music/fica.mp3',
        img:'img/ficar.jpeg'
    },
    
    
    
    
    
    

];



let musica = document.querySelector('audio');
let indexMusica = 0;
 let duracaoMusica = document.querySelector('.fim');
 let imagem = document.querySelector('img');
 let nomeMusica = document.querySelector('.descricao h2');
 let nomeArtista = document.querySelector('.descricao i');

 renderizarMusica(indexMusica);


//eventos
document.querySelector('.botao-play').addEventListener('click',tocarMusica);

document.querySelector('.botao-pause').addEventListener('click',pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra)

document.querySelector('.anterior').addEventListener('click',() =>{
    indexMusica--;
    if (indexMusica < 0 ){
        indexMusica = musicas.length - 1;
    }
    renderizarMusica(indexMusica);
    tocarMusica();

});
document.querySelector('.proxima').addEventListener('click',() =>{
    indexMusica++;
    if(indexMusica > musicas.length){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);

    tocarMusica();

});



//funçoes

function renderizarMusica(index) {
    console.log(index)
    musica.setAttribute('src',musicas[index].src);
    musica.addEventListener('loadeddata',()=>{
        nomeMusica.textContent= musicas[index].titulo;
        nomeArtista.textContent=musicas[index].artista;
        imagem.src= musicas[index].img;
        console.log(duracaoMusica)
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
        
    });
    
}


function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display ='none';


}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display ='block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) +'%';
    let tempoReal = document.querySelector('.inicio');
    tempoReal.textContent = segundosParaMinutos(Math.floor (musica.currentTime));

}

function segundosParaMinutos(segundos ){
    let campoMinutos = Math.floor(segundos / 60 );
    let campoSegundos = segundos % 60;
     
    if (campoSegundos < 10 ){
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos+  ':'+campoSegundos;
}


