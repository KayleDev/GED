<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciamento de Documentos</title>

    <!-- Links para os arquivos de estilos CSS do projeto -->
    <link rel="stylesheet" href="../../Styles/Main.css">
    <link rel="stylesheet" href="../../Styles/Sidebar.css">
    <link rel="stylesheet" href="../../Styles/Explorer.css">
    <link rel="stylesheet" href="../../Styles/ContextMenu.css">
    <link rel="stylesheet" href="../../Styles/comment.css">
    <link rel="stylesheet" href="../../Styles/property.css">
    <link rel="stylesheet" href="../../Styles/document-popup.css">
</head>
<body>

    <!-- Container geral, que envolve toda a estrutura da página -->
    <div class="container-general" style="z-index: 2;">
        
        <!-- Plugin de acessibilidade VLibras -->
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>
        </div>

        <!-- Barra lateral de navegação -->
        <nav class="sidebar">
            <div class="header">
                <!-- Nome da empresa -->
                <h2>NeoFiles</h2>
            </div>
            
            <!-- Itens principais de navegação -->
            <div class="menu">
                <!-- Link para a página principal -->
                <a href="Home.php" class="menu-item">
                    <span class="icon">🏠</span> Início
                </a>
                <!-- Link para a página de arquivos, com a classe "active" indicando que a página está em uso -->
                <a href="./Explorer.php" class="menu-item active">
                    <span class="icon">📄</span> Arquivos
                </a>
                <!-- Link para o histórico de alterações-->
                <a href="./History.php" class="menu-item">
                    <span class="icon">⏳</span> Histórico
                </a>
                <!-- Link para a lixeira -->
                <a href="./Lixeira.php" class="menu-item">
                    <span class="icon">🗑️</span> Lixeira
                </a>
            </div>

            <!-- Seções de favoritos e recentes -->
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

        <!-- Conteúdo principal da página -->
        <main id="document-items">
            <!-- Seção de pastas -->
            <section id="container-folder">
                <div class="description-part text-settings">
                    <!-- Título da seção de pastas -->
                    <h2 class="horizon-text">Pastas</h2>
                    <h3>Ver mais</h3>
                </div>

                <!-- Container para exibir as pastas -->
                <section class="div-items-folder">
                    <!-- Exemplo de como uma pasta será exibida (imagem, título e usuário que criou) -->
                    <div class="border">
                        <div class="icon-container">
                            <img src="../../Assets/icons/star.svg" class="document-icon">
                            <img src="../../Assets/icons/dots.svg" class="document-icon">
                        </div>
                        <img src="../../Assets/DocumentImages/folder.png" width="64">
                        <h2>Exemplo</h2>
                        <h4>Caio</h4>
                    </div>
                </section>
            </section>

            <!-- Seção de documentos -->
            <section id="container-document">
                <div class="description-part text-settings">
                    <!-- Título da seção de documentos -->
                    <h2 class="horizon-text">Arquivos</h2>
                    <h3>Ver mais</h3>
                </div>

                <!-- Container para exibir os documentos -->
                <section class="div-items-document">
                    <!-- Os documentos serão inseridos aqui -->
                </section>
            </section>
        </main>
    </div>

    <!-- Efeito de opacidade (usado em algum processo de exibição de documentos ou menu) -->
    <div id="opacity-Effect"></div>

    <!-- Container que aparece quando o usuário clica para adicionar documentos -->
    <div id="container">
        <div class="file-input-wrapper" id="fileInputWrapper">
            <div class="file-container" id="file-container"></div>
        </div>
    </div>

    <!-- Botão flutuante no canto da tela para adicionar novos arquivos/pastas -->
    <div class="corner-button">
        <!-- Botão que abre um menu suspenso -->
        <button id="dropdownButton"> Adicionar <i class="fas fa-plus"></i></button>
        <div id="dropdownMenu" class="dropdown-content">
            <!-- Botão para criar novas pastas (ainda sem funcionalidade) -->
            <button id="btn-Options" title="Criação de pasta"></button>
            <!-- Botão para fazer upload de documentos -->
            <button id="btn-Options2" type="submit" title="Upload de documento">
                <input type="file" id="fileInput">
            </button>
        </div>
    </div>

    <div class="context-menu" id="contextMenu">
        <ul>
            <li id="context-rename">Renomear</li>
            <li id="context-move">Mover</li>
            <li id="context-delete">Deletar</li>
        </ul>
    </div>

    <!-- jQuery para manipulação de elementos da página -->
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <!-- Scripts específicos para o comportamento de documentos e pastas -->
    <script src="../../Scripts/Document.js"></script>
    <script src="../../Scripts/Folder.js"></script>
    <script src="../../Scripts/ContextMenu.js"></script>
    <script src="../../Scripts/Property.js"></script>
    <script src="../../Scripts/Comment.js"></script>
    <!-- Script para interações na tela principal -->
    <script src="../../Scripts/telaPrincipal.js"></script>
    <!-- Script para o modo escuro -->
    <script src="../../Scripts/DarkMode.js"></script>
    <!-- Script para o plugin VLibras de acessibilidade -->
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script> new window.VLibras.Widget('https://vlibras.gov.br/app'); </script>
    <script>
        $('.button').click(function() {
            $.ajax({
                type: "POST",
                url: "createPage.php",
                data: { name: "John" }
            }).done(function( msg ) {
                alert( "Data Saved: " + msg );
            });
        });
    </script>
</body>
</html>