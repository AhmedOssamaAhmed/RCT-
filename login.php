<?php
require_once('models/user.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if(isset($_POST['submit']))
{
    $args = array(
        "email",
        "password"
    );

    if(!argsExist($args)){
        echo "Email and password required";
        exit();
    }

    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if(!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        echo "invalid email";
        exit();
    }

    $user = new User();
    $getRow = $user->getBy("email", $email);

    if(count($getRow) == 0)
    {
        echo "User not found";
        exit();
    }

    $getRow = $getRow[0];

    if($password == $getRow['password'])
    {
        echo "login successful";
        exit();
    }else{
        echo "incorrect password";
    }
}else{
    echo "not sent in post body";
}    
?>
