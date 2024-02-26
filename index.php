<?php
// Enable error reporting and display errors
error_reporting(E_ALL);
ini_set('display_errors', 1);


session_start();
require_once '../database.php';
require_once 'autoload.php';
require_once 'config/parameters.php';







if(isset($_GET['controller'])){
    $controller_name = $_GET['controller'].'Controller';
}elseif(!isset($_GET['controller']) && !isset($_GET['action'])){
    $controller_name = controller_default;
}else{
    header('Location: '.base_url.'index.php');
    exit();
}
if(class_exists($controller_name)){
    $controller = new $controller_name();

    // AQUI SE CARGA EL CONTROLADOR Y SE EJECUTA SU METODO

    if(isset($_GET['action']) && method_exists($controller, $_GET['action'])){
        $action = $_GET['action'];
        $controller->$action();
        exit();
    }
    elseif(!isset($_GET['controller']) && !isset($_GET['action']) && !isset($_SESSION['email'])){
        $default = action_default;
        $controller->$default(); 
    }else if(!isset($_SESSION['email'])){
        header('Location: '.base_url.'index.php');
    }
}else{
    header('Location: '.base_url.'index.php');
}

if (!isset($_SESSION['email'])) {
    include_once 'views/user/login.php';
}else if(isset($_SESSION['email'])){
    $dashboard = new dashboardController;
    $dashboard->load();
}
include_once 'views/layout/footer.php';