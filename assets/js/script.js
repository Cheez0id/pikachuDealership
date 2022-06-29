var formElement = $('form');
var formBtn = $('#formBtn');

console.log(formElement);
console.log(formBtn);



// Make a separate function outside to keep the code clean
function submitPikachuInfo(event) {
    event.preventDefault();
    var inputPikachuType = $('#inputPikachuType').val();
    var inputPikachuDetails = $('#inputPikachuDetails').val();

    console.log(inputPikachuDetails);
    console.log(inputPikachuType);
}








// When using a form, you need to target the PARENT form itself, NOT the form button. 
formElement.on('submit', submitPikachuInfo);