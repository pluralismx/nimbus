<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="js/login.js" defer></script>
    <title>Bienvenido</title>
</head>
<body>
    <div class="grid-template">
        <div class="login-main-container">
            <!-- LOGIN FORM -->
            <form action="user/login" method="post">
                <div class="login-container active">
                    <!-- <img src="assets/images/nimbus crm.png" alt="Nimbus CRM" width="200px" style="margin-bottom: 2rem;"> -->
                    <h1>Nimbus CRM</h1>
                    <input name="email" placeholder="Email" type="email">
                    <br/> 
                    <input name="password" placeholder="Password" type="password">
                    <br/>
                    <button class="btn-primary" type="submit">Iniciar sesión</button>
                    <a id="anchor-forgot-password" style="color: var(--warn); text-decoration: underline; font-size: 12px; margin-top: 10px;">¿olvidó su contraseña?</a>
                </div>
            </form>

            <!-- RESET PASSWORD REQUEST FORM -->

            <div class="reset-password-container hidden">
                <h4>Reestablecer contraseña</h4>
                <input id="email" name="email" placeholder="Email" type="email">
                <br/>
                <button class="btn-primary" id="verification-code-request">Enviar código de verificación</button>
                <a id="anchor-back" style="color: var(--warn); text-decoration: underline; font-size: 12px; margin-top: 10px;">&larr;Cancelar</a>
            </div>


            <!-- VERIFICATION CODE SUBMISSION  -->
            <form action="user/resetPassword" method="POST">
                <div class="verification-container hidden">
                    <h4>Ingrese el código de verificación enviado a su correo</h4>
                    <input id="code" name="code" placeholder="Ingrese el codigo" type="text">
                    <br/>
                    <button class="btn-primary" type="submit">Continuar</button>
                    <a id="anchor-back" style="color: var(--warn); text-decoration: underline; font-size: 12px; margin-top: 10px;">&larr;Cancelar</a>
                </div>
            </form>
        </div>