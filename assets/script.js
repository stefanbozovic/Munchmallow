function myFunction() {
    var x = document.getElementById("navlinkovi");
    if (x.className === "linkovi") {
        x.className += " mobilnaverzija";
    } else {
        x.className = "linkovi";
    }

    var i = document.getElementById("meniIkonica");
    if (i.className === "ikonica") {
        i.className += " iks";
    } else {
        i.className = "ikonica";
    }
}