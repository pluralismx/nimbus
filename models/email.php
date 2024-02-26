<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/../mailer/Exception.php';
require __DIR__ . '/../mailer/PHPMailer.php';
require __DIR__ . '/../mailer/SMTP.php';


    class Email{

        private $recipient;
        private $content;
        private $mailer;
        private $password;

        public function setRecipient($recipient){
            $this->recipient = $recipient;
        }

        public function setContent($content){
            $this->content = $content;
        }
        
        public function setSubject($subject){
            $this->subject = $subject;
        }

        public function setMailer($mailer){
            $this->mailer = $mailer;
        }

        public function setPassword($password){
            $this->password = $password;
        }

        // Getters

        public function getRecipient(){
            return $this->recipientent;
        }

        public function getContent(){
            return $this->content;
        }

        public function getMailer(){
            return $this->mailer;
        }

        public function getPassword() {
            return $this->password;
        }

        // Public methods

        public function sendEmails(){

            //Create an instance; passing `true` enables exceptions
            $mail = new PHPMailer(true);
            $mailer = $this->getMailer();
            $password = $this->getPassword();

            try {
                //Server settings
                //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                    //Enable verbose debug output
                $mail->isSMTP();                                            //Send using SMTP
                $mail->Host       = 'smtp.gmail.com';                       //Set the SMTP server to send through
                $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
                $mail->Username   = $mailer;                                //SMTP username
                $mail->Password   = $password;                              //SMTP password
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
                $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

                //Recipients
                //$mail->setFrom($mailer, 'Tu negocio de confianza');
                $mail->addAddress($this->recipient);     //Add a recipient

                //Content
                $mail->isHTML(true);                                  //Set email format to HTML
                $mail->Subject = $this->subject;
                $mail->Body    = $this->content;
                $mail->send();

                echo 'success';
            } catch (Exception $e) {
                return 'failed';
            }
        }

    }
?>