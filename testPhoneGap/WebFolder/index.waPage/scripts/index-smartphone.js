
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
					  // Get the current position from the mobile using the geolocation API
			navigator.geolocation.getCurrentPosition(Success, Error);

					function Success(position) {

					    // Create a new position datasource entity                          
					    sources.position.addNewElement();

					    // Set the entity longitude and latitude
					    sources.position.longitude = position.coords.longitude;
					    sources.position.latitude = position.coords.latitude;

					    // Set the creation Date as the current date		    
					    sources.position.creationDate = new Date();

					    // Save the entity in the remote Wakanda server			    
					    sources.position.save({
								        onSuccess: function(e) {
								            alert("saved");
								        },
								        onError: function(err) {
								            alert(err.message);
								        }
			    });
}

function Error(err) {

    alert(err.message);

}


	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
