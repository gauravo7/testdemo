<html>
	<head>
		<Title>Registration</title>
	</head>
	<body>	
		<?php 
			$one = $_REQUEST['one'];
			$two = $_REQUEST['two'];
			$url = "three.php?one=".$one."&two=".$two;
		?>
		<a href="<?php echo $url; ?>">Confirm</a>
		<a href="one.php">Cancle</a>
	</body>
	
</html>