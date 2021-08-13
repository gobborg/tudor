console.log('cup');
var twitterText = require('twitter-text');

global.countChars = function countChars(){

    var thingOne = document.getElementById("tweet").value;
    var content = twitterText.parseTweet(thingOne);
    var maxLength = 280;
    //var strLength = document.getElementById("tweet").value.length;   
    var strLength = content.weightedLength;

    if(strLength > maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
    }else{
        document.getElementById("charNum").innerHTML = strLength+' out of '+maxLength+' characters';
    }
}
