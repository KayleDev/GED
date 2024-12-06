<?php
    $id = md5($_POST["id"]);
    $caminho = "../Folder/" . $id .".php";
    $conteudo = "a";
    file_put_contents($caminho,$conteudo,FILE_APPEND);
    echo $caminho;
?>