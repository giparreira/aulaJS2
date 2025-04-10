// == para comparacao 
// === para comparacao de valor e tipo
// "!=" diferente
// "uva" > "banana" true, ordem léxica
// && "e" lógico
// || "ou" lógico
// "!" "nao" lógico
// let nome = "Caio"
// (nome === "Caio") ? console.log("É vc"):console.log("Não é vc")

let usuario = prompt("Adicione o seu usuário")
let senha = prompt("Adicione a sua senha")

if(usuario === "1234" && senha === "1234") {
    alert("Login feito com sucesso")
} else {
    alert("Usuário ou senha incorretos")
}
// usuario === 1234 && senha === 1234 ? alert("Login feito com sucesso") : alert("Usuário ou senha incorretos")
