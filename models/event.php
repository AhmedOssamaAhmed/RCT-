<?php
require_once(__DIR__."/../helpers/db.php");
require_once("Model.php");
class Event extends Model{
	public function __construct(){
		parent::__construct("event", array("name","start_point","destination","date","distance", "user_id"));
	}	
}
?>
