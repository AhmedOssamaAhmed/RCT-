<?php
require_once('models/product.php');
require_once('helpers/validate.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$returnedValue =[];
$returnedValue["success"] = false;

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $args = array(
        "name",
        "quantity",
        "price",
    );

    if(!argsExist($args)){
        $returnedValue["message"] = "please fill all data";
        echo json_encode($returnedValue);
        die();
    }
    $name = trim($_POST['name']);
    $quantity =trim($_POST['quantity']); 
    $price =trim($_POST['price']);
    
    $params = ['name'=> $name,
                'quantity'=>$quantity,
                'price' => $price
            ];

    $item = new Product();
    $item -> insert($params);
    $returnedValue["message"] = "new announcement added";
    $returnedValue["success"] = true;
    echo json_encode($returnedValue);
}



?>