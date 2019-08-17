sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(Controller,History) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.View2",{
        onInit:function(){
            this.getView().setModel(oModel);
			var  user = oModel.getProperty("/userid");
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("page2").attachPatternMatched(this._onRouteMatched, this);    
        },
        person : function(){
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oRouter.navTo("person");
        }
    });    
});
