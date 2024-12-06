<?php
session_start();
function validUser($User, $Password) {
    $document = file_get_contents("../../Accounts/Usuario.txt");
    
    $lines = explode("\n", $document);
    
    $tokenAcess = false;

    foreach ($lines as $line) {
        if (empty($line)) {
            continue;
        }
        
        $line = trim(str_replace("Usuário: ", "", $line));
        $line = rtrim($line, ",");
        
        $Accounts = explode(", ", $line); 

        if (count($Accounts) == 3) {
            $Email = $Accounts[1];
            $Senha = $Accounts[2];

            if ($User === $Email && sha1($Password) === $Senha) {
                $_SESSION["UserType"] = $Accounts[0];
                $tokenAcess = true;
                break;
            }
        }
    }

    return $tokenAcess;
}

if (isset($_POST["login"])) {
    if (!empty($_POST["Email"]) && !empty($_POST["Senha"])) {
        $User = $_POST["Email"];
        $Password = $_POST["Senha"];

        if (validUser($User, $Password)) {
            header("Location: ./Home.php");
            exit();
        } else {
            echo "<script>alert('Login está errado.')</script>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../../Styles/Main.css">
    <link rel="stylesheet" href="../../Styles/CadLog.css">
</head>
<body>
    
    <!-- Container principal do login -->
    <main class="container">
        <!-- Seção de login -->
        <section class="login-section">
            <!-- Título da página -->
            <h1 style="font-family: horizon;">LOGIN</h1>
            <form method="POST"> 
                <!-- Formulário que envia os dados para 'Home.php' -->
                <input type="email" id="email" name="Email" placeholder="Email" class="input-Accounts" required> 
                <!-- Campo de email -->
                <input type="password" id="senha" name="Senha" placeholder="Senha" class="input-Accounts" required> 
                <!-- Campo de senha -->
                <div class="buttons">
                    <a href="./Index.php" class="back-button">VOLTAR</a>
                    <!-- Link para voltar à página inicial -->
                    <input type="submit" name="login" value="ENTRAR" class="enter-button">
                    <!-- Botão de login -->
                </div>
            </form>
        </section>
        
        <!-- Seção para criar uma nova conta caso o usuário não tenha -->
        <section class="continue-section">
            <h2>CONTINUAR COM</h2> <!-- Título informando que o usuário pode continuar com uma nova conta -->
            <a href="./Cadastre.php" class="no-account">NÃO TENHO UMA CONTA</a> <!-- Link para a página de cadastro -->
        </section>

        <!-- Inclusão do plugin de acessibilidade VLibras -->
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>
        </div>
    </main>

    <!-- Script para ativar o modo escuro -->
    <script src="../../Scripts/DarkMode.js"></script>
    <!-- Script do VLibras -->
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script> 
    <script> new window.VLibras.Widget('https://vlibras.gov.br/app'); </script>
</body>
</html>
