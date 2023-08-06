function functiondropdown() {

    if(document.getElementById("dropdownoptions").style.display == "block"){
        document.getElementById("dropdownoptions").style.display = "none";
    }
    else{
        document.getElementById("dropdownoptions").style.display = "block";
    }
}

function serviceboxenter(i){

    document.getElementById("boxx"+i).style.opacity = 100;

}

function serviceboxleave(i){

    document.getElementById("boxx"+i).style.opacity = 0;


}