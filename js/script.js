console.log()


function add() {
    name_task = document.getElementById("task_name").value;
    category = document.getElementById("Category").value;
    date = document.getElementById("Date").value;

    if(name_task != ""){
        if(category != ""){
            if(date != ""){
                tr = document.createElement("tr");
                var td_1  = document.createElement("td");
                td_1.innerHTML = name_task;

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

            }
        }
    }
  

  }

function taskDate(){
    var d = new Date();
    var date;
    date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate() + " at " + d.getHours()+ ":" + d.getMinutes() + ":" + d.getSeconds();

    return date;
  }

function incrementDuration() {
    let durees = document.getElementsByClassName("duree")
    if (durees.length != 0) {
        Array.prototype.forEach.call(durees,
            function(durationElement) {
                let valeur = parseInt(durationElement.textContent)
                durationElement.textContent = valeur + 1
                });
        }

    }

setInterval(incrementDuration, 1000);

function deleteTable(){
    table = document.getElementById("table");
    while(table.childElementCount > 1){
        table.removeChild(table.lastChild);
    }
    
}

let task = {
    [Symbol.iterator](){

    }
};
