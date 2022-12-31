<?php

function argsExist($inputs){
    for($i=0; $i<sizeof($inputs); $i++){
        if(!isset($_POST[$inputs[$i]]) || empty($_POST[$inputs[$i]])){       
            return false;
        }
    }
    return true;
}
?>