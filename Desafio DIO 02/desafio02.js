//Função que calcula vitoria e derrotas.
let PartidaGanha = 20
let  DerrotaEmPartida = 12
let SaldoRanckeada = calcRanck(PartidaGanha, DerrotaEmPartida)
let Nivel = " "
//console.log(SaldoRanckeada)

function calcRanck(Vitoria, Derrota){
    return Vitoria - Derrota    
}
//console.log(SaldoRanckeada)


//Se vitórias for menor do que 10 = Ferro
if(SaldoRanckeada <= 10)    {
    Nivel  = "Ferro"

}
//Se vitórias for entre 11 e 20 = Bronze
else if(SaldoRanckeada < 20 )    {
    Nivel  = "Broze"
}
//Se vitórias for entre 21 e 50 = Prata
else if(SaldoRanckeada <= 50)    {
    Nivel  = "Prata"
}
//Se vitórias for entre 51 e 80 = Ouro
else if(SaldoRanckeada <= 80)    {
    Nivel  = "Ouro"
}
//Se vitórias for entre 81 e 90 = Diamante
else if(SaldoRanckeada <= 90)    {
    Nivel  = "Diamante"
}
//Se vitórias for entre 91 e 100= Lendário
else if(SaldoRanckeada < 100)    {
    Nivel  = "Lendário"
}
//Se vitórias for maior ou igual a 101 = Imortal
else if (SaldoRanckeada > 101){
    Nivel  = "Imortal"
}




console.log("Seu Herói teve um total de " +PartidaGanha+ " partidas mas foi derrotado em " +DerrotaEmPartida)
//cada partida ganha herói ganha 5 XPs! 
console.log("O seu tem saldo de " +SaldoRanckeada+ " de partidas ganhas ficando com total de " +SaldoRanckeada*5+" XPs")
console.log("Seu Herói está no nível: " +Nivel)

