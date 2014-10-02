var salesdetailsleft =$('.sales__detailsleft');
/* var= making a box, salesdetailsleft is what the box is called and '.salesdetailsleft' is what is inside the box */
var salesleft = $('.salesleft');


var buttonClickHandler = function () {
	var currentState = salesdetailsleft.attr('data-state');
	if (currentState == 'active') {
		salesdetailsleft.attr('data-state', 'inactive');
	} else {
		salesdetailsleft.attr('data-state','active');
	}	
};

salesleft.on('click', buttonClickHandler);


var salesdetailsright =$('.sales__detailsright');
/* var= making a box, salesdetailsleft is what the box is called and '.salesdetailsleft' is what is inside the box */
var salesright = $('.salesright');


var buttonClickHandler = function () {
	var currentState = salesdetailsright.attr('data-state');
	if (currentState == 'active') {
		salesdetailsright.attr('data-state', 'inactive');
	} else {
		salesdetailsright.attr('data-state','active');
	}	
};

salesright.on('click', buttonClickHandler);



