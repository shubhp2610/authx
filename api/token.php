<?php
if(isset($_GET['token'])){
    include('../php_function/main.php');
    $t=time();
    $sql='SELECT * FROM authx_sessions WHERE token=\''.$_GET['token'].'\' AND exp > '.$t.';';
    $result = query($sql);
    confirm($result);
    $row = fetch_array($result);
    
        
    if(isset($row['id'])){
        $out=array("result"=>1);
        }
    else{
        $out=array("result"=>0);
    }
    $out= json_encode($out);
        header('Content-type:application/json;charset=utf-8');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
        echo $out;
}