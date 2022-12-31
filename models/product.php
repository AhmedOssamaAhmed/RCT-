<?php
require_once(__DIR__."/../helpers/db.php");
require_once("Model.php");
class Product extends Model{
	public function __construct(){
		parent::__construct("product", array("name","quantity","price"));
	}	
}
?>
