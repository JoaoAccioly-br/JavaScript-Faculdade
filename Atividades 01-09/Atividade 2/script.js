function soma(){
 
 

    let num1 = parseFloat(document.querySelector('#num1').value); 
    let num2 = parseFloat(document.querySelector('#num2').value);

  

    if (isNaN(num1) || isNaN(num2)){ 
        alert('Preencha os dois campos com números válidos!');
    }



    else{
        let resultado = num1 + num2;
        alert('O resultado da soma é: ' + resultado);
    }
}