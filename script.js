// Define an array of generation limits and offsets
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
    fetchGenerations()
  })
})

/* const fetchData = () => {
  const res = await fetch(endpoint)
  await const data = await res.json()

  const mappedUrls = data.results.map(async (item) => {
  res = await fetch()
})
} */
//
// Define the PokeAPI endpoint URL
const endpoint = 'https://pokeapi.co/api/v2/pokemon'

// FETCH FUNCTION
async function fetchGenerations () {
  const { limit, offset } = generations[clickedButtonId]
  const url = `${endpoint}?limit=${limit}&offset=${offset}`

  try {
    Promise.all(url.localeCompare(url => {}))
    const response = await fetch(url)
    const data = await response.json()
    const pokemonDiv = document.querySelector('.pokemons')

    let html = ''

    data.results.forEach(item => {
      const itemName = item.name
      html += `<p>${itemName}</p>`

      const imageUrl = item.sprites.front_default
      if (imageUrl) {
        html += `<img src="${imageUrl}" alt="${itemName}">`
      }
    })

    pokemonDiv.innerHTML = html

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

// const searchPokemon = (e) => {
//   searchValue = e.target.value
//   filterList =
//   searchValue.length >= 0 ? pokemonData.filter((pokemon) => {
//     return pokemon.name.toLowerCase().includes(searchValue)
//   })
// }
