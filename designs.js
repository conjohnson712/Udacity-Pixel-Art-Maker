/*
    Becuase I imported jQuery, the $ symbol is now the same as the whole 
    line "document.getElementById" and "document.querySelector". The val() function returns the user
    input as a value that we can use.
*/
/* 
    define DOM objects as variables so we can call them later
    "use strict" + $ before a variable allows the same word to be used
    as two different variables, as seen with height and $height
*/
"use strict";

const $table = $('#pixelCanvas');
const $height = $('#inputHeight');
const $width = $('#inputWidth');
const $color = $('#colorPicker');

// Select size input
$('#sizePicker').submit(function(event) {
    //prevent the page from reloading when Submit is clicked
    event.preventDefault();

    //set the height and width parameters for makeGrid()
    let height = $height.val();
    let width = $width.val();

    // make sure that the grid is cleared before each new entry
    $table.html('');

    //call makeGrid() and paint() to allow user interaction
    makeGrid(height, width);
    paint();
});


function makeGrid(height, width) {

    //loop through the table, appending rows (tr) based on height selection
    for (let a = 1; a <= height; a++) {
        let row = $table.append('<tr></tr>');
    };

        //loop through the rows and add cells (td) in the row's innerHTML
        for (let b = 1; b <= width; b++) {
           let cell = $('tr').append('<td></td>');
        };
    };

    // Select color input
    function paint() {
        //search for td tags and register when they are clicked
        $('td').click(function(event) {

            //define the color variable that will fill td's innerHTML
            let color = $color.val();

            //select the current clicked cell, change background-color
            //in css to the user's selection
            $(event.currentTarget).css('background-color', color)
        })
    }