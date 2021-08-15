function welcomeGust(name, greetHandler){
    greetHandler(name);
}
const actorName = "tome hankes";

function greetMorning(name){
    console.log('good morning', name);
}

function greetEvening(name){
    console.log('good evening', name);
}

function greetAfternoon(name){
    console.log('good afternoon', name);
}

welcomeGust(actorName, greetEvening);
welcomeGust('kate winslate', greetAfternoon);
welcomeGust('sakin khan', greetMorning);
welcomeGust('sakin khan', function(name){
    console.log('special welcome', name)
});



function handleClick(){
    console.log('some one clicked me');
}
// document.getElementById("id").addEventListener("click", handleClick );
// document.getElementById("id").addEventListener("click", function(){
//     console.log('object');
// } );