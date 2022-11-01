<?php
require_once('models/user.php');
require_once('helpers/validate.php');

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

    $handle = User::getUsersByEmail($email);

    if($handle->rowCount() <= 0)
    {
        echo "User not found";
        exit();
    }

    $getRow = $handle->fetch(PDO::FETCH_ASSOC);
    if($password == $getRow['password'])
    {
        echo "login successful";
        exit();
    }else{
        echo "incorrect password";
    }
}    
?>