<?php session_start(); ?>
<html>
	<head>
		<Title>Registration</title>
	</head>
	<body>	
		<?php 
			$two = $_REQUEST['two'];
			$_SESSION['b'] = $two;
		?>
		<a href="three.php">Confirm</a>
		<a href="one.php">Cancle</a>
	</body>
	
</html>