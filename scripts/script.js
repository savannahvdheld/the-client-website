// JS
/****************************************/
/* menu openen en sluiten met de Hamburger button */
/****************************************/
 
/* JOUW CODE HIER - stap 4 */
 
// stap 1: zoek de menu-button op en sla die op in een variabele
const deMenuButton = document.querySelector("header > button");
console.log(deMenuButton)
  const HamburgerMenu = document.querySelector("deHamburger")
 
// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deMenuButton.addEventListener("click", openMenu)
 
// stap 3: voeg in de functie een class toe aan het burger menu
function openMenu(){
  HamburgerMenu.classList.add("is-open")
  console.log(HamburgerMenu)
}

const deSluitButton = document.querySelector ("deHamburger > button")
deSluitButton.addEventListener("click", sluitMenu)
 
function sluitMenu(){
  HamburgerMenu.classList.remove("is-open")
}