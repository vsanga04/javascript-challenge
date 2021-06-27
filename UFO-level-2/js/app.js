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



// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    tbody.html("");


  // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(selections => {
        console.log(selections);
        var row = tbody.append("tr");
        Object.entries(selections).forEach(([key, value])=> {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
  });
});