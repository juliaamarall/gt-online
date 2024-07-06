let modo = prompt("ESCOLHA ENTRE DARK, RED, BLUE");

    switch(modo){
        case "dark":
            document.querySelector("body").style.backgroundColor = "#0000";
            break;

        case "blue":
            document.querySelector("body").style.backgroundColor = "#0000ff";
            break;
        case "red":
            document.querySelector("body").style.backgroundColor = "#ff0000";
            break;  
        default:
            document.querySelector("body").style.backgroundColor = "#FF6EC7";
    }