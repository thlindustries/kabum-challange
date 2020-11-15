<?php

require_once 'UserModel.php';

class User {

    private $modelUser;

    public function __construct()
    {
        $this->modelUser = new UserModel();
    }

    public function addUser()
    {
        $json = array(
            "function" => "AddUser()",
            "Class: " => "User"
        );

        return json_encode($json);
    }

    public function listaUser()
    {
        return json_encode($this->modelUser->getUser());
    }


    public function listaUserID()
    {
        $id = $_GET['id'];
        return json_encode($this->modelUser->getUserID($id));
    }
   


}