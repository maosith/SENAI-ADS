var login = document.querySelector('#usuario');
var senha = document.querySelector('#senha');
var form = document.querySelector('#form');

form.addEventListener('submit', function(e) { 
    e.preventDefault();

    if(login.value == "ro" && senha.value == '123'){
        window.location = "http://google.com";
    }
    else{
        alert("Usuário e/ou Senha inválido");
    }
})