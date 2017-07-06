		function makeResults() {
			$("<section class='container results'><h1>A True Story:</h1>" ).appendTo($('#results'));
			
			// JS Native:
			// var results = document.createElement('section');
			// results.innerHTML = '<h1>' + 'A true story:' + '</h1>';
			// results.className = 'container results';
			// main.appendChild(results);
		}

		function startAfresh() {
			$('#results').html('');
			//Empty variables to take new input
			name = '';
			adjCheckboxes = '';
			adjectives = [];
			noun2 = '';
			verb = '';
			sentiment = '';
			noun1 = '';
			document.querySelector('.form').reset(); //I couldn't find a jQuery method for this, but this is bonus functionality, so can I pretty please have this one regular DOM API call? :)
			$('#clear_button').hide();
		}

		$("form").on("submit", function(event) {
				var name = $('#name').val();
				var adjCheckboxes = $('input[name="adjective-2"]:checked');
				var adjectives = [];
				var noun2 = $('#noun-2').val();
				var verb = $('#verb-1').val();
				var sentiment = $('input[name="sentiment"]:checked').val();
				var noun1 = $('#noun-1').val();

				//If results div already has content within it, remove it
				if ($('#results').html().length > 0) {
					$('#results').html('');
				}
			    // Stop the form from submitting
			    event.preventDefault();
		    	// Run the 'makeResults' function seen above
		    	makeResults();
		    	$('#clear_button').click(startAfresh);
					// For each value entered into a form input, add the input to the corresponding sentence, then append the text into the results section:

					// "Once upon a time there was a Developer named NAME."
					
					$('#results').append('<p>Once upon a time there was a Developer named ' + name + '.</p>');
					// "NAME came to General Asssembly to VERB1 the great mountain of programming knowledge."
					$('#results').append('<p>' + name + ' came to General Asssembly to ' + verb + ' the great mountain of programming knowledge.</p>');
					// "MISSION", NAME shouted."
					var mission = $('#mission').val();
					$('#results').append('<p>"' + mission + '," '+ name + ' shouted.</p>');
					// "Though SENTIMENT, NAME was able to overcome all obstacles with the power of their NOUN."
					
					$('#results').append('<p> Though ' + sentiment + ', ' + name + ' was able to overcome all obstacles with the power of their ' + noun1 + '.');
					// "In the end, their success can be contributed entirely to their " + ADJECTIVE2[list each one checked, comma-separated] + NOUN2."
					
					adjCheckboxes.each(function() {
						adjectives.push(' ' + this.value);
					});
					$('#results').append('<p>In the end, their success can be attributed entirely to their ' + adjectives + ' ' + noun2 + '.</p>');
					$('#clear_button').css('display', 'block');
				
		});