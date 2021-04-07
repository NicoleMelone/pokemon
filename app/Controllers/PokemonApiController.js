import { ProxyState } from "../AppState.js";
import { pokemonApiService } from "../Services/PokemonApiService.js";

function _draw() {
    let template = ""
    ProxyState.apiPokemon.forEach(p => {
        template += `<li class="action hover-action" onclick="app.pokemonApiController.getPokemon('${p.name}')">${p.name}</li>`
    })
    document.getElementById('api-pokemon').innerHTML = template
}

function _drawCurrent() {
    document.getElementById('current-pokemon').innerHTML = ProxyState.currentPokemon ? ProxyState.currentPokemon.Template : "<p> no current Pokemon</p>"
}

export default class PokemonApiController {
    constructor() {
        ProxyState.on("apiPokemon", _draw)
        ProxyState.on("currentPokemon", _drawCurrent);

        this.getAllApi()
    }

    async getAllApi() {
        try {
            await pokemonApiService.getAllPokemon()
        } catch (error) {
            console.error(error)
        }
    }

    async getPokemon(name) {
        try {
            await pokemonApiService.getPokemon(name)
        } catch (error) {
            console.error(error)
        }
    }
}