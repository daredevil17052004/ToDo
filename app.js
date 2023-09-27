//JS code for ToDO App

// Create an array named list to store our to-do activities

var activityList = [];

// Create a DOM variable  named input to get the to-do activities added from HTML form

var input = document.getElementById("input");

//Create a DOM variable todolist ul tag (unordered list)

var todo = document.getElementById("todolist");

//Using onlclick to run the click function when button is clicked.

document.getElementById("button").onclick = click;

// Adding a to-do activity

function click() {
    activityList.push(input.value);
    console.log(activityList);
    input.value  ="";
    showList();
}

// function -> showList()
function showList(){
    todo.innerHTML = " ";

    activityList.forEach(function (n,i){
        todo.innerHTML += "<li>" + n + "<a onclick = 'editItem("+i+")'> Edit </a>"+"<a onclick = 'deleteItem("+i+")'> &times | </a> </li>"
    });
}


//Deleting an activity

function deleteItem(i){
    activityList.splice(i,1);
    showList();
}

//Editing an activity

function editItem(i){
    var newValue = prompt("Please insert your new value");
    activityList.splice(i,1,newValue);
    showList();
}
