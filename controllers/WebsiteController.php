<?php

require_once 'models/website.php';

class websiteController{

    public function getSites(){
        $site = new Website();
        $sites = $site->getSites();
        return $sites;
    }

    public function getWebsiteInfo(){
        $id_website = $_POST['id_website'];
        $website = new Website();
        $website->setIdWebsite($id_website);
        $info = $website->getWebsiteInfo();
        return $info;
    }

}