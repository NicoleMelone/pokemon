export default class Pokemon {
    constructor({ id, name, types, weight, height, img, sprites }) {
        this.id = id
        this.name = name
        this.types = types
        this.weight = weight
        this.height = height
        this.img = img || sprites.other.dream_world.front_default
        this.apiPokemon = sprites !== undefined

    }

    get Template() {
        return `<div class="bg-white p-3 shadow pokemon-card" scr="${this.img}">
        <h1>${this.name}</h1>
        <hr>
        <h4>Type: ${this.Types} | Weight: ${this.weight} | Height: ${this.height}</h4>
      </div>
      ${this.Button}`
    }
    get Types() {
        let template = ''
        this.types.forEach(t => {
            template += t.type.name + ' '
        });
        return template
    }

    get Button() {
        if (!this.apiPokemon) {
            return `<button class="btn btn-outline-danger" onclick="app.sandboxesController.remove()">Release</button>`
        }
        return `<button class="btn btn-outline-success" onclick="app.sandboxesController.add()">Catch!</button>`
    }
}