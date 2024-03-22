// create list to store names
const nameArray = []

function addName() {
    //get a trimmed version of the name from input box
    const nameInput = document.querySelector('#nameInput');
    const name = nameInput.value.trim();
    nameArray.push(name);

    displayNames()
    nameInput.value = '';
}

function displayNames() {
    //get ul element 
    const nameList = document.querySelector('#nameList');
    nameList.innerHTML = ''; //clears list

    for (let i = 0; i < nameArray.length; i++){
        //get current name from the array
        const name = nameArray[i];
        
        // created an li tag in html
        const li = document.createElement('li');

        // bootstrap class for li items
        li.className = 'list-group-item';

        const span = document.createElement('span');
        span.textContent = name;

        li.appendChild(span);

        nameList.appendChild(li);
    }
    


}

// add onclick to add name btn
document.querySelector('#addNameBtn').addEventListener('click', addName);
