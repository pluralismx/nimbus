<?php
require_once 'models/note.php';

class NoteController{

    public function save(){
        if(isset($_POST)){
            $note = new Note();
            $note->setIdUser($_SESSION['id_user']);
            $note->setIdWebsite($_POST['id_website']);
            $note->setTitle($_POST['note_title']);
            $note->setContent($_POST['note_content']);
            
            $save = $note->save();
                
            if($save){
                return 'Note saved successfully';
            }else{
                echo 'Unable to save the note.';
            }
        }
    }

    public function getNotes(){
        $data = array();
        $note = new Note();
        $note->setIdUser($_SESSION['id_user']);
        $note->setIdWebsite($_POST['id_website']);
        $data = $note->getNotes();

        return $data;
    }

    public function delete(){
        if(isset($_POST)){
            $note = new Note();
            $note->setId($_POST['id_note']);
            $delete = $note->delete();

            if($delete){
                echo 'success';
            }else{
                echo 'failed';
            }
        }
    }

    public function update(){
        if(isset($_POST)){
            $note = new Note();
            $note->setId($_POST['id_note']);
            $note->setTitle($_POST['title']);
            $note->setContent($_POST['content']); 
            $update = $note->update();

            if($update){
                echo 'success';
            }else{
                echo 'failed';
            }
        }
    }
}







