//Nav bar
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

//Calculate time
const selectElement = document.getElementById("years");
const valiantYearInput = document.getElementById("valiantYearInput");
const sunYearInput = document.getElementById("sunYearInput");
let selectedOption = 'Valiant Years'; //assign a default value for the selectedOption

valiantYearInput.addEventListener('input', ValiantYears); //ValiantYears function run when input a value in valiantYearInput field
sunYearInput.addEventListener('input', SunYears); //SunYears function run when input a value in sunYearInput field

function ValiantYears(){
  let valiantYearValue
  if(selectedOption === 'Valiant Years'){
    valiantYearValue = parseFloat(valiantYearInput.value);
    sunYearInput.value = (valiantYearValue * 144).toFixed(3);
  } else {
    valiantYearValue = parseFloat(valiantYearInput.value);
    sunYearInput.value = (valiantYearValue * 10).toFixed(3);
  }
}

function SunYears(){
  let sunYearValue
  if(selectedOption === 'Valiant Years'){
    sunYearValue = parseFloat(sunYearInput.value);
    valiantYearInput.value = (sunYearValue / 144).toFixed(3);
  } else {
    sunYearValue = parseFloat(sunYearInput.value);
    valiantYearInput.value = (sunYearValue / 10).toFixed(3);
  }
}

selectElement.addEventListener('change', function () {
  selectedOption = selectElement.value;
  valiantYearInput.value = '';
  sunYearInput.value = '';
  console.log(selectedOption)
}); //Inputs reset when option changed

// SEARCH FUNCTIONALITY
const searchInput = document.getElementById('searchInput')
const searchResults = document.getElementById('searchResults')

let characters = []

fetch('https://the-one-api.dev/v2/character' , {
  method: 'GET' ,
  headers: {
    'Authorization': 'Bearer ymZ1I87HakbB-ZlOQInZ'
  }
})
  .then(res => res.json())
  .then(data => {
    characters = data.docs.map(character => {
      const characterName = document.createElement('div')
      characterName.style.backgroundColor = 'lightgrey'
      characterName.style.width = '300px'
      characterName.style.fontSize = '1rem'
      const characterLink = document.createElement('a')
      characterLink.textContent = character.name
      characterLink.href = character.wikiUrl
      characterLink.target = "_blank"
      characterName.textContent = character.name
      characterName.classList.add('hide')


      characterName.appendChild(characterLink)

      searchResults.appendChild(characterName)
      return { name: character.name, element: characterName, link: characterLink}
    })
  })
  .catch(error => console.log(error))

const updateDebounce = debounce((text) => {
  console.log('Updating searchInput with text:', text);
  searchInput.value = text
}) 

searchInput.addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase()
  updateDebounce(event.target.value)
  console.log('Input value', value)  
  if (value === '') {
    searchResults.style.display = 'none';
  } else {
    searchResults.style.display = 'block';
  }
  
  characters.forEach(character => {
    if ( value === '') {
      character.element.classList.add('hide')
    } else if (character.name.toLowerCase().includes(value)){
      character.element.classList.remove('hide')
    } else {
      character.element.classList.add('hide')
    }
  })
  console.log(value)
})


function debounce (cb, delay = 1000) {
  let timeout
  return (...args) => {
    clearTimeout (timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}
