// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
//loop through 'tableData' and console.log each UFO siting object
function tablebuild(tableData){
tableData.forEach(function(ufoSighting) {
     var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});
};
tablebuild(tableData);

  // 'Filter Table' button
var button = d3.select("#filter-btn");

button.on("click", function(event) {
    var tbody = d3.selectAll('tbody');
    tbody.selectAll("*").remove();
    var filteredData = tableData;
    var inputId = document.getElementsByClassName("form-control");
  
  // iterate through all the input fields
    for (var i = 0; i < inputId.length; i++) {
        var idName = inputId[i].id;
        var field = d3.select("#" + idName).property("value");
    
    // treat empty or space-only fields as a search for ALL for that field
        if (field !== "") {
            var filteredData = filteredData.filter(ufoSighting =>
            ufoSighting[idName] ===field);
        };
    
    };
    console.log(filteredData);
    tablebuild(filteredData);

});
