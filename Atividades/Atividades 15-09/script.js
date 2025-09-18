// Exercício 1

document.querySelector("title").innerHTML = "Olá Javascript";

// Exercício 2

document.querySelector(".paragrafo").style.color = "blue"

// Exercício 3

function enviado(){
document.querySelector("#enviar")
alert("Os itens foram enviados")
};

// Exercício 4

document.querySelector("li").innerHTML = "Primeira tarefa concluída" 

// Exercício 5

document.querySelector(".nome").value = "João da Silva" 

// Exercício 6

document.querySelectorAll(".card").forEach(card => {
  card.style.backgroundColor = "#f0f0f0f0"
}); 

// Exercício 7

function modo_escuro(){
document.querySelector(".dark-mode")
document.body.style.backgroundColor = "black"
document.body.style.color = "white" 
}

// Exercício 8

document.querySelector("h2").classList.add("destaque") 

// Exercício 9

function mostrar_senha(){
document.querySelector("#mostrarSenha") 
document.querySelector("#senha").type = "text"
}

// Exercício 10

function Nova_Tarefa(){
document.querySelector("#Nova_Tarefa")
let lista = document.querySelector(".tarefas")
let nova_tarefa = document.createElement("li")
nova_tarefa.textContent = "Tarefa Extra" 
lista.appendChild(nova_tarefa)
}