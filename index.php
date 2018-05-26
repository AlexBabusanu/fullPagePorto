<?php 

require("core/router.php");
$info = require("work.php");

$router = Router::load("routes.php");
require($router->direct(trim(strtok($_SERVER["REQUEST_URI"], "?"), "/")));