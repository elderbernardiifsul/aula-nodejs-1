const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const letra = `Don't you notice how
I get quiet when there's no one else around?
Me and you and awkward silence
Don't you dare look at me that way
I don't need reminders of how you don't feel the same
Oh, the burning pain
Listening to you harp on 'bout some new soulmate
"She's so perfect, " blah, blah, blah
Oh, how I wish you'll wake up one day
Run to me, confess your love, at least just let me say
That when I talk to you, oh, Cupid walks right through
And shoots an arrow through my heart
And I sound like a loon, but don't you feel it too?
Confess I loved you from the start
What's a girl to do?
Lying on my bed, staring into the blue
Unrequited, terrifying
Love is driving me a bit insane
Have to get this off my chest
I'm telling you today
That when I talk to you, oh, Cupid walks right through
And shoots an arrow through my heart
And I sound like a loon, but don't you feel it too?
Confess I loved you from the start
Confess I loved you
Just thinking of you
I know I've loved you from the start`

const palavras = letra.split(/\s+/);
let vetor = [];
let acumulador = "";

palavras.forEach(element => {
    acumulador += (acumulador ? " " : "") + element;

    if (acumulador.split(" ").length === 5) {
        vetor.push(acumulador);
        acumulador = "";
    }
});

if (acumulador) {
    vetor.push(acumulador);
};

async function imprimir(vetor){
    for (const element of vetor) {
        console.log(element);
        await sleep(3000);
    }
}

imprimir(vetor);