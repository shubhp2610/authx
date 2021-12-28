<?php
include('../php_function/main.php');
$client_id=random(100);
$fname='Shubh';
$lname='Patel';
$email="admin@shubh.online";
$password="04AD298C5EBE1E6C80EFB3E6ACFA5979D842ACB4D143E920DF925AB267AE99BE";
$sql = "INSERT INTO `authx_users` (`id`,`first_name`,`last_name`,`email`,`password`) VALUES('$client_id','$fname','$lname','$email','$password') ";
$result = query($sql);
confirm($result);
?>