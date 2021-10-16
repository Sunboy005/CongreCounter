//initialize the count  as 0
let t = 0
let arraySection = new Array();
let arrayTotalM = new Array()
let arrayTotalF = new Array()
let arrayTotal = new Array()
let countT = 0;
let countF = 0;
let countM = 0;
let seatRows = 0; //Seats per role
let rowSeats = 0; //Rows in the hall
storage = localStorage;
let message1 = "Hello";

//Change the counter in the HTML to reflect the new count
let seatRows_el = document.getElementById("seatR")
let rowSeats_el = document.getElementById("rSeat")
let count_el = document.getElementById("counter")
let countMale_el = document.getElementById("counterMale")
let countFemale_el = document.getElementById("counterFemale");

let inputEl = document.getElementById("churchName")
let addressEl = document.getElementById("churchAdd")
let headerName_el = document.getElementById("headerName");
let headerAdd_el = document.getElementById("headerAdd");


//increment the count variable when button is clicked
next_two.addEventListener("click", function() {
        let headerName = (inputEl.value);
        headerName_el.innerHTML = `<h3>${headerName}</h3>`
        let headerAdd = (addressEl.value)
        headerAdd_el.innerHTML = `<h5>${headerAdd}</h5>`
    })
    //Change the counter in the HTML to reflect the new count
let incrementM = () => {
    countM += 1
    countMale_el.textContent = countM
    countT = countM + countF
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
    t += 1
    countStrT = countT
    countStrF = countF
    countStrM = countM
        /*
    var table = document.getElementById("example2").getElementsByTagName("tbody")[0];
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).textContent = t
    row.insertCell(1).textContent = countStrM;
    row.insertCell(2).textContent = countStrF;
    row.insertCell(3).textContent = countStrT;
    */
    var row = ""
    row += '<tr> <td>' + t + '</td><td>' + countStrM + '</td><td>' + countStrF + '</td><td>' + countStrT + '</td > </tr>';
    var html = document.getElementById("results").innerHTML + row;
    document.getElementById("results").innerHTML = html;
    $('#msg_one').html(` < i class = "fa fa-check-o text-success" > < /i>count has been added to the table`);
    $('#msg_one').show();
    //Array that saves the Total data from each category 

    arrayTotalM.push(countM);
    arrayTotalF.push(countF);
    arrayTotal.push(countT);
    arraySection = [countM, countF, countT];
    storage.setItem(t, arraySection);
    lenAll = Storage.length;
    //Initiallise each category back to zero after saving
    count_el.textContent = 0;
    countT = 0;
    countMale_el.textContent = 0;
    countM = 0;
    countFemale_el.textContent = 0;
    countF = 0;
}

let getTable = () => {

    for (var i = 1; i <= lenAll; i++) {
        allResults = localStorage.getItem(i);
        return allResults;
    }
    console.log(allesults);
}


function see() {

    $('#one').hide();
    $('#two').hide();
    $('#three').show();
}
/*
Function to show a div at a time in a single application

*/
function one() {
    $('#one').show();
    $('#two').hide();
    $('#three').hide();
}

$('#prev_one').on('click', function() {
    $('#one').show();
    $('#two').hide();
    $('#three').hide();
});

function two() {
    $('#one').hide();
    $('#two').show();
    $('#three').hide();
}

$('#prev_two').on('click', function() {
    $('#one').hide();
    $('#two').show();
    $('#three').hide();
});

function three() {
    $('#one').hide();
    $('#two').hide();
    $('#three').show();
}

$('#prev_three').on('click', function() {
    $('#one').hide();
    $('#two').hide();
    $('#three').show();
});