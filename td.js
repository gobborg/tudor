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

	var newTweetNo = parseInt($("#total_tweet").val()) + 1;
	var newTweet = '<textarea id="newTweet" accept-charset="UTF-8" type="hidden"' + newTweetNo + '>';

	$("#thingTwo").append(newTweet);
	$("#totalTweets").val(newTweetNo);
}

remove = function remove() {

	var lastTweetNo = $("#totalTweets").val();

	if (lastTweetNo > 1) {
		$("#new_" + lastTweetNo).remove();
		$("#totalTweets").val(lastTweetNo - 1);
	}
}

$('.add').on('click', add);
$('.remove').on('click', remove);

/*
//begin c/p'd code//
function add() {
  var new_chq_no = parseInt($('#total_chq').val()) + 1;
  var new_input = "<input type='text' id='new_" + new_chq_no + "'>";

  $('#new_chq').append(new_input);

  $('#total_chq').val(new_chq_no);
}

function remove() {
  var last_chq_no = $('#total_chq').val();

  if (last_chq_no > 1) {
    $('#new_' + last_chq_no).remove();
    $('#total_chq').val(last_chq_no - 1);
  }
}
//end c/p'd code//
*/
