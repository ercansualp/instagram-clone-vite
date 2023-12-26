<?php
	try {
		$this->conn = new PDO("mysql:host=http://13.53.159.183:3306;dbname=instagram-clone", "root", "123456");
		echo "ercannnn";
	} catch (PDOException $e) {
		print $e->getMessage();
	}
?>