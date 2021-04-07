import { ProxyState } from "../AppState.js";
import { sandboxesService } from "../Services/SandboxesService.js";

function _draw() {
    let template = ""
    ProxyState.myPokemon.forEach(p => {
        template += `<li class="action hover-action" onclick="app.sandboxesController.setCurrent('${p.id}')">${p.name}</li>`
    })
    document.getElementById('my-pokemon').innerHTML = template
}

export default class SandboxesController {
    constructor() {
        ProxyState.on("myPokemon", _draw);
        this.getAllPokemon()

    }

    async getAllPokemon() {
        try {
            await sandboxesService.getAll()
        } catch (error) {
            console.error(error)
        }
    }

    async add() {
        try {
            await sandboxesService.add()
        } catch (error) {
            console.error(error)
        }
    }

    async remove() {
        try {
            await sandboxesService.remove()
        } catch (error) {
            console.error(error)
        }
    }

    setCurrent(id) {
        sandboxesService.setCurrent(id)
    }
}