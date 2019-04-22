/* This script powers all things related to how the user inputs information. */

// Google Maps Autocomplete

var options = {
    componentRestrictions: {
        country: "UK"
    }
}

function autoComp() {
    var input1 = document.getElementById("location-" + x);
    var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
    var input2 = document.getElementById("destination-1");
    var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
}

autoComp();

// Add an input row

function appendRow() {
    document.getElementById("location-" + x++).readOnly = true;
    var form = document.getElementById("Origin");
    var input = document.createElement("input");
    input.name = "location-" + x;
    input.type = "text";
    input.className = "form-control";
    input.id = "location-" + x;
    input.placeholder = "Enter location " + x + "...";
    var br = document.createElement("br");
    form.appendChild(br);
    form.appendChild(input);
    autoComp();
}

// Clear Results

function clearRoute() {
    document.getElementById("results").style.display = "none";
    document.getElementById("destination-1").value = "";
    while (s <= x) {
        document.getElementById("location-" + s).value = "";
        s++;
      }
    directionsDisplay.setDirections({
        routes: []
    });

}