// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here





    render($display, image);
});

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1 & 3: Create the applyFilter function here
function applyFilter(){
    for(var r = 0; r < image.length; r++){
     for(var c = 0; c < image[r].length; c++){

        var rgbString = image[r][c];

        var rgbNumbers = rgbStringToArray(c);

        rgbNumbers[RED] = 255;

        var rgbString = rgbStringToArray(rgbNumbers);

        image[r][c] = rgbString;


     }
    }
}

// TODO 5: Create the applyFilterNoBackground function


// TODO 2 & 4: Create filter functions


// CHALLENGE code goes below here
