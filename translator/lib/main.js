var self = require("sdk/self");
var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");
tabs.open("https://yahoo.com/");

var data = require("sdk/self").data;
let selection = require("sdk/selection");

var panel = require("sdk/panel").Panel({
  width: 500,
  height: 400,
  contentScript: "self.port.on('panelContent', function(data){document.body.innerHTML = data;});"
});

var translatedText; 

function ShowPanel(message) {
        panel.port.emit('panelContent', '<h2 style="font-size:12pt;">' + translatedText + '</h2><span style="font-size: 10pt;' + message + '</span>');
        panel.show();
}


function Translate() {
translatedText = selection.text;
console.log("http://slovari.yandex.ru/"+translatedText+"/en-ru/");
if (translatedText) {
	var pageWorkers = require("sdk/page-worker");
	   pageWorkers.Page({
		  contentURL: "http://slovari.yandex.ru/"+translatedText+"/en-ru/",
		  contentScriptFile: self.data.url("parse_translated.js"),
		  contentScriptWhen: "ready",
		  onMessage: ShowPanel
		  });
		
		//tabs.open("http://slovari.yandex.ru/"+translatedText+"/en/#lingvo/");
	 }
}


var cm = require("sdk/context-menu");
cm.Item({
  label: "Перевести Яндексом",
  context: cm.SelectionContext(),
  image: "http://slovari.yandex.ru/favicon.ico",
  contentScript: 'self.on("click", self.postMessage);',
  onMessage: Translate
});
