// Captura os elementos do html
const caractereid = document.getElementById('caractereid');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const image = document.getElementById('img');


// Cria uma função chamada fetchApi que recebe um valor no chamado. Ex: fetchApi(1)/fetchApi('dog')
const fetchApi = (value) => {

    // Faz uma requisição na API colocando o valor recebido na função como ultimo valor da URL
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)

    // Função Assincrona (Async) 
    // Se funcionar ('entao')

    .then((peido) => 
    // Transforma esse resultado em um objeto Javascript em Json
    // Retornará uma promisse também
    peido.json()
    )

    // Então
    // Os dados estarão disponiveis
    .then((lixo) => {

        // Exibe os dados no console
        console.log(lixo)
    })
    .catch((erro) =>
        console.log(erro)
    )
}

fetchApi(2)
btnGo.addEventListener('click' , () => {

});
















// const minhaFetch = () => fetch()
// .then((data) => {
//     data.json();
//     console.log(data);
// }).then((info) => {
//     console.log(info);
// }).catch((error) => {
//     console.log(error);
// })




