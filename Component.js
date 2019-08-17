sap.ui.define([
    "sap/ui/core/UIComponent"
 ], function (UIComponent,) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough", {
       metadata : {
          rootView: {
             "viewName": "sap.ui.demo.walkthrough.view.App",
             "type": "XML",
             "async": true   
          },
          routing:{
              config:{
                  viewPath:"sap.ui.demo.walkthrough.view",
                  routerClass:"sap.m.routing.Router",
                  controlId:"rootControl",
                  controlAggregation:"pages",
                  viewType:"XML",
                  async:true
              },
              routes:[
                  {
                      name:"page1",
                      pattern:"", //boş bırakırsak ilk açılacak sayfa bu olur 
                      target:"page1"
                  },
                  {
                       // pattern:"Page2?{param}",
                       pattern:"Page2?{param}",
                      name:"page2",
                      target:"page2"
                  },
                  {
                       // pattern:"Page2?{param}",
                      pattern:"person",
                      name:"person",
                      target:"person"
                  },
                  {
                       
                      pattern:"persondetail",
                      name:"persondetail",
                      target:"persondetail"
                  }
              ],
              targets:{
                  page1:{
                      viewName:"View1",
                     viewLevel:0
                  },
                  page2:{
                      viewName:"View2",
                      viewLevel:1
                  },
                  person:{
                      viewName:"person",
                      viewLevel:2
                  },
                  persondetail:{
                      viewName:"persondetail",
                      viewLevel:3
                  }
              }
          }
       },
       init : function () {
          UIComponent.prototype.init.apply(this, arguments);
         this.getRouter().initialize();
       }
    });
 });