<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    require("conexion.php");//creamos la conexion

    $conexion = conexion();

    //Realiza la consulta query
    mysqli_query($conexion,"INSERT INTO usuarios(nombre, apellidos, username, email, passwd, rol) VALUES('$params->nombre','$params->apellidos','$params->username','$params->email','$params->passwd','$params->rol')");

    class Result {}

    //Genera los datos de la respuesta
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'Se registro exitosamente al usuario';

    header('Content-Type: application/json');

    echo json_encode($response);//Muestra el json generado
?>