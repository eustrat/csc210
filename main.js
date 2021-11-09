var aRequest = new XMLHttpRequest();
aRequest.open('GET', 'poems.json');

aRequest.onload = function() {
	console.log(aRequest.responseText);
}
aRequest.send();
