const {sleep} = require('./utils');
const {Musica} = require('./musica');
const {Parte} = require('./parte');

const fromTheStart = new Musica('From the start', 'Laufey');

fromTheStart.addParte(
    new Parte('')
    )

async function play(){
    try{
        //
        console.log(fromTheStart.nome + ' por ' + fromTheStart.artista);
        await sleep(34000);
        //
        console.log('Parte: ' + fromTheStart.parte[0].tag);
        console.log(fromTheStart.parte[0].letra);
        await sleep(fromTheStart.parte[0].tempoEspera);
        //
    } catch (error){
    
    }
}

play();

