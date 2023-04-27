<template>
  
  <h2 v-if="!pokemon"> 
    <!-- TODO: Componente loading pokebola con contador -->
    Buscando tu pokemon...
  </h2>
  <div v-else>
    <h3>¿Quien es este pokemon?</h3>
    <PokemonPicture 
      :pokemon-id="pokemon.id" 
      :show-pokemon="showPokemon" 
    />

    <PokemonOptions 
      :pokemons="pokemonArr" 
      @selection="checkAnswer( $event )"
    />

    <template v-if="showAnswer">
      <h4>{{ message }}</h4>
      <button @click="newGame">
        Jugar de nuevo
      </button>
    </template>

  </div>



</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonPicture,
    PokemonOptions    
  },

  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },

  methods: {
    async mixPokemonArr() {
      

      this.pokemonArr = await getPokemonOptions()

      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[ rndInt ]

    },

    checkAnswer( pokemonId ) {
      this.showPokemon = true

      this.pokemon.id === pokemonId
        ? this.message = 'Excelente!!'
        : this.message = `Nooo!! Era ${ this.pokemon.name }`

      this.showAnswer = true;
      
    },

    newGame() {
      this.pokemonArr = []
      this.pokemon = null
      this.showPokemon = false
      this.showAnswer = false
      this.message = ''

      this.mixPokemonArr()
    }
  },

  // Ciclo de vida del componente
  mounted() {
    this.mixPokemonArr()
  }
}
</script>

<style lang="css" scoped>

</style>