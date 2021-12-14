/*
Becuase I imported jQuery, the $ symbol is now the same as the whole 
line "document.getElementById" and "document.querySelector". The val() function returns the user
input as a value that we can use.
*/
    // Select size input
    // Select color input
$(document).ready(function() {
    
    let table = $('#pixelCanvas');
    
    let button = $('#sizePicker').submit(function (event) {
        event.preventDefault();
        let height = $('#inputHeight').value;
        let width = $('#inputWidth').value;
        makeGrid(height, width);
    });

        // When size is submitted by the user, call makeGrid()
    function makeGrid(height, width) {
        
        //make sure that the grid is cleared before each new entry 
        table.preventDefault();

        //loop through and add rows (tr) based on user input 
        
        for (let a = 1; a <= height; a++) {
            let row = tableElement.insertRow(a);
            //loop through rows and add cells based on user input
            for (let b = 1; b <= width; b++) {
                let cell = row.insertCell(b);
                row.appendChild(cell);
            };
    };

    function paint () {
        let color = $('#colorPicker').value;
        cell.target.style.backgroundColor = color; 
        table.addEventListener('click', paint);
    };
};