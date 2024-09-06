import * as animais from './animais.js'

function criarAnimal(animal,quantidade){
    if(!(Number.isInteger(quantidade)) || quantidade <=0){ // verifica se a quantidade informada é um número válido
        throw new Error("Quantidade inválida");

    }
    switch (animal.toLocaleLowerCase()) { // cria o animal com base no que foi escrito
        case 'macaco':
            var novoAnimal = new animais.Macaco(quantidade)
            return novoAnimal;

        case 'hipopotamo':
            var novoAnimal = new animais.Hipopotamo(quantidade)
            return novoAnimal;

        case 'crocodilo':
            var novoAnimal = new animais.Crocodilo(quantidade)
            return novoAnimal;
        
        case 'leao':
            var novoAnimal = new animais.Leao(quantidade)
            return novoAnimal;
        
        case 'gazela':
            var novoAnimal = new animais.Gazela(quantidade)
            return novoAnimal;
        
        case 'leopardo':
            var novoAnimal = new animais.Leopardo(quantidade)
            return novoAnimal;
        
        default:
            throw new Error("Animal inválido",false);
    }
}

function verificarRecintos(recintos,animal){ // verifica em quais recintos o animal fica confortavel, ou seja, onde ele pode ficar
    let recintosViaveis = [];
    for (let i = 0; i < recintos.length; i++) {
        if(animal.estaConfortavel(recintos[i])[0]){
            recintosViaveis.push(`Recinto ${i+1} (espaço livre: ${animal.estaConfortavel(recintos[i])[1]} total: ${animal.estaConfortavel(recintos[i])[2]})`)
        }
    }
    if(recintosViaveis.length == 0){ // se não ficou confortavel em nenhum recinto, lança um erro
        throw new Error("Não há recinto viável");;
    }
    return recintosViaveis;
}

export {criarAnimal,verificarRecintos}