<?php

include("db.php");


function redirect($location){
	return header("Location: {$location}");
}

function random($length) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function getCallBack($cid){
    $sql = "SELECT callback_url FROM authx_clients WHERE client_id = '$cid'";
	echo $sql;
    $result = query($sql);
confirm($result);
$row = fetch_array($result);
return $row['callback_url'];
}