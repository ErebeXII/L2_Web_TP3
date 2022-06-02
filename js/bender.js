function create_robot() {

    if (document.getElementById("bender") == null) {
        let bender = document.createElement('img');
        bender.src = "../img/bender.png";
        bender.style.height = "100px";
        bender.style.position = "absolute";
        bender.style.top = "0px";
        bender.style.left = "0px";
        bender.style.transition = "all 2s";
        bender.id = "bender";
        document.body.append(bender);
    }
}


function botRight() {

    let bender = document.getElementById("bender")
    for (let step = 0; step < 10; step++) {
        bender.style.left = parseInt(bender.style.left) + 10 + "px"
    }
}

function botLeft() {

    let bender = document.getElementById("bender")
    for (let step = 0; step < 10; step++) {
        bender.style.left = parseInt(bender.style.left) - 10 + "px"
    }
}

function botTop() {

    let bender = document.getElementById("bender")
    for (let step = 0; step < 10; step++) {
        bender.style.top = parseInt(bender.style.top) - 10 + "px"
    }
}


function botBottom() {

    let bender = document.getElementById("bender")
    for (let step = 0; step < 10; step++) {
        bender.style.top = parseInt(bender.style.top) + 10 + "px"
    }
}

function activate_bot() {

    console.log("BOT GO !");
    create_robot();
    const table_tasks = document.getElementById("table");
    for (let i = 1; i < table_tasks.rows.length; i++) {
        get_bot_action(table_tasks.rows[i].cells[0].innerText);
    }

    function get_bot_action(query) {

        switch (query) {
            case "BOT_RIGHT":
                botRight();
                break;
            case "BOT_LEFT":
                botLeft();
                break;
            case "BOT_TOP":
                botTop();
                break;
            case "BOT_BOTTOM":
                botBottom();
                break;
            case "BOT_CREATE":
                create_robot();
                break;
            default: break;

        }
    }
}
activate_bot()


