
loadAlbum()
const size_per_page = 15;
let album = [];
let page = [];
let current_page = 0;

function loadAlbum(){
    $.getJSON("https://raw.githubusercontent.com/ErebeXII/L2_Web_TP3/master/json/placeholder.json", function (data){ /* JSON of the github of the TP*/
        for(let i = 0; i < data.tasks.length; i++) {
            if (i < size_per_page) {
                createTask(data.tasks[i].id, data.tasks[i].title);
            }
            page.push([data.tasks[i].id, data.tasks[i].title]);
            if(i % size_per_page == 0){
                album.push(page);
                page = [];
            }
        }
    });
}

function nextPage(){

    let table = document.getElementById("table_album");
    let i;

    current_page  = (current_page + 1) % album.length;

    for(i = 0; i < size_per_page; i++){
        if(table.children.length > 1)
            table.removeChild(table.lastChild);
    }


    for(i = 0; i < album[current_page].length; i++){
        createTask(album[current_page][i][0], album[current_page][i][1]);
    }


}

function createTask(id, name){
    let table = document.getElementById("table_album");
    let tr = document.createElement("tr");

    let td_1 = document.createElement("td");
    td_1.innerHTML = id;

    let td_2 = document.createElement("td");
    td_2.innerHTML = name;

    let td_3 = document.createElement("td");
    td_3.innerHTML = "idk";

    tr.append(td_1);
    tr.append(td_2);
    tr.append(td_3);
    table.append(tr);

}