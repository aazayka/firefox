try {
	var generatedHTML;
	var translated = document.querySelector('.b-translation__card')
	if (translated == null) {
	  // One variant
	  var translationFull = document.querySelector('.b-translation__fulltext');
	  if (translationFull == null) {
		console.log("<h2>That's a shame</h2>");
	  } else {
		console.log(document.querySelector('.b-translation__fulltext').innerHTML);
	  }
	} else {
	  // Many variants
	  var translationGroups = document.querySelectorAll('.b-translation__group');
	  for (var i = 0; i < translationGroups.length; ++i) {
		console.log(i + " = " + translationGroups[i].innerHTML);
	  }  
	}
	self.postMessage(generatedHTML);
} catch(e) {
	self.postMessage('<h2>Нихрена не найдено</h2>');
}