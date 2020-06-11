<?php
  
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
        
    $folderPath = "upload/";

    require("backend/conexion.php");

    $conexion = conexion();

    $registros = mysqli_query($conexion,"SELECT * FROM proyectos ORDER BY id_proyecto DESC LIMIT 1");

    // SI EL USUARIO EXISTE OBTIENE LOS DATOS Y LOS GUARDA EN UN ARRAY
    if ($resultado = mysqli_fetch_array($registros))  
    {
      //$datos[] = $resultado;
      $last_id = $resultado['id_proyecto'];
    }
      
    $file_names = $_FILES["file"]["name"];
    for ($i = 0; $i < count($file_names); $i++) {
        $file_name=$file_names[$i];
        $extension = end(explode(".", $file_name));
        $original_file_name = pathinfo($file_name, PATHINFO_FILENAME);
        $file_url = $original_file_name . "-" . date("YmdHis") . "." . $extension;
        move_uploaded_file($_FILES["file"]["tmp_name"][$i], $folderPath . $file_url);
        mysqli_query($conexion,"INSERT INTO fotos(nombre_foto, proyecto_foto) VALUES('$file_url','$last_id')");
    }
  
?>