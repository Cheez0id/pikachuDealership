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

    var pikachuObject = {};
    pikachuObject["pikachuType"] = inputPikachuType;

    pikachuObject["pikachuDetails"] = inputPikachuDetails;

    console.log(pikachuObject);
    // Setting localstorage directly in the same function seems ugly
    // Let's make an external function!
    // localStorage.setItem("pikachuObject", JSON.stringify(pikachuObject));
    setLocalStorage(pikachuObject);
}

function setLocalStorage(receivePikachuObject) {
    console.log("This is in another function", receivePikachuObject);
    localStorage.setItem("pikachuObject", JSON.stringify(receivePikachuObject));
}

function getInfoFromLocalStorage() {
    localStorage.getItem('')
}


// When using a form, you need to target the PARENT form itself, NOT the form button. 
formElement.on('submit', submitPikachuInfo);