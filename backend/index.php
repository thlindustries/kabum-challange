<?php


// require_once DIRECTORY_SEPARATOR ."controller" . DIRECTORY_SEPARATOR . "User";

header('Access-Control-Allow-Origin: http://localhost:3000');


require_once('User.php');
require_once('Rotas.php');



$rotas = new Rotas ;

$rotas->addRota('GET', '/user', function (){

    $user = new User;
    echo $user->listaUser();
   
});

$rotas->addRota('GET', '/list', function (){

    $user = new User;
    echo $user->listaUserID();
   
});



$rotas->addRota('GET', '/delete', function (){
    
   echo "delete";
});

$rotas->addRota('GET', '/edit', function (){
    
    echo "edit";
});

$rotas->addRota('POST', '/user', function (){
    
    $user = new User;
    echo $user->addUser();
});

$rotas->addRota('POST', '/teste', function (){
    
    $input = file_get_contents('php://input');
    $input  = json_decode($input,true);
    echo $input['id'];
    
});

$rotas->findRota();

// $rotas->exec();