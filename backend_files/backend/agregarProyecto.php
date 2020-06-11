<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    require("conexion.php");//creamos la conexion

    $conexion = conexion();

    //Realiza la consulta query
    mysqli_query($conexion,"INSERT INTO proyectos(nombre_proyecto, ubicacion_proyecto, inicio_proyecto, fin_proyecto, rol_proyecto, cliente_proyecto) VALUES ('$params->nombre_proyecto','$params->ubicacion_proyecto','$params->inicio_proyecto','$params->fin_proyecto','$params->rol_proyecto','$params->cliente_proyecto')");

    class Result {}

    //Genera los datos de la respuesta
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'Nuevo proyecto añadido';

    header('Content-Type: application/json');

    echo json_encode($response);//Muestra el json generado
?>