var activityList =  [];

var input = document.getElementById("input");

//Create an aaray named list to store our todo activities.

var todolist = document.getElementById("todolist");

//Create a DOM variable 

document.getElementById("button").onclick = click;
//Using onclick to run the click funtion when buttn is clicked

//Adding a to-do activity

function click() {
    activityList.push(input.value);
    //usong push array operation to add the input todo activity to the list created earlier.
    console.log(activityList);
    input.value = "";
    //Giving empty string to input value after pushing it to array
    showList();
    //calling a function to display the todo activities present in the list list 
}

function showList(){
    todolist.innerHTML = " ";
    activityList.forEach(function (n,i)
    {todolist.innerHTML += 
        "<li>" + n + "<a onclick = 'editItem("+i+")'> Edit </a>"+"<a onclick = 'deleteItem("+i+")'> &times | </a> </li>"
    });               
}



function deleteItem(i)
 {
    activityList.splice(i,1);
    showList();
 }


 function editItem(i) {
    var newValue = prompt("Please insert your new value ");
    activityList.splice(i,1,newValue);
    showList();
 }
