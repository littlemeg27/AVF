//Brenna Pavlinchak
//AVF 1305
//Project 4
//This is the project for iOS


/********************************* Twitter API ***************************************/    
    
    $("#twitter").on("pageshow", function ()
    {
        var i;
        var j;
			
			
			var getLocationSuccess = function(spot) 
                {
                    var latitude = spot.coords.latitude;
                    var longitude = spot.coords.longitude;
					var url = 'http://twitter.com/search?geocode=' +latitude+ ',' +longitude + '&callback=?';
					alert(url);
			
		             $.getJSON('http://twitter.com/search?geocode=' +latitude+ ',' +longitude + '&callback=?'
             
                  function(data) 
                  {
                  alert("data");
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
     
     
/********************************* OMDB API ***************************************/        
    
    $("#OMDB").on("pageshow", function ()
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
                var getLocationSuccess = function(spot) 
                {
                    
                    var latitude = spot.coords.latitude;
                    var longitude = spot.coords.longitude;
                    var altitude = spot.coords.altitude;
                    var accuracy = spot.coords.accuracy;
                    var altitudeAccuracy = spot.coords.altitudeAccuracy;
                    var heading = spot.coords.heading;
                    var speed = spot.coords.speed;
                    
                    
					$("#geoList").append(
	                          'Latitude: '          + latitude          + '<br>' +
	                          'Longitude: '         + longitude         + '<br>' +
	                          'Altitude: '          + altitude          + '<br>' +
	                          'Accuracy: '          + accuracy          + '<br>' +
	                          'Altitude Accuracy: ' + altitudeAccuracy  + '<br>' +
	                          'Heading: '           + heading           + '<br>' +
	                          'Speed: '             + speed             + '<br>' 
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
     
     $("#connection").on("pageshow", function ()
     {
     	
     	
	     	$("#connectionButton").on("click", function()
	     	{
			 	var unknown = "Connection Unknown";
			 	var ethernet = "Connection Ethernet";
			 	var wifi = "Connection Wifi";
			 	var g2 = "Connection 2G";
			 	var g3 = "Connection 3G";
			 	var g4 = "Connection 4G";
			 	var none = "Connection None";
					     	
			     switch(navigator.network.connection.type)
			     {
				     case Connection.UNKNOWN:
					     $("#connectionID").attr('value', unknown);
					     break;
				     
				     case Connection.ETHERNET:
					     $("#connectionID").attr('value', ethernet);
					     break;
				     
				     case Connection.WIFI:
					     $("#connectionID").attr('value', wifi);
					     break;
				     
				     case Connection.CELL_2G:
					     $("#connectionID").attr('value', g2);
					     break;
				     
				     case Connection.CELL_3G:
					     $("#connectionID").attr('value', g3);
					     break;
				     
				     case Connection.CELL_4G:
					     $("#connectionID").attr('value', g4);
					     break;
					 case Connection.NONE:
					     $("#connectionID").attr('value', none);
					     break;			     
			     }
	         });
      });
     
/********************************* Compass ***************************************/         
     
     $("#compass").on("pageinit", function ()
     {
	     	 var compassID = 0;
	     	 
	         $("#compassButton").on("click", function ()
	         {
		        var choice = null;
		   
				   if(compassID === 0)
				   {
					       choice = 
					       {
					           frequency: 100
					       };
		        
						   compassID = navigator.compass.watchHeading(function(heading) 
						   {
				               var rotation = Math.round(heading.magnetic) + 'deg';
				               
						       $("#compassList").attr("value", heading.magneticHeading);
						   }, 
			   
						   function(error) 
						   {
						      console.log("error");
						   }, 
						   
						   choice 									);
			   
						   $(this).html("Stop Watching");
				   }
				   
				   else
				   {
						   navigator.compass.clearWatch(compassID);
						   compassID = 0;
						   $(this).html("Watch Heading");
				   }
	
	            
	       });
     });

/********************************* Device Info ***************************************/    
     
     $("#deviceInfo").on("pageshow", function ()
     {
              
         $("#modelID").attr('value', device.name);
         $("#platformID").attr('value', device.platform);
         $("#versionID").attr('value', device.version);
         $("#uuidID").attr('value', device.uuid);
         $("#phonegapID").attr('value', device.phonegap);

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


