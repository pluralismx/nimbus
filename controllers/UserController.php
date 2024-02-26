<?php
require_once 'models/user.php';
require_once 'models/website.php';

class userController{

    public function welcome(){
        include_once 'views/user/login.php';
    }

    public function login(){
        if(isset($_POST)){
            $user =  new User();
            $user->setEmail($_POST['email']);
            $user->setPassword($_POST['password']);
            $login = $user->login();

            if($login){
                $_SESSION['email'] = $user->getEmail();
                $_SESSION['id_user'] = $user->getIdUser();
                $_SESSION['role'] = $user->getRole();
                header('Location: '.base_url.'index.php');
                exit();
            }else{
                echo 'Informacion invalida';
            }
        }else{
            echo 'No se mandaron los datos del formulario';
        }
    }

    public function logout(){
        $_SESSION = array();
        session_destroy();
        header('Location: '.base_url.'index.php');
    }

    public function resetPassword(){
        if(isset($_POST)){
            if(isset($_POST['email'])){
                $_SESSION['email'] = $_POST['email'];
                $reset = new User();
                $reset->setEmail($_SESSION['email']);
                $response = $reset->verificationCode();
                if($response == true){
                    echo 'true';
                }else{
                    echo 'false';
                }
            }else if(isset($_POST['code'])){
                $reset = new User();
                $reset->setVerificationCode($_POST['code']);
                $reset->setEmail($_SESSION['email']);
                $response = $reset->validateVerificationCode();
                if($response == true){
                    $_SESSION['reset'] = true;
                    $_SESSION['id_user'] = $reset->getIdUser();
                    header('Location: '.base_url.'user/passwordResetForm');
                }else{
                    echo 'failed';
                    die();
                    session_destroy();
                    header('Location: '.base_url.'index.php');
                }
            }else if(isset($_POST['update']) && isset($_POST['password'])){
                $update = new User();
                $update->setPassword($_POST['password']);
                $update->setEmail($_SESSION['email']);
                
                $response = $update->updatePassword();
                if($update == true){
                    echo 'Contraseña actualizada';
                    die();
                }else{
                    echo ":(";
                }
            }
        }
    }

    public function passwordResetForm(){
        include_once 'views/user/reset_password.php';
        include_once 'views/layout/footer.php';
    }
}