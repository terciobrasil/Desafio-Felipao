
//let fruta =["Banana", "Orange", "Apple", "Mango"]
//document.getElementById('demo').innerHTML=fruta.toString()

function myFunção(tipoArroz, tipofeijao,tipoCarne){
    var peso = 1000
    var tara = 120
    var pesoTotal = peso - tara
    var valorPeso = 61.9
    var pesoFinal = pesoTotal*valorPeso/1000
    
    
    console.log("Seu prato esta com "+ tipoArroz + ", " +tipofeijao+ " e "+tipoCarne)
    console.log("Valor do peso kg R$: " +pesoFinal)
}

//myFunção("Maria Isabel","Feijão Preto","Carne Assada")
myFunção("Arroz Branco","Feijão Carioca","Frango na Brasa")