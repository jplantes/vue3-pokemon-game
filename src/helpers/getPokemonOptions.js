import pokemonApi from '@/api/pokemonApi'

const getPokemons = () => {

  const pokemonArr = Array.from( Array(600) )

  return pokemonArr.map( (_, index ) => {
    return index + 1
  })
}

const getPokemonsNames = async ( [a, b, c, d] = [] ) => {

  const promiseArr = [
    await pokemonApi.get( `/${ a }`),
    await pokemonApi.get( `/${ b }`),
    await pokemonApi.get( `/${ c }`),
    await pokemonApi.get( `/${ d }`),
  ]
  const [ p1, p2, p3, p4 ] = await Promise.all( promiseArr )
  
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ]
}

const getPokemonOptions = async () => {

  const mixedPokemon = getPokemons().sort( () => Math.random() - 0.5 )
  const pokemons = await getPokemonsNames( mixedPokemon.splice( 0, 4 ) )

  return pokemons

}

export default getPokemonOptions