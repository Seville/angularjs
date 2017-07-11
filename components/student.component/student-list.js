function StudentListController($http, $window, CRUDUtil){
	var ctrl = this;
	
	ctrl.$onInit = () => {
		ctrl.editMode = false;
		ctrl.addMode = false;
		ctrl.selected = {};
		
		CRUDUtil.getStudents().then(function(resObj){
			ctrl.list = resObj.data.students;
		});
	};
	
	ctrl.selectStudent = (student) => {
		ctrl.editMode = true;
		ctrl.selected = student;
	};
	
	ctrl.showAddForm = (student) => {
		ctrl.addMode = true;
	};
	
	//add student record
	ctrl.storeStudent = (student) => {
		student.id = ctrl.list.length+1;
		ctrl.list.push(ctrl.convertToObject(student))
		CRUDUtil.updateList(ctrl.list).then(function(resObj){
			alert('Student record stored successfully!');
		});
		
		ctrl.addMode = false;
	};
	
	//update student record
	ctrl.updatelist = (studentup) => {
		ctrl.list.some((ele, index, arry) => {
			if(ele.id == studentup.id){
				arry[index] = studentup;
				CRUDUtil.updateList(arry).then(function(resObj){
					alert('Edit successful!');
				});
			}
		});
		ctrl.editMode = false;
	};
	
	//delete student record
	ctrl.delete = (id) => {
		var confirmDel = confirm("Are you sure you want to delete this record?");
		if(confirmDel){
			ctrl.list = ctrl.list.filter((ele, index, arry) => {
				return ele.id !== id;
			});
			CRUDUtil.updateList(ctrl.list).then(function(resObj){
				alert('Delete successful!');
			});
		}
	};
	
	//convert map to object and empty value assignment
	ctrl.convertToObject = (student) => {
		var stdObj = {};
		for(var [key, value] of student){
			stdObj[key] = value;
		}
		if(stdObj.sport == null || stdObj.sport.trim() == ""){
			stdObj.sport = "N/A";
		}
		return stdObj;
	};
	
}

app.component('studentList', {
	templateUrl: 'components/student.component/student-list.html',
	controller: ['$http', '$window', 'CRUDUtil', StudentListController]
});