// Função que será executada quando a página for carregada 
$(document).ready(function () {
    
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
		fillStyle: linear, // Cor do fundo
		x: 320,
		y: 240,
		width: 640,
        height: 480,
        cornerRadius: 10, // Raio da borda
        strokeStyle: '#BEBEBE', // Cor da borda
        strokeWidth: 10, // Largura da borda
	});

});