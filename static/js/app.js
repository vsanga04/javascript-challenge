// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

data.forEach(obj => console.log(obj));


data.forEach(ufodata => {
    console.log(ufodata);
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});