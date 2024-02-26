<?php

class Image{

    private $id_user;
    private $id_website;
    private $id_img;
    private $img_name;

    public function __construct(){
        $this->db = Database::connect();
    }

    // SETTERS

    function setIdUser($id_user){
        $this->id_user = $id_user;
    }

    function setIdWebsite($id_website){
        $this->id_website = $id_website;
    }

    function setIdImg($id_img){
        $this->id_img = $id_img;
    }

    function setImgName($img_name){
        $this->img_name = $img_name;
    }

    // GETTERS

    function getIdUser(){
        return $this->db->real_escape_string($this->id_user);
    }

    function getIdWebsite(){
        return $this->db->real_escape_string($this->id_website);
    }

    function getIdImg(){
        return $this->db->real_escape_string($this->id_img);
    }

    function getImgName(){
        return $this->db->real_escape_string($this->img_name);
    }

    // METHODS

    public function uploadImage(){

        $query = "INSERT INTO images (uploaded_by, id_website, name) VALUES({$this->getIdUser()}, {$this->getIdWebsite()}, '{$this->getImgName()}' )";
        if($sql = $this->db->query($query)){
            return 'success';
        }else{
            return 'failed';
        }

    }

    public function getImages(){
        
        // $data = array();
        
        $query = "
            SELECT	i.id_img, i.id_website, i.name, u.name AS user 
            FROM images i
            JOIN users u
            ON u.id_user = i.uploaded_by
            WHERE i.id_website = {$this->getIdWebsite()} ORDER by i.name ASC
        ";

        if($sql = $this->db->query($query)){
            if($sql->num_rows > 0){
                while($response = $sql->fetch_assoc()){
                    $data[] = $response;
                }
                return $data; 
            }else{
                return 0;
            }
        }
    }

    public function deleteImage(){
        $id =  $this->getIdImg();
        $sql = "
            DELETE from images WHERE id_img = ?
        ";
        $stmt = $this->db->prepare($sql);
        $stmt->bind_param('i', $id);
        if($stmt->execute()){
            return "success";
        }else{
            return "failed";
        }
        


    }
    

}