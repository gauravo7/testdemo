<?php
	if(isset($_REQUEST['sub'])){
  require __DIR__ . '/vendor/autoload.php';

  $options = array(
    'cluster' => 'ap2',
    'useTLS' => true
  );
  $pusher = new Pusher\Pusher(
    'c9ef4e62e0f74a3a375e',
    'a2004736b05ee7ecfc63',
    '1019361',
    $options
  );

  $data['message'] = $_REQUEST['x'];
  $pusher->trigger('my-channel', 'my-event', $data);
	}
	else{
		
	}
?>
<form action="index.php">
	Data<input type="text" name="x"/>
	<input type="submit" name="sub"/>
</form>

