var $$ = $$ || {};

$$.randomInt =  function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

$$.clamp = function(value, min, max) {
	return Math.min(max, Math.max(min, value));
};
