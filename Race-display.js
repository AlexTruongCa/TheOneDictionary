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
  console.log(data);

  // Display the fetched data in the outputRace div
  const outputRace = document.getElementById('outputRace');
    if (characterData.length > 0) {
      const characterInfo = characterData.map(character => 
      `<div class="character-card">
        <p>Name: ${character.name !=='' ? character.name : 'N/A'}</p>
        <p>Height: ${character.height || 'N/A'}</p>
        <p>Birth: ${character.birth || 'N/A'}</p>
        <p>Death: ${character.death || 'N/A'}</p>
        <p>Realm: ${character.realm || 'N/A'}</p>
        <p>Hair: ${character.hair || 'N/A'}</p>
        <a href="${character.wikiUrl || 'N/A'}" target="_blank">"Learn more"</a>
        </div>`);
      outputRace.innerHTML = characterInfo.join('');
    } else {
      outputRace.innerHTML = 'No characters found for this race';
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    document.getElementById('outputRace').innerHTML = 'Error fetching data.';
  }
};

// Call the fetchDataForRace function when the page loads
window.addEventListener('load', fetchDataForRace);

//SEARCH CHARACTER

