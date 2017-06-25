function AddStudentController($scope, $element, $attrs){
	var ctrl = this;
	
	ctrl.$onInit = () => {
		ctrl.newStudentObj = {};
	};
	
	ctrl.addStudent = () => {
		ctrl.onUpdate({student: ctrl.ensureOrder(ctrl.newStudentObj)});
		ctrl.newStudentObj = {};
	};
	
	//To ensure object insertion order use map object;
	ctrl.ensureOrder = (studentObj) => {
		debugger;
		var mapObj = new Map();
		mapObj.set('name', studentObj.name);
		mapObj.set('age', studentObj.age);
		mapObj.set('gender', studentObj.gender);
		mapObj.set('sport', studentObj.sport);
		return mapObj;
	};
}

app.component('addStudent', {
	templateUrl: 'components/student.component/add-student.html',
	controller: AddStudentController,
	bindings: {
		onUpdate: '&'
	}
});