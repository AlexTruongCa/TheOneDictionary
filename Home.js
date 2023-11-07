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

searchInput.addEventListener('input', e => {
  const searchValue = e.target.value.toLowerCase()
  console.log(searchValue)
})

const fetchName = async () => {
  const API_ENDPOINT = `https://the-one-api.dev/v2/character?name`;

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
    
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    document.getElementById('searchInput').innerHTML = 'Error fetching data.';
  }
};