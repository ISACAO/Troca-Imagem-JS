var botao = document.getElementById('clique');

botao.onclick = function(){
    if(botao.value === 'troca'){
        pers1.src = 'saitama.jpg';
        botao.value = 'Retornar';
        botao.innerHTML = '戻る (Voltar)';
    }else{
        pers1.src = 'yujiro icon.jpg';
        botao.value = 'troca';
        botao.innerHTML = '置換 (Trocar)';
    }
}
/* marcello esteve aqui */