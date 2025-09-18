function quadrado(){
    
    let num1 = parseFloat (document.querySelector('#num1').value);
    let num2 = parseFloat (document.querySelector('#num2').value);
    let num3 = parseFloat (document.querySelector('#num3').value);
    let num4 = parseFloat (document.querySelector('#num4').value);
    let num5 = parseFloat (document.querySelector('#num5').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        alert('Por favor, insira números válidos em todos os campos.');
        return;
    }

    let res1 = num1 ** 2;
    let res2 = num2 ** 2;   
    let res3 = num3 ** 2;
    let res4 = num4 ** 2;
    let res5 = num5 ** 2;

    document.querySelector('#result').innerHTML = 'Os quadrados são: ' + res1 + ', ' + res2 + ', ' + res3 + ', ' + res4 + ', ' + res5;

}