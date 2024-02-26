<?php

class Note{
    
    private $id;
    private $id_user;
    private $id_website;
    private $title;
    private $content;

    public function __construct(){
        $this->db = Database::connect();
    }

    function setIdUser($id_user){
        $this->id_user = $id_user;
    }

    function setIdWebsite($id_website){
        $this->id_website = $id_website;
    }

    function setId($id){
        $this->id = $id;
    }

    function setTitle($title){
        $this->title = $title;
    }

    function setContent($content){
        $this->content = $content;
    }

    // GETTERS

    function getIdUser(){
        return $this->db->real_escape_string($this->id_user);
    }

    function getIdWebsite(){
        return $this->db->real_escape_string($this->id_website);
    }

    function getId(){
        return $this->db->real_escape_string($this->id);
    }

    function getTitle(){
        return $this->db->real_escape_string($this->title);
    }

    function getContent(){
        return $this->db->real_escape_string($this->content);
    }

    public function save(){
        $sql = "INSERT INTO notes (id_user, id_website, title, content) VALUES(?, ?, ?, ?)";
        $stmt = $this->db->prepare($sql);
        $user_id = $this->getIdUser();
        $website_id = $this->getIdWebsite();
        $title = $this->getTitle();
        $content = $this->getContent();
        $stmt->bind_param('iiss', $user_id, $website_id, $title, $content);
        $result = false;

        if($stmt->execute()){
            $result = true;
        }
        return $result;
    }

    public function getNotes() {
        $sql = "SELECT * FROM notes WHERE id_user = ? AND id_website = ?  ORDER BY created_at DESC";
        $stmt = $this->db->prepare($sql);
        $user_id = $this->getIdUser();
        $website_id = $this->getIdWebsite();
        $stmt->bind_param('si', $user_id, $website_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if($result->num_rows > 0){
            while($response = $result->fetch_assoc()){
                $data[] = $response;
            }
            foreach($data as &$note){
                $content = $note["content"];
                $content = str_replace("\\n", "\n", $content);
                $content = str_replace("\\r", "\r", $content);
                $note["content"] = $content;
            }
            return $data;
        }else{
            return 0;
        }
    }

    public function delete(){
        $sql = "DELETE FROM notes WHERE id_note = ?";
        $stmt = $this->db->prepare($sql);
        $id = $this->getId();
        $stmt->bind_param('i', $id);
        $result = false;

        if($stmt->execute()){
            $result = true;
        }
        return $result;
    }

    public function update(){
        $sql = "UPDATE notes SET title = ?, content = ? WHERE id_note = ?";
        $stmt = $this->db->prepare($sql);
        $title = $this->getTitle();
        $content = $this->getContent();
        $id = $this->getId();
        $stmt->bind_param('ssi', $title, $content, $id);
        $result = false;

        if($stmt->execute()){
            $result = true;
        }
        return $result;
    }


}