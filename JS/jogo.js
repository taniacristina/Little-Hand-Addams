var altura = 480;
var largura = 640;
var pontos = 50;

// Função que será executada quando a página for carregada 
$(document).ready(function () {

    // Manipulação da seção de pontos
    $('#pontos').html(pontos);

    setInterval(renderScene, 2000);
    
    // Criando gradiente de cor
    var linear = $('canvas').createGradient({
        x1: 0, y1: 20,
        x2: 0, y2: 80,
        c1: '#9370DB',
        c2: '#A020F0',
        c3: '#9400D3'
    });

    // Desenhando plano de fundo
    $("canvas").drawRect({
        layer:true,
		fillStyle: linear, // Cor do fundo
		x: 320,
		y: 240,
		width: largura,
        height: altura,
        cornerRadius: 10, // Raio da borda
        strokeStyle: '#BEBEBE', // Cor da borda
        strokeWidth: 10, // Largura da borda
	});

});


// Função para mostrar as imagens que a mão terá que pegar
// Essa função será executada a cada 1 segundo

function renderScene() {

    // Limpando o canvas para que as imagens não fiquem sobrepostas
    $("canvas").clearCanvas(); 

    // Criando gradiente de cor
    var linear = $('canvas').createGradient({
        x1: 0, y1: 20,
        x2: 0, y2: 80,
        c1: '#9370DB',
        c2: '#A020F0',
        c3: '#9400D3'
    });

    // Desenhando plano de fundo
    $("canvas").drawRect({
        layer:true,
        fillStyle: linear, // Cor do fundo
        x: 320,
        y: 240,
        width: largura,
        height: altura,
        cornerRadius: 10, // Raio da borda
        strokeStyle: '#BEBEBE', // Cor da borda
        strokeWidth: 10, // Largura da borda
    });

    var posicaoX = Math.floor(Math.random()*largura) - 30; // posição x randomica
    var posicaoY = Math.floor(Math.random()*altura) - 30; // posição y randomica
    
    // Controle para que as imagens não sejam renderizadas fora da tela
    if(posicaoX < 40) {
        posicaoX = 40;
    }

    if(posicaoY < 40) {
        posicaoY = 40;
    }

    // Achando diretório da imagem
    dirImg = Math.floor(Math.random() * 2 + 1);

    // Verificando se a imagem pertence ao grupo
    if (dirImg == 2) {

        // Mostrando a imagem
        $("canvas").drawImage({
            layer:true,
            source: 'IMG/IMG'+ dirImg +'/img2.jpg', // Lógica para mostrar diferentes imagens, mostrando 10 imagens ao total
            x: posicaoX,
            y: posicaoY,
            width: 40,
            height: 40,
            click: function(layer) {
                $("canvas").drawRect({
                    layer:true,
                    fillStyle: linear, // Cor do fundo
                    x: 320,
                    y: 240,
                    width: largura,
                    height: altura,
                    cornerRadius: 10, // Raio da borda
                    strokeStyle: '#BEBEBE', // Cor da borda
                    strokeWidth: 10, // Largura da borda
                });

                // Somando pontos
                pontos+=10;
                $('#pontos').html(pontos);

                if( pontos >= 100){
                    alert("Você ganhou!");
                }

            }
        });

    } else { // Caso a imagem não pertença

        // Mostrando a imagem
        $("canvas").drawImage({
            layer:true,
            source: 'IMG/IMG'+ dirImg +'/img1.jpg', // Lógica para mostrar diferentes imagens, mostrando 10 imagens ao total
            x: posicaoX,
            y: posicaoY,
            width: 40,
            height: 40,
            click: function(layer) {
                $("canvas").drawRect({
                    layer:true,
                    fillStyle: linear, // Cor do fundo
                    x: 320,
                    y: 240,
                    width: largura,
                    height: altura,
                    cornerRadius: 10, // Raio da borda
                    strokeStyle: '#BEBEBE', // Cor da borda
                    strokeWidth: 10, // Largura da borda
                });

                // Subtraindo pontos
                pontos-=10;
                $('#pontos').html(pontos);

                // Se pontuação chegar a zero informa que o jogador perdeu
                if(pontos <= 0) {
                    alert("Você perdeu!");
                }
            }
        });

    }

}