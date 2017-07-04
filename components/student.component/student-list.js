function StudentListController($scope, $element, $attrs){
	var ctrl = this;
	
	ctrl.$onInit = () => {
		ctrl.editMode = false;
		ctrl.addMode = false;
		ctrl.selected = {};
	};

	// Mock student data
	ctrl.list = [
		{id: 1, name: 'Jason', age: 12, gender: 'male', sport: 'basketball'},
		{id: 2, name: 'Linda', age: 14, gender: 'female', sport: 'soccer'},
		{id: 3, name: 'Tom', age: 13, gender: 'male', sport: 'baseball'},
		{id: 4, name: 'Alicia', age: 11, gender: 'female', sport: 'football'}
	];
	
	ctrl.selectStudent = (student) => {
		ctrl.editMode = true;
		ctrl.selected = student;
	};
	
	ctrl.showAddForm = (student) => {
		ctrl.addMode = true;
	};
	
	ctrl.storeStudent = (student) => {
		student.id = ctrl.list.length+1;
		ctrl.list.push(ctrl.convertToObject(student));
		ctrl.addMode = false;
	};
	
	//update student record
	ctrl.updatelist = (studentup) => {
		ctrl.list.some((ele, index, arry) => {
			if(ele.id == studentup.id){
				arry[index] = studentup;
			}
		});
		ctrl.editMode = false;
	};
	
	//delete student record
	ctrl.delete = (id) => {
		ctrl.list = ctrl.list.filter((ele, index, arry) => {
			return ele.id !== id;
		});
	};
	
	//convert map to object and empty value assignment
	ctrl.convertToObject = (student) => {
		var stdObj = {};
		for(var [key, value] of student){
			stdObj[key] = value;
		}
		if(stdObj.sport !== null || stdObj.sport.trim() == ""){
			stdObj.sport = "N/A";
		}
		return stdObj;
	};
	
}

app.component('studentList', {
	templateUrl: 'components/student.component/student-list.html',
	controller: StudentListController
});