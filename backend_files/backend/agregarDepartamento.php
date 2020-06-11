<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    require("conexion.php");//creamos la conexion

    $conexion = conexion();

    //Realiza la consulta query
    mysqli_query($conexion,"INSERT INTO departamentos(nombre_departamento) VALUES('$params->nombre_departamento')");

    class Result {}

    //Genera los datos de la respuesta
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'Nuevo departamento añadido';

    header('Content-Type: application/json');

    echo json_encode($response);//Muestra el json generado
?>