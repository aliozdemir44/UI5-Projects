
sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/core/routing/History",
     "sap/m/MessageToast",
     "sap/m/MessageBox"

 ], function (Controller,History,MessageBox,MessageToast) {
    
      
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.View1", {
      onInit : function () {
        websql.create();
              let array=['Ali','2018.04.11','9999.99.99','24','ozdemir44ali@gmail.com','5418678881','kadın','TC','23603327602','00000001','000001','Özdemir','25087','2','image'];
              let value="Name,ennda,begda,years,mail,phone,cinsiyet,uyrugu,tcno,orgeh,plans,LastName,password,statu,resim";
              let getData="?,?,?,?,?,?,?,?,?,?,?,?,?,?,?";
             websql.insert("person",value,getData,array);

      },Login :function(){
       let input = this.getView().byId("inputText");
       let userId = input.getValue();
       let input1 = this.getView().byId("Pass");
       let pass = input1.getValue();

   if (userId === "" || pass  === "" ) {
        
      let bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
         MessageBox.show("Tüm Alanlar Doldurun");
       }else {
  
        websql.select("person");
       var  personList = oModel.getProperty("/person");
       var oke = 1; 
       // for (var i = 2; i >= 0; i--) {
       //      if ( userId == personList[i].Name ) {
       //          Login = true; 
       //      }
       // }
     var param = "sas";
      if (oke  == 1) {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
         oModel.setProperty( "/userid", userId)

         oRouter.navTo("page2",{param:param});

      }else{
       MessageBox.show("Şifre yanlış");
      }
    

  }
 }

    });
 });    