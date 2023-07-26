sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('com.sodogan.custompage.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf com.sodogan.custompage.ext.main.Main
             */
              onInit: function () {
                // let _btnSearch = this.byId("com.sodogan.custompage::OrdersMain--FilterBar-content-btnSearch");
                // let _btnSearchHandler=  (oEvent)=>{
                //       debugger;
                // };
                // _btnSearch.attachPress(_btnSearchHandler,this);
                debugger;
              },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf com.sodogan.custompage.ext.main.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf com.sodogan.custompage.ext.main.Main
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf com.sodogan.custompage.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
        });
    }
);
