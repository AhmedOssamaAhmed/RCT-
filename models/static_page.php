<?php
require_once(__DIR__."/../helpers/db.php");
require_once("Model.php");

class Static_page extends Model{

    public function __construct(){
        parent::__construct("static_content",array("title","description"));
        
    }
}


?>