const inputCep = document.getElementById("input-cep")


const enviar = (input) => {
    return input.value
   
}   

const consumoApi = async (cep) => {
    return await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(resposta => resposta.json())
    
}

inputCep.addEventListener("focusout", async () => {
    const cep = enviar(inputCep)
    const dados = await consumoApi(cep)
    dados.erro ? inputCep.classList.add('erro') : inputCep.classList.remove('erro')

    document.getElementById("input-localidade").value = dados.localidade
    document.getElementById("input-ddd").value = dados.ddd
    document.getElementById("input-uf").value = dados.uf
})


