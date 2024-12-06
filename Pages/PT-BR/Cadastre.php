<?php
if(!empty($_POST)) {
  $usuario = array(
    $_POST['Nome'], 
    $_POST['Email'],
    $_POST['Senha'],
);

  $conteudo = "Usuário: ";

  $usuario[2] = sha1($usuario[2]);
  
  for($i = 0; $i < count($usuario); $i++)
  {
    $conteudo .= $usuario[$i].", ";
  }

  $conteudo .= "

";

  $caminho = "../../Accounts/Usuario.txt";
  
        if(file_put_contents($caminho,$conteudo,FILE_APPEND))
        {
          echo"<script> alert('Dados cadastrado com sucesso');</script>";
        }
        else
        {
          echo"<script> alert('Erro ao cadastrar!');</script>";
        }
  }
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>

    <!-- Importação de arquivos de estilo CSS para a aparência da página -->
    <link rel="stylesheet" href="../../Styles/Main.css">
    <link rel="stylesheet" href="../../Styles/CadLog.css">
</head>

<body>

    <main class="container">
        <!-- Seção de redirecionamento para o login, caso o usuário já tenha uma conta -->
        <section class="continue-section">
            <h2>CONTINUAR COM</h2>
            <!-- Link para a página de login -->
            <a href="./Login.php" class="no-account">JÁ TENHO UMA CONTA</a>
        </section>

        <section class="register-section">
            <!-- Cabeçalho da página de cadastro -->
            <h1 style="font-family: horizon;">CADASTRO</h1>

            <!-- Formulário de cadastro que envia os dados para o arquivo PHP -->
            <form method="POST">

                <!-- Campos de entrada de dados para o nome, email e senha -->
                <input type="text" id="nome" name="Nome" placeholder="Nome" class="input-Accounts" required>
                <input type="email" id="email" name="Email" placeholder="Email" class="input-Accounts" required>
                <input type="password" id="senha" name="Senha" placeholder="Senha" class="input-Accounts" required>
            
                <!-- Campo de checkbox para aceitar os termos e condições de uso -->
                <label>
                    <input type="checkbox" id="terms" name="terms" required> <a id="terms-Link" href="./Terms.php">Termos e Condições de uso</a> 
                </label>
            
                <!-- Botões de navegação e de envio do formulário -->
                <div class="buttons">
                    <a href="./index.php" class="back-button">VOLTAR</a>
                    <input type="submit" class="register-button" value="CADASTRE-SE">
                </div>
            </form>
        </section>

        <!-- Plugin de acessibilidade (VLibras) para a página -->
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>
        </div>
    </main>

    <!-- Scripts adicionais para funcionalidade como modo escuro e acessibilidade -->
    <script src="../../Scripts/DarkMode.js"></script>
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script> new window.VLibras.Widget('https://vlibras.gov.br/app'); </script>

</body>
</html>
