function create_robot(){
    let bender = document.createElement('img');
    bender.src = "../img/Bender.png";
    bender.style.height = "100px";
    bender.style.position = "absolute";
    bender.style.top = "0px";
    bender.style.left = "0px";
    bender.style.transition = "all 2s";
    bender.id = "bender";
    document.body.append(bender);
}

function move_bot_right(){
    let bender = document.createElement('img');
    bender.src = "../img/Bender.png";
    bender.style.height = "100px";
    bender.style.position = "absolute";
    bender.style.top = "0px";
    bender.style.right = "1000x";
    bender.style.transition = "all 2s";
    bender.id = "bender";
    document.body.append(bender);
}

