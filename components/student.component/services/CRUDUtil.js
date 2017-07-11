app.service('CRUDUtil', function($http){
	this.url = 'app/student_processing.php';
	this.studentObj = {"students":[]};
	
	this.getStudents = function(){
		return $http({
			method: 'GET',
			url: this.url
		})
	};
	
	this.updateList = function(list){
		this.studentObj.students = list;
		var dataToString = angular.toJson(this.studentObj);
		return $http({
			method: 'PUT',
			url: this.url,
			data: dataToString
		})
	}
	
});