<?php
require_once('models/static_page.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$returnVal = [];
$model = new Static_page();
$content = $model->getAll();
$returnVal["content"] = $content;
echo json_encode($returnVal);



?>