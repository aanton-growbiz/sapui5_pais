/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"btp_demo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
