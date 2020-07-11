<html>
	<head>
		<Title>Registration</title>
	</head>
	<body>	
		<?php
			if(isset($_REQUEST['msg'])){
				echo "<h2>$_REQUEST[msg]</h2>";
			}	
		?>
		<form action="check.php" method="post">
			Email<input type="email" name="email"/><br/>
			Password<input type="password" name="pass"/><br/>
			<input type="submit" name="sub"/>
		</form>
	</body>
	
</html>