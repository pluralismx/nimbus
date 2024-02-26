<?php
require_once 'models/lead.php';

class leadController{
    public function getLeads(){
        $data = array();
        if(isset($_SESSION['id_user'])){
            $lead = new Lead();
            $lead->setIdUser($_SESSION['id_user']);
            $lead->setIdWebsite($_POST['id_website']);
            $data = $lead->getLeads();
        }
        return $data;
    }

    public function leadNotes(){
        if(isset($_SESSION['id_user'])){
            $lead = new Lead();
            $lead->setIdLead($_POST['id_lead']);
            $data = $lead->leadNotes();
            $lead_notes = json_encode($data);
        }
        echo $lead_notes;
    }

    public function leadNoteSave(){
        $lead = new Lead();
        $lead->setIdUser($_SESSION['id_user']);
        $lead->setIdLead($_POST['id_lead']);
        $lead->setLeadNoteContent($_POST['content']);
        $lead->leadNoteSave();
    }

    public function leadStatusUpdate(){
        $lead =  new Lead();
        $lead->setIdLead($_POST['id_lead']);
        $lead->setLeadStatus($_POST['status']);
        $response = $lead->leadStatusUpdate();
        if($response){
            echo 'success';
        }else{
            echo 'failed';
        }
    }

    public function addleadManually(){
        $lead = new Lead();
        $lead->setIdWebsite($_POST['id_website']);
        $lead->setName($_POST['name']);
        $lead->setPhone($_POST['phone']);
        $lead->setEmail($_POST['email']);
        $lead->setLeadStatus($_POST['status']);
        $response = $lead->addLeadManually();
        if($response == true){
            echo 'success';
        }else{
            echo 'failed';
        }
    }

    public function delete(){
        if(isset($_POST['id_lead']) && $_SESSION['role'] === 'MASTER'){
            $id = $_POST['id_lead'];
            $lead = new Lead();
            $lead->setIdLead($id);
            $response = $lead->delete();
            if($response){
                echo 'success';
            }else {
                echo 'failed';
            }
        }else if($_SESSION['role'] !== 'MASTER'){
            echo 'restricted';
        }

    }

    public function changeName(){
        if(isset($_POST['id_lead']) && isset($_POST['updated_name'])){
            $id = $_POST['id_lead'];
            $name = $_POST['updated_name'];
            $lead = new Lead();
            $lead->setIdLead($id);
            $lead->setName($name);   
            $response=$lead->changeName();
            if($response){
                echo "success";
            }else{
                echo "failed";
            }
        }
    }

    public function changePhone(){
        if(isset($_POST['id_lead'])){
            $id = $_POST['id_lead'];
            $phone = $_POST['updated_phone'];
            $lead = new Lead();
            $lead->setIdLead($id);
            $lead->setPhone($phone);
            $response=$lead->changePhone();
            if($response){
                echo "success";
            }else{
                echo "failed";
            }
        }
    }

    public function changeEmail(){
        if(isset($_POST['id_lead'])){
            $id = $_POST['id_lead'];
            $email = $_POST['updated_email'];
            $lead = new Lead();
            $lead->setIdLead($id);
            $lead->setEmail($email);
            $response=$lead->changeEmail();
            if($response){
                echo "success";
            }else{
                echo "failed";
            }
        }
    }
}