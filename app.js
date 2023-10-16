// Simulated user data fetch function (meant to represent an API call)
let users = []
function addToLocalStorage(newUser) {
    localStorage.setItem(JSON.parse())
}
function fetchUsers(callback) {
  setTimeout(() => {
    callback([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Catherine" },
    ]);
  }, 1000);
}
// Function to display users
function displayUsers(users) {
  const userListDiv = document.querySelector("#usersList");
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `${user.name}`;
    userListDiv.appendChild(userDiv);
  });
}
// Fetch and display users
fetchUsers((fetchedItems) => {
  users = fetchedItems; 
  displayUsers(users);
});

setTimeout(() => console.log(users), 2000);
