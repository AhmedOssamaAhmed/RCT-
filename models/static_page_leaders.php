<?php
require_once(__DIR__."/../helpers/db.php");
require_once("Model.php");

class Static_page_leaders extends Model{

    public function __construct(){
        parent::__construct("leaders",array("leader_name","photo"));
        
    }
}


?>