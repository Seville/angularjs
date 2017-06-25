var INTEGER_PATTERN = /^-?\d+$/;
app.directive('integer', function(){
	return {
		require: 'ngModel',
		link: function(scope, elem, attrs, ctrl){
			//ctrl refers to the ngModel.ngModelController
			ctrl.$validators.integer = (modelValue, viewValue) => {
				if(ctrl.$isEmpty(modelValue)){
					return true;
				}
				if(INTEGER_PATTERN.test(viewValue)){
					return true;
				}
				return false;
			}
		}
	}
});