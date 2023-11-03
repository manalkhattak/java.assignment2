function convertMarlaToSquareFeet(){
    var marla = parseFloat(document.getElementById("marla").value);
    var squareFeet = marla * 272.25;
    document.getElementById("result").innerHTML = marla + "Marla =" + squareFeet +" Square Feet.";
}