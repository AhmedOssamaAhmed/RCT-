<?php
require_once("helpers/db.php");
class User{
    public static function getUsersbyEmail($email){
        $sql = "select * from user where email = :email ";
        $pdo = connect();
        $handle = $pdo->prepare($sql);
        $params = ['email'=>$email];
        $handle->execute($params);
        return $handle;
    }
}
?>