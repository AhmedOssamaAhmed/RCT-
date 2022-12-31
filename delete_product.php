<?php
require_once('models/product.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if($_SERVER['REQUEST_METHOD'] == 'DELETE'){

    $item = new Product();
    $item->delete('name','vist');

}