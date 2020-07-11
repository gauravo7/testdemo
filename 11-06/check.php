<?php session_start();
	include "../config.php";
	$email = $_REQUEST['email'];
	$password = $_REQUEST['pass'];
	$q = "select * from students where email='$email' and password='$password'";
	
	$res = mysqli_query($obj,$q);
	if($row = mysqli_fetch_array($res)){
		$_SESSION['email'] = $email; 
		header("location:welcome.php");
	}
	else{
		echo mysqli_error($obj);
		header("location:login.php?msg=Invalid Username Password");
	}
?>