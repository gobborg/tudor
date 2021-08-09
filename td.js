function countChars(obj){
    var maxLength = 20;
    var strLength = obj.value.length;
    
    if(strLength > maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
    }else{
        document.getElementById("charNum").innerHTML = strLength+' out of '+maxLength+' characters';
    }
}
