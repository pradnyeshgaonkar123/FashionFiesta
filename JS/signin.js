// $(document).ready(validateForm(){
//     $('#submit_button').click(function(){

//     var username=$('#usernameid').val();
//     console.log(usermail);
//     var subs = username.substring(username.indexOf('@')+1);
//     if(username == ''){
//         $('#error1').html("this field is requied");
//         $('#usernameid').css('border','3px solid red');
//         return false;
//     }
//     else if (!username.includes('@') || subs == ''){
//         $('#error1').html("Invalid email");
//         $('#usernameid').css('border','3px solid red');
//         return false;
//     }
//     else{
//         $('#usernameid').css('border','3px solid green');
//         return true;
//     };
// };
    


function validate(){
    let v1 = validate1();
    let v2 = validate2();
    console.log(v1);
    return (v1 && v2);
} 



let usernameNode = document.getElementById("usernameid");
let spanNode1 = document.getElementById("error1");
function validate1(){
    spanNode1.innerHTML = "";
    let usermail = usernameNode.value;
    console.log(usermail);
    let subs = usermail.substring(usermail.indexOf('@')+1);
    if(usermail == ''){
        spanNode1.innerHTML = "this field is requied";
        usernameNode.style.border = "3px solid red";
        return false;
    }
    else if (!usermail.includes('@') || subs == ''){
        spanNode1.innerHTML = "Invalid Emailid";
        usernameNode.style.border = "3px solid red";
        return false;
    }
    else{
        usernameNode.style.border = "3px solid green";
        return true;
    }
}


let passNode = document.getElementById("passwordid");
let spanNode2 = document.getElementById("error2");
function validate2(){
    spanNode2.innerHTML = "";
    let password = passNode.value;
    let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    if (password == ''){
        spanNode2.innerHTML = "this field is required";
        passNode.style.border = "3px solid red";
        return false;
    }
    else if(password.length<4 || password.length>8){
        spanNode2.innerHTML = "password should be in between 4 to 8 characters long";
        return false;
    }
    else if (regExp.test(password)== false){
        spanNode2.innerHTML = "password should be alphanumeric with special symbol";
        password.style.border = "3px solid red";
        return false;
    }
    else{
        passNode.style.border = "3px solid green";
        return true;
    }
} 