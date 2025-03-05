<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


echo "Antes de ";

$mysqli = new mysqli('localhost', 'root', 'life is awesome', 'lalydb');

if ($mysqli->connect_error) {
    die("Error de conexión: " . $mysqli->connect_error);
}
echo "Conexión exitosa a la base de datos.";