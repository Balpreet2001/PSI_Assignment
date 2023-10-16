Objective: To debug and implement requested features such as addUser, searchUser and deleteUser.
 
HTML Structure:
Created 2 forms, first form inputs user name to be added second form takes user Input to search in users array and display result to searchList div.

JavaScript structure:
Entire javaScript code is broken into several functions and Event Listners each functions handles different logic like, Storing user Inputs in local storage , deleting user from local Storage,searching user in users array and several event listeners.

JavaScript Approach: 
1) Created function addToLocalStorage to add any key-value pair to Local Storage. 
2) Made an array named users to store elements of Local Storage in key value pairs.
3) Declare all variables with reference to specific HTML tags using document.querySelector.
4) Made an eventListener named addData to take user input , create an unique key for each user input and then call addToLocalStorage to store it, Hence first feature was added.
5) Now created a second eventListner named searchData which first stores user input in search box then filters users array ,stores result in filteredUsers and then calls displaySearch on filteredUsers.
4) displaySearch : Uses same logic as displayUsers but works on a different div with filtered array.
5) Using string literal a button was added.
6) Entire userList data div was placed under a event listner to make buttons work.
7) Inside eventListner on click an evernt was targeted to know the html tag location of html tag in which click was triggered , if tag had className of delete-button we would store userId of target button inside another variable, which then would evoke localStorage.remove() inside remove we would pass stored userId which is same as key of that value in local storage hence achieving delete from local storage.

Hence all 3 features were implemented

