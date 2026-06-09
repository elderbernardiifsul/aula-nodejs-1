class Musica{

    constructor(){
        this.nome;
        this.artista;
        this.capa;
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