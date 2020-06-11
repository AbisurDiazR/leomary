<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

    require('conexion.php');

    $conexion = conexion();

    mysqli_query($conexion,"DELETE FROM usuarios WHERE id=$_GET[id]");

    class Result{}

    $response=new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'Usuario eliminado';

    header('Content-Type: application/json');

    echo json_encode($response);
?>