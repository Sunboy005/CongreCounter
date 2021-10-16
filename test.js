let save = () => {
    t += 1
    countStrT = countT
    countStrF = countF
    countStrM = countM

    var table = document.getElementById("example2").getElementsByTagName("tbody")[0];
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).textContent = t
    row.insertCell(1).textContent = countStrM;
    row.insertCell(2).textContent = countStrF;
    row.insertCell(3).textContent = countStrT;
    /*
    var row = ""
    row += '<tr> <td>' + t + '</td><td>' + countStrM + '</td><td>' + countStrF + '</td><td>' + countStrT + '</td > </tr>';
    var html = document.getElementById("results").innerHTML + row;
    document.getElementById("results").innerHTML = html;
    $('#msg_one').show();
    $('#msg_one').html(` < i class = "fa fa-check-o text-success" > < /i>count has been added to the table`);
    */
    // Array that saves the Total data from each category

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

let ge