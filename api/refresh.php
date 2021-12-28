<?php
if(isset($_GET['token']) && isset($_GET['client_id']) && strlen($_GET['client_id'])==20){
    include('../php_function/main.php');
 $sql='SELECT * FROM authx_sessions WHERE token LIKE \''.$_GET['client_id'].'_%\' AND refresh=\''.$_GET['token'].'\'';
    $result = query($sql);
    confirm($result);
    $row = fetch_array($result);
    $init=time();
    $ip = getenv('REMOTE_ADDR');
    if(isset($row['id']) && $row['ref_exp'] > $init && $row['ip'] == $ip){
        $token=$_GET['client_id'].'_'.random(479);
        $ref=$_GET['token'];
        
        $exp=$init+3600;
        $ref_exp=$init+18000;

        

        $out=array("init"=>$init,"expire"=>$exp,"refresh_expire"=>$ref_exp, "token"=>$token, "refresh_token"=>$ref);
        $sql="UPDATE `authx_sessions` SET `token`='$token',`init`='$init',`exp`='$exp',`ref_exp`='$ref_exp' WHERE `refresh` = '$ref'"; 
        $result = query($sql);
        confirm($result);
        $out= json_encode($out);
        
    }
    else{
        $out=array("result"=>0,"error"=>"Invalid Token or unauthorize access!");
    $out= json_encode($out);

    }
}else{
    $out=array("result"=>0,"error"=>"Invalid Request!");
    $out= json_encode($out);

}

        header('Content-type:application/json;charset=utf-8');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
        echo $out;