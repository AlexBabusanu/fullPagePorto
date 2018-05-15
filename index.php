<?php 

require("core/router.php");

$router = Router::load("routes.php");
require($router->direct(trim($_SERVER["REQUEST_URI"], "/")));