<?php session_Start(); ?>
<html>
	<head>
		<Title>Welcome Admin</title>
	</head>
	<body>	
		<?php 
			if(isset($_SESSION['email'])){
				echo $_SESSION['email'];
			}
			else{
				header("location:login.php?msg=Please login First");
			}
		?>
		Welcome Admin
		<a href="logout.php">Logout</a>
	</body>
	
</html>