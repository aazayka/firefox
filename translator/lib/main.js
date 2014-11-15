var self = require("sdk/self");
var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");

var panel = require("sdk/panel").Panel({
  width: 360,
  height: 360
});

 var menuItem = contextMenu.Item({
  label: "Перевести Яндексом",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  image: self.data.url("ys.ico"),
  onMessage: function (selectionText) {
		panel.contentURL = "http://slovari.yandex.ru/" + selectionText + " /en-ru";
		panel.show();
  //    tabs.open("http://slovari.yandex.ru/" + selectionText + " /en-ru");
  }
});
