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

// Define the PokeAPI endpoint URL
const endpoint = 'https://pokeapi.co/api/v2/pokemon'

// FETCH FUNCTION
async function fetchGenerations () {
  const { limit, offset } = generations[clickedButtonId]
  const url = `${endpoint}?limit=${limit}&offset=${offset}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    const pokemonDiv = document.querySelector('.pokemons')

    pokemonDiv.innerHTML = ''

    data.results.forEach(item => {
      const itemName = item.name
      const itemElement = document.createElement('p')
      itemElement.textContent = itemName
      pokemonDiv.appendChild(itemElement)
    })

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
