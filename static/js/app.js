// // For loop example 
// let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// function listLoop(userList) {
//     for (var i = 0; i < userList.length; i++) {
//       console.log(userList[i]);
//     }
//  }

//  listLoop(friends)

//  var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// for (var i = 0; i < vegetables.length; i++) {
//     console.log("I love " + vegetables[i]);
// }

// // Loop through a list of number 
// for (var i = 0; i < 5; i++){console.log("I am " + i);}

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


// Create a table to hold the Data
function buildTable(data){
  // Code to clear table 
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {

    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
   );
 }); 
}
