<?php

class Rotas 
{
    private $list;
    private $uri;

    public function __construct()
    {
        ( count( explode('?', $_SERVER['REQUEST_URI']) ) > 1 ) ? $this->uri = explode('?', $_SERVER['REQUEST_URI'])[0] : $this->uri = $_SERVER['REQUEST_URI'];
    }

    function addRota($metodo, $uri, $function)
    {
        // echo "add Rotas";
        $this->list[] = array( 
            "method" => $metodo,
            "uri" => $uri,
            "function" => $function
        );

       
    
    }
    
    function findRota()
    {
        foreach ($this->list as $route) {

            if( $this->uri == $route['uri'] &&  $_SERVER['REQUEST_METHOD'] == $route['method']){
            $route['function']() ;
            }
        }
    }


    function getLIst()
    {
        echo json_encode($this->list);
    }

    function exec()
    {
        $this->list[0]['function']();
    }


}

