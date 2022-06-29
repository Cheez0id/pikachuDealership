var formElement = $('form');
var formBtn = $('#formBtn');

// console.log(formElement);
// console.log(formBtn);

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
    getInfoFromLocalStorageAndDisplayInfoToScreen();
}

function setLocalStorage(receivePikachuObject) {
    console.log("This is in another function", receivePikachuObject);
    localStorage.setItem("pikachuObject", JSON.stringify(receivePikachuObject));
}

function getInfoFromLocalStorageAndDisplayInfoToScreen() {
    var extractedData = JSON.parse(localStorage.getItem('pikachuObject'));
    console.log(extractedData);
    var newCard = $("<div>");
    var newCard2 = $("<div>");
    newCard.addClass("text-start col-4");
    newCard2.addClass('text-end col-4');
    newCard.text(extractedData.pikachuType);
    newCard2.text(extractedData.pikachuDetails)
    $("#pikachuDisplay").append(newCard);
    $("#pikachuDisplay").append(newCard2);
}

getInfoFromLocalStorageAndDisplayInfoToScreen();


// When using a form, you need to target the PARENT form itself, NOT the form button. 
formElement.on('submit', submitPikachuInfo);