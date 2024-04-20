let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// This Splits the CSV string into rows spliting whereever it finds('\n')
const rows = csvString.split('\n');
console.log(rows)


//Loops through each row//
rows.forEach(row => {
    const [cell1, cell2, cell3, cell4] = row.split(',');  // Split the row into cells

    console.log(cell1, cell2, cell3, cell4);
})

console.log("=========Part-2 : Expanding Functionality===========")


let csvString2 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

// This Splits the CSV string into rows spliting whereever it finds('\n')
const rows2 = csvString2.split('\n');

let Identification = []

// Iterate through each row starting from the second row (index 1)
for (let i = 1; i < rows2.length; i++) {
    let CellsData = rows2[i].split(',');    // Split the row into cells

    Identification.push(CellsData);         // Push cellsData into Identification array

}
console.log(Identification)

console.log("=================Transforming Data==========")

// Convert array of arrays to array of objects
const arrayOfPeople = [];
for (let i = 1; i < Identification.length; i++) {
    const row = Identification[i];
    const obj = {
      id: row[0],
      name: row[1].toLowerCase(),
      occupation: row[2].toLowerCase(),
      age: row[3]
};
  arrayOfPeople.push(obj);
}
console.log(arrayOfPeople)

console.log("=====Part-4-Sorting and manipulating Data====")
