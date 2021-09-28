let fnameNode = document.getElementById("fname");
let spanNode1 = document.getElementById("error1");
function validate1(){
    spanNode1.innerHTML = "";
    let fname = fnameNode.value;
    if (fname == ''){
        spanNode1.innerHTML = "this field is required";
        fnameNode.style.border = "3px solid red";
        return false;
    }
    else if(fname.includes(' ')){
        spanNode1.innerHTML = "space not allowed";
        fnameNode.style.border = "3px solid red";
        return false;
    }
    else{
        fnameNode.style.border = "4px solid green";
        return true;
    }
    
}

let lnameNode = document.getElementById("lname");
let spanNode2 = document.getElementById("error2");
function validate2(){
    spanNode1.innerHTML = "";
    let lname = lnameNode.value;
    if (lname == ''){
        spanNode2.innerHTML = "this field is required";
        lnameNode.style.border = "3px solid red";
        return false;
    }
    else if(lname.includes(' ')){
        spanNode2.innerHTML = "space not allowed";
        lnameNode.style.border = "3px solid red";
        return false;
    }
    else{
        lnameNode.style.border = "4px solid green";
        return true;
    }
    
}

let emailNode = document.getElementById("emailid");
let spanNode3 = document.getElementById("error3");
function validate3(){
    spanNode3.innerHTML = "";
    let emailid = emailNode.value;
    let subs = emailid.substring(emailid.indexOf('@')+1);
    if(emailid == ''){
        spanNode3.innerHTML = "this field is requied";
        emailNode.style.border = "3px solid red";
        return false;
    }
    else if (!emailid.includes('@') || subs == ''){
        spanNode3.innerHTML = "Invalid Emailid";
        emailNode.style.border = "3px solid red";
        return false;
    }
    else{
        emailNode.style.border = "3px solid green";
        return true;
    }
}

let passNode = document.getElementById("passwordid");
let spanNode4 = document.getElementById("error4");
function validate4(){
    spanNode4.innerHTML = "";
    let password = passNode.value;
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    if (password == ''){
        spanNode4.innerHTML = "this field is required";
        passNode.style.border = "3px solid red";
        return false;
    }
    else if(password.length<4 || password.length>8){
        spanNode4.innerHTML = "password should be in between 4 to 8 characters long";
        return false;
    }
    else if (regExp.test(password)== false){
        spanNode4.innerHTML = "password should be alphanumeric with special symbol";
        passNode.style.border = "3px solid red";
        return false;
    }
    else{
        passNode.style.border = "3px solid green";
        return true;
    }
}


let cpassNode = document.getElementById("confirm-passwordid");
let spanNode5 = document.getElementById("error5");
function validate5(){
    spanNode5.innerHTML = "";
    let password = passNode.value;
    let c_password = cpassNode.value;
    if (c_password == ''){
        spanNode5.innerHTML = "this field is required";
        cpassNode.style.border = "3px solid red";
        return false;
    }
    else if(c_password != password){
        spanNode5.innerHTML = "Password should be match";
        return false;
    }
    else{
        cpassNode.style.border = "3px solid green";
        return true;
    }
}

let ageNode = document.getElementById("ageid");
let spanNode6 = document.getElementById("error6");
function validate6(){
    spanNode6.innerHTML = "";
    let ageid = ageNode.value;
    if (ageid == ''){
        spanNode6.innerHTML = "this field is required";
        ageNode.style.border = "3px solid red";
        return false;
    }
    else if(ageid < 0){
        spanNode6.innerHTML = "Age cannot be negative";
        ageNode.style.border = "3px solid red";
        return false;
    }
    else{
        ageNode.style.border = "3px solid green";
        return true;
    }
}

// let addressNode = document.getElementById("addressid");
// let spanNode8 = document.getElementById("error8");
// function validate8(){
//     spanNode8.innerHTML = "";
//     let address = addressNode.value;
//     if (address == ''){
//         spanNode8.innerHTML = "this field is required";
//         addressNode.style.border = "3px solid red";
//     }
// }


function validate(){
    let v1 = validate1();
    let v2 = validate2();
    let v3 = validate3();
    let v4 = validate4();
    let v5 = validate5();
    let v6 = validate6();
    return (v1 && v2 && v3 && v4 && v5 && v6);
}