import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from "../Services/AxiosService.js";

class PokemonApiService {
    async getPokemon(name) {
        let res = await pokemonApi.get(name)
        ProxyState.currentPokemon = new Pokemon(res.data)
    }
    async getAllPokemon() {
        let res = await pokemonApi.get()
        ProxyState.apiPokemon = res.data.results

    }
}

export const pokemonApiService = new PokemonApiService()