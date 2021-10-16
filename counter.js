/*
Function to show a div at a time in a single application

*/
function one() {
    $('#two').hide();
    $('#three').show();

}

function two() {

    var counterType = $("select[name=ct]").val();
    if (counterType == '') {
        $('#msg_one').show();
        $('#msg_one').html('Select one counting option');
    } else if (counterType == 'cbr') {
        $('#one').hide();
        $('#two').show();
        $('#three').hide();
    } else {
        $('#msg_one').hide();
        $('#one').hide();
        $('#two').hide();
        $('#three').show();
    }

}

$('#prev_one').on('click', function() {
    $('#one').show();
    $('#two').hide();
    $('#three').hide();
});


function two() {
    var seatInRow = $("input[name=sir]").val();
    var rowTotal = $("input[name=trc]").val();


    if (seatInRow == '' || rowTotal == '') {
        $('#msg_two').show();
        $('#msg_two').html('All the required fields must be filled');
    } else {
        $('#msg_two').hide();
        $('#one').hide();
        $('#two').hide();
        $('#three').show();
    }
    if ($('#three').show()) {
        $('#one').hide();
        $('#two').hide();
    }
}


$('#prev_two').on('click', function() {
    $('#one').hide();
    $('#three').hide();
    $('#two').show();
});
/*
Function tostart counting
*/
/*
initialize all the counts  as 0
count T-Total count
count F-Female count
count M-Male count
The Arrays are to save individual Totals at the end of all counting
 */
let arrayTotalM = new Array()
let arrayTotalF = new Array()
let arrayTotal = new Array()
let countT = 0;
let countF = 0;
let countM = 0;

let seatRows = seatInRow; //Seats per role
let rowSeats = rowTotal; //Rows totals in the hall

//Change the counter in the HTML to reflect the new count
let seatRows_el = document.getElementById("seatR")
let rowSeats_el = document.getElementById("rSeat")
let count_el = document.getElementById("counter")
let countMale_el = document.getElementById("counterMale")
let countFemale_el = document.getElementById("counterFemale")

// function to extract and submit table data.
function submit() {
    var arrValues = new Array();
    for (var m = 0; m <= rowSeats_el; m++) {
        m += 1
    }
    seatRows = rowSeats_el
}



//


//increment the count variable when button is clicked
//Change the counter in the HTML to reflect the new count
let incrementM = () => {
    countM += 1
    countMale_el.textContent = countM
    countT = countF + countM
    count_el.textContent = countT
}

//Change the counter in the HTML to reflect the new count
let incrementF = () => {
    countF += 1
    countFemale_el.textContent = countF
    countT = countF + countM
    count_el.textContent = countT
}

//Creating a save funtion which logs out count when it is called

let save = () => {
    countStrT = countT
    countStrF = countM
    countStrM = countF

    var xT = document.getElementById("savered").rows[t].cells;
    xT[1].textContent = countStrF;
    var xT = document.getElementById("savered").rows[t].cells;
    xT[2].textContent = countStrM;
    var xT = document.getElementById("savered").rows[t].cells;
    xT[3].textContent = countStrT;

    //Array that saves the Total data from each category 
    arrayTotalM.push(countM)
    arrayTotalF.push(countF)
    arrayTotal.push(countT)

    //Initiallise each category back to zero after saving
    count_el.textContent = 0
    countT = 0
    countMale_el.textContent = 0
    countM = 0
    countFemale_el.textContent = 0
    countF = 0;
}