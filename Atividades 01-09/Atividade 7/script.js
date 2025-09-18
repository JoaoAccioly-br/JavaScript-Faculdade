let contador = 0;

function ContagemCliques() {
   
    contador++;
    document.querySelector('#contador').innerHTML = 'Você clicou ' + contador + ' vezes';

}

function ResetarContagem() {
    contador = 0;
    document.querySelector('#contador').innerHTML = 'Você clicou 0 vezes';
}