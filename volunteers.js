var $ = function (id) {
    return document.getElementById(id);
};

var volunteerArray = [];

// Function to display volunteers
var displayVolunteers = function () {
    var output = "";
    for (var i = 0; i < volunteerArray.length; i++) {
        output += (i + 1) + ". " + volunteerArray[i] + "\n";
    }
    $("volunteerList").value = output; // Populate the textarea
};

// Function to add a volunteer
var addVolunteer = function () {
    var firstName = $("first_name").value.trim();
    var lastName = $("last_name").value.trim();

    if (firstName === "" || lastName === "") {
        alert("Please enter both first and last names.");
        return;
    }

    var fullName = firstName + " " + lastName;
    volunteerArray.push(fullName);
    displayVolunteers();

    // Clear input fields
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

// Function to delete a volunteer
var deleteVolunteer = function () {
    var fullName = $("delete_name").value.trim();

    if (fullName === "") {
        alert("Please enter the full name to delete.");
        return;
    }

    var index = volunteerArray.indexOf(fullName);
    if (index !== -1) {
        volunteerArray.splice(index, 1); // Remove the volunteer
        alert(fullName + " has been removed.");
    } else {
        alert("Name not found in the list.");
    }

    displayVolunteers();

    // Clear input field
    $("delete_name").value = "";
    $("delete_name").focus();
};

// Function to clear the list
var clearList = function () {
    volunteerArray = [];
    displayVolunteers();
    $("first_name").focus();
};

// Function to sort the list
var sortList = function () {
    volunteerArray.sort();
    displayVolunteers();
};

// Event bindings
window.onload = function () {
    $("add_button").onclick = addVolunteer;
    $("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;
    $("sort_button").onclick = sortList;
    $("first_name").focus();
};



