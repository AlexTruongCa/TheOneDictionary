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
// console.log(data);

 

// Display the fetched data in the outputRace div

  
// const outputRace = document.getElementById('outputRace');
  const characterCardTemplate = document.getElementById('data-user-template')
  const characterCardContainer = document.getElementById('character-cards-container')
  const searchInput = document.getElementById('data-search')

  let characters = []
  
  searchInput.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()
    characters.forEach(character => {
      const isVisible = character.name.toLowerCase().includes(value)
      character.element.classList.toggle("hide" , !isVisible)
    })
    console.log(value)
    console.log(characters)
  }) 

// Delayed display of fetched data after 3 seconds
  setTimeout(() => {
    if (characterData.length > 0) {
      characters = characterData.map(character =>{
        const card = characterCardTemplate.content.cloneNode(true).children[0]
        // console.log(character)
        const nameCharacter = card.querySelector("[data-name]") 
        const nameHeight = card.querySelector("[data-height]")
        const nameBirth = card.querySelector("[data-birth]")
        const nameDeath = card.querySelector("[data-death]")
        const nameRealm = card.querySelector("[data-realm]")
        const nameHair = card.querySelector("[data-hair]")
        const nameURL = card.querySelector("[data-url]")
        nameCharacter.textContent = `Name: ${character.name || 'N/A'}`
        nameHeight.textContent = `Height: ${character.height || 'N/A'}`
        nameBirth.textContent = `Birth: ${character.birth || 'N/A'}`
        nameDeath.textContent = `Death: ${character.death || 'N/A'}`
        nameRealm.textContent = `Realm: ${character.realm || 'N/A'}`
        nameHair.textContent = `Hair: ${character.hair || 'N/A'}`
        nameURL.innerHTML = `<a class="learn-more-link" href="${character.wikiUrl || 'N/A'}" target="_blank">Learn more</a>`
        characterCardContainer.append(card)
        return {name: character.name, height: character.height, birth: character.birth, death: character.death, realm: character.realm, hair: character.hair, wikiUrl: character.wikiUrl, element: card}
      })
    
      // const characterInfo = characterData.map(character => 
      // `<div class="character-card">
      //   <p>Name: ${character.name !=='' ? character.name : 'N/A'}</p>
      //   <p>Height: ${character.height || 'N/A'}</p>
      //   <p>Birth: ${character.birth || 'N/A'}</p>
      //   <p>Death: ${character.death || 'N/A'}</p>
      //   <p>Realm: ${character.realm || 'N/A'}</p>
      //   <p>Hair: ${character.hair || 'N/A'}</p>
      //   <a href="${character.wikiUrl || 'N/A'}" target="_blank">"Learn more"</a>
      //   </div>`);
      // outputRace.innerHTML = characterInfo.join('');
    } else {
      characterCardContainer.innerHTML = 'No characters found for this race';
    }
  } , 3000) //delay of 3 seconds before displaying data
    
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    document.getElementById('character-cards-container').innerHTML = 'Error fetching data.';
  }
};



// Call the fetchDataForRace function when the page loads

// Try 1
// window.addEventListener('load', fetchDataForRace);

//Try 2
// window.addEventListener('load', () => {
//   const imageLoader = document.getElementById('image-loader')

//   if (!fetchDataForRace) {
//     imageLoader.style.display = 'block'
//   } else (fetchDataForRace)
// });

window.addEventListener('load' , async () => {
  const imageLoader = document.getElementById('image-loader')

  //Show the loader initally
  imageLoader.style.display = 'block'

  try {
    //Fetch data
    await fetchDataForRace()

    //Hide loader after fechting data
    imageLoader.style.display = 'none'
  } catch (error) {
    console.log('There was an error fetching data' , error)
    
    //Hide loader in case of error
    imageLoader.style.display = 'none'
  }
})


//SEARCH CHARACTER

