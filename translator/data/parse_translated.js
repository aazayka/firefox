
try {
	var translated = document.querySelector('.b-translation__card')
	if (translated != null) {
	  // Many variants
	  var translationGroups = document.querySelectorAll('.b-translation__group');
	  for (var i = 0; i < translationGroups.length; ++i) {
		generatedHTML = translationGroups[i].innerHTML;
	  }
	}
	
	// One variant
	translated = document.querySelector('.b-translation__fulltext');
	if (translated != null) {
		generatedHTML = translated.innerHTML;
	}
	
	translated = document.querySelector('.b-translation_type_example');
	if (translated != null) {
		generatedHTML = translated.innerHTML;
	}
		
	if (generatedHTML == "") {
		console.log("Still empty");
		generatedHTML = "<h2>Нихрена не найдено</h2>"
	} 
} catch(e) {
	generatedHTML = '<h2>Нихрена не найдено</h2>';
}
self.postMessage(generatedHTML);