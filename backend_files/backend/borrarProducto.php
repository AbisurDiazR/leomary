<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    require('conexion.php');

    $conexion = conexion();

    mysqli_query($conexion,"DELETE FROM productos WHERE id_producto=$_GET[id_producto]");

    class Result{}

    $response=new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'Producto eliminado';

    header('Content-Type: application/json');

    echo json_encode($response);
?>