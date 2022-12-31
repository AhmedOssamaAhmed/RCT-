<?php
require_once('models/event.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $cols = $_POST['cols'];
    $value = $_POST['value'];

    $item = new Event();
    $item->delete($cols,$value);

}