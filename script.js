let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// This Splits the CSV string into rows spliting whereever it finds('\n')
const rows = csvString.split('\n');
console.log(rows)


 //Loops through each row//
rows.forEach(row => {
    const [cell1, cell2, cell3, cell4] = row.split(',');  // Split the row into cells
  
    console.log(cell1, cell2, cell3, cell4);
});




// Extract the header row and split it into an array of column names
// Split the CSV string into rows
let Splitcsvrows = csvString.split("\n");

let Data = []

// Extract the header row and split it into an array of column names
let headers = Splitcsvrows[0].split(',');



console.log(headers); // Output: ["ID", "Name", "Occupation", "Age"]
// Iterate through each row starting from the second row (index 1)
for (let i = 1; i < Splitcsvrows.length; i++) {
    // Split the row into cells
    let CellsData = Splitcsvrows[i].split(',');

    // Push each row's cells into the data array
    Data.push(CellsData);
    console.log(headers);
    console.log(CellsData)

}