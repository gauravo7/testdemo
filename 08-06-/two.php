<?php  session_start(); ?>
<html>
	<head>
		<Title>Registration</title>
	</head>
	<body>	
		<?php 
			$one = $_REQUEST['one'];
			$_SESSION['a'] = $one;
		?>
		<form action="confirm.php" method="post">
			Name<input type="text" name="two"/><br/>
			<input type="submit" name="sub"/>
		</form>
	</body>
	
</html>