<?php
require_once('models/product.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $returnedValue =[];
    $returnedValue["products"] = [];
    $product = new Product();
    $returnedValue["products"] = $product->getAll();
    echo json_encode($returnedValue);
}



?>
