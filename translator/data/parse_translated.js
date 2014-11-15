
try {
	var translated = document.querySelector('.b-translation__card')
	if (translated == null) {
	  // One variant
	  var translationFull = document.querySelector('.b-translation__fulltext');
	  if (translationFull == null) {
		generatedHTML = "<h2>That's a shame</h2>";
	  } else {
		generatedHTML = document.querySelector('.b-translation__fulltext').innerHTML;
	  }
	} else {
	  // Many variants
	  var translationGroups = document.querySelectorAll('.b-translation__group');
	  for (var i = 0; i < translationGroups.length; ++i) {
		generatedHTML = translationGroups[i].innerHTML;
	  }  
	}
} catch(e) {
	generatedHTML = '<h2>Нихрена не найдено</h2>';
}
self.postMessage(generatedHTML);