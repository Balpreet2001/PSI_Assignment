//Variable declaration to manipulate dom elements
const inputText = document.querySelector("#inputText");
const addData = document.querySelector("#addData");
const searchText = document.querySelector("#searchText");
const searchData = document.querySelector("#searchData");




let users = [];
//fetches all data from Local storage and pushes it into users[] in key-value pair form
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  users.push({ id: key, name: value });
}
//function to get elements from userform which then calls addToLocalStorage which adds them to local storage
addData.addEventListener("click", function () {
  const localStorageKeys = Object.keys(localStorage);
  //function creates unique keys for each local storage input
  const nextKey =
    localStorageKeys.length > 0
      ? Math.max(...localStorageKeys.map(Number)) + 1
      : 1;
  if (inputText.value) {
    addToLocalStorage(`${nextKey}`, `${inputText.value}`);
  }
});

//function to search users based on form input and display them
searchData.addEventListener("click", () => {
  const searchTerm = searchText.value.trim().toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );
  displaySearch(filteredUsers);
});

//Function to add elements to local storage
function addToLocalStorage(newKey, newValue) {
  localStorage.setItem(newKey, newValue);
}
// Simulated user data fetch function (meant to represent an API call)
function fetchUsers(callback) {
  setTimeout(() => {
    callback([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Catherine" },
    ]);
  }, 1000);
}
//function to display search results
function displaySearch(users) {
  const userSearchDiv = document.querySelector("#searchList");
  //clears previous search
  userSearchDiv.innerHTML = ''
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `${user.name}`;
    userSearchDiv.appendChild(userDiv);
  });
}

//function to delete users from local storage
const userListDiv = document.querySelector("#usersList");
userListDiv.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const userId = parseInt(event.target.getAttribute("data-user-id"), 10);
    localStorage.removeItem(`${userId}`)
  }
});

// Function to display users
function displayUsers(users) {
  const userListDiv = document.querySelector("#usersList");
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    //added id for each div which is same as its key in local storage
    userDiv.id = `${user.id}`
    userDiv.innerHTML = `${user.name} <button class="delete-button" data-user-id="${user.id}">Delete</button>`;
    userListDiv.appendChild(userDiv);
  });
}
// Fetch and store hard coded users data in local storage 

//displays data in users array 
displayUsers(users);
