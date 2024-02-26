<?php

require_once 'models/image.php';

class ImageController{

    public function uploadImage(){
        
        $image = new Image();
        $image->setIdUser($_SESSION['id_user']);
        $image->setIdWebsite($_POST['id_website']);
        

        $file = $_FILES['image'];
        $file_name = $file['name'];
        $mimetype = $file['type'];

        if($mimetype == "image/jpg" || $mimetype == "image/jpeg" || $mimetype == "image/png" || $mimetype == "image/svg+xml"){
            move_uploaded_file($file['tmp_name'], 'uploads/images/'.$file_name);
            $image->setImgName($file_name);
            $save = $image->uploadImage();

            return $save;
        }

    }

    public function getImages(){
        $image = new Image();
        $image->setIdWebsite($_POST['id_website']);
        $data = $image->getImages();
        $json = json_encode($data);

        echo $json;
    }

    public function deleteImage(){
        if(isset($_POST['img_id'])){
            $id = $_POST['img_id'];
            $image= new Image();
            $image->setIdImg($id);
            $response = $image->deleteImage();
            echo $response;
        }
    }

}