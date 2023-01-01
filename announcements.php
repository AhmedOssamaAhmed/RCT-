<?php
require_once('models/announcement.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $returnedValue =[];
    $returnedValue["products"] = [];
    $ann = new Announcement();
    $returnedValue["products"] = $ann->getAll();
    echo json_encode($returnedValue);
}



?>
