function calculate () {
    entered = document.getElementById("input_number").value;
    entered = entered / 100;
    dollars = Math.floor(entered);
    cents = Math.round((entered - dollars) * 100);
    dollars = dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    document.getElementById("dollars").innerHTML = "The result is: <br><br>";

    if (dollars == 1) {
        document.getElementById("dollars").innerHTML += "$" + dollars + " dollar ";
    } else {
        document.getElementById("dollars").innerHTML += "$" + dollars + " dollars ";
    }    
    
    if (cents == 1) {
        document.getElementById("cents").innerHTML = "and ¢" + cents + " cent";
    } else {
        document.getElementById("cents").innerHTML = "and ¢" + cents + " cents";
    }    
}

const input = document.getElementById("input_number");
input.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9]/g, "");
});