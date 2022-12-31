<?php
require_once('models/user.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$returnedValue = [];
$returnedValue["success"] = false;

if(isset($_POST['submit']))
{
    $args = array(
        "email",
        "password"
    );

    if(!argsExist($args)){
        $returnedValue["message"] = "Email and password required";
        echo json_encode($returnedValue);
        die();
    }

    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if(!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        $returnedValue["message"] = "Invalid Email";
        echo json_encode($returnedValue);
        die();
    }

    $user = new User();
    $getRow = $user->getBy("email", $email);

    if(count($getRow) == 0)
    {
        $returnedValue["message"] = "User Not Found";
        echo json_encode($returnedValue);
        exit();
    }

    $getRow = $getRow[0];

    if($password == $getRow['password'])
    {
        $returnedValue["success"] = true;
        $returnedValue["token"] = $getRow['id'];
        $returnedValue["admin"] = $getRow['role'];
        echo json_encode($returnedValue);
    }else{
        $returnedValue["message"] = "Incorrect Password";
        echo json_encode($returnedValue);
    }
}else{
    $returnedValue["message"] = "No Data sent in Body";
    echo json_encode($returnedValue);
}    
?>
