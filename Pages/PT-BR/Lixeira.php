<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Documentos</title>
    <link rel="stylesheet" href="../../Styles/Main.css">
    <link rel="stylesheet" href="../../Styles/document.css">
    <link rel="stylesheet" href="../../Styles/Sidebar.css">
    <link rel="stylesheet" href="../../Styles/Explorer.css">
</head>

<body>

    <div class="container-general" style="z-index: 2;">
        <nav class="sidebar">
            <div class="header">
                <h2>NeoFiles</h2>
            </div>
            
            <!-- Main Navigation Items -->
            <div class="menu">
                <a href="Home.php" class="menu-item">
                    <span class="icon">🏠</span> Início
                </a>
                <a href="./Explorer.php" class="menu-item  ">
                    <span class="icon">📄</span> Arquivos
                </a>
                <a href="./History.php" class="menu-item">
                    <span class="icon">⏳</span> Histórico
                </a>
                <a href="./Lixeira.php" class="menu-item active">
                    <span class="icon">🗑️</span> Lixeira
                </a>
            </div>
            
            <!-- Favorites and Recents Sections -->
            <div class="sections">
                <div class="section">
                    <h3>Favoritos</h3>
                    <hr>
                </div>
                <div class="section">
                    <h3>Recentes</h3>
                    <hr>
                </div>
            </div>
        </nav>

            <div class="colocarPastas">

            </div>

    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="../../Scripts/Document.js"></script>
    <script src="../../Scripts/telaPrincipal.js"></script>
    <script src="../../Scripts/DarkMode.js"></script>
</body>
</html>