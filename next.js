//initialize the count  as 0
var arrHead = new Array();
arrHead = ['', 'Male', 'Female', 'Total']; // table headers.
var t = 0
let arrayTotalM = new Array()
let arrayTotalF = new Array()
let arrayTotal = new Array()
let countT = 0;
let countF = 0;
let countM = 0;
let seatRows = 0; //Seats per role
let rowSeats = 0; //Rows in the hall

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
    // first create a TABLE structure by adding few headers.
function createTable() {
    var resTable = document.createElement('table');
    resTable.setAttribute('id', 'resTable'); // table id.

    var tr = resTable.insertRow(-1);

    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th'); // the header object.
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(resTable); // add table to a container.
}
//Creating a save funtion which logs out count when it is called

let save = () => {
    t += 1
    countStrT = countT
    countStrF = countM
    countStrM = countF
    var resTab = document.getElementById('resTable');

    var rowCnt = resTab.rows.length; // get the number of rows.
    var tr = resTab.insertRow(rowCnt); // table row.
    tr = resTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) {
        var td = document.createElement('td'); // TABLE DEFINITION.
        td = tr.insertCell(c);

        if (c == 0) { // if its the first column of the table.
            // add a button control.
            var button = document.createElement('input');

            // set the attributes.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // add button's "onclick" event.
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        } else if (c == 1) {
            // the 2nd, 3rd and 4th column, will have textbox.
            var xT = document.getElementById("resTable").rows[t].cells;
            xT[1].textContent = countStrM;
        } else if (c == 2) {
            // the 2nd, 3rd and 4th column, will have textbox.
            var xT = document.getElementById("resTable").rows[t].cells;
            xT[2].textContent = countStrF;
        } else if (c == 3) {
            // the 2nd, 3rd and 4th column, will have textbox.
            var xT = document.getElementById("resTable").rows[t].cells;
            xT[3].textContent = countStrT;
        }
    }
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

function see() {
    $('#app').hide();
    $('#result').show();
}