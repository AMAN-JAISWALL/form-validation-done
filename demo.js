console.log("aman jaiswal");

var regEx = /^[A-Za-z\s]+$/;


function validation() {
    let flag = true;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let number = document.getElementById("number").value;



    // console.log(a);


    var err1 = document.getElementById("err1");
    var err2 = document.getElementById("err2");
    var err3 = document.getElementById("err3");
    var err4 = document.getElementById("err4");


    // username validation start

    if (name == "") {
        err1.innerHTML = "*Please Enter username";
        err1.style.color = "red";
        flag = false;
    } else if (name.length < 3) {
        err1.innerHTML = "* character should be greater then 3 ";
        err1.style.color = "red";
        flag = false;
    } else if (name.length >= 32) {
        err1.innerHTML = "*Character should be less then 32";
        err1.style.color = "red";
        flag = false;
    } else if (!name.match(regEx)) {
        err1.innerHTML = "*Only Characters(alphabets) are allowed";
        err1.style.color = "red";
        flag = false;
    } else {
        err1.innerHTML = ""
    }

    //username validation end


    // email validation start

    if (email == "") {
        err2.innerHTML = "*please enter email id";
        err2.style.color = "red";
        flag = false;
    } else if (email.indexOf("@") <= 0) {
        err2.innerHTML = "invalide @ position";
        err2.style.color = "red";
        flag = false;
    } else if ((email.charAt(email.length - 4) != "." && email.charAt(email.length - 3) != ".")) {  //aj27757@gmail.com // charAt run on 0 index
        err2.innerHTML = "*invalide . position";
        err2.style.color = "red";
        flag = false;
    } else {
        err2.innerHTML = "";
    }
    //email validation done


    //password validation start

    if (password == "") {
        err3.innerHTML = "*please enter password";
        err3.style.color = "red";
        flag = false;
    } else if (password.length <= 8) {
        err3.innerHTML = "*password should be at least 8 characters";
        err3.style.color = "red";
        flag = false;
    } else if (password.length >= 20) {
        err3.innerHTML = "*password should be less then 20 characters / latters";
        err3.style.color = "red";
        flag = false;
    } else {
        err3.innerHTML = "";
    }

    //pass done 


    //mo. number validation start

    if (number == "") {
        err4.innerHTML = "*please enter mobile number";
        err4.style.color = "red";
        flag = false;
    } else if (isNaN(number)) {
        err4.innerHTML = "*enter only numeric value";
        err4.style.color = "red";
        flag = false;
    } else if (number.length > 10) {
        err4.innerHTML = "*enter 10 digit number ";
        err4.style.color = "red";
        flag = false;
    } else if (number.length < 10) {
        err4.innerHTML = "*enter 10 digit number";
        err4.style.color = "red";
        flag = false;
    } else if ((number.charAt(0) != 9) && (number.charAt(0) != 8) && (number.charAt(0) != 7) && (number.charAt(0) != 6)) {
        err4.innerHTML = "*mobile number should be start with 9, 8, 7 , 6";
        err4.style.color = "red";
        flag = false;
    } else {
        err4.innerHTML = "";
    }

    //number validation end













    return flag;
    // e.preventDefault()
    // e.preventDefault()

}