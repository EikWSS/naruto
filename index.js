let myAPI = "https://dattebayo-api.onrender.com/characters"

let inputSearch = document.getElementById("myInput")
let inputButton = document.getElementById("myBtn")

const charImage = document.getElementById("charImage");
const charName = document.getElementById("Name");
const Traits = document.getElementById("Traits")
const Birthday = document.getElementById("Birthday");
const clan = document.getElementById("clan")
let Sharingan = document.getElementById("Sharingan")
const uniqueTraits = document.getElementById("uniqueTraits")

inputButton.addEventListener("click", function () {
    fetch(myAPI)
        .then(response => response.json())
        .then(data => {
            data.characters.forEach(character => {
                if (inputSearch.value.toLowerCase() == character.name.toLowerCase()) {
                    imageContainer.style.display = "flex"
                    theTable.style.display = "flex"

                    charImage.src = character.images[0]
                    
                    charImage.innerHTML = character.name
                    Traits.innerHTML = character.personal.classification
                    Birthday.innerHTML = character.personal.birthdate
                    occupation.innerHTML = character.personal.occupation
                    clan.innerHTML = character.personal.clan
                    Sharingan.innerHTML = character.personal.kekkeiGenkai
                    uniqueTraits.innerHTML = character.uniqueTraits
                }
            })
        })
})

    






