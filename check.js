function microondas(comida,segundos){
    let tempoPadrao = 0
    switch(comida){
        case 'Pipoca':
            tempoPadrao = 10;
        break;
        case 'Macarrão':
        case 'Brigadeiro':
            tempoPadrao = 8;
        break;
        case 'Carne':
            tempoPadrao = 15;
        break;
        case 'Feijão':
            tempoPadrao = 12;
        break;
        default: 
        console.log("Prato inexistente");
        break;
    }
        if (segundos == tempoPadrao){
            console.log("Prato pronto,Bom apetite")
        }else if(segundos >= (tempoPadrao * 2)){
            console.log("A comida queimou");
        }else(segundos > (tempoPadrao * 3)) 
            console.log("Kabuummm")
        
}

microondas('pipoca', 45)