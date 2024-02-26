<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    require_once 'models/email.php';

    class emailController{

        public function sendCampaign(){
            if(isset($_POST['current_email']) && isset($_POST['content'])){
                
                $mailer = $_POST['email'];
                $password = $_POST['password'];
                $recipient = $_POST['current_email'];
                $subject = $_POST['subject'];
                $content = $_POST['content'];

                $campaing = new Email();
                $campaing->setMailer($mailer);
                $campaing->setPassword($password);
                $campaing->setSubject($subject);
                $campaing->setRecipient($recipient);
                $campaing->setContent($content);
                
                $sent = $campaing->sendEmails();
            }
              
            echo $sent;
        }

    }

?>