sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("jbqunittest.controller.View1", {
        onInit() {
        },
        arraySort: function(arr, bDescending) {
            function fSort(a, b) {
                if (a > b) {
                    return bDescending ? -1 : 1;
                } else if (a < b) {
                    return bDescending ? 1 : -1;
                } else {
                    return 0;
                }
            };
            return arr.sort(fSort);
        },
        countElement: function(arr, searchElement) {
            var i = 0;
            arr.forEach(element => {
                if (element === searchElement) {
                    i++;
                }
            });
            return i;
        }
    });
});