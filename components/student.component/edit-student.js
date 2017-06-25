function EditStudentController($scope, $element, $attrs){
	var ctrl = this;
	
	ctrl.$onInit = () => {
		ctrl.editStudentObj = {};
	}
	
	//clone selected student record
	ctrl.$onChanges = (changesObj) => {
		if(changesObj.hasOwnProperty("student")){
			var studentChg = changesObj["student"];
			if(Object.keys(studentChg["currentValue"]).length !== 0 ){
				ctrl.editStudentObj = angular.copy(studentChg["currentValue"]);
			}
		}
	};
	
	ctrl.updateStudent = () => {
		ctrl.onUpdate({studentupd: ctrl.editStudentObj});
	};
	
}

app.component('editStudent', {
	templateUrl: 'components/student.component/edit-student.html',
	controller: EditStudentController,
	bindings: {
		student: '<',
		onUpdate: '&'
	}
});