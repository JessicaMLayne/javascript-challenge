// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// See how many rows in data
console.log(tableData.length);

// Use forEach method to filter in all data.js
tableData.forEach(one_data => {
    var row = tbody.append('tr');
    var column_names=Object.keys(one_data)
    for (var i=0; i<column_names.length; i++){
        row.append('td').text(one_data[column_names[i]])
    };
});

// Getting a reference to the button on the page 
// with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page 
// with the id property set to 'datetime'
var inputField = d3.select("#datetime");

// This function is triggered when the button is clicked
function handleClick() {
    tbody.html('');
    filtered_data=tableData.filter(one_data=>one_data.datetime==inputField.property('value'));
    filtered_data.forEach(one_data => {
        var row = tbody.append('tr');
        var column_names=Object.keys(one_data)
        for (var i=0; i<column_names.length; i++){
            row.append('td').text(one_data[column_names[i]])
        };
    });
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);


