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

const idS = "If you want help with getting ID, the best place to go for help is Chimo."                 //if they need help with id
            + " They are on the first floor of Richmond Caring place, located at 7000 Minoru Boulevard."
            + " Open from 9 am to 4:30 pm on weekdays. You will need to bring at least one piece of ID";

const firstIDS = "However, since you don't have the first piece of ID, you will need to "   //if they need help getting their first piece of id
                + "get one piece before Chimo can help. Fortuneately, you can do that "
                + "relatively easily by asking for a copy of your birth certificate. "
                + "Go the BC website <a href = \"https://www2.gov.bc.ca/gov/content/life-events/order-certificates-copies#order_online\"> for"
                + " ordering birth certificates </a>"
                + ", select \"Order a Birth, Marriage or Death Certificate\", and then fill out the online form."
                + " your certificate will soon be mailed to you. "
                + " If you do not have a mailing adress, you can have your mail delivered to the "
                + "<a href = \"https://salvationarmyrichmond.org/?page_id=73\">Richmond House Emergency Shelter</a> to pick up.";    
                
                
const welfareS = "If you want help with getting ID, the best place to go for help is Chimo."                                                    //if they need help applying for welfare
                + " They are on the first floor of Richmond Caring place, located at 7000 Minoru Boulevard."
                + " Open from 9 am to 4:30 pm on weekdays. You will need to bring ID";     
    

//The addiction suggestion based on their circumstances
var addictionOptions = [];
addictionOptions[0] =   "The best option for an adult addicted to non-opiods is to call the "  //over 19, not addicted to opiods
                        + " substance abuse intake (604 244 5488). Explain what you"
                        + " are struggling with, and they will be able to set up appointment with"
                        + " a suitable professional.";

addictionOptions[1] =  "The best place to find help with opiod addiction is"       //over 19, addicted to opiods
                        + " <a href = \"http://www.vch.ca/Locations-Services/result?res_id=1143\"> Ann Vogel </a>."
                        + " The suggested first action is to call their main line (604-675-3975), "
                        + " and a specialist will help find you find a suitable professional.";


addictionOptions[2] =   "Since you are a minor, the best place for you to find"         //under 19
                    + " help for substance abuse would be with "
                    + " <a href = \"https://www.richmondaddictions.ca/\"> RASS </a>."
                    + " The suggested first action is to call their intake (604-270-9220), "
                    + " and a specialist will help find you find a suitable professional.";




var mentalOptions = [];

//Over 19
mentalOptions[0] = "Since you are over 18, the best place is to go is the "
                    + " <a href =\"http://www.vch.ca/Locations-Services/result?res_id=1062\">"
                    + "Richmond Adult Mental Health Team </a>. They can provide community based assessment" 
                    + " and treatment, as well as case management, outreach and rehabilitation programs."
                    + " Do note that they require a refferal form to be filled out by a"
                    + " midwife, physician or nurse practitioner. The form can be downloaded from their link.";

mentalOptions[1] = "Since you are under 19, the best place to get help from mental health help is "
                +  " <a href = \"http://www.vch.ca/Locations-Services/result?res_id=1116\">"
                + " Richmond Child and Adolescent Mental Health Center </a>. They can provide "
                + " assesments and treatment for mental health problems. Do note that appointments with "
                + " psychiatrists require a refferal from a health professional. The refferal form can be "
                + " downloaded from the link."

const diagnoseS = "In order to get formal psychiatric help,"          //If they don't have an offical diagnosis yet
                    + " you need a refferal. The easiest way"
                    + " to get a refferal is to speak with <a href = \"https://www.ratemds.com/facilities/bc/richmond/\">a general"
                    + " practitioner or family doctor</a>, such as ones at"
                    + " <a href = \"https://stevestonmedicalgroup.wordpress.com/\">Steveston<\a> or <a href = \"http://www.terranovamedical.ca/\"> terra nova</a>. Many doctors can provide"
                    + " a diagnosis after a simple phone appointment."; 

const jobS = "If you wish to help find a job, the best place to go is WorkBC."          //If they need help finding a job
               + " To get startted, call either the Granville branch (778-732- 1529)"
               + " or the ironwood branch(778-732-4718). They will ask for basic information in the intial call."
               + " You will then be matched with a counsellor who can help you with resume building,"
                + " skills building, interviewing skills, and applying for wage subsidies.";         
const homeS = "You need help finding a home";       //If they need help finding a home


//[3] is the addiction option, and [4] is the mental option
suggestionsList[0] = idS; suggestionsList[1] = firstIDS; suggestionsList[2] = welfareS; suggestionsList[5] = diagnoseS; suggestionsList[6] = jobS; //suggestionsList[7] = homeS;
const suggestionOutput = document.getElementById("suggestions");     //The HTML element that will ouptut suggestions



//Calculates which strings should be added

var helpSelection = document.getElementsByClassName("help");         //All radio options that indicate some help is needed
var suggestions;           //String that stores the suggestions
var above19;                //boolean that stores if the person is older than 19

function getSuggestions(){
    suggestions = "";
    let numSuggestions = 0;     //number of suggestions given
    above19 = document.getElementById("above19").checked;

    
    findAddictionSelection();
    findmentalSelection();

    for(let i = 0; i < suggestionsList.length; i++){
        if(helpSelection[i].checked){
            addsuggestion(suggestionsList[i], ++numSuggestions);
        }
    }

    suggestionOutput.innerHTML = suggestions;
}


//this method finds out which addiction selection is appropriate based on context
function findAddictionSelection(){
    let opiodRadio = document.getElementById("opiodYes");

    if(above19){
        if(opiodRadio.checked){
            suggestionsList[3] = addictionOptions[1];
        }else{
            suggestionsList[3] = addictionOptions[0];
        }
    }else{
        suggestionsList[3] = addictionOptions[2];
    }
}

function findmentalSelection(){
    if(above19){
        suggestionsList[4] = mentalOptions[0];
    }else{
        suggestionsList[4] = mentalOptions[1];
    }
}

function addsuggestion(string, num){
    suggestions += "<p>" + num + ". " + string + "</p>";
}

//TODO add better suggestions, and then add a download option