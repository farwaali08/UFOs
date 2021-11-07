// Import the data from data.js
const tableData= data;

// Reference the HTML table using d3
var tbody= d3.select("tbody");

// Creating the table
// Use code to clear existing data (fresh table)
function buildTable(data){
  tbody.htm("");            //this points JS to the table in the HTML page (use empty string)
  data.forEach((dataRow) => {
      let row= tbody.append("tr"); //when the tdbodyl tag is found, add a table row
      Object.values(dataRow).forEach((val)=>{ //reference 1 object/row from array
      let cell= row.append("td"); // append data into table data
      cell.text(val); //each cell holds value from object
      }  
    );
  });
}