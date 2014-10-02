var theButton =$('.the-button');
var header = $('.heading');


var buttonClickHandler = function () {
	var currentState = header.attr('data-state');
	
	if (currentState == 'active') {
		header.attr('data-state', 'inactive');
	
	} else {
	
		header.attr('data-state','active');
	}	
};

theButton.on('click', buttonClickHandler);
