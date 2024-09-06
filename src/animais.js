class Animal { // classe geral que todos os animais irao herdar
    constructor(raca,tamanho, bioma, carnivoro, quantidade){
        this.raca = raca; // recebe a raça do animal
        this.bioma = bioma; // recebe uma array de biomas que  animal consegue ficar
        this.carnivoro = carnivoro; // saber se o animal é carnivoro (true ou false)
        this.espacoOcupado = tamanho*quantidade //  espaco ocupado pelo animal no recinto que ele ficar
        this.quantidade = quantidade // quantidade de animais
    }

    existeOutroAnimal(recinto){ // verifica se existe outro animal no recinto
        if(recinto.animaisExistentes != 0){
            return true;
        }else{
            return false;
        }
    }

    adaptado(bioma){ // verifica se o animal é adapatado ao ambiente do recinto
        return bioma.some(element => this.bioma.includes(element))
    }

    estaConfortavel(recinto){ //verifica se o animal está confortavel, caso esteja, retorna verdadeiro e o espaço que sobrou nesse recinto após ele ficar lá
        let espacoAdcional = 0; // variavel que uso para verificar se vai ser necessario um espaco adicional 
        let espacoLivre; // variavel para saber os espaços livres no recinto

        if(this.existeOutroAnimal(recinto)){ // se existir algum animal no recinto, verifica se ele é carnivoro ou se o animal que chamou o método é carnivoro
            if(recinto.animaisExistentes.raca != this.raca){ // verifica se o animal é de outra raca 
                
                if(recinto.animaisExistentes.carnivoro == true || this.carnivoro == true){ // verifica se o animal presente no recinto é carnivoro ou se o própio animal é carnivoro
                    return false
                }
                
                espacoAdcional++; // sendo de outra raça necessita de um espaço adicional
            }
            espacoLivre = recinto.tamanhoTotal - recinto.animaisExistentes.espacoOcupado - this.espacoOcupado - espacoAdcional // espaço livre que sobrou após animal que chamou o método estar presente no recinto
        }else{
            espacoLivre = recinto.tamanhoTotal - this.espacoOcupado; //caso não exista animais originalmente no recinto
        }
        if((espacoLivre >= 0) && this.adaptado(recinto.bioma)){ // verifica se tem espaço para o animal ficar no recinto
            return [true,espacoLivre,recinto.tamanhoTotal] // retorna se o animal está confortavel, os espaços livres que sobraram e o tamanho total do recinto testado
        }else{
            return false
        }
    }
}

class Macaco extends Animal {
    constructor(quantidade){
        super('macaco',1,['savana','floresta'],false,quantidade)
    }

    macacoAcompanhado(numeroDeMacacos){ // verifica se o macaco está acompanhado de outros macacos
        if(numeroDeMacacos>1){
            return true;
        }else{
            return false;
        }
    }

    estaConfortavel(recinto){
        if(super.existeOutroAnimal(recinto) || this.macacoAcompanhado(this.quantidade)){ // verifica se o macaco não esta sozinho
            return super.estaConfortavel(recinto)
        }else{
            return false
        }

    }
}

class Hipopotamo extends Animal{
    constructor(quantidade){
        super('hipopotamo',4,['savana','rio'],false,quantidade)
    }

    estaConfortavel(recinto){
        if(super.existeOutroAnimal(recinto)){ // verifica se existe outro animal no recinto, caso exista verifica se o bioma é savana e rio.
            if(!(recinto.bioma.includes('savana') && recinto.bioma.includes('rio'))){ 
                return false;
            }
        }
        return super.estaConfortavel(recinto)
    }

}

class Gazela extends Animal{
    constructor(quantidade){
        super('gazela',2,['savana'],false,quantidade)
    }



}

class Leao extends Animal{
    constructor(quantidade){
        super('leao',3,['savana'],true,quantidade)
    }

}

class Leopardo extends Animal{
    constructor(quantidade){
        super('leopardo',2,['savana'],true,quantidade)
    }

}

class Crocodilo extends Animal{
    constructor(quantidade){
        super('crocodilo',3,['rio'],true,quantidade)
    }

}

export { Macaco, Gazela, Leao, Leopardo, Hipopotamo, Crocodilo };