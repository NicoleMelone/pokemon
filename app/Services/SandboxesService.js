import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "../Services/AxiosService.js";

class SandboxesService {
    async remove() {
        await sandboxApi.delete(ProxyState.currentPokemon.id)
        ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id !== ProxyState.currentPokemon.id)
        ProxyState.currentPokemon = ''

    }
    setCurrent(id) {
        let pokemon = ProxyState.myPokemon.find(p => p.id === id)
        ProxyState.currentPokemon = pokemon
    }
    async getAll() {
        let res = await sandboxApi.get()
        ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
    }
    async add() {
        let res = await sandboxApi.post('', ProxyState.currentPokemon)
        ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
    }
}

export const sandboxesService = new SandboxesService()