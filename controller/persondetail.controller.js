sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function(Controller,History) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.persondetail",{
        onInit:function(){
            this.getView().setModel(oModel);
            var Selperson = oModel.getProperty("/selectPerson");

            var input = this.getView().byId("ad");
       		input.setValue(Selperson[0].Name);

       		input = this.getView().byId("soyad");
       		input.setValue(Selperson[0].LastName);

       		input = this.getView().byId("endda");
       		input.setValue(Selperson[0].ennda);

       		input = this.getView().byId("begda");
       		input.setValue(Selperson[0].begda);

       		input = this.getView().byId("tc");
       		input.setValue(Selperson[0].tcno);

       		input = this.getView().byId("mail");
       		input.setValue(Selperson[0].Mail);

       		input = this.getView().byId("tel");
       		input.setValue(Selperson[0].phone);

       		input = this.getView().byId("yas");
       		input.setValue(Selperson[0].years);

       		input = this.getView().byId("orgeh");
       		input.setValue(Selperson[0].orgeh);

       		input = this.getView().byId("plans");
       		input.setValue(Selperson[0].plans);
			
			input = this.getView().byId("Cinsiyet");
       		// input.setValue(Selperson[0].cinsiyet);

       		


        }
    });    
});
