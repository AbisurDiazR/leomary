<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    require("conexion.php");//creamos la conexion

    $conexion = conexion();

    $registros = mysqli_query($conexion,"SELECT * FROM proyectos ORDER BY id_proyecto DESC LIMIT 1");

    // SI EL USUARIO EXISTE OBTIENE LOS DATOS Y LOS GUARDA EN UN ARRAY
    if ($resultado = mysqli_fetch_array($registros))  
    {
      //$datos[] = $resultado;
      $last_id = $resultado['id_proyecto'];
    }

    //Realiza la consulta query
    mysqli_query($conexion,"INSERT INTO fotos(nombre_foto, proyecto_foto) VALUES('$params->nombre_foto','$last_id')");

    class Result {}

    //Genera los datos de la respuesta
    $response = new Result();
    $response->resultado = 'OK';
    $response->mensaje = 'Nueva foto añadida';

    header('Content-Type: application/json');

    echo json_encode($response);//Muestra el json generado
?>