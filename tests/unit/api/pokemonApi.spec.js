import pokemonApi from '@/api/pokemonApi'

describe( 'Pruebas sobre pokemonApi', () => {

  test( 'Configuración de axios', () => {

    expect( pokemonApi.defaults.baseURL ).toBe( 'https://pokeapi.co/api/v2/pokemon' );
  });

});