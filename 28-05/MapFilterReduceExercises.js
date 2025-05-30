//Cria uma função que mapeia cada elemento de um array de strings para o seu comprimento.

function cenas(e){
    return e.length
}

function mapmapmap(arr){
    
    const novo_arr = arr.map(
        cenas
    )

    return novo_arr
}

console.log(mapmapmap(["dsajlkdjsal", "batata", "cenoura", "couve"]))


// Cria uma função que filtra os elementos pares, 
// mapeia cada elemento para o seu quadrado e por fim reduz o array para calcular o somatório
// dos elementos resultantes.

function filtrar(arr){
    return arr.filter((elemento) => elemento % 2 === 0)
    .map((elemento) => elemento ** 2)
    .reduce((acc, elemento) => acc + elemento)
}

console.log(filtrar([1,2,3,4,5,6,7,8]))


// Cria uma função que mapeia cada elemento de um array de objetos com 
// as propriedades name e birthday para um objeto que além destas propriedades,
//  tem a propriedade age.

function objeto(arr){
    const objecto = arr.map((elemento) => {return {...elemento, age: "312"}})
    return objecto
}

console.log(objeto([{name: "Rafael", birthday: "13-05-2003"}]))