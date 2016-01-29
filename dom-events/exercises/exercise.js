// add the corresponding listeneres in order to
// 1 - if a personality is selected it must be displayed on the right
//     of the personality list
// 2 - the browser must only redirect to the twitter handle if it is clicked
//      on the personality selected (not on the list)

/*(function(){
	'use strict';

	// Default UI components
	var $personalities = document.querySelectorAll('.Personalities-personality'),
		$personalityContainer = document.querySelector('#personalitySelected');

	// Event handler for click
	var clickHandler = function(event) {
		var $currTarget = event.currentTarget,
			$target = event.target;

		// If clicked on the link but the container hasn't been
		// selected yet, prevent default action
		if($target.hasAttribute('href') && !$currTarget.hasAttribute('data-selected')) {
			event.preventDefault();
		}

		// Remove selected status in all elements before
		// assigning selected status in the clicked element
		removeSelectedStatus();
		$currTarget.setAttribute('data-selected', '');

		// Display data
		showData($currTarget);
	};

	// Render the selected data
	var showData = function ($elem) {
		var name = $elem.querySelector('li:first-child').innerHTML;
		$personalityContainer.innerHTML = '<h1>Selected personality</h1>' + name;
	};

	// Remove selected attribute in all elements
	var removeSelectedStatus = function() {
		for (var i = 0; i < $personalities.length; i++) {
			$personalities[i].removeAttribute('data-selected');
		};
	};

	document.addEventListener('DOMContentLoaded', function(event){
		// Assign event listeners to each element
		for (var i = 0; i < $personalities.length; i++) {
			$personalities[i].addEventListener('click', clickHandler);
		}
	});
})();*/

(function(){
	'use strict';

	var $personalities = document.querySelector('#personalities'),
		$personalityContainer = document.querySelector('#personalitySelected');

	var clickHandler = function(event) {
		var $currentTarget = event.currentTarget,
			$target = event.target,
			$elem = ($target.nodeName === 'UL')
						? $target
						: ($target.nodeName === 'LI')
							? $target.parentElement
							: ($target.nodeName === 'A')
								? $target.parentElement.parentElement
								: $target;

		if($target.nodeName === 'A') {
			event.preventDefault();
		}

		$personalityContainer.innerHTML = '<h1>Selected personality</h1>' + $elem.innerHTML;
	};

	$personalities.addEventListener('click', clickHandler);
})();
