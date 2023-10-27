function convertMarlaToSquareFeet(){
    var marla = parseFloat(document.getElementById("marla").value);
    var squareFeet = marla * 225;
    document.getElementById("result").innerHTML = marla + "Marla =" + squareFeet +" Square Feet.";
}