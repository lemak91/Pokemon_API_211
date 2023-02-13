let pokemon1;
let pokemon2;

window.onload = function () {
  getPokemon1();
  getPokemon2();
};

  // const getPosts = () => {
  //   fetch("http://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then((posts) => (arrayOfPosts = posts))
  //     .catch((err) => console.log(`Error,  ${err}`));
  // };


const getPokemon1 = () => {
  const random = Math.floor(Math.random() * 101);
  fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then((res) => res.json())
    .then((pokemon) => {pokemon1 = pokemon;
        console.log(pokemon);
    });
};


const getPokemon2 = () => {
  const random = Math.floor(Math.random() * 101);
  fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then((res) => res.json())
    .then((pokemon) => {
      pokemon2 = pokemon;
      console.log(pokemon);
    });
};

const consolePokemon = () => {
  console.log(pokemon1);
  console.log(pokemon2);
};

const displayPokemon1 = () => {
  const allPokemon = document.getElementById("pokemon");
    const li = document.createElement("li");
    const image = document.createElement("img");
    image.src = pokemon1.sprites.front_shiny;
    const text = document.createTextNode(`${pokemon1.name}`);
    li.appendChild(text);
    li.appendChild(image);
    allPokemon.append(li);
};

const displayPokemon2 = () => {
  const allPokemon = document.getElementById("pokemon");
  const li = document.createElement("li");
  const image = document.createElement("img");
  image.src = pokemon2.sprites.front_shiny;
  const text = document.createTextNode(`${pokemon2.name}`);
  li.appendChild(text);
  li.appendChild(image);
  allPokemon.append(li);
};

const fight = () => {
  const pokemon1Stats = pokemon1.stats[0].base_stat;
  const pokemon2Stats = pokemon2.stats[0].base_stat;
  if (pokemon1Stats > pokemon2Stats) {
    document.getElementById('results').innerHTML = "Pokemon 1 Wins!"
  } else if (pokemon1Stats < pokemon2Stats) {
    document.getElementById('results').innerHTML = "Pokemon 2 Wins"
  } else if (pokemon1Stats === pokemon2Stats) {
    document.getElementById('results').innerHTML = "It's a tie!"
  }
}

