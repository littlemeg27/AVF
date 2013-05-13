//Brenna Pavlinchak
//AVF 1305
//Project 2
//This is the project where 


	$("#twitter").on("pageinit", function ()
	{

		var getTwitter = function() 
		{
	
			 $.getJSON('http://search.twitter.com/search.json?q=kid%20president&rpp=10&lang=en&include_entities=true&result_type=popular&callback=?',
			  
				  function(data) 
				  {
				  console.log(data);
				  
					  for (i=0, j=data.results.length; i<j; i++) 
					  {
						  $("#twitterList").append(
						  "<li>" + "<img src='" + data.results[i].profile_image_url + "'/>" +  "<h1>" +
						  data.results[i].from_user_name +
						  "<li/>" + "<li/>" + "<p>" +
						  data.results[i].text
						  						);
					   }
				  
				  $("#twitterList").listview("refresh");
				  });
				  
		};
			  location.reload();
		  
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
