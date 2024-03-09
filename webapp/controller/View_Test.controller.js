sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("btpdemo.controller.View_Test", {
            onInit: function () {

                //Get products
                var _url = this.getApiVSM() + "all";
                var _this = this;
                //var oUser = sap.ui.getCore().getModel("infoUsuario").getData();
                
                $.ajax({
                    type: 'GET',
                    url: _url,
                    contentType: "application/json",
                    //data: JSON.stringify(oData),
                    async: false,
                    beforeSend: function () {
                        sap.ui.core.BusyIndicator.show(0)
                    },
                    success: function (response) {
                        console.log(response);
                        _this.getView().setModel(new sap.ui.model.json.JSONModel(response),"countries")
                        _this.getView().getModel("countries").refresh(true)
                    },
                    error: function (error) {
                        console.error('Error al consultar Paises:', error);
                    },
                    complete: function () {
                        sap.ui.core.BusyIndicator.hide()
                    }
                });
            },
            getApiVSM: function(){
                return "https://restcountries.com/v3.1/";
			    //return "./backend/";
		    }
        });
    });
