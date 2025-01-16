sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("net.eisig.apptest.controller.Main", {
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
