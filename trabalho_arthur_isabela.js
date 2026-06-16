function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

class Musica {
    constructor(nome, artista) {
        //atributos com this.atrib
        this.nome = nome;
        this.artista = artista;
        this.partes = []; // associacao com Parte
    }
    //metodos
    addParte(parte) { //parte é objeto de Parte
        try {
            // valida parte
            if( !parte.letra || !parte.tempoEspera || !parte.tag ){
                // parte tem problema
                throw new Error("Parte da Musica com problema!");
            }
            // armazena parte em partes
            this.partes.push(parte);
        } catch (error) {
            console.log("Erro ao addParte: " + error.message);
        }
    }

    getLetraInteira(){
        // this.partes -->todas as partes
        let letra = "";
        this.partes.forEach((parte) => {
            letra += parte.letra;
        });
        return letra;
    }
}

class Parte{
    constructor( letra, tempoEspera, tag ){
        this.letra = letra;
        this.tempoEspera = tempoEspera;
        this.tag = tag;
    }
}

module.exports = {sleep};
module.exports = {Musica};
module.exports = {Parte};

const FromTheStart = new Musica('From the Start', 'Laufey');

const um = `Don't you notice how`;
const dois = `I get quiet when there's no one else around?`;
const tres = `Me and you and awkward silence`;
const quatro = `Don't you dare look at me that way`;
const cinco = `I don't need reminders of how you don't feel the same`;
const seis = `Oh, the burning pain`;
const sete = `Listening to you harp on 'bout some new soulmate`;
const oito = `"She's so perfect, " blah, blah, blah`;
const nove = `Oh, how I wish you'll wake up one day`;
const dez = `Run to me, confess your love, at least just let me say`;
const onze = `That when I talk to you, oh, Cupid walks right through`;
const doze = `And shoots an arrow through my heart`;
const treze = `And I sound like a loon, but don't you feel it too?`;
const quatorze = `Confess I loved you from the start`;
const quinze = `What's a girl to do?`;
const dezesseis = `Lying on my bed, staring into the blue`;
const dezessete = `Unrequited, terrifying`;
const dezoito = `Love is driving me a bit insane`;
const dezenove = `Have to get this off my chest`;
const vinte = `I'm telling you today`;
const vinteum = `That when I talk to you, oh, Cupid walks right through`;
const vintedois = `And shoots an arrow through my heart`;
const vintetres = `And I sound like a loon, but don't you feel it too?`;
const vintequatro = `Confess I loved you from the start`;
const vintecinco = `Confess I loved you`;
const vinteseis = `Just thinking of you`;
const vintesete = `I know I've loved you from the start`;

FromTheStart.addParte(
    new Parte(um, 8000, '1')
);
FromTheStart.addParte(
    new Parte(dois, 8000, '2')
);
FromTheStart.addParte(
    new Parte(tres, 3000, '3')
);
FromTheStart.addParte(
    new Parte(quatro, 5000, '4')
);
FromTheStart.addParte(
    new Parte(cinco, 6000, '5')
);
FromTheStart.addParte(
    new Parte(seis, 3000, '6')
);
FromTheStart.addParte(
    new Parte(sete, 6000, '7')
);
FromTheStart.addParte(
    new Parte(oito, 3000, '8')
);
FromTheStart.addParte(
    new Parte(nove, 6000, '9')
);
FromTheStart.addParte(
    new Parte(dez, 5000, '10')
);
FromTheStart.addParte(
    new Parte(onze, 6000, '11')
);
FromTheStart.addParte(
    new Parte(doze, 6000, '12')
);
FromTheStart.addParte(
    new Parte(treze, 6000, '13')
);
FromTheStart.addParte(
    new Parte(quatorze, 29000, '14')
);
FromTheStart.addParte(
    new Parte(quinze, 3000, '15')
);
FromTheStart.addParte(
    new Parte(dezesseis, 6000, '16')
);
FromTheStart.addParte(
    new Parte(dezessete, 3000, '17')
);
FromTheStart.addParte(
    new Parte(dezoito, 6000, '18')
);
FromTheStart.addParte(
    new Parte(dezenove, 2000, '19')
);
FromTheStart.addParte(
    new Parte(vinte, 3000, '20')
);
FromTheStart.addParte(
    new Parte(vinteum, 6000, '21')
);
FromTheStart.addParte(
    new Parte(vintedois, 6000, '22')
);
FromTheStart.addParte(
    new Parte(vintetres, 6000, '23')
);
FromTheStart.addParte(
    new Parte(vintequatro, 6000, '24')
);
FromTheStart.addParte(
    new Parte(vintecinco, 3000, '25')
);
FromTheStart.addParte(
    new Parte(vinteseis, 4000, '26')
);
FromTheStart.addParte(
    new Parte(vintesete, 17000, '27')
);


async function play() {
    try {
        // para cada parte da música, deve imprimir qual parte é, letra e pausar o tempo necessário
        //ex.:
        for (const parte of FromTheStart.partes) {
            //imprime parte e letra
            console.log( " -- " + parte.tag + " --" );
            console.log( "> " + parte.letra );
            //agurda o tempo para a letra
            await sleep( parte.tempoEspera );
        }
    } catch (error) {
        console.log("Erro ao tocar música: " + error.message);
    }
}

play();