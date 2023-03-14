document.querySelector('.data')

const generations = [
  {
    limit: 151,
    offset: 0
  },
  {
    limit: 100,
    offset: 151
  },
  {
    limit: 135,
    offset: 251
  },
  {
    limit: 107,
    offset: 386
  },
  {
    limit: 156,
    offset: 493
  },
  {
    limit: 72,
    offset: 649
  },
  {
    limit: 88,
    offset: 721
  },
  {
    limit: 96,
    offset: 809
  }, {
    limit: 3,
    offset: 905
  }

]
const endpoint = 'https://pokeapi.co/api/v2/pokemon'

async function fetchGenerations () {
  const urls = generations.map(generation => {
    const { limit, offset } = generation
    console.log(limit)

    return `${endpoint}?limit=${limit}&offset=${offset}`
  })

  try {
    const responses = await Promise.all(urls.map(url => fetch(url)))
    const data = await Promise.all(responses.map(res => res.json()))
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}
fetchGenerations()

// const searchPokemon = (e) => {
//   searchValue = e.target.value
//   filterList =
//   searchValue.length >= 0 ? pokemonData.filter((pokemon) => {
//     return pokemon.name.toLowerCase().includes(searchValue)
//   })
// }

/* fetch(endPointUrls[1]).then((res) => res.json())
  .then(data => console.log(data)) */

// fetch(endPointUrls[0])
//   .then(response => response.json())
//   .then(json => {
//     const fetches = json.results.map(item => {
//       return fetch(item.url).then(res => res.json())
//     })
//     Promise.all(fetches).then(res => dataList(res))
//   })

// const dataList = (data) => {
//   document.querySelector('.data').innerHTML = data.map((item, i) => {
//     console.log(i)
//     console.log(item)
//     const name = item.name
//     const imageUrl = item.sprites.front_default
//     return `<div><p>${name}</p><img src="${imageUrl}" alt="${name}"></div>`
//   }).join('')
// }

// const fetchFirstGen = () => {
//   fetch(endPointUrls[1])
//     .then(response => response.json())
//     .then(json => {
//       const fetches = json.results.map(item => {
//         return fetch(item.url).then(res => res.json())
//       })
//       Promise.all(fetches).then(res => genData(res))
//     })
// }

// const genData = (data) => {
//   document.querySelector('.data').innerHTML = data.map((item, i) => {
//     console.log(item.name)
//     const name = item.name
//     // const imageUrl = item.sprites.front_default
//     return `<div><p>${name}</p> alt="${name}"></div>`
//   }).join('')
// }
// fetchFirstGen()
/* document.getElementById('generation1').addEventListener('click', fetchFirstGen) */
