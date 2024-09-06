import {recintos as recintos} from './recintosExistentes.js'
import * as funcoes from './funcoes.js'
class RecintosZoo {
    constructor(){
        this.recintosExistentes = recintos; // recintos disponiveis no Zoo
    }
    

    analisaRecintos(animal, quantidade) {
        try {
            let novoAnimal = funcoes.criarAnimal(animal,quantidade) // cria o novo animal
            let recintosViaveis = funcoes.verificarRecintos(this.recintosExistentes,novoAnimal) // verifica se o animal tem algum recinto que fica confortavel
            let resultado = {
                recintosViaveis: recintosViaveis
            }
            return resultado // retorna os recintos viaveis
            

        } catch (error) {
            let resultado = {
                erro: error.message
            }
            return resultado // retorna se existir algum erro
        }
        
        
    }
}


export { RecintosZoo as RecintosZoo };


