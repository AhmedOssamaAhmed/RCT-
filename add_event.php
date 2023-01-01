<?php
require_once('models/event.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$returnedValue =[];
$returnedValue["success"] = false;

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $args = array(
        "name",
        "start_point",
        "destination",
        "date",
        "distance"
    );

    if(!argsExist($args)){
        $returnedValue["message"] = "please fill all data";
        echo json_encode($returnedValue);
        die();
    }
    $name = trim($_POST['name']);
    $start_point =trim($_POST['start_point']);
    $destination =trim($_POST['destination']);
    $date =trim($_POST['date']);
    $distance =trim($_POST['distance']);
    
    $params = ['name'=> $name,
                'start_point'=>$start_point,
                'destination'=>$destination,
                'date' => $date,
                'distance' => $distance,
                'user_id'=> 4
            ];

    $event = new Event();
    $event -> insert($params);
    $returnedValue["message"] = "event added";
    $returnedValue["success"] = true;
    echo json_encode($returnedValue);
}



?>
