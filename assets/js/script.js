/*
- Tipagem fraca dianamica (inferencia de dados)
- Case Sensitive (a != A)
- Criação de variaveis
-- let -> "Let it change" -> variavel que pode ter o valor alterado (let nome)
-- const -> "Constant" -> variavel que pode ter ovalor alterado (cost nome2 = "")
-- var -> "Variable" -> variavel que pode ou não ter o valor alterado (var nome3)

DOM -> Document-Object Model

buscar elementos pelo nome da TAG (Caso tenha mais que um, vai pegar todos)
window.document.getElementsByTagName(label)

buscar elemtnos pelo id (encontrou o primeiro, para a busca)
const campo = window.document.getElementById('nome')
console.log(campo);

const nome = document.querySelector("#nome")
const email = document.querySelector("#email")

console.log(nome);
console.log(email);

Funções no JS == Metodos Java

public void validaNome(){} - Java
function validaNome() {
    console.log(nome.value.length)
    if(nome.value.length >= 3){
        nome.style.borderColor = 'green'
    }   else {
        nome.style.borderColor = 'red'
    }
}
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '30%'
email.style.width = '30%'
assunto.style.width = '30%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk= true
    }
}

function enviar() {
    if(nomeOk ==true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    }else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '1200px'
    mapa.style.height = '1000px'
}

function mapaNormal() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}