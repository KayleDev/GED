<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Configurações</title>
    <!-- Importação do arquivo de estilos do Bootstrap para layout e estilo básico -->
    <link href="../../Styles/bootstrap.min.css" rel="stylesheet">
    <!-- Estilos personalizados da página de configurações -->
    <link rel="stylesheet" href="../../Styles/ConfigPage.css">
</head>

<body>
    <main class="settings-container">
        <!-- Título da página de configurações -->
        <h2 class="settings-title">Configurações</h2>

        <!-- Seção de configurações do perfil do usuário -->
        <section class="settings-section" id="profile-settings">
            <h4>Perfil do Usuário</h4>
            <!-- Formulário para editar os dados do perfil -->
            <form>
                <!-- Campo para o nome do usuário -->
                <div class="mb-3">
                    <label for="user-name" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="user-name">
                </div>
                <!-- Campo para o email do usuário -->
                <div class="mb-3">
                    <label for="user-email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="user-email">
                </div>
                <!-- Campo para a senha do usuário com a opção de mostrar a senha -->
                <div class="mb-3">
                    <label for="user-pass" class="form-label">Senha</label>
                    <div style="display: flex;">
                        <!-- Campo para a senha do usuário -->
                        <input type="password" class="form-control" id="exampleInputPassword1" style="border-radius: 10px 0 0 10px;" required>
                        <!-- Botão para alternar entre mostrar ou ocultar a senha -->
                        <button type="button" class="botaoMostrar" id="togglePassword">Ver senha</button>
                    </div>
                </div>
                <!-- Botão para salvar as alterações feitas no perfil -->
                <button type="submit" class="btn btn-primary">Salvar Alterações</button>
            </form>
        </section>

        <!-- Seção de configurações de notificações -->
        <section class="settings-section" id="notifications-settings">
            <h4>Notificações</h4>
            <!-- Formulário para configurar as preferências de notificações -->
            <form>
                <!-- Configuração para receber notificações por email -->
                <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="email-notifications" checked>
                    <label class="form-check-label" for="email-notifications">Receber notificações por email</label>
                </div>
                <!-- Configuração para receber notificações por SMS -->
                <div class="form-check form-switch mb-3">
                    <input class="form-check-input" type="checkbox" id="sms-notifications">
                    <label class="form-check-label" for="sms-notifications">Receber notificações por SMS</label>
                </div>
                <!-- Botão para salvar as configurações de notificações -->
                <button type="submit" class="btn btn-primary">Salvar Notificações</button>
            </form>
        </section>

        <!-- Seção de configurações de segurança (alteração de senha) -->
        <section class="settings-section" id="security-settings">
            <h4>Segurança</h4>
            <!-- Formulário para alterar a senha -->
            <form>
                <!-- Campo para a senha atual do usuário -->
                <div class="mb-3">
                    <label for="current-password" class="form-label">Senha Atual</label>
                    <input type="password" class="form-control" id="current-password">
                </div>
                <!-- Campo para a nova senha -->
                <div class="mb-3">
                    <label for="new-password" class="form-label">Nova Senha</label>
                    <input type="password" class="form-control" id="new-password">
                </div>
                <!-- Campo para confirmar a nova senha -->
                <div class="mb-3">
                    <label for="confirm-password" class="form-label">Confirmar Nova Senha</label>
                    <input type="password" class="form-control" id="confirm-password">
                </div>
                <!-- Botão para salvar a alteração da senha -->
                <button type="submit" class="btn btn-primary">Alterar Senha</button>
            </form>
        </section>
        
        <!-- Plugin de acessibilidade do VLibras para tradução em Libras (Língua Brasileira de Sinais) -->
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper><div class="vw-plugin-top-wrapper"></div></div>
        </div>
    </main>

    <!-- Link para sair da conta (redireciona para a página de login) -->
    <a href="./Login.php" class="btn btn-primary text-center">SAIR DA CONTA</a>

    <!-- Script para controlar o modo escuro da página -->
    <script src="../../Scripts/DarkMode.js"></script>
    
    <!-- Script para alternar a visibilidade da senha -->
    <script>
        // Obtém os elementos de senha e o botão de alternância
        var togglePassword = document.getElementById("togglePassword");
        var passwordInput = document.getElementById("exampleInputPassword1");
        
        // Função para alternar entre exibir e ocultar a senha
        togglePassword.onclick = function() {
            if (passwordInput.type === 'password') {
                passwordInput.setAttribute('type', 'text');
            } else {
                passwordInput.setAttribute('type', 'password');
            }
        }
    </script>
    
    <!-- Script do VLibras para inclusão do plugin de acessibilidade -->
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script> new window.VLibras.Widget('https://vlibras.gov.br/app'); </script>
</body>

</html>
