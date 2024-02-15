
//let fruta =["Banana "," Orange "," Apple "," Mango"]
//document.getElementById('demo').innerHTML=fruta.toString()

/*function myFunção(tipoArroz, tipofeijao,tipoCarne, Salada){
    var peso = 600
    var tara = 100
    var pesoTotal = peso - tara
    var valorPeso = 61.9
    var pesoFinal = pesoTotal*valorPeso/1000
        
    console.log("Caro cliente Seu prato esta com "+ tipoArroz + ", " +Salada+ ", " +tipofeijao+ " e "+tipoCarne)
    console.log("Valor do peso kg R$: " +pesoFinal)
}
*/
//myFunção("Maria Isabel","Feijão Preto","Carne Assada")
//myFunção("Arroz com cenoura","Feijão Preto","Frango ao molho", "Salada Verde")


/*
cadastro("tercio", 2397114, 02193125325, "Analista de TI")

function cadastro(Nome, RG, CPF=": Não Informado!", Ocupacao){
    console.log("Seja bemvindo Sr. "+Nome)
    console.log("Seu numero de no RG "+RG)
    console.log("Numero de CPF "+ CPF)
    console.log("Seu Trabalho é "+Ocupacao)
    
}
*/

function getFirstName(name, splitChar = " " ){
    let FirstName=name.split(splitChar)[0]
    return FirstName
}
let userName = getFirstName("Tercio-Wilame-Brasil-Barbosa") 
console.log("Seja bem vindo Sr. "+userName)
