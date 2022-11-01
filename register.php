<?php
require_once('models/user.php');
require_once('helpers/validate.php');

if(isset($_POST['register']))
{
    $args = array(
        "first_name",
        "last_name",
        "email",
        "password",
        "verify_password",
        "strava_link",
        "phone",
        "date_of_birth",
        "gender"
    );
    if(!argsExist($args)){
        echo "insufficient post data";
        exit();
    }
    $email = trim($_POST['email']);
    $password =trim($_POST['password']); 
    $first_name =trim($_POST['first_name']);
    $last_name =trim($_POST['last_name']);
    $verify_password =trim($_POST['verify_password']);
    $strava_link =trim($_POST['strava_link']);
    $phone =trim($_POST['phone']);
    $gender =trim($_POST['gender']);
    if($gender == "male"){
        $gender = true;
    }else{$gender=false;}
    $date_of_birth =trim($_POST['date_of_birth']);
    
    if($password != $verify_password){
        echo "passwords don't match !";
        exit();
    }
    if(!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        echo "invalid email";
        exit();
    }
    $handle = User::getUsersByEmail($email);

    if($handle->rowCount() > 0){
        echo "email already registered !";
        exit();
    }
    $sql = "INSERT INTO user(first_name,last_name,email,password,phone,strava_link,date_of_birth,gender)
    VALUES(:first_name,:last_name,:email,:password,:phone,:strava_link,:date_of_birth,:gender)";
    $pdo = connect();
    $handle = $pdo->prepare($sql);
    $params = ['email'=>$email,
                'first_name'=>$first_name,
                'last_name'=>$last_name,
                'password'=>$password,
                'phone'=>$phone,
                'strava_link'=>$strava_link,
                'date_of_birth'=>$date_of_birth,
                'gender'=>$gender,
            ];
    $handle->execute($params);
    echo "new User created";


}
