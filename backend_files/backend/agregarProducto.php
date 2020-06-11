<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    require("conexion.php");//creamos la conexion

    $conexion = conexion();

    //Realiza la consulta query
    mysqli_query($conexion,"INSERT INTO productos(clave_producto, categoria_producto, departamento_producto, concepto_producto, precio_producto, foto_producto) VALUES('$params->clave_producto','$params->categoria_producto','$params->departamento_producto','$params->concepto_producto','$params->precio_producto','$params->foto_producto')");

    class Result {}

    //Genera los datos de la respuesta
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'Nuevo producto añadido';

    header('Content-Type: application/json');

    echo json_encode($response);//Muestra el json generado
?>