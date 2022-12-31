<?php
require_once("models/user.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

// ignore preflight requests
if($_SERVER["REQUEST_METHOD"] != "POST"){
    die();
}

$returnedVal = [];
$headers = apache_request_headers();
// check if current user is logged in
// if the user is not logged in return a 401 unauthenticated
if(!isset($headers["Authorization"])){
    $returnedVal["message"] = "User not Logged in";
    http_response_code(401);
    echo json_encode($returnedVal);
    die();
}
// if so check that the user is an adminstrator
// if the user is not priveleged return a 403 forbidden
$users = new User();
$user = $users->getBy("id", $headers["Authorization"]);
if(count($user) == 0 || $user[0]["role"] == 0){
    $returnedVal["message"] = "User UnAuthorized";
    http_response_code(403);
    echo json_encode($returnedVal);
    die();
} 
// otherwise get all users and return
$returnedVal["users"] = $users->getAll();
echo json_encode($returnedVal);
