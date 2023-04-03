// Define an array of generation limits and offsets
/* const generations = [
  { limit: 151, offset: 0 },
  { limit: 100, offset: 151 },
  { limit: 135, offset: 251 },
  { limit: 107, offset: 386 },
  { limit: 156, offset: 493 },
  { limit: 72, offset: 649 },
  { limit: 88, offset: 721 },
  { limit: 96, offset: 809 },
  { limit: 3, offset: 905 }
] */
// Get all the buttons and add click event listeners
/* const buttons = document.querySelectorAll('.buttons')
let clickedButtonId = 0

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    clickedButtonId = index
    console.log(`Button with id ${clickedButtonId} was clicked!`)
    fetchGenerations()
  })
}) */

const pokedex = document.getElementById('pokedex')

const fetchPokemon = () => {
  const promises = []
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    promises.push(fetch(url).then((res) => res.json()))
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites.front_default,
      type: result.types.map((type) => type.type.name).join(', '),
      id: result.id
    }))
    console.log(pokemon)
    pokemon.forEach((item) => {
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
}

fetchPokemon()

/* const getData = async function () {
  const urls = [
    'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
    // 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  ]
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)))
    const data = await Promise.all(responses.map(res => res.json()))
    console.log(data)
    let html = ''
    data[0].results.forEach(item => {
      const itemName = item.name
      console.log(itemName)
      const pokeImage = document.createElement('img')
      const image = item.sprites.front_default
      pokeImage.appendChild(image)

      const pokemons = document.querySelector('.pokemons')
      html += `<div class='card'>${itemName}${pokeImage}</div>`
      pokemons.innerHTML = html
    })
  } catch (error) {
    console.error(error)
  }
}

getData()
 */
