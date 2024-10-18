function aPrzezB(){
    var numA = Number(document.getElementById("numA1").value);
    var numB = Number(document.getElementById("numB1").value);
    if(numB !=0) {
        document.getElementById(aPrzezB).innerHTML = "X = " + (numA / numB);
    }
    else{
        document.getElementById(aPrzezB).innerHTML = "NO! I SAY WRONG NUMBER!";
        }
    }


function aPrzezBPlusCprzezD(){
    var numA = Number(document.getElementById("numA1").value);
    var numB = Number(document.getElementById("numB1").value);
    var numC = Number(document.getElementById("numC1").value);
    var numD = Number(document.getElementById("numD1").value);
    if(numB != 0 & numD != 0){
        document.getElementById("aPrzezBPlusCprzezD").innerHTML = "X =" + (numA / numB + numC / numD);
    }
    else if(numB == 0 & numD != 0){
    document.getElementById("aPrzezBPlusCprzezD").innerHTML = "NO!";
    }
    else if(numD == 0 & numB != 0){
        document.getElementById("aPrzezBPlusCprzezD").innerHTML = "NO!";
    }
    else{
        document.getElementById("aPrzezBPlusCprzezD").innerHTML = "NO!";
    }
}