const prompt= require("prompt-sync")();

volantines=[]     //Arreglo para guardar la cantidad de volantines por dia
sumaVolantines=0  //Acumulador para calcular total
menor=1000        //Para sacar el menor valor del arreglo
dia=0             //Para obtener el indice el valor menor dentro del arreglo

for (var i=0;i<7;i++){
    hechos=parseInt(prompt("Ingrese cantidad de volantines fabricados por dia: "))
    volantines.push(hechos)
}
for(var i=0;i<volantines.length;i++){
    sumaVolantines=sumaVolantines+volantines[i] //Suma de los volantines hechos por día
    if(volantines[i]<menor){                    //Condicional para obtener el valor menor del arreglo junto a su posición
        menor=volantines[i]               
        dia= i
    }
}

console.log("El promedio de volantines es de:", (sumaVolantines/volantines.length));
console.log("El total de volantines fabricados es de:", sumaVolantines);
console.log("El día que menos volantines hizo fue el día número:", dia+1);