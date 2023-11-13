"use strict";

$(document).ready(function () {
  $("#searchForm").submit(function (event) {
    event.preventDefault();

    // Get the search input value
    let searchQuery = $("#searchInput").val();
    console.log(searchQuery);

    // Sanitize the input (you can use additional sanitization if needed)
    let sanitizedQuery = encodeURIComponent(searchQuery);

    // Make an AJAX request to superheroes.php
    $.ajax({
      url:
        "http://localhost/info2180-lab4/superheroes.php?query=" +
        sanitizedQuery,
      type: "GET",
      dataType: "json",
      success: function (superhero) {
        // Display the result in the result div
        displayResult(superhero);
      },
      error: function () {
        // Display an error message if the request fails
        displayResult(null);
      },
    });
  });
});

function displayResult(superhero) {
  let resultDiv = $("#result");
  console.log(superhero);

  // Clear previous results
  resultDiv.empty();

  if (superhero) {
    // Display superhero information
    resultDiv.append("<h3>" + superhero.alias + "</h3>");
    resultDiv.append("<h4>" + superhero.name + "</h4>");
    resultDiv.append("<p>" + superhero.biography + "</p>");
  } else {
    // Display "Superhero not found" message
    resultDiv.append("<p>Superhero not found</p>");
  }
}
