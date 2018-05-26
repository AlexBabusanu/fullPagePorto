<?php

$website = $info[$_GET["w"]];

$counter = 0;
foreach ($info as $item) {
	if($item["name"] == $website["name"]){
		break;
	}
	$counter += 1;}

$array = array_keys($info);
if($counter + 1 == sizeof($array)){
	$next = $array[0];
}
else {
	$next = $array[$counter + 1];
}
if($counter == 0){
	$prev = $array[sizeof($array) - 1];
}
else {
	$prev = $array[$counter - 1];
}

require("core/views/work.view.php");