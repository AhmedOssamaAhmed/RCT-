<?php
require_once('models/announcement.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$returnedValue =[];
$returnedValue["success"] = false;

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $args = array(
        "title",
        "description",
        "date",
        "user_id"
    );

    if(!argsExist($args)){
        $returnedValue["message"] = "please fill all data";
        echo json_encode($returnedValue);
        die();
    }
    $title = trim($_POST['title']);
    $description =trim($_POST['description']);
    $date =trim($_POST['date']);
    
    $params = ['title'=> $title,
                'description'=>$description,
                'date' => $date,
                'user_id'=> $_POST["user_id"]
            ];

    $announ = new Announcement();
    $announ -> insert($params);
    $returnedValue["message"] = "new announcement added";
    $returnedValue["success"] = true;
    echo json_encode($returnedValue);
}



?>
