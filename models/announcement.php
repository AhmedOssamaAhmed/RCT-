<?php
require_once(__DIR__."/../helpers/db.php");
require_once("Model.php");
class Announcement extends Model{
	public function __construct(){
		parent::__construct("announcements", array("title","description","date","user_id"));
	}	
}
?>
