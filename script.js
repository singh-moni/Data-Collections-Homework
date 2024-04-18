let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// This Splits the CSV string into rows spliting whereever it finds('\n')
const rows = csvStr.split('\n');
console.log(rows)


 //Loops through each row//
rows.forEach(row => {
    const [cell1, cell2, cell3, cell4] = row.split(',');  // Split the row into cells
  
    console.log(cell1, cell2, cell3, cell4);
});



