/* This script powers all things related to how the user inputs information. */

// Google Maps Autocomplete
var rows = 1;
var options = {
    componentRestrictions: {
        country: "UK"
    }
};

function autoComp() {
    var input1 = document.getElementById("location-1");
    var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
    for (let j = 1; j <= rows; j++) {
        var input2 = document.getElementById("destination-" + j);
        var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
    }
}

autoComp();

// Add an input row

function appendRow() {
    document.getElementById("destination-" + rows++).readOnly = false;
    /* var d = document.getElementById('Origin');
     d.innerHTML += "<input type='text' id='location-"+ x +"' placeholder='Enter location "+x+"...'><br >"; */

    var form = document.getElementById("destination");
    var input = document.createElement("input");
    input.name = "destination-" + rows;
    input.type = "text";
    input.class = "form-control";
    input.id = "destination-" + rows;
    input.placeholder = "Enter location " + rows + "...";
    var br = document.createElement("br");
    form.appendChild(input);
    form.appendChild(br);

    autoComp();
}

// Clear Results

function clearRoute() {
    directionsDisplay.setDirections({
        routes: []
    });
    if(rows>1){
        var destNode = document.getElementById("destination");
        for(i = 2; i <= rows; i++) {
            destNode.removeChild(destNode.childNodes[5]);
            destNode.removeChild(destNode.childNodes[5]);
        }
        rows = 1;
    }
    if(document.getElementById("resultlist").childElementCount > 0){
        var destNode = document.getElementById("resultlist");
        for(i = 0; i < destNode.childElementCount; i++){
            destNode.removeChild(destNode.childNodes[1]);
        }
    }

    console.log(document.getElementById("resultlist").childElementCount);
}