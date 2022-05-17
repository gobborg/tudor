var twitterText = require('twitter-text');
var $ = require('jquery');

global.countChars = function countChars(){

	var thingOne = document.getElementById("tweet").value;
	var content = twitterText.parseTweet(thingOne);
	var maxLength = 280;
	var strLength = content.weightedLength;

	if(strLength > maxLength){
		document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
    }else{
		document.getElementById("charNum").innerHTML = strLength+' out of '+maxLength+' characters';
    }
}

add = function add() {

	var newTweetNo = parseInt($("#totalTweets").val()) + 1;
	var newTweet = '<textarea id="newTweet_'+ newTweetNo + '" accept-charset="UTF-8" type="hidden">';

	$("#thingTwo").append(newTweet);
	$("#totalTweets").val(newTweetNo);
}

remove = function remove() {

	var lastTweetNo = $("#totalTweets").val();

	if (lastTweetNo > 1) {
		$("#newTweet_" + lastTweetNo).remove();
		$("#totalTweets").val(lastTweetNo - 1);
	}
}

$('.add').on('click', add);
$('.remove').on('click', remove);
