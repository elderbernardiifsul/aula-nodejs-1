const { Musica } = require('../musica');
const { Parte } = require('../parte');

class MusicaDAO {
    constructor() {
        this.musicas = [];
        this.proximoId = 1;

        this._carregarDadosIniciais();
    }

    listarTodas() {
        return this.musicas;
    }

    buscarPorId(id) {
        return this.musicas.find(m => m.id === id) || null;
    }

    inserir(nome, artista) {
        const novaMusica = new Musica(nome, artista);

        novaMusica.id = this.proximoId;
        this.proximoId++;

        this.musicas.push(novaMusica);

        return novaMusica;
    }

    atualizar(id, nome, artista) {
        const musica = this.buscarPorId(id);

        if (!musica) {
            return null;
        }

        musica.nome = nome;
        musica.artista = artista;

        return musica;
    }

    remover(id) {
        const indice = this.musicas.findIndex(m => m.id === id);

        if (indice === -1) {
            return null;
        }

        return this.musicas.splice(indice, 1)[0];
    }

    _carregarDadosIniciais() {
        const myHero = this.inserir('My Hero', 'Foo Fighters');

        myHero.addParte(
            new Parte(
                'Too bold or too proud to see...',
                1100,
                'Intro'
            )
        );

        myHero.addParte(
            new Parte(
                'There goes my hero, watch him as he goes...',
                1100,
                'Refrão'
            )
        );
    }
}

module.exports = new MusicaDAO();