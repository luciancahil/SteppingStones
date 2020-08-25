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


//The following is used to calculate what services are appropriate

//Stores the Strings that make up the suggestions
var suggestionsList = [];                             //stores the suggestions

const idS = "You need help with id";                //if they need help with id
const firstIDS = "You need one piece of ID";        //if they need help getting their first piece of id
const welfareS = "You need welfare";                //if they need help applying for welfare
const addictionS = "You need addictions help";      //if they need addictions help
const mentalS = "You need mentla help";             //if they need mental help
const diagnoseS = "You need an official diagnosis"; //If they don't have an offical diagnosis yet
const jobS = "You need help finding a job";         //If they need help finding a job
const homeS = "You need help finding a home";       //If they need help finding a home


suggestionsList[0] = idS; suggestionsList[1] = firstIDS; suggestionsList[2] = welfareS; suggestionsList[3] = addictionS; suggestionsList[4] = mentalS; suggestionsList[5] = diagnoseS; suggestionsList[6] = jobS; suggestionsList[7] = homeS;
const suggestionOutput = document.getElementById("suggestions");     //The HTML element that will ouptut suggestions



//Calculates which strings should be added

var helpSelection = document.getElementsByClassName("help");         //All radio options that indicate some help is needed
var suggestions;           //String that stores the suggestions

function getSuggestions(){
    suggestions = "";
    let numSuggestions = 0;     //number of suggestions given

    for(let i = 0; i < suggestionsList.length; i++){
        if(helpSelection[i].checked){
            addsuggestion(suggestionsList[i], numSuggestions++);
        }
    }

    suggestionOutput.innerHTML = suggestions;
}

function addsuggestion(string, num){
    suggestions += "<p>" + num + ". " + string + "</p>";
}