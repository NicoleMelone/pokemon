import PokemonApiController from "./Controllers/PokemonApiController.js";
import SandboxesController from "./Controllers/SandboxesController.js";

class App {
  pokemonApiController = new PokemonApiController();
  sandboxesController = new SandboxesController();
}

window["app"] = new App();
