<?php session_start(); ?>
<html>
	<head>
		<Title>Registration</title>
	</head>
	<body>	
		<?php 
			if(isset($_SESSION['a']) || isset($_SESSION['b'])){
				$one = $_SESSION['a'];
				$two = $_SESSION['b'];
				$three = $one+$two;
				
				echo $three;
			}
			else{
				header("location:one.php");
			}
		?>
	</body>
	
</html>