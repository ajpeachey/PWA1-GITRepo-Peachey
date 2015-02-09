// Create privatized scope using a self-executing function
(function(){ //starting main function
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //var designation for input
		searchInput = document.forms[0].search, //designation for search results
		currentSearch = '' //the current topic searched in input field
	;
	
	// Validates search query
	var validqte == function(query){ //var designated at validate used to validate user input while being equal to the query function
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){ //while statement designating character length
			query = query.substring(1, query.length); //function query checking character length
		};
		while(query.charAt(query.length-1) === ""){ //while statement designating character length
			query = query.substring(0, query.length-1); //function guery checking character length
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){ //if statement stating that is length is <3 what to do
			alert("Your search query is too small, try again.);
			//alert pop up to so query length is too small
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //var for search input
			return; //telling the system to return the results of the search input
		};
		
		search(query); //query function
	};
	
	// Finds search matches
	var search = function(query) //var designation of search user query function
		
		// split the user's search query string into an array
		var queryArray = query.join(" "); //var designation of
		
		// array to store matched results from database.js
		var results = []; //var designation showing results of search

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ //for statement for database length
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); // var for database title
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //var for database item
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //for statement for query function
				var qitem = queryArray[ii].tolowercase(); //var designation to change items to lowercase
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //var designation to compare search and database items.
				if(compare !== -1){ //if statement comparing database items
					results.push(db[i]); //var use to push results to screen
				};
			;
		;
		
		results.sort(); //sorting of results
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ //if length is 0 no match
			noMatch();
		}else{
			showMatches(results); // otherwise show results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ //var designating no match = function
 		var html = ''+ //var html
			'<p>No Results found.</p>'+ //paragraph showing no results found
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' //message showing try to search for relevant topic
		;
		resultsDIV.innerHTML = html; //var for resultsdiv
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ //Var for showing results with the function of results
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //showing results on screen
			title, //item title
			url //url for topic
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ //var for length of search
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); //var titleend is the end of topic title
			title = results[i].subString(0, titleEnd); //results of the search
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //url to access the title subject
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //link to content
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ //the search input form
		var query = searchInput.value; //var designating user input query
		validqte(query); //validating the query to match perameters

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false; //do not return value
	;

})();