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
for (let i = 0; i < rows2.length; i++) {
    let CellsData = rows2[i].split(',');    // Split the row into cells

    Identification.push(CellsData);         // Push cellsData into Identification array

}
console.log(Identification)

console.log("=================Transforming Data==========")

// Convert array of arrays(Identification) to array of objects(arrayOfPeople)
const arrayOfPeople = [];
//  header row//
const headers = Identification[0];

for (let i = 1; i < Identification.length; i++) {
    const rows3 = Identification[i];
    const obj3 = {};
    for (let j = 0; j < headers.length; j++) {
        obj3[headers[j].toLowerCase()] = rows3[j];
}
  arrayOfPeople.push(obj3);
}

console.log(arrayOfPeople);

// sorting and manipulating//

//remove the last element from the sorted array//
arrayOfPeople.pop()
console.log(arrayOfPeople);

//insert the following object at index 1://
const newobj = {id: "48", name: "Barry", occupation: "Runner", age: "25"};
arrayOfPeople.splice(1,0,newobj);
console.log(arrayOfPeople);

//Add the object to the end//
const newobj2 = {id: "7", name: "Bilbo", occupation: "None", age: "111" }
arrayOfPeople.push(newobj2);
console.log(arrayOfPeople);