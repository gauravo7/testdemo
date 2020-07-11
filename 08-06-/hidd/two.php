<html>
	<head>
		<Title>Registration</title>
	</head>
	<body>	
		<?php 
			$one = $_REQUEST['one'];
		?>
		<form action="confirm.php" method="post">
			Name<input type="text" name="two"/><br/>
			<input type="hidden" name="one" value="<?php  echo $one;?>"/>
			<input type="submit" name="sub"/>
		</form>
	</body>
	
</html>