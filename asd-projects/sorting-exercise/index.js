/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array){
    for(var i = 0; i < array.length; i++){
        for(var j = i+1; j < array.length; j++){
            if(array[i] > array[j]){  
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            }
        }
        }
        
}

// TODO 3: Implement quickSort


// TODOs 4 & 5: Implement partition


// TODO 1: Implement swap
function swap(array, i, j){
var temp = array[i];
array[i] = array[j];
array[j] = temp;
}
drawSwap(array, i, j);
///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let shiftIncrement = $(bubbleId).height()/MAX_SQUARES;
    let shiftAmount = (i - j) * shiftIncrement;

    $(element1.id).css("top", parseFloat($(element1.id).css("top")) + shiftAmount + "px");
    $(element2.id).css("top", parseFloat($(element2.id).css("top")) - shiftAmount + "px");
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}