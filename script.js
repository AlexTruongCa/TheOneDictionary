// script.js

const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    fetchResults(searchBar.value);
});

function fetchResults(query) {
  /**
   * Regex stands for regular expression and is a series of characters that specify a search pattern.
   * 
   * / - This is the delimiter that marks the beginning and end of a regex pattern in JavaScript.
   * foot - This is the sequence of characters that the pattern is looking to match within a string. In this case, it's the literal word "foot".
   * i - This is a flag that makes the search case-insensitive. This means the pattern will match "foot", "Foot", "FOOT", or any other case variation of the word.
   */
    fetch(`https://the-one-api.dev/v2/character?name=/${query}/i`,
    {
      headers: {
        'Authorization': 'Bearer ymZ1I87HakbB-ZlOQInZ'
      }
    })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
}
