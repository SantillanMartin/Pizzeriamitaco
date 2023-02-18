<?php
    $destino="martinsantillan.a@gmail.com";
    $nombre=$_POST["nombre"];
    $correo=$_POST["correo"];
    $mensaje=$_POST["mensaje"];
    $contenido="Nombre: ".$nombre ."\nCorreo: ".$correo ."\nmensaje: ".$mensaje;
    mail($destino,"Informacion Catering",$contenido); 
    header("Location:contacto.html");




?>