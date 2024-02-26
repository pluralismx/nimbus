<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?=base_url?>/styles.css" type="text/css">
    <script src="https://unpkg.com/vue@2.6.14/dist/vue.min.js"></script>
    <script src="<?=base_url?>js/main.js" defer></script> 
    <title>Nimbus CRM - Pluralis</title>
</head>
<body>
    <div id="dashboard" class="grid-template">
        <!-- Tool bar -->
        <div class="toolbar">
            <ul class="toolbar-tools">
                <li>
                    <label>Sitio: &nbsp;</label>
                    <select id='select-website' v-model="id_website">
                        <?php foreach($sites as $site): ?>
                            <option value='<?=$site['id_website']?>'><?=$site['name']?></option>
                        <?php endforeach; ?>
                    <select>
                </li>
                <li class="tools-li" id="menu-scripts">Notas</li>
                <li class="tools-li" id="menu-leads">Prospectos</li>  
                <li class="tools-li" id="menu-email">Email</li>
            </ul>
            <ul class="toolbar-user">
                <li><a href="<?=base_url?>user/logout">Cerrar sesión</a></li>
            </ul>
        </div>
        <!-- Tool bar mobile -->
        <div class="toolbar-mobile">
            <div class="top-tools">
                <ul>
                <img src="assets/images/logotipo.png" alt="Pluralis" width="100px" style="margin-top: .5rem;">                    
                </ul>
                <ul>
                    <li>
                        <select id='mobile-select-website' v-model="id_website">
                            <?php foreach($sites as $site): ?>
                                <option value='<?=$site['id_website']?>'><?=$site['name']?></option>
                            <?php endforeach; ?>
                        <select>
                    </li>
                </ul>
            </div>
            <div class="bottom-tools">
                <ul>
                    <li onclick="toogleContent('mobile-notes')"><img src="assets/images/white-note.png" alt="notes" width="30px"></li>
                    <li onclick="toogleContent('mobile-leads')"><img src="assets/images/white-funel.png" alt="leads" width="30px"></li>
                    <li onclick="toogleContent('mobile-email')"><img src="assets/images/white-email.png" alt="email" width="30px"></li>
                    <li><a href="<?=base_url?>user/logout"><img src="assets/images/white-logout.png" alt="logout" width="30px"></a></li>
                </ul>
            </div>            
        </div>