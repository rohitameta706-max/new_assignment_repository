function toCelcius(Fehrenheit){
    return (Fehrenheit - 32) * 5/9;
}

function toFehrenheit(Celcius){
    return (9/5)* Celcius + 32;
}


(function(){
    let choice = prompt("Enter 1 for Fahrenite to celcius or 2 for Celcius to Fehrenite:");
    switch(Number(choice)){

    case 1: 
    let FahreniteInput = prompt("Enter the Fehrenite value");
    console.log("Fehrenite to Celcius:",toCelcius(Number(FahreniteInput)));
    break;

    case 2:
    let CelciusInput = prompt("Enter the Celcius value")
    console.log("Celcius to Fehrenite:", toFehrenheit(Number(CelciusInput)));
    break;
    default:
        console.log("Write a choice in between these two")
    }
})();