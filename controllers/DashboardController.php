<?php
require_once 'models/website.php';

class dashboardController{
    public function load(){
        if(isset($_SESSION['email'])){
            $sites = $this->headerData();
            include_once 'views/layout/header.php';
            include_once 'views/layout/sidebar.php';
            include_once 'views/layout/content.php';
        }else{
            header('Location: '.base_url.'index.php');
        }
    }

    public function headerData(){
        $sites = new websiteController();
        $response = $sites->getSites();
        return $response;
    }

    public function dashboardData(){
        $dashBoardData = array();

        $website = new WebsiteController();
        $notes = new NoteController();
        $leads = new LeadController();
        
        $website_data = $website->getWebsiteInfo();
        $notes_data = $notes->getNotes();
        $leads_data = $leads->getLeads();

        $dashboardData['websites'] = $website_data;
        $dashboardData['notes'] = $notes_data;
        $dashboardData['leads'] = $leads_data;
        $dashboard_array = json_encode($dashboardData);
        
        echo $dashboard_array;

    }


}