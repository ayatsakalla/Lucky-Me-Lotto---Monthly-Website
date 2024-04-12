//create a list to store names
const nameArray = [];

function addName() {
  const nameInput = document.querySelector("#nameInput");
  const name = nameInput.value.trim();
  nameArray.push(name);

  displayNames()
  nameInput.value = "";
}

// displays names entered in the input box
function displayNames() {
    const nameList = document.querySelector("#nameList")// get UL element
    nameList.innerHTML = '';
    for (let i=0; i < nameArray.length; i++ ) {
        const name = nameArray[i]
        const li = document.createElement('li');
        li.className = 'list-group-item';

        const span = document.createElement('span')
        span.textContent = name;
        li.appendChild(span);

        nameList.appendChild(li)
    }
}

// picks random name from the list and displays it
function pickRandomName() {
    const randomNameDiv = document.querySelector('#randomName');
    randomNameDiv.textContent = '';

    const randomNumber = Math.floor(Math.random() * nameArray.length);
    const randomName = nameArray[randomNumber];

    randomNameDiv.textContent = randomName;

    // styling the selected name in red and bigger font and style
    randomNameDiv.classList.add("bloodred");
    randomNameDiv.classList.add("display-2");
    randomNameDiv.classList.add("miology");

    nameArray.splice(randomNumber, 1);

    displayNames();
}

// when pressing enter, it will trigger to click the button when entering list of names
nameInput.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Trigger the button element with a click
      document.getElementById("addNameBtn").click();
    }
  });

// references the button to click on to enter the names in the list
document.querySelector("#addNameBtn").addEventListener("click", addName);

// references the button to click on to pick a random name from the list of names
document.querySelector("#pickRandomBtn").addEventListener("click", pickRandomName);