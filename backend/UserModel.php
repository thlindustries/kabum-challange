<?php

require_once "Sql.php";

class UserModel {

    private $sql;

    public function __construct()
    {
        $this->sql = new Sql();
    }

    public function getUser()
    {

        $query = "select * from usuario";

        return $this->sql->select($query);
    }


    public function getUserID($id)
    {

        $query = "select * from usuario where id = :ID ";

        $param = array(
            ':ID' => $id
        );

        return $this->sql->select($query, $param);
    }

}