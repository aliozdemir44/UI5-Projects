sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    	'sap/ui/model/Filter',
], function(Controller,History,) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.person",{
        onInit:function(){
            this.getView().setModel(oModel);
                    websql.select("person");
       var  personList = oModel.getProperty("/person");
        },pdetail:function(oEvent){

         	this.getView().setModel(oModel);//modeli burada set etmezsek görmüyor
			var oSelectedItem = oEvent.getSource();//oEvent this gibi birşey bulunduğumuzu gösteriyor
			var oContext = oSelectedItem.getBindingContext();//bind ettiğimiz modeli veriyor
			var data=oContext.sPath;//pathimizi alıyoruz /veriler/x
			var json=oModel.getProperty(data);//json pathimizdeki verileri atıyoruz
			var id=json.id;			
			websql.selectid("person",id);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         	oRouter.navTo("persondetail");
        }
    });    
});
