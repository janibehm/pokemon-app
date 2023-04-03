const generations = [
  { limit: 151, offset: 0 },
  { limit: 100, offset: 151 },
  { limit: 135, offset: 251 },
  { limit: 107, offset: 386 },
  { limit: 156, offset: 493 },
  { limit: 72, offset: 649 },
  { limit: 88, offset: 721 },
  { limit: 96, offset: 809 },
  { limit: 3, offset: 905 }
]
// Get all the buttons and add click event listeners
const buttons = document.querySelectorAll('.buttons')
let clickedButtonId = 0

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    clickedButtonId = index
    console.log(`Button with id ${clickedButtonId} was clicked!`)
    fetchPokemon()
  })
})

const pokedex = document.getElementById('pokedex')

const fetchPokemon = () => {
  const promises = []
  const { limit, offset } = generations[clickedButtonId]
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const results = data.results
      for (let i = 0; i < results.length; i++) {
        const url = results[i].url
        promises.push(fetch(url).then(res => res.json()))
      }
      Promise.all(promises).then(pokemon => {
        const pokemonData = pokemon.map(item => ({
          name: item.name,
          image: item.sprites.front_default,
          type: item.types.map(type => type.type.name).join(', '),
          id: item.id
        }))
        console.log(pokemonData)
        pokedex.innerHTML = ''
        pokemonData.forEach(item => {
          const pokemonDiv = document.createElement('div')
          pokemonDiv.classList.add('card')
          pokemonDiv.innerHTML =
            `<h2>${item.name}<h2/>
              <img src=${item.image}>
              <p>${item.type}</p>
              <p>${item.id}</p>
            `
          pokedex.appendChild(pokemonDiv)
        })
      })
    })
}

fetchPokemon()
