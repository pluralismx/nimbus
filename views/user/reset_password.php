<?php
if(isset($_SESSION['reset']))
{
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="<?=base_url?>styles.css">
    <script src="<?=base_url?>js/reset_password.js" defer></script>
    <title>Bienvenido</title>
</head>
<body>
    <div class="grid-template">
        <div class="login-main-container">

            <!-- LOGIN FORM -->
            <form action="<?=base_url?>user/resetPassword" method="post">
                <div class="login-container active">
                    <h4>Cree una nueva contraseña</h4>
                    <input id="unconfirmed_password" placeholder="Nueva contraseña">
                    <br/> 
                    <input name="password" id="confirmed_password" placeholder="Escribala nuevamente">
                    <br/>
                    <span style="color: var(--warn); font-size: 12px;" id="span-match">las contraseñas deben coincidir</span>
                    <br/>
                    <button id="btn-update-password" class="btn-primary" type="submit" name="update" value="1" disabled>Reestablecer</button>          
                </div>
            </form>
        </div>
<?php
}else{
    echo 'Variable de sesion no inicializada';
}
?>