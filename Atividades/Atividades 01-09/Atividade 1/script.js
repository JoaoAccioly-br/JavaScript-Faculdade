function alerta(){
    alert('mensagem javascript');
}

function alterar_mensagem(){

    let mensagem = document.querySelector('#teste');

    mensagem.innerHTML = 'Mensagem alterada com javascript';
}

function voltar_mensagem(){

    let mensagem = document.querySelector('#teste');

    mensagem.innerHTML = "mensagem teste";
}

