<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $json = file_get_contents('php://input');

    $params = json_decode($json);

    require('conexion.php');

    $conexion = conexion();

    $registros = mysqli_query($conexion,"SELECT * FROM proyectos ORDER BY id_proyecto DESC LIMIT 1");

    // SI EL USUARIO EXISTE OBTIENE LOS DATOS Y LOS GUARDA EN UN ARRAY
    if ($resultado = mysqli_fetch_array($registros))  
    {
      $datos[] = $resultado;
      echo $resultado['id_proyecto'];
    }
    
    $json = json_encode($datos[0]); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  
    //echo $json; // MUESTRA EL JSON GENERADO
    
    header('Content-Type: application/json');
?>