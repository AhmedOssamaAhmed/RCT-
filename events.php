<?php
require_once('models/event.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $returnedValue =[];
    $returnedValue["products"] = [];
    $event = new Event();
    $returnedValue["products"] = $event->getAll();
    echo json_encode($returnedValue);
}



?>
