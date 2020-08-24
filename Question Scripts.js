//The following sections help with making hidden questions appear
var makeAppears = document.getElementsByClassName("Appear");        
var makeAppersList = Array.prototype.slice.call(makeAppears);       //Array of all the "yes" answers that necessitate a followup
var makeDissapear = document.getElementsByClassName("Disappear");
var makeDissapearList = Array.prototype.slice.call(makeDissapear);  //Array of all the "no" answers that remove the need for a followup
var hiddenQs = document.getElementsByClassName("hidden");           
var hiddenQsList = Array.prototype.slice.call(hiddenQs);            //Array of all questions that are initially hidden

for (i = 0; i < makeAppears.length; i++){
    makeAppersList[i].addEventListener("change", makeVisible);
    makeDissapearList[i].addEventListener("change", makeInvsible);
}

//function to make followup question visible
function makeVisible(){
    let index = makeAppersList.indexOf(this);
    hiddenQsList[index].classList.remove("hidden");
}


//function to make followup question invsible
function makeInvsible(){
    let index = makeDissapearList.indexOf(this);
    hiddenQsList[index].classList.add("hidden");
}