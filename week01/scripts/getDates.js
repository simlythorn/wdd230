// Get the current year
let year = new Date().getFullYear();

// Get the element with the id of "year"
let yearSpan = document.getElementById("year");

// Set the text content of the element to the current year
yearSpan.textContent = year;

// Get the date and time the document was last modified
let lastModified = document.lastModified;

// Get the element with the id of "lastModified"
let lastModifiedP = document.getElementById("lastModified");

// Set the text content of the element to the last modified date and time
lastModifiedP.textContent = "Last modified: " + lastModified;