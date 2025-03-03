/*global QUnit*/

sap.ui.define([
	"jbqunittest/controller/View1.controller"
], function (Controller) {
	"use strict";

    QUnit.module("View1 Controller", {
        beforeEach: function () {
            this.oController = new Controller();
        },
        afterEach: function () {
            this.oController.destroy();
        }
    });

    QUnit.test("Should sort array in ascending order", function (assert) {
        let aInput = [3, 1, 2];
        let aExpected = [1, 2, 3];
        let aResult = this.oController.arraySort(aInput, false);
        assert.deepEqual(aResult, aExpected, "The array is sorted correctly in ascending order");
    });

    QUnit.test("Should sort array in descending order", function (assert) {
        let aInput = [3, 1, 2];
        let aExpected = [3, 2, 1];
        let aResult = this.oController.arraySort(aInput, true);
        assert.deepEqual(aResult, aExpected, "The array is sorted correctly in descending order");
    });

    QUnit.test("Should count occurrences of an element", function (assert) {
        let aInput = [1, 2, 3, 2, 2, 4];
        let iResult = this.oController.countElement(aInput, 2);
        assert.strictEqual(iResult, 3, "The count of element 2 is correct");
    });

    QUnit.test("Should return zero for non-existing element", function (assert) {
        let aInput = [1, 2, 3, 4, 5];
        let iResult = this.oController.countElement(aInput, 10);
        assert.strictEqual(iResult, 0, "The count of element 10 is correctly returned as 0");
    });

});
