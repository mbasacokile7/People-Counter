// Initialise count as 0
let count = 0;
// Create a variable to store the number of people from the html element count
let numberOfPeople = document.getElementById("count")

// Function to increment the number of people
function increment(){
  count = count + 1
  numberOfPeople.textContent = count
  //console.log(count)
}

//Create a save function to log count when it is called
let saveEl = document.getElementById("save-el")

function save(){
  console.log(count)
  let countStr = count + " - "
  saveEl.textContent += countStr
  count = 0
  numberOfPeople.textContent = count
}
