<?php 
	$filename = 'data/student_list.js';
	if($_SERVER['REQUEST_METHOD'] === 'GET'){
		$file = fopen($filename, "r");
		if($file !== false){
			$filesize = filesize($filename);
			$filetext = fread($file, $filesize);
			fclose($file);
			echo ($filetext);
		}
	}
	
	if($_SERVER['REQUEST_METHOD'] === 'PUT'){
		$data = file_get_contents("php://input");
		$file = fopen($filename, "w");
		file_put_contents($filename, $data);
		fclose($file);
		echo ($data);
	}
?>

