/* 

currentTab = 0;

showTab(currentTab);

function showTab(n){

    var x = document.getElementsByClassName("tab");

    x[n].style.display = "block";

    if (n == 0){

        document.getElementById("prevbtn").style.display = "none";
    }
    else{
        document.getElementById("prevbtn").style.display = "inline";
    }
    if (n == (x.length - 1)){

        document.getElementById("nextbtn").innerHTML = "Submit";
    }else{
        document.getElementById("nextbtn").innerHTML = "Next";
    }

    fixStepIndicator(n);
}

function Nextprev(n){

    var x = document.getElementsByClassName("tab");

    currentTab = currentTab + n;

    showTab(currentTab);

}
function fixStepIndicator(n){

    var i, x = document.getElementsByClassName("step");

    for (i = 0; i < x.length; i++){

        x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
} */