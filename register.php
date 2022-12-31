<?php
require_once('models/user.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

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
        $gender = 1;
    }else{$gender=0;}
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
    $user = new User();
    $handle = $user->getBy("email", $email);

    if(count($handle) > 0){
        echo "email already registered !";
        exit();
    }
    $params = ['email'=>$email,
                'first_name'=>$first_name,
                'last_name'=>$last_name,
                'password'=>$password,
                'phone'=>$phone,
                'strava_link'=>$strava_link,
                'date_of_birth'=>$date_of_birth,
                'gender'=>$gender,
                'role'=>0
            ];
    $user->insert($params);
    echo "new User created";


}
