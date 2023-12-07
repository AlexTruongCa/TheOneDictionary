//Nav Bar
  const toggleBtn = document.querySelector('.toggle-btn')
  const toggleBtnIcon = document.querySelector('.toggle-btn i')
  const dropDownMenu = document.querySelector('.dropdown')

  toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
  }

// Extract the 'race' query parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const race = urlParams.get('race');
  document.title = race

// Function to fetch and display data for the specified race
  const fetchDataForRace = async () => {
  const API_ENDPOINT = `https://the-one-api.dev/v2/character?race=${race}`;

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ymZ1I87HakbB-ZlOQInZ'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

  const data = await response.json();
  const characterData = data.docs; 

// Display the fetched data in the outputRace div
  const characterCardTemplate = document.getElementById('data-user-template')
  const characterCardContainer = document.getElementById('character-cards-container')
  const searchInput = document.getElementById('data-search')

  let characters = []
  
  searchInput.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    characters.forEach(character => {
      const isVisible = character.name.toLowerCase().includes(value)
      character.element.style.display = isVisible ? 'block' : 'none';
    })
    console.log(value)
    console.log(characters)
  }) 

    if (characterData.length > 0) {
      characters = characterData.map(character =>{
        const card = characterCardTemplate.content.cloneNode(true).children[0]
        const nameCharacter = card.querySelector("[data-name]") 
        const nameHeight = card.querySelector("[data-height]")
        const nameBirth = card.querySelector("[data-birth]")
        const nameDeath = card.querySelector("[data-death]")
        const nameRealm = card.querySelector("[data-realm]")
        const nameHair = card.querySelector("[data-hair]")
        const nameURL = card.querySelector("[data-url]")
        nameCharacter.textContent = `${character.name || 'N/A'}`
        nameHeight.textContent = `Height: ${character.height || 'Unknown'}`
        nameBirth.textContent = `Birth: ${character.birth || 'Unknown'}`
        nameDeath.textContent = `Death: ${character.death || 'Unknown'}`
        nameRealm.textContent = character.realm && `of ${character.realm}`
        nameHair.textContent = `Hair: ${character.hair || 'Unknown'}`
        nameURL.innerHTML = `<a class="learn-more-link" href="${character.wikiUrl || 'N/A'}" target="_blank">Learn more</a>`
        characterCardContainer.append(card)
        return {name: character.name, height: character.height, birth: character.birth, death: character.death, realm: character.realm, hair: character.hair, wikiUrl: character.wikiUrl, element: card}
      })
    
    } else {
      characterCardContainer.innerHTML = 'No characters found for this race';
    }

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    document.getElementById('character-cards-container').innerHTML = 'Error fetching data.';
  }
};

// Display Race Photo
const photoAinur = document.getElementById ('photo-ainur')
const photoMaiar = document.getElementById ('photo-maiar')
const photoElves = document.getElementById ('photo-elves')
const photoDwarves = document.getElementById ('photo-dwarves')
const photoMen = document.getElementById ('photo-men')
const photoHobbit = document.getElementById ('photo-hobbits')
const photoOrcs = document.getElementById ('photo-orcs')

const narAinur = document.getElementById ('valar-description')
const narMaiar = document.getElementById ('maiar-description')
const narElf = document.getElementById ('elf-description')
const narDwarf = document.getElementById ('dwarf-description')
const narMen = document.getElementById ('men-description')
const narHobbit = document.getElementById ('hobbit-description')
const narOrc = document.getElementById ('orc-description')

if (race === 'Ainur') {
  photoAinur.style.display = 'block'
  narAinur.style.display = 'block'
} else if (race === 'Maiar') {
  photoMaiar.style.display = 'block'
  narMaiar.style.display = 'block'
} else if (race.includes('Elf') || race.includes('Elves')) {
  photoElves.style.display = 'block'
  narElf.style.display = 'block'
} else if (race.includes('Dwarves') || race.includes('Dwarf')) {
  photoDwarves.style.display = 'block'
  narDwarf.style.display = 'block'
} else if (race.includes('Men') || race.includes('Human')) {
  photoMen.style.display = 'block'
  narMen.style.display = 'block'
} else if (race === 'Hobbit') {
  photoHobbit.style.display = 'block'
  narHobbit.style.display = 'block'
} else {
  photoOrcs.style.display = 'block'
  narOrc.style.display = 'block'
}

// Call the fetchDataForRace function when the page loads

window.addEventListener('load' , async () => {
  const imageLoader = document.getElementById('image-loader')
  const allPhotos = document.querySelectorAll('.photo-races')
  let loadMoreBtn = document.querySelector('#load-more')

  //Show the loader initally
  imageLoader.style.display = 'block'
  allPhotos.forEach(photo => {
    photo.style.opacity = '0.7'
    photo.style.background = 'grey'
  })
  loadMoreBtn.style.display = 'none'

  try {
    //Fetch data
    await fetchDataForRace()

    //Hide loader after fechting data
    imageLoader.style.display = 'block'
    
    allPhotos.forEach(photo => {
      photo.style.opacity = '1'
    }) 
    loadMoreBtn.style.display = 'block'

  } catch (error) {
    console.log('There was an error fetching data' , error)
    
    //Hide loader in case of error
    imageLoader.style.display = 'none'
  }
})

let loadMoreBtn = document.querySelector('#load-more')
let currentCard = 8

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll('.card')]
  // displaying addtional cards
  for (let i = currentCard; i < currentCard +8 && i < boxes.length ; i++ ) {
    boxes[i].style.display = 'block'
  }
  currentCard += 8
  
  if (currentCard >= boxes.length) {
    loadMoreBtn.style.display = 'none'
  }
}
