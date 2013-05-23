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
     
     $("#geo").on("pageinit", function ()
     {
                
                var getLocationSuccess = function(spot) 
                {
                    alert("im inside of geo function");
                    
					$("#geoList").append(
                    	  'Latitude: '          + spot.coords.latitude          + '\n' +
                          'Longitude: '         + spot.coords.longitude         + '\n' +
                          'Altitude: '          + spot.coords.altitude          + '\n' +
                          'Accuracy: '          + spot.coords.accuracy          + '\n' +
                          'Altitude Accuracy: ' + spot.coords.altitudeAccuracy  + '\n' +
                          'Heading: '           + spot.coords.heading           + '\n' +
                          'Speed: '             + spot.coords.speed             + '\n' 
                         				);
                };
            
                function getLocationError(error) 
                {
                    alert('code: '    + error.code    + '\n' +
                          'message: ' + error.message + '\n');
                }
            
            navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
            
            

     });
     
/********************************* Media ***************************************/         
     
     $("#media").on("pageinit", function ()
     {
                
            
     });
     
/********************************* Compass ***************************************/         
     
     $("#compass").on("pageinit", function ()
     {

     });

/********************************* Accelerometer ***************************************/    
     
     $("#accelerometer").on("pageinit", function ()
     {
                
            
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






