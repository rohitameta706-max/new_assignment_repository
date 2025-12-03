let UserchoiceNumber=prompt("enter 1 for rock or enter 2 for paper or enter 3 for scissor");
let input=Math.floor(Math.random()*3+1);
//computer= 1 for rock and 2 for paper and 3 for scissors

if(UserchoiceNumber==1 || UserchoiceNumber==2 || UserchoiceNumber==3){
   userchoice(UserchoiceNumber,input); 
}
else{
    console.log("invalid selection");
}


function userchoice(userchoice,input){
    if(userchoice==input){
        console.log("Match Tie");
    }
    else if(
        (userchoice==1 && input==3)|| 
        (userchoice==3 && input == 2) || 
        (userchoice==2 && input == 1)
     ) {
        console.log("You won");
    }
    else {
         console.log("Computer won");
    }
}