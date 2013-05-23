//Brenna Pavlinchak
//AVF 1305
//Project 2
//This is the project for iOS


/********************************* Twitter API ***************************************/    
    
    $("#twitter").on("pageinit", function ()
    {
        var i;
        var j;

             $.getJSON('http://search.twitter.com/search.json?q="kid%20president"&callback=?',
              
                  function(data) 
                  {
                  console.log(data);
                  
                      for (i=0, j=data.results.length; i<j; i++) 
                      {
                      var image = data.results[i].profile_image_url;
                      var userName = data.results[i].from_user_name;
                      var text = data.results[i].text;
                      
                          $("#twitterList").append(
                          "<li>" + "<img alt='Twitter Picture' src='" + image + "'/>" + "<h1>" +
                          userName + "</h1>" + "<p>" + text + "</p>"
                                                     );
                      }
                      $("#twitterList").listview("refresh");
                  
                  });
     });
     
     
/********************************* OMDB API ***************************************/        
    
    $("#OMDB").on("pageinit", function ()
    {
        var i;
        var j;

             $.getJSON('http://www.omdbapi.com/?s=vampire&y=&callback=?',
              
                  function(data) 
                  {
                  console.log(data);
                  
                      for (i=0, j=data.Search.length; i<j; i++) 
                      {
                          var type = data.Search[i].Type;
                          var title = data.Search[i].Title;
                          var year = data.Search[i].Year;
                                            
                          $("#OMDBList").append(
                          "<li class='movie'>" + "<h1 class='title'>" + title + "</h1>" +
                          "<p class='year'>" + year + "</p>" + "<p>" + type + "</p>"
                                                  );
                      }
                      $("#OMDBList").listview("refresh");
                  
                  });
     });
     
/********************************* Geolocation ***************************************/         
     
     $("#geo").on("pageshow", function ()
     {
         $("#geoButton").on("click", function ()
         {
          alert("im inside of the button");
                
                var getLocationSuccess = function(spot) 
                {
                    alert("im inside of geo function");
                    
                    var latitude = spot.coords.latitude;
                    var longitude = spot.coords.longitude;
                    var altitude = spot.coords.altitude;
                    var accuracy = spot.coords.accuracy;
                    var altitudeAccuracy = spot.coords.altitudeAccuracy;
                    var heading = spot.coords.heading;
                    var speed = spot.coords.speed;
                    
                    
                    $("#geoList").append(
                         "<li>" + "<ul>" + 'Latitude:' + latitude + "</ul>" + "<ul>" + 'Longitude:' + longitude + "</ul>" +
                          		  "<ul>" + 'Altitude:' + altitude + "</ul>" + "<ul>" + 'Accuracy:' + accuracy + "</ul>" +
						  		  "<ul>" + 'Altitude Accuracy:' + altitudeAccuracy + "</ul>" +
						  		  "<ul>" + 'Heading:' + heading + "</ul>" + "<ul>" + 'Speed:' + speed + "</ul>"
                                         );
										 $("#geoList").listview("refresh");
                };
            
                var getLocationError = function(error) 
                {
                    $("#geoList").append(
                            'code: '    + error.code    + '\n' +
                            'message: ' + error.message + '\n'
                                        );
                };
                
                navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
                
                
         });
          

     });
     
/********************************* Media ***************************************/         
     
     $("#media").on("pageinit", function ()
     {
			function playAudio(url) 
			{
			    var my_media = new Media(url,
			       
			        function() 
			        {
			            console.log("playAudio():Audio Success");
			        },
			        
			        function(err) 
			        {
			            console.log("playAudio():Audio Error: " + err);
					});
			
			    my_media.play();
			}
        
            
     });
     
/********************************* Compass ***************************************/         
     
     $("#compass").on("pageinit", function ()
     {
			function getCompassSuccess(heading) 
			{
				alert('Heading: ' + heading);
			};
	
			function getCompassError() 
			{
			    alert('getCompassError!');
			};
	
			navigator.compass.getCurrentHeading(getCompassSuccess, getCompassError);
     });

/********************************* Device Info ***************************************/    
     
     $("#deviceInfo").on("pageinit", function ()
     {
     	alert("im inside the page");
     	
      document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        var element = document.getElementById('deviceProperties');

        element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
				                            'Device Cordova: '  + device.cordova + '<br />' + 
				                            'Device Platform: ' + device.platform + '<br />' + 
				                            'Device UUID: '     + device.uuid     + '<br />' + 
				                            'Device Model: '    + device.model     + '<br />' + 
				                            'Device Version: '  + device.version  + '<br />';
    }
      
      
      
      
        /* function getDeviceInfo() 
         {
         	 alert("Im inside info function");
			 var device = $('#deviceProperties');

			$("#infoList").html(
						   		 'Device Name: '     + device.name     + '<br />' + 
                            	 'Device PhoneGap: ' + device.phonegap + '<br />' + 
								 'Device Platform: ' + device.platform + '<br />' + 
								 'Device UUID: '     + device.uuid     + '<br />' + 
								 'Device Version: '  + device.version  + '<br />'
								 );
		 }*/
            
     });
     






/* Commenting this out in case I need it
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/*var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};*/




