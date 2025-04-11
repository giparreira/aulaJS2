// == para comparacao 
// === para comparacao de valor e tipo
// "!=" diferente
// "uva" > "banana" true, ordem léxica
// && "e" lógico
// || "ou" lógico
// "!" "nao" lógico
// "??" 
// let nome = "Caio"
// (nome === "Caio") ? console.log("É vc"):console.log("Não é vc")

let usuario = prompt("Adicione o seu usuário")
let senha = prompt("Adicione a sua senha")

// if(usuario === "1234" && senha === "1234") {
//     alert("Login feito com sucesso")
// } else {
//     alert("Usuário ou senha incorretos")
// }
// usuario === "1234" && senha === "1234" ? alert("Login feito com sucesso") : alert("Usuário ou senha incorretos")
usuario === "1234" || "Spfc" || "Caio" && senha === "1234" || "Spfc" || "Caio" ? alert("Login feito com sucesso") : alert("Usuário ou senha incorretos")

// let chute = prompt("Pedra, papel ou tesoura")
// let chuteComp = parseInt(Math.random * 3)
// let pedra = 1
// let papel = 2
// let tesoura = 3

switch (nome) {
    case "Caio":
        console.log("ACertou")
        break
    case "Luara":
        console.log("Acertou")
        break
    default:
        console.log("Não te conheço")
        break
}