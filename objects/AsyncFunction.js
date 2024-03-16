// press stop pedal, click start&stop button

// function pressStopPedal(){
//     console.log("Pressing Stop Pedal");
// }

const pressStopPedal=() => {console.log("Pressing Stop Pedal");}

function clickStartButton(){
    console.log("Clicking start button");
}

async function startCar(){

   await pressStopPedal(); 
   await clickStartButton(); 

}

startCar(); 







