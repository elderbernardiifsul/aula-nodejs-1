module.exports = class Musica{

    constructor(nome, artista){
        this.nome = nome;
        this.artista = artista;
        this.partes = [];
    }

    addParte( parte ){
        try{
            if( !parte.letra || parte.tempoEspera || parte.tag){
                throw new Error("Parte da Musuca com problema!");
            }
        } catch(error){
            console.log("Erro ao addParte: " + error.message);
        }
    }

    getLetraInteira(){
        let letra = "";

        this.partes.forEach((parte) => {
            letra += parte.letra;
        });

        return letra;
    }
}