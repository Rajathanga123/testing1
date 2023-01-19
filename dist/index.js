"use strict";
// Getting Id and Classes From Html
//Assign the Variable
const inputs = document.getElementById("inputs");
const buttons = document.getElementById("buttons");
const lists = document.getElementById("lists");
// Create Empty Array
const store = [];
// Call Page reload Function
loadtasks();
// Button Click Function
buttons === null || buttons === void 0 ? void 0 : buttons.addEventListener("click", add); // Click event and add function
//Declare Add Function
function add() {
    elements(); // Call elements function
    // Push the values to store
    store.push(inputs.value);
    savetasks(); // call savetasks function
}
// Data store in local storage
function savetasks() {
    localStorage.setItem("Tasks", JSON.stringify(store)); // date transformed to Json String
    inputs.value = "";
}
// Get the Data From Local Storage
function loadtasks() {
    const test = localStorage.getItem("Tasks"); // get the data from local storage
    console.log(test);
    if (test == null) {
        lists === null || lists === void 0 ? void 0 : lists.append("");
    }
    else {
        // Using Forloop Data getting from the array
        for (const value of JSON.parse(test)) { // Convert JSonString to String
            // Create Elements
            const item = document.createElement("li"); //Create List element
            const label = document.createElement("label"); // Create label
            const checbox = document.createElement("input"); // Create Check box
            checbox.type = "checkbox"; // Assign Check box type 
            const deletes = document.createElement("button"); // Create Delete Buttons
            deletes.textContent = "Delete"; // Assign the button text content
            const div = document.createElement("div"); // Create the new Class
            div.append(deletes);
            label.append(checbox, value);
            item.append(label, div);
            lists === null || lists === void 0 ? void 0 : lists.append(item);
        }
    }
}
// Connect Keyboard
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        add();
    }
});
// Create Elements Function
function elements() {
    // Create Elements
    const item = document.createElement("li"); //Create List element
    const label = document.createElement("label"); // Create label
    const checbox = document.createElement("input"); // Create Check box
    checbox.type = "checkbox"; // Assign Check box type 
    const deletes = document.createElement("button"); // Create Delete Buttons
    deletes.textContent = "Delete"; // Assign the button text content
    const div = document.createElement("div"); // Create the new Class
    div.append(deletes);
    label.append(checbox, inputs.value);
    item.append(label, div);
    lists === null || lists === void 0 ? void 0 : lists.append(item);
    // Create the delete Function
    deletes.addEventListener('click', dele);
    // Call delete function
    function dele() {
        lists === null || lists === void 0 ? void 0 : lists.removeChild(item);
        const item1 = label.innerText; // Get the list item
        const item2 = store.indexOf(item1); // Get the list length like : 0,1,2,3,4 
        store.splice(item2, 1); // Delete the item from array
        localStorage.setItem("Tasks", JSON.stringify(store)); // Again set the value in localstorage
    }
}
///  Download Package.json file --      npm init -y
//   Download tsconfig.json file  --     npx tsc --init
//   Download Save Dependency     -- npm i --save-dev typescript
//   Convert TS file to JS file   -- "Start" : "tsc --watch" in Package.json file
// start key     --  npm start
