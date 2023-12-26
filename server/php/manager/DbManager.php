<?php

class DbManager
{
    private $conn;
// Server=13.53.159.183;Port=3306;Database=instagram-clone;Uid=root;Pwd=123456;Encrypt=true;
    public function __construct()
    {
        try {
			$this->conn = new PDO("Server=13.53.159.183;Port=3306;Database=instagram-clone;Uid=root;Pwd=123456;Encrypt=true");
            //$this->conn = new PDO("mysql:host=13.53.159.183:3306;dbname=instagram-clone", "root", "123456");
        } catch (PDOException $e) {
            print $e->getMessage();
        }
    }
    public function SelectMultipleRow($sql, $params)
    {
        $query = $this->conn->prepare($sql);
        $query->execute($params);
        return json_encode($query->fetchAll(PDO::FETCH_ASSOC));
    }

    public function SelectSingleRow($sql, $params)
    {
        $query = $this->conn->prepare($sql);
        $query->execute($params);
        return json_encode($query->fetch(PDO::FETCH_ASSOC));
    }

    public function Fetch($sql, $params)
    {
        try {
            $query = $this->conn->prepare($sql);
            $query->execute($params);
            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    function __destruct()
    {
        $this->conn = null;
    }
}

?>