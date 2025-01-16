sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: net.eisig.apptest",
		defaults: {
			page: "ui5://test-resources/net/eisig/apptest/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "net/eisig/apptest/",
				never: "test-resources/net/eisig/apptest/"
			},
			loader: {
				paths: {
					"net/eisig/apptest": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for net.eisig.apptest"
			},
			"integration/opaTests": {
				title: "Integration tests for net.eisig.apptest"
			}
		}
	};
});
