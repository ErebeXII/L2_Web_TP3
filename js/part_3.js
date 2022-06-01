
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
    console.log(console.table(myTasks));

    tr = document.createElement("tr");
    var td_1  = document.createElement("td");
    td_1.innerHTML = task.name;

    var td_2 = document.createElement("td");
    td_2.innerHTML = task.category;

    var td_3 = document.createElement("td");
    td_3.innerHTML = task.date;

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
