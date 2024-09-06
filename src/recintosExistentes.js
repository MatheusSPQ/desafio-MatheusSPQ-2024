import * as animais from './animais.js'
const recintos = [ // recintos disponiveis
    { 
        bioma: ['savana'],
        tamanhoTotal:10,
        animaisExistentes: new animais.Macaco(3),
    },
    {
        bioma: ['floresta'],
        tamanhoTotal:5,
        animaisExistentes: 0
    },
    {
        bioma: ['savana','rio'],
        tamanhoTotal:7,
        animaisExistentes: new animais.Gazela(1)
    },
    {
        bioma: ['rio'],
        tamanhoTotal: 8,
        animaisExistentes: 0
    },
    {
        bioma: ['savana'],
        tamanhoTotal: 9,
        animaisExistentes: new animais.Leao(1)
    }
];

export {recintos as recintos}