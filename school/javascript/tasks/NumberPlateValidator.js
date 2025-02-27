input = document.getElementById("input");
msg = document.getElementById("msg");

input.addEventListener("keyup", function(){
    let text = input.value;
    let message = "";
    if(VerifyLetters(text) && VerifyDigits(text)){
        if(text.length == 7)
            message= "Good Job buddy, want a treat?"
        else if (text.length > 7)
            message= "Format good, but too long"
        else if (text.length < 7)
            message= "Format good, but too short"
    } else{
        input.value = input.value.substring(0, input.value.length-1);

        if(text.length>1)
            message = "WRONG FORMAT BUDDY"
    }
    msg.innerHTML = message
})

function VerifyLetters(text){
    for(var i = 0; i <2 && i<text.length; i++)
        if(!("A"<=text[i] && text[i]<="Z" || "a"<=text[i] && text[i]<="z"))
            return false;
    return true;
    
}

function VerifyDigits(text){
    for(var i = 2; i <7 && i<text.length; i++)
        if(!("0"<=text[i] && text[i]<="9"))
            return false;
    return true;
    
}
