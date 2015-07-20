sap.ui.controller("view_network.network", {
	
	
	handleOpen : function (oEvent) {
	    var oButton = oEvent.getSource();
	   
	    // create action sheet only once
	    if (!this._network) { 
	      this._network = sap.ui.xmlfragment(
	        "view_network.network",
	        this
	       
	      );
	     
	      this.getView().addDependent(this._network);
	    }

	    this._network.openBy(oButton);
	  }

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view_network.network
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view_network.network
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view_network.network
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view_network.network
*/
//	onExit: function() {
//
//	}

});