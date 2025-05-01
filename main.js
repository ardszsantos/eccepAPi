document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');
    const enderecoInput = document.getElementById('endereco');
    const btnBuscar = document.getElementById('btn-buscar-cep');
    const spinner = btnBuscar.querySelector('.spinner-border');
    const i = btnBuscar.querySelector('.bi-search');
    

    btnBuscar.addEventListener('click', () => {
        const cep = cepInput.value.trim();
        if (!cep) return;
        
        spinner.classList.remove('d-none');
        i.classList.add('d-none');
        

        const endpoint = 'https://api.allorigins.win/raw?url=' + 
            encodeURIComponent(`https://viacep.com.br/ws/${cep}/json`);
        
        fetch(endpoint)
            .then(res => res.json())                     // chamar .json()
            .then(data => {
                const { logradouro, bairro, localidade, uf } = data;
                enderecoInput.value = `${logradouro}, ${bairro} - ${localidade} - ${uf}`;
            })
            .catch(err => {
                console.error(err);
                alert('Erro ao buscar CEP');
            })
            .finally(() => {
                setTimeout(function() {
                    spinner.classList.add('d-none');
                    i.classList.remove('d-none');
                }, 500)
            });
    });
});
