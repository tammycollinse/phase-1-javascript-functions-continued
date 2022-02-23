// code your solution here
//function declaration

// function razzle(){
//     console.log("You have bee razzled!");
// }

// razzle(); //calling the function

// function razzle(lawyer = "Billy", target = "'em"){ //This is a function that is beinig passed arguments
//   console.log(`${lawyer} razzle-dazzles ${target}!`);
// }

// razzle("Methuselah", "T'Challah");

function saturdayFun(activity = "roller-skate" ){
 let message = `This Saturday, I want to ${activity}!`;
 console.log(message);
//  if (activity != true ){
//      activity = "roller-skate"; // why does it keep returning an undefined??? instead of assigning the "roller-skate" string?
//      console.log(`This Saturday, I want to ${activity}!`);
//  }
 return message;
}
saturdayFun("bathe my dog");
//-----------------

function mondayWork(activityMon = "go to the office"){
return `This Monday, I will ${activityMon}.`;
}

mondayWork("work from home");