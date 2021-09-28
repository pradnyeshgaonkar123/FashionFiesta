let nameNode = $("#name");
let spanNode1 = $("#error1");


let emailNode = $("#email");
let spanNode2 = $("#error2");

let formNode  = $("#submitform");

$(document).ready(function(){
    nameNode.blur(()=>validate1());

    emailNode.blur(()=>validate2());
   
    formNode.submit(()=>validateForm());
});

function validate1(){
    spanNode1.html("");
    let name = nameNode.val();
    if(name == ''){
        spanNode1.html("this field is required");
        nameNode.css({border:"3px solid red"});
        return false;
    }
    else if(name.includes(' ')){
        spanNode1.html("space not allowed");
        nameNode.css({border:"3px solid red"});
        return false;
    }
    else{
        nameNode.css({border:"3px solid green"});
        return true;
    }
}


function validate2(){
    spanNode2.html("");
    let emailid = emailNode.val();
    let subs = emailid.substring(emailid.indexOf('@')+1);
    if(emailid == ''){
        spanNode2.html("this field is required");
        emailNode.css({border:"3px solid red"});
        return false;
    }
    else if (!emailid.includes('@') || subs == ''){
        spanNode2.html("Invalid Email");
        emailNode.css({border:"3px solid red"});
        return false;
    }

    else{
        emailNode.css({border:"3px solid green"});
        return true;
    }
}



function validateForm(){
    let v1 = validate1();
    let v2 = validate2();
    return (v1 && v2);
}