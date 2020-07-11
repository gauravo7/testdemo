<?php session_start();

unset($_SESSION['email']);
header("location:login.php?msg=Logout Sucess");

?>