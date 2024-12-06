<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link para a biblioteca de ícones do Flaticon -->
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-straight/css/uicons-regular-straight.css'>
    <title>Home</title>
    <style>
    .fa-cog {
        color: #FFFFFF;  /* Exemplo de cor azul */
    }
    </style>
    <link rel="stylesheet" href="../../Styles/Main.css">
    <link rel="stylesheet" href="../../Styles/Home.css">
    <link rel="stylesheet" href="../../Styles/MiniHistory.css">
    <link rel="stylesheet" href="../../Styles/Sidebar.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=settings" />
</head>

<body>
    <!-- Container principal -->
    <main class="container">
        <!-- Barra lateral de navegação -->
        <nav class="sidebar">
            <div class="header">
                <!-- Nome da empresa ou título da aplicação -->
                <h2>NeoFiles</h2>
            </div>
            
            <!-- Itens de navegação principais -->
            <div class="menu">
                <a href="Home.php" class="menu-item active">
                    <span class="icon">🏠</span> Início
                </a>
                <a href="./Explorer.php" class="menu-item">
                    <span class="icon">📄</span> Arquivos
                </a>
                <a href="./History.php" class="menu-item">
                    <span class="icon">⏳</span> Histórico
                </a>
                <a href="./Lixeira.php" class="menu-item">
                    <span class="icon">🗑️</span> Lixeira
                </a>
            </div>
            
            <!-- Seções de Favoritos e Recentes (ainda não contém conteúdo dinâmico) -->
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
        <div>
            <section class="main-content" style="background-color: transparent;">
                
                <!-- Barra superior -->
                <section class="top-bar">
                    <div class="container">
                        <!-- Campo de pesquisa -->
                        <div class="input-container">
                            <input required="" id="input" type="text" />
                            <label class="label" for="input">Pesquisar</label>
                            <div class="underline"></div>
                        </div>
                    </div>

                    <!-- Botão de alternância para darkmod -->
                    <div class="toggle">
                        <input type="checkbox" id="inCheck" onchange="backgroundColor()">
                        <span class="button">
                        </span>
                        <span class="label">
                            <svg width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
                            </svg>
                        </span>
                    </div>

                    <!-- Ícones de notificação e outra ação -->
                    <div class="top-icons">
                        <div class="icon">
                            <i class="fas fa-cog" style="background-color: #000000"></i>
                        </div>
                        <div class="icon">
                            <i class="fi fi-rs-bell">

                            </i></div>
                    </div>
                </section>

                <!-- Seção de linha do tempo e arquivos destacados -->
                <section style="display: flex; gap: 20px;">
                    <!-- Linha do tempo -->
                    <section class="timeline" style="flex: 2;">
                        <h1>Linha do tempo</h1>
                        <div class="date-filter">
                            <div id="currentDate">Data será carregada...</div>
                            <div class="filters">
                                <div onclick="filterFiles('today')">Hoje</div>
                                <div onclick="filterFiles('week')">Semana</div>
                                <div onclick="filterFiles('month')">Mês</div>
                                <div onclick="filterFiles('year')">Ano</div>
                            </div>
                        </div>
                        <hr>
                        <div class="files-list" id="filesList">
                            <div class="file-item file-item-header">
                                <div>Tipo</div>
                                <div>Nome</div>
                                <div>Criado em</div>
                                <div>Modificado em</div>
                            </div>
                        </div>
                    </section>

                    <!-- Arquivos destacados -->
                    <div class="starred-files" style="flex: 1;">
                        <div class="starred light">
                            <div class="star" style="color: var(--primary-color);">★</div>
                        </div>
                        <div class="starred dark">
                            <div class="star" style="color: var(--primary-text-color)">★</div>
                        </div>
                    </div>
                </section>

                <!-- Seção de arquivos do usuário -->
                <section class="files-section">
                    <!-- Estatísticas dos arquivos -->
                    <div class="stats" style="margin-bottom: 20px;">
                        <h2>SEUS </br> ARQUIVOS</h2>
                        <div class="stat-item">
                            <div class="small-circle"></div>
                            Quantidade de arquivos:0
                        </div>
                        <div class="stat-item">
                            <div class="small-circle"></div>
                            Arquivos compartilhados:0
                        </div>
                    </div>
                    
                    <!-- Lista de arquivos -->
                    <div class="file-list-container">
                        <div class="file-name">
                            <div class="small-circle"></div>
                            <p class="text-settings">Nome do arquivo</p>
                        </div>
                        <div class="file-name">
                            <div class="small-circle"></div>
                            <p class="text-settings">Nome do arquivo</p>
                        </div>
                        <div class="file-name">
                            <div class="small-circle"></div>
                            <p class="text-settings">Nome do arquivo</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

        <!-- Plugin de acessibilidade (VLibras) -->
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>
        </div>
    </main>
    
    <!-- Script para o modo escuro -->
    <script src="../../Scripts/DarkMode.js"></script>
    <script src="../../Scripts/History.js"></script>
    <!-- Script para o plugin de acessibilidade -->
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script> new window.VLibras.Widget('https://vlibras.gov.br/app'); </script>
</body>
</html>
