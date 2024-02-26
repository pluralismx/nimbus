<?php
    function autoload($classname){
        include 'controllers/' . ucfirst($classname) . '.php';
    }

    spl_autoload_register('autoload');