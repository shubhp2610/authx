<?php
include('../php_function/main.php');
$client_id=random(20);
$name='Shubh Patel';
$domain='shubh.online';	
$callback_url='http://localhost/app/callback.php';	
$logo_link='https://dev-cdn-r2.pantheonsite.io/wp-content/uploads/2021/06/cropped-svgviewer-png-output.png';
$hero_link=	NULL;
$client_secret=random(50);
$hash=hash('sha512', $client_id.$client_secret);
$sql = "INSERT INTO `authx_clients` (`client_id`,`name`,`domain`,`callback_url`,`logo_link`,`hero_link`,`client_secret`,`hash`) VALUES('$client_id','$name','$domain','$callback_url','$logo_link','$hero_link','$client_secret','$hash) ";
$result = query($sql);
confirm($result);
?>