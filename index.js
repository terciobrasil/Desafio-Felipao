var NomePersonagem = "Cisne Negro"
var XP = 10010

if(XP < 1000){
        nivel = "ferro"
        //Se XP for menor do que 1.000 = Ferro                
}
else if(XP < 2000){
        nivel = "Bronze"    
        //Se XP for entre 1.001 e 2.000 = Bronze 
}
else if(XP <= 5000){
        nivel = "Prata"    
        //Se XP for entre 2.001 e 5.000 = Prata   
}
else if(XP <= 7000){
        nivel = "Ouro"    
        //Se XP for en tre 5.001 e 7.000 = Ouro    
        
}
else if(XP <= 8000){
        nivel = "Platina"    
        //Se XP for entre 7.001 e 8.000 = Platina         
}
else if(XP  <= 9000){
        nivel = "Ascendente"    
        //Se XP for entre 8.001 e 9.000 = Ascendente
     
}
else if(XP <= 10000 ){
        nivel = "Imortal"    
        //Se XP for entre 9.001 e 10.000= Imortal
        
}
else{
        nivel = "Radiante"    
        //Se XP for maior ou igual a 10.001 = Radiante
}      
console.log("É esse é o nome do seu Personagem! " + NomePersonagem)
console.log("Você tem a quantidfade de "+ XP +" XPs na sua conta.")
console.log("Seu nivel é " + nivel)




    
    
    
    
    
    
    


    
