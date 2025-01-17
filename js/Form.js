let input_name = document.getElementById("input_name");
let input_age = document.getElementById("input_age");
let input_email = document.getElementById("input_email"); // Corrected ID
let input_address = document.getElementById("input_address");
let btn_save = document.getElementById("btn_save");
let btn_clear = document.getElementById("btn_clear"); // Clear button

btn_save.addEventListener('click', function () {
    let name = input_name.value;
    let age = input_age.value;
    let email = input_email.value;
    let address = input_address.value;

    console.log(name, age, email, address);
});

// Add event listener for the clear button
btn_clear.addEventListener('click', function () {
    input_name.value = ""; 
    input_age.value = "";  
    input_email.value = ""; 
    input_address.value = ""; 
    console.log("Form cleared");
});
