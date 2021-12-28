<?php
include('../php_function/main.php');
if(!isset($_GET['connect'])){
    redirect("404.html");
}
else{
    $SQL = 'SELECT * FROM authx_clients where `hash`=\''.$_GET['connect'].'\'';
$result = query($SQL);
confirm($result);
$row = fetch_array($result);
}
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AuthX</title>
    <link rel="stylesheet" href="./assets/login.css"/>
</head>
<body>
    <div class="login-block">
        <div class="login-inner">
            <span class="authx-head">AuthX</span>
            <a class="close-btn" href="https://<?php echo $row['domain']; ?>"><img src="https://dev-authx.pantheonsite.io/app/assets/cross.svg" width="15px"/></a><br>
            <img class="brand-logo" src="<?php if(isset($row['logo_link'])){echo $row['logo_link'];}else{echo "https://dev-authx.pantheonsite.io/app/img/tmp-logo.webp";}?>"/><br>
  
            
            <form action="../api/authorize.php" method="POST">
                <input type="email" name="authx_email" class="form-input" placeholder="Username"/><br><br><br>
                <input type="password" name="authx_password" class="form-input" placeholder="Password"/><br><br><br>
                <input type="hidden" name="client_id" value="<?php echo $row['client_id'] ?>"/>
                <input type="submit" class="form-input-btn login" name="login_button" value="Login" />
                <input type="submit" class="form-input-btn signup" name="signup_button" value="Sign Up" />
            </form>
            <footer>
               <p class="footertext"> AuthX &copy; 2020 Terms & Privacy Policy</p>
            </footer>

        </div>

    </div>
    <div class="login-img" id="hero">

    </div>
<script>
var h=document.getElementById('hero');
h.style.backgroundImage = "url('<?php if(isset($row['hero_link'])){echo $row['hero_link'];}else{echo "./assets/default_bg.svg";} ?>')";
function close(){
    console.log("hello");
    window.location.href="<?php echo $row['domain']; ?>";
}

 </script>
</body>
</html>

