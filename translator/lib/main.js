var self = require("sdk/self");
var contextMenu = require("sdk/context-menu");
//var tabs = require("sdk/tabs");

var data = require("sdk/self").data;
let selection = require("sdk/selection");

var panel = require("sdk/panel").Panel({
  width: 500,
  height: 400,
  contentScript: "self.port.on('panelContent', function(data){document.body.innerHTML = data;});",
});

var translatedText;
var generatedHTML; 

function ShowPanel(message) {
        panel.port.emit('panelContent', '<h2 style="font-size:12pt;">' + translatedText + '</h2><span style="font-size: 10pt;">' + message + '</span>');
        panel.show();
}

function Translate() {
translatedText = selection.text;
if (translatedText) {
	var pageWorkers = require("sdk/page-worker");
	   pageWorkers.Page({
		  contentURL: "http://slovari.yandex.ru/"+translatedText+"/en-ru/",
		  contentScriptFile: data.url("parse_translated.js"),
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
  image: data.url("ys.ico"),
  contentScript: 'self.on("click", self.postMessage);',
  onMessage: Translate
});
