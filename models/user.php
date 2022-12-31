<?php
require_once(__DIR__."/../helpers/db.php");
require_once("Model.php");
class User extends Model{
	public function __construct(){
		parent::__construct("user", array("first_name","last_name","email","password","phone","strava_link","date_of_birth","gender", "role"));
	}	
}
?>
