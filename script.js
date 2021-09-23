function validateform() {
    let x = document.forms["myform"]["name"].value;

    if (isNaN(x)) {
        return true
        alert("Your form has been submitted. Thank you!!")
    } else {
        alert("enter a valid name");
        return false;
    }
}

x = 1

function shownofmenu() {
    if (x == 1) {
        document.getElementById("menuicon").style.visibility = "visible";
        document.getElementById("flb").style.visibility = "visible";


        x = 0
    } else {
        document.getElementById("menuicon").style.visibility = "hidden";
        document.getElementById("flb").style.visibility = "hidden";
        x = 1

    }
}