// 1. adicionarJogada
function adicionarJogada(jogo, jogador, linha, coluna) {
    const novoTabuleiro = jogo.tabuleiro.map((linhaArr, i) =>
        linhaArr.map((celula, j) =>
            i === linha && j === coluna && celula === "_" ? jogador : celula
        )
    );
    return { tabuleiro: novoTabuleiro };
}

// 2. obterJogadasPossíveis
function obterJogadasPossiveis(jogo) {
    const jogadas = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (jogo.tabuleiro[i][j] === "_") {
                jogadas.push({ linha: i, coluna: j });
            }
        }
    }
    return jogadas;
}

// 3. verificarVencedor
function verificarVencedor(jogo) {
    const t = jogo.tabuleiro;
    const linhas = [0, 1, 2];
    const jogadores = ["X", "O"];

    for (let jogador of jogadores) {
        // Linhas e colunas
        for (let i of linhas) {
            if (t[i][0] === jogador && t[i][1] === jogador && t[i][2] === jogador) return jogador;
            if (t[0][i] === jogador && t[1][i] === jogador && t[2][i] === jogador) return jogador;
        }
        // Diagonais
        if (t[0][0] === jogador && t[1][1] === jogador && t[2][2] === jogador) return jogador;
        if (t[0][2] === jogador && t[1][1] === jogador && t[2][0] === jogador) return jogador;
    }
    return undefined;
}

// 4. verificarFimDoJogo
function verificarFimDoJogo(jogo) {
    return verificarVencedor(jogo) !== undefined || obterJogadasPossiveis(jogo).length === 0;
}




const jogo_new = {
    tabuleiro: [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
    ]
}
console.log(adicionarJogada(jogo_new, "X", 0 , 0))
// {
//     tabuleiro: [
//         ["X", "_", "_"],
//         ["_", "_", "_"],
//         ["_", "_", "_"],
//     ]
// }

const jogo = {
    tabuleiro: [
        ["X", "_", "X"],
        ["X", "O", "X"],
        ["_", "_", "O"],
    ]
}
console.log(obterJogadasPossiveis(jogo))
// [
//     {linha: 0, coluna: 1},
//     {linha: 2, coluna: 0},
//     {linha: 2, coluna: 1},
// ]

const jogo2 = {
    tabuleiro: [
        ["X", "_", "X"],
        ["X", "O", "X"],
        ["_", "_", "O"],
    ]
}
console.log(verificarVencedor(jogo2))
// undefined

const jogo3 = {
    tabuleiro: [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["X", "_", "O"],
    ]
}
console.log(verificarVencedor(jogo3))
// "X"


const jogo4 = {
    tabuleiro: [
        ["X", "_", "X"],
        ["X", "O", "X"],
        ["_", "_", "O"],
    ]
}
console.log(verificarFimDoJogo(jogo4))
// false


const jogo5 = {
    tabuleiro: [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["X", "_", "O"],
    ]
}
console.log(verificarFimDoJogo(jogo5))
// true

const jogo6 = {
    tabuleiro: [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["O", "X", "O"],
    ]
}
console.log(verificarFimDoJogo(jogo6))
// true
