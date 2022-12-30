<?php
require_once('models/static_page_leaders.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$returnVal = [];
$model = new Static_page_leaders();
$content = $model->getAll();
$returnVal["content"] = $content;
echo json_encode($returnVal);



?>