
var myTasks = new Array();

function getTaskFromForm(){
    name_task = document.getElementById("task_name").value;
    category = document.getElementById("Category").value;
    date = document.getElementById("Date").value;

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
    var task = getTaskFromForm(); /* get the task*/

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

    /*getTasksFromTable(); if we want to get the new tasks list after each new addition */
    return 0;
}

function createTask(name, category, date){
    tr = document.createElement("tr");
    var td_1  = document.createElement("td");
    td_1.innerHTML = name;

    var td_2 = document.createElement("td");
    td_2.innerHTML = category;

    var td_3 = document.createElement("td");
    td_3.innerHTML = date;

    var td_4 = document.createElement("td");
    td_4.innerHTML = taskDate();

    var td_5 = document.createElement("td");
    td_5.classList.add("duree");
    td_5.innerHTML = "0";

    var td_6 = document.createElement("td");
    td_6.innerHTML = "";

    var td_7 = document.createElement("td");

    var button_7 = document.createElement("button");
    button_7.innerHTML = "Finish Task";
    button_7.addEventListener("click",
        function (){
            td_6.innerHTML = taskDate();
            td_5.classList.remove("duree");
            button_7.innerHTML= "Finished !";

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

    table = document.getElementById("table");
    table.appendChild(tr);

    return 0;
}



function loadTasksFromJSON(){
    /* due to the difficulties to access local JSON we add to get a little away from the instructions*/
    $.getJSON("https://raw.githubusercontent.com/ErebeXII/L2_Web_TP3/master/json/tasks.json", function (data){ /* JSON of the github of the TP*/
        console.log(data.tasks);
        for(let i = 0; i<data.tasks.length; i++)
            createTask(data.tasks[i].name, data.tasks[i].category, data.tasks[i].date);
    });
}

loadTasksFromJSON();

function getTasksFromTable(){
    var tasks = [];
    var name = "";
    var category = "";
    var date = "";

    table = document.getElementById("table");
    tds = table.getElementsByTagName("td");

    for(let i = 0; i < tds.length; i++) {
        if (i % 7 == 0)
            name = tds[i].innerHTML;
        if (i % 7 == 1)
            category = tds[i].innerHTML;
        if (i % 7 == 0) {
            date = tds[i].innerHTML;
            tasks.push(new Task(name, category, date));
        }
    }
    /*console.log(tasks);*/

    return tasks;
}

