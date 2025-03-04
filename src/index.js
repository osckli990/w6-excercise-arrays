const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
]

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} Pokemon!`)
}

countThem()

const orderThem = () => {
  // order the pokemons alphabetically
  console.log(pokemons.sort())
}

orderThem()

const flipThem = () => {
  // reverse the order of the pokemons
  console.log(pokemons.reverse())
}

flipThem()

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  pokemons.forEach((name) => {
    console.log(name.toLocaleUpperCase())
  })
}

makeThemBig()

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  pokemons.forEach((names) => {
    if (names.charAt(0) === "B") {
      console.log(names)
    }
  })
}

onlyTheBs()

const notTheCs = () => {
  // remove all pokemons that starts with C
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].charAt(0) === "C") {
      pokemons.slice(i)
    } else {
      console.log(pokemons[i])
    }
  }
}

notTheCs()

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  for (let i = 0; i < pokemons.length; i++) {
    console.log(`number ${i + 1} is ${pokemons[i]}`)
  }
}

nameAndIdThanks()

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.push("Garchomp")
  console.log(pokemons)
}

catchPokemon()

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
  if (pokemons.includes("Pikachu")) {
    console.log(`it is true`)
  } else {
    console.log(`it is false`)
  }
}

didICatchIt()

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2, 0, "Clefairy")
  console.log(pokemons)
}

addInThirdPlace()

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  pokemons.sort(function (a, b) {
    return b.length - a.length
  })
  const maxLength = pokemons[0].length; // get max length
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].length === maxLength) {
      console.log(pokemons[i]); // Print all that match the longest length
    } else {
      break; // Stop when we reach shorter names
    }
  }
}

theLongestName()
