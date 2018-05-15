<?php


class Router {
	protected $url = [];

	public function load($list){
		$router = new static;
		require $list;
		return $router;
	}

	public function define($uri){
		$this->url = $uri;
	}

	public function direct($info) {
		return $this->url["$info"];
	}
}