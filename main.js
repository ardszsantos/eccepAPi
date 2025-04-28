document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btn-buscar-cep').addEventListener('click', function() {
        //ajax  - Asynchronous Javascript and XML
        const cep = document.getElementById('cep').value;

        const endpoint =
        'https://api.allorigins.win/raw?url=' +
        encodeURIComponent(`https://viacep.com.br/ws/${cep}/json`);  

    
        fetch(endpoint).then(function(resposta){
            return resposta.json();
        })    
    })
})     // …
