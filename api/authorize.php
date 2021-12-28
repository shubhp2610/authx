<?php

if(isset($_POST['client_id']) && isset($_POST['authx_email']) && isset($_POST['authx_password'])){
    include('../php_function/main.php');
    $pass=hash('sha256', $_POST['authx_password']);
    $sql='SELECT * FROM authx_users WHERE email=\''.$_POST['authx_email'].'\' AND password=\''.$pass.'\';';
    $result = query($sql);
    confirm($result);
    $row = fetch_array($result);
    if(isset($row['id'])){
        $token=$_POST['client_id'].'_'.random(479);
        $ref=random(200);
        $init=time();
        $exp=$init+3600;
        $ref_exp=$init+18000;

        $ip = getenv('REMOTE_ADDR');

        $out=array("init"=>$init,"expire"=>$exp,"refresh_expire"=>$ref_exp, "token"=>$token, "refresh_token"=>$ref);
        $sql = "INSERT INTO `authx_sessions` (`id`,`token`,`refresh`,`init`,`exp`,`ref_exp`,`ip`) VALUES(NULL,'$token','$ref','$init','$exp','$ref_exp','$ip')";
$result = query($sql);
confirm($result);
        echo '<form id="myForm" action="'.getCallBack($_POST['client_id']).'" method="post">';
        foreach ($out as $a => $b) {
            echo '<input type="hidden" name="'.htmlentities($a).'" value="'.htmlentities($b).'">';
        }
        echo '</form><script type="text/javascript"> document.getElementById(\'myForm\').submit();</script>';
    }
}