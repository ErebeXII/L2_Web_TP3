
let myTasks = new Array();

function getTaskFromForm(){
    const name_task = document.getElementById("task_name").value;
    const category = document.getElementById("Category").value;
    const date = document.getElementById("Date").value;

    return new Task(name_task, category, date);
}

class Task {
    constructor(name, category, date) {
        this.name = name;
        this.category = category;
        this.date = date;
    }
}

function pushTask(){
    let task = getTaskFromForm(); /* get the task*/

    for(var i = 0; i < myTasks.length; i++) { /* search for duplicates*/
        if (myTasks[i].name == task.name && myTasks[i].category == task.category && myTasks[i].date == task.date) {
            alert("This task already exists");
            return;
        }
    }
    console.log(task);
    /* Check values are correct*/
    if(task.name == "") {
        alert("Please enter a name");
        return;
    }
    if(task.date == ""){
        alert("Please enter a date");
        return;
    }
    if(task.category == ""){
        alert("Please enter a category");
        return;
    }

    myTasks.push(task);

    /*console.log(console.table(myTasks));*/
    createTask(task.name, task.category, task.date);
    tableToJSON();
    /*getTasksFromTable(); if we want to get the new tasks list after each new addition */
    return 0;
}

function createTask(name, category, date){
    let tr = document.createElement("tr");
    let td_1  = document.createElement("td");
    td_1.innerHTML = name;

    let td_2 = document.createElement("td");
    td_2.innerHTML = category;

    let td_3 = document.createElement("td");
    td_3.innerHTML = date;

    let td_4 = document.createElement("td");
    td_4.innerHTML = taskDate();

    let td_5 = document.createElement("td");
    td_5.classList.add("duree");
    td_5.innerHTML = "0";

    let td_6 = document.createElement("td");
    td_6.innerHTML = "";

    let td_7 = document.createElement("td");

    let button_7 = document.createElement("button");
    button_7.innerHTML = "Finish Task";
    button_7.addEventListener("click",
        function (){
            td_6.innerHTML = taskDate();
            td_5.classList.remove("duree");
            button_7.innerHTML= "Finished !";
            tr.style.backgroundColor = "rgb(0,255,0)";
        }
    );

    td_7.append(button_7);

    tr.append(td_1);
    tr.append(td_2);
    tr.append(td_3);
    tr.append(td_4);
    tr.append(td_5);
    tr.append(td_6);
    tr.append(td_7);

    let table = document.getElementById("table");
    table.appendChild(tr);

    return 0;
}


function tableToJSON(task){
    $.getJSON("https://raw.githubusercontent.com/ErebeXII/L2_Web_TP3/master/json/tasks.json", function (data){ /* JSON of the github of the TP*/
        console.log("JSON string format :");
        console.log(JSON.stringify(getTasksFromTable()));
    });
}


function loadTasksFromJSON(address){
    /* due to the difficulties to access local JSON we add to get a little away from the instructions*/
    $.getJSON(address, function (data){ /* JSON of the github of the TP*/
        /*console.log(data.tasks);*/
        for(let i = 0; i<data.tasks.length; i++)
            createTask(data.tasks[i].name, data.tasks[i].category, data.tasks[i].date);
    });
}

loadTasksFromJSON("https://raw.githubusercontent.com/ErebeXII/L2_Web_TP3/master/json/tasks.json");
tableToJSON();
loadTasksFromJSON("")
function getTasksFromTable(){
    let tasks = [];
    let name = "";
    let category = "";
    let date = "";

    let table = document.getElementById("table");
    let tds = table.getElementsByTagName("td");

    const nb_rows = table.getElementsByTagName("th").length;



    for(let i = 0; i < tds.length; i++) {
        if (i % nb_rows == 0)
            name = tds[i].innerHTML;
        if (i % nb_rows == 1)
            category = tds[i].innerHTML;
        if (i % nb_rows == 2) {
            date = tds[i].innerHTML;
            tasks.push(new Task(name, category, date));
        }
    }
    /*console.log(tasks);*/

    return tasks;
}

