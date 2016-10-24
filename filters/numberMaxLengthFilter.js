app.filter('numberMaxLength', function () {
	return function (number, maxLength) {
		number = +number;
		if(isNaN(number))
			return number;

		maxLength = (isNaN(maxLength)) ? 2 : maxLength;
			
		return +number.toFixed(maxLength);
	};
});