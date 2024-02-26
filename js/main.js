var app = new Vue({
    el: '#dashboard',
    data(){
        return{
            // DASHBOARD DATA
            id_website: null,
            dashboard_json: null,
            website: null,

            // Notes data
            notes: [],
            note_title: null,
            note_content: null,
            note_title_updated: '',
            note_content_updated: '',
            note_update_selection: '',

			// Table data
			leads: [],
			pageSize: 10,
			currentPage: 1,
            id_lead: null,
            lead_status: [
                'Identificación',
                'Presentación',
                'Cotización',
                'Negociación',
                'Cierre'
            ],
            lead_name: null,
            lead_content: null,
            lead_date: null,
            lead_notes_json: null,
            lead_note: null,

            // Images data
            images_json: null,

            // Email template data
            mailer: '',
            password: '',
            email_subject: '',
            correo_individual: '',
            switch: '',
            logo: 'logo-template.png',
            banner: 'banner-template.png',
            features: 'ilustration-template.png',
            benefits: 'ilustration-template.png',
            footer: 'logo-template.png',
            feature_a: 'first feature',
            feature_b: 'second feature',
            feature_c: 'third feature',
            benefit_a: 'first benefit',
            benefit_b: 'second benefit',
            benefit_c: 'third benefit',
            // News letter template
            title: 'LOREM IPSUM DOLET',
            content: 
            `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Consequuntur adipisci reprehenderit mollitia optio est 
            consequatur iusto voluptate commodi modi porro, numquam cum eius ipsum 
            cupiditate expedita recusandae nemo alias vel ab, nulla earum molestias. 
            Ipsum quas commodi ad odio eos officia sed dicta suscipit vitae? Quae libero 
            dolore natus excepturi?`,
            picture_a: 'ilustration-template.png',
            picture_b: 'ilustration-template.png',
            sidetext_a: 
            `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, totam eos. Veniam, harum 
            illum. Aperiam obcaecati porro, asperiores praesentium quae odio! Quas dolorum beatae ea provident iste 
            omnis reiciendis amet.`,
            sidetext_b: 
            `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, totam eos. Veniam, harum illum. 
            Aperiam obcaecati porro, asperiores praesentium quae odio! Quas dolorum beatae ea provident iste omnis reiciendis amet.`,
            // Template general info
            facebook_link: '',
            instagram_link: '',
            youtube_link: '',
            slogan: 'Pluralis digital marketing',
            address: 'Ave de las plazas 2416-D, Otay Tijuana',
            email: 'contacto@pluralis.com.mx',
            phone: '+526642522024',
            // Email theme list
            email_themes: {
                Goldstone: '#630006',
                Jasper: '#a00f16',
                Carnelian: '#ba4a00',
                Aventurine: '#e48600',
                Amethyst: '#4d1564',
                Garnet: '#780132',
                Dumortierte: '#12376a',
                Jadeite: '#037e99',
                Jade: '#25654e',
                Apatite: '#003e48'
            },
            template: '',
            theme: '#038399',
            custom_email: undefined,
            // Email recipients
            email_list: [],
            failed_emails: [],
            design: ''
        }
    },
    computed: {
        templateX(){
            var template;
            switch(this.template){
                case 'promotional':
                    template = `
                    <!DOCTYPE htmlPUBLIC>
                    <html xmlns="http://www.w3.org/1999/xhtml" lang="es">
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset="utf-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta name="color-scheme" content="light dark">
                        <meta name="supported-color-schemes" content="light dark">
                        <style>
                        @media only screen and (max-width: 600px){
                            .webkit {
                                width: 100% !important;
                                max-width: 600px !important;
                            }
                            table {
                                font-size: 12px !important;
                            }
                        }
                        </style>
                    </head>
                    <body style="margin:0px;background-color:#f7f9fc;font-family:Arial, Helvetica, sans-serif;">
                        <center class="wrapper">
                        <div class="webkit" style="width:600px;padding-bottom:60px;">
                            <!-- Header -->
                            <table role="header" style="border-spacing:0;font-size:18px;width: 100%;" align="center" cellspacing="0">
                            <tr>
                                <td style="border-spacing:0;background-color: ${this.theme}; text-align: center; padding: 16px;">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.logo}" alt="Logo" width="180px">
                                </td>
                            </tr>
                            </table>
                            <!-- Banner -->
                            <table role="banner" style="border-spacing:0;font-size:18px;width: 100%;">
                            <tr>
                                <td style="border-spacing:0;padding:0px">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.banner}" alt="Banner" width="100%"/>
                                </td>
                            </tr>
                            </table>
                            <!-- Offers -->
                            <table role="offers" style="border-spacing:0;font-size:18px;width: 100%; background-color: #FFFFFF;" cellspacing="0">
                            <tr>
                                <td align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px; width: 50%;">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.features}" alt="illustration" width="70%"/>
                                <h3>Caracteristicas</h3>
                                <ul style="list-style: none; padding: 0; line-height: 1.5;">
                                    <li style="color: black;">${this.feature_a}</li>
                                    <li style="color: black;">${this.feature_b}</li>
                                    <li style="color: black;">${this.feature_c}</li>
                                </ul>
                                </td>
                                <td align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px; width: 50%;">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.benefits}" alt="illustration" width="70%"/>
                                <h3>Beneficios</h3>
                                <ul style="list-style: none; padding: 0; line-height: 1.5;">
                                    <li style="color: black;">${this.benefit_a}</li>
                                    <li style="color: black;">${this.benefit_b}</li>
                                    <li style="color: black;">${this.benefit_c}</li>
                                </ul>
                                </td>
                            </tr>
                            </table>
                            <!-- Social -->
                            <table width="100%" style="border-spacing:0;font-size:18px;background-color: ${this.theme};" cellspacing="0">
                            <tr>
                                <td align="center" style="border-spacing:0;padding: 16px;">
                                <p style="color: #ffffff;">Conectese con nosotros</p>
                                <a href="${this.facebook_link}"><img src="https://crm.pluralis.com.mx/assets/images/white-facebook.png" alt="facebook" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
                                <a href="${this.instagram_link}"><img src="https://crm.pluralis.com.mx/assets/images/white-instagram.png" alt="instagram" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
                                <a href="${this.youtube_link}"><img src="https://crm.pluralis.com.mx/assets/images/white-youtube.png" alt="youtube" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
                                </td>
                            </tr>
                            </table>
                            <!-- Footer -->
                            <table width="100%" style="border-spacing:0;font-size:18px;background-color: #efefef;" cellspacing="0">
                            <tr>
                                <td align="center" style="border-spacing:0;padding: 16px;">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.footer}" alt="Logo" width="140px">
                                <p style="color: black;">${this.slogan}</p>
                                <p style="color: black;">${this.address}</p>
                                <p><a href="mailto:${this.email}">${this.email}</a></p>
                                <p><a href="tel:${this.phone}">Call: ${this.phone}</a></p>
                                </td>
                            </tr>
                            </table>
                            <!-- Tab -->
                            <table width="100%" cellspacing="0" style="border-spacing:0;font-size:18px;">
                            <tr>
                                <td style="border-spacing:0;height: 24px; background-color: ${this.theme};">
                                </td>
                            </tr>
                            </table>
                        </div>
                        </center>
                    </body>
                    </html>
                    `;
                break;
                case 'newsletter':
                    template = `
                    <!DOCTYPE htmlPUBLIC>
                    <html xmlns="http://www.w3.org/1999/xhtml" lang="es">
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset="utf-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta name="color-scheme" content="light dark">
                        <meta name="supported-color-schemes" content="light dark">
                        <style type="text/css">
                        @media only screen and (max-width: 600px) {
                            .webkit {
                                width: 100% !important;
                                max-width: 600px !important;
                            }
                            .stacked {
                                display: block;
                                width: 100%;
                                padding-right: 0px !important;
                                padding-left: 0px !important;
                            }
                            .stacked img{
                                width: 80%;
                                padding-right: 0px !important;
                                padding-left: 0px !important;
                            }
                            .stacked:not(:first-child){
                                padding-top: 0px !important;
                            }
                        }
                        </style>
                    </head>
                    <body style="margin:0px;background-color:#f7f9fc;font-family:Arial, Helvetica, sans-serif;">
                        <center class="wrapper">
                        <div class="webkit" style="width:600px;padding-bottom:60px;">
                            <!-- Header -->
                            <table role="header" style="border-spacing:0;font-size:18px;width: 100%;" align="center" cellspacing="0">
                            <tr>
                                <td style="border-spacing:0;background-color: ${this.theme}; text-align: center; padding: 16px;">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.logo}" alt="Logo" width="180px">
                                </td>
                            </tr>
                            </table>
                            <!-- Banner -->
                            <table role="banner" style="border-spacing:0;font-size:18px;width: 100%; align="center" cellspacing="0">
                            <tr>
                                <td style="border-spacing:0;padding:0px;">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.banner}" alt="Banner" width="100%"/>
                                </td>
                            </tr>
                            </table>
                            <!-- Introduction -->
                            <table style="font-size:18px; background-color: #FFFFFF">
                            <tr>
                                <td>
                                <h1 style="padding: 16px; padding-bottom: 1rem; color: black; 0px; text-align: center;">${this.title}</h1>
                                <p style="padding: 16px; padding-top: 0px; color:black; line-height: 1.5;">${this.content}</p>
                                </td>
                            </tr>
                            </table>
                            <!-- Explanation 1-->
                            <table role="offers" style="border-spacing:0;font-size:18px;width: 100%; background-color: #FFFFFF;" cellspacing="0">
                            <tr>
                                <td class="stacked" align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px; padding-left: 8px; padding-right: 8px;" width="50%" valign="top">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.picture_a}" alt="illustration" width="100%"/>
                                </td>
                                <td class="stacked" align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px;" valign="top">
                                <p style="padding: 16px; padding-top: 0px; line-height: 1.5; color: black;">${this.sidetext_a}</p>
                                </td>
                            </tr>
                            </table>
                            <!-- Explanation 2-->
                            <table role="offers" style="border-spacing:0;font-size:18px;width: 100%; background-color: #FFFFFF;" cellspacing="0">
                            <tr>
                                <td class="stacked" align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px; padding-left: 8px; padding-right: 8px;" width="50%" valign="top">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.picture_b}" alt="illustration" width="100%"/>
                                </td>
                                <td class="stacked" align="center" style="border-spacing:0;padding-top: 32px; padding-bottom: 16px;" valign="top">
                                <p style="padding: 16px; padding-top: 0px; line-height: 1.5; color: black;">${this.sidetext_b}</p>
                                </td>
                            </tr>
                            </table>
                            <!-- Social -->
                            <table width="100%" style="border-spacing:0;font-size:18px;background-color: ${this.theme};" cellspacing="0">
                            <tr>
                                <td align="center" style="border-spacing:0;padding: 16px;">
                                <p style="color: #ffffff;">Connect with us</p>
                                <a href="${this.facebook_link}"><img src="https://crm.pluralis.com.mx/assets/images/white-facebook.png" alt="facebook" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
                                <a href="${this.instagram_link}"><img src="https://crm.pluralis.com.mx/assets/images/white-instagram.png" alt="instagram" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
                                <a href="${this.youtube_link}"><img src="https://crm.pluralis.com.mx/assets/images/white-youtube.png" alt="youtube" width="30" style="margin-left: 4px; margin-right: 4px;"></a>
                                </td>
                            </tr>
                            </table>
                            <!-- Footer -->
                            <table width="100%" style="border-spacing:0;font-size:18px;background-color: #efefef;" cellspacing="0">
                            <tr>
                                <td align="center" style="border-spacing:0;padding: 16px;">
                                <img src="https://crm.pluralis.com.mx/uploads/images/${this.footer}" alt="Logo" width="140px">
                                <p style="color: black;">${this.slogan}</p>
                                <p style="color: black;">${this.address}</p>
                                <p><a href="mailto:${this.email}">${this.email}</a></p>
                                <p><a href="tel:${this.phone}">Call: ${this.phone}</a></p>
                                </td>
                            </tr>
                            </table>
                            <!-- Tab -->
                            <table width="100%" cellspacing="0" style="border-spacing:0;font-size:18px;">
                            <tr>
                                <td style="border-spacing:0;height: 24px; background-color: ${this.theme};">
                                </td>
                            </tr>
                            </table>
                        </div>
                        </center>
                    </body>
                    </html>
                    `;
                break;
            }
            if(typeof this.custom_email !== 'undefined'){
                return btoa(this.custom_email);
            }else{
                var template_b64 = btoa(template);
                return template_b64;
            }
        },
        totalPages() {
            if(this.leads.length > 0){
                return Math.ceil(this.leads.length / this.pageSize);
            }else{
                return 1;
            }
            
        },
        displayedData(){
            if(this.leads.length >= 0){
                var start = (this.currentPage - 1) * this.pageSize;
                var end = start + this.pageSize;
                return this.leads.slice(start, end);
            }
        }
    },
    methods:{
        onload() {
            let website = document.querySelector('#select-website');
            website.selectedIndex = 0;
            this.id_website = website.value;
            this.dashboardData();
        },

        // Dashboard
        dashboardData() {
            var vue = this;
            var hr = new XMLHttpRequest();
            var url = "dashboard/dashboardData";
            var id_website = this.id_website;
            var vars="id_website="+id_website;

            hr.open("POST", url, true);
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hr.onreadystatechange = function(){
                if(hr.readyState == 4 && hr.status == 200){
                    vue.dashboard_json = JSON.parse(hr.responseText);

                    vue.website = vue.dashboard_json.websites;

                    vue.notes = vue.dashboard_json.notes;

                    vue.leads = vue.dashboard_json.leads;
                }
            }
            hr.send(vars);
            
        },

        // Notes
        saveNotes() {
            let vue = this;
            let id_website = this.id_website;
            let note_title = this.note_title;
            let note_content = this.note_content;

            if(note_title == null || note_content == null){
                // document.querySelector('.note-saved-toast').style.zIndex = 110;
                document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                document.querySelector('.note-saved-toast').style.color = "#ffffff";
                document.querySelector('.note-saved-toast').innerHTML = "<p>No puedes dejar campos vacios</p>";
                document.querySelector('.note-saved-toast').classList.add('active');
                vue.dashboardData();
                setTimeout(() => {
                    document.querySelector('.note-saved-toast').classList.remove('active');
                    // document.querySelector('.note-saved-toast').style.zIndex = 100;
                  }, 2000);
            }else{
                let hr = new XMLHttpRequest();
                let url = 'note/save';
                let vars = 'id_website='+id_website+'&note_title='+note_title+'&note_content='+note_content;

                hr.open('POST', url, true);
                hr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                hr.onreadystatechange = function (){
                    if(hr.readyState === 4 && hr.status === 200){
                        vue.note_title = null;
                        vue.note_content = null;
                        // document.querySelector('.note-saved-toast').style.zIndex = 110;
                        document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Nota guardada correctamente</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        vue.dashboardData();
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                            // document.querySelector('.note-saved-toast').style.zIndex = 100;
                            }, 2000);
                    }
                }
                hr.send(vars);
            }
        },
        deleteNote(id) {
            var vue = this;
            let xr = new XMLHttpRequest();
            let formData = new FormData();
            let url = 'note/delete';

            formData.append('id_note', id);

            xr.open("POST", url, true);
            xr.onreadystatechange = function() {
                if (xr.readyState === 4 && xr.status === 200) {
                    if(xr.responseText == 'success'){
                        // document.querySelector('.note-saved-toast').style.zIndex = 110;
                        document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Se eliminó la nota</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        vue.dashboardData();
                        if(setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                        }, 2000)){
                            document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }
                        
                    }else{
                        // document.querySelector('.note-saved-toast').style.zIndex = 110;
                        document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>No se pudo eliminar la nota</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                        }, 2000);
                        document.querySelector('.note-saved-toast').style.zIndex = 100;
                    }
                }
            }
            xr.send(formData);
            
        },
        updateNote(id) {
            var vue = this;
            let xr = new XMLHttpRequest();
            let formData = new FormData();
            let url = 'note/update';
            let title = document.querySelector('#note_title_' + id).value;
            let content = document.querySelector('#note_content_' + id).value;
            
            console.log(id);

            formData.append('id_note', id);
            formData.append('title', title);
            formData.append('content', content);

            xr.open('POST', url, true);
            xr.onreadystatechange = function(){
                if(xr.readyState === 4 && xr.status === 200){
                    if(xr.responseText == 'success'){
                        // document.querySelector('.note-saved-toast').style.zIndex = 110;
                        document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Se actualizó la nota</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        vue.dashboardData();
                        if(setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                        }, 2000)){
                            document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }
                        
                    }else{
                        // document.querySelector('.note-saved-toast').style.zIndex = 110;
                        document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>No se pudo actualizar la nota</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                        }, 2000);
                        document.querySelector('.note-saved-toast').style.zIndex = 100;
                    }
                }
            }
            xr.send(formData);
        },

        // Images
        openImageModal() {
            document.querySelector(".modal-image-container").style.display = "flex";
            let vue = this;
            let id_website = vue.id_website;
            let hr = new XMLHttpRequest();
            let url = 'image/getImages';
            let vars = 'id_website='+id_website;

            hr.open("POST", url, true);
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hr.onreadystatechange = function(){
                if(hr.readyState === 4 && hr.status === 200){
                    console.log(hr.responseText);
                    vue.images_json = JSON.parse(hr.responseText);
                    console.log(vue.images_json);
                }
            }
            hr.send(vars);



        },
        closeImageModal() {
            document.querySelector(".modal-image-container").style.display = "none";
        },
        uploadImage() {
            let vue = this;
            let id_website = this.id_website;
            let input = document.getElementById('input_image');
            let image = input.files[0];
            let hr = new XMLHttpRequest();
            let url = 'image/uploadImage';
            let formData = new FormData();
          
            formData.append('image', image);
            formData.append('id_website', id_website);

            console.log(formData);
          
            hr.open("POST", url, true);
            hr.onreadystatechange = function() {
                if (hr.readyState === 4 && hr.status === 200) {
                    console.log(hr.responseText);
                    vue.openImageModal();    
                }
            }
            hr.send(formData);
        },
        deleteImage(id){
            
            var vue = this;
            let img_id = id;
            let url = "image/deleteImage";
            let vars = "img_id="+img_id;
            let xr = new XMLHttpRequest();
            xr.open('POST', url, true);
                xr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xr.onreadystatechange = function (){
                    if(xr.readyState === 4 && xr.status === 200){
                        if(xr.responseText === "success"){
                            document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                            document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                            document.querySelector('.note-saved-toast').innerHTML = "<p>Se eliminó la imagen</p>";
                            document.querySelector('.note-saved-toast').classList.add('active');
                            vue.openImageModal();
                            setTimeout(() => {
                                document.querySelector('.note-saved-toast').classList.remove('active');
                                }, 2000);
                        }else if(xr.responseText === "failed"){

                            document.querySelector('.note-saved-toast').style.backgroundColor = "red";
                            document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                            document.querySelector('.note-saved-toast').innerHTML = "<p>No se pudo eliminar la imagen</p>";
                            document.querySelector('.note-saved-toast').classList.add('active');
                            setTimeout(() => {
                                document.querySelector('.note-saved-toast').classList.remove('active');
                                }, 2000);
                        }

                    }
                }

            xr.send(vars);

        },
        setSwitchValue(x) {
            this.switch = x;
        },
        selectImage(image_name) {
            let vue = this;
            let input_image = document.querySelector('#input_selected_image');

            switch(this.switch){
                case "logo":
                    input_image.value = image_name;
                    document.querySelector('#email_input_logo').value = image_name;
                    vue.logo = image_name;
                break;

                case "banner":
                    input_image.value = image_name;
                    document.querySelector('#email_input_banner').value = image_name;
                    vue.banner = image_name;
                break;

                case "features":
                    input_image.value = image_name;
                    document.querySelector('#email_input_features').value = image_name;
                    vue.features = image_name;
                break;

                case "benefits":
                    input_image.value = image_name;
                    document.querySelector('#email_input_benefits').value = image_name;
                    vue.benefits = image_name;
                break;

                case "footer":
                    input_image.value = image_name;
                    document.querySelector('#email_input_footer').value = image_name;
                    vue.footer = image_name;
                break;

                case "picture_a":
                    input_image.value = image_name;
                    document.querySelector('#email_input_picture_a').value = image_name;
                    vue.picture_a = image_name;
                break;

                case "picture_b":
                    input_image.value = image_name;
                    document.querySelector('#email_input_picture_b').value = image_name;
                    vue.picture_b = image_name;
                break;
            }

            document.querySelector('#image_selection_accepted').addEventListener('click', function(){
                input_image.value = '';
                vue.closeImageModal();
            });

        },
    
        // Email
        emailContent(email_array, template) {

            let vue = this;
            let design = "";
            this.email_list = [];
            
            if(email_array[0] !=="Individual" && email_array[0] !=="Todos"){
                if(template != 'custom'){
                    design = this.template;
                    for(let e=0; e < email_array.length; e++){
                        for(let l=0; l < vue.leads.length; l++){
                            if(vue.leads[l].status == email_array[e]){
                                this.email_list.push(vue.leads[l].email);
                            }
                        }
                    }
                }else{
                    design = 'custom';
                    for(let e=0; e < email_array.length; e++){
                        for(let l=0; l < vue.leads.length; l++){
                            if(vue.leads[l].status == email_array[e]){
                                this.email_list.push(vue.leads[l].email);
                            }
                        }
                    }
                }
            }else if(email_array[0] === "Individual"){
                if(template != 'custom'){
                    vue.email_list.push(this.correo_individual);
                    design = this.template;
                }else{
                    vue.email_list.push(this.correo_individual);
                    design = 'custom';
                }
            }else if(email_array[0] === "Todos"){
                if(template != 'custom'){
                    for(let i=0; i <= vue.leads.length; i++){
                        vue.email_list.push(vue.leads[i].email);
                    }
                    design = this.template;
                }else{
                    for(let i=0; i <= vue.leads.length; i++){
                        vue.email_list.push(vue.leads[i].email);
                    }
                    design = 'custom';
                } 
            }

        },
        sendEmail() {
            let vue = this;
            let mailer = this.website.email;
            let password = this.website.email_password;
            let subject = this.email_subject;
            let recipients = this.email_list;
            let raw_content = this.templateX;
            let html_content = atob(raw_content);
            let sent_mails = document.querySelector('#sent-mails');
            let email_count = 0;
            let failed_emails = [];

            document.querySelector("#total-mails").innerHTML = recipients.length;
            document.querySelector(".modal-email-status").style.display = "flex";
        
            for(let c=0; c < recipients.length; c++){

                let current_email = recipients[c];
                let vars = "current_email="+current_email+"&content="+html_content+"&subject="+subject+"&email="+mailer+"&password="+password;
                let url = "email/sendCampaign";
                let hr = new XMLHttpRequest();
                
                hr.open("POST", url, true);
                hr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                hr.onreadystatechange = function (){
                    if(hr.readyState === 4 && hr.status === 200){
                        console.log(hr.responseText);
                        if(hr.responseText === "success"){
                            email_count++;
                            sent_mails.innerHTML = email_count; 
                        }else{
                            failed_emails.push(current_email);
                            vue.failed_emails.push(hr.responseText);
                        }

                        if (email_count + failed_emails.length === recipients.length) {
                            document.querySelector('#email-sending-status').style.display = 'none';
                            document.querySelector('#email-delivery-results').style.display = "flex";
                            document.querySelector('#sent-emails-result').innerHTML = email_count;
                            document.querySelector('#failed-emails-result').innerHTML = failed_emails.length;
                        }
                    }
                }
                hr.send(vars);
            }
            sent_mails.innerHTML = "0";
            let checkboxes = document.querySelectorAll('input[name="recipients"]');
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = false;
            });
            let input = document.querySelector('#correo_individual');
            input.value = '';
            
        },
        closeEmailModal(){
            document.querySelector('.modal-email-status').style.display = "none";
            document.querySelector('#email-delivery-results').style.display = "none";
            document.querySelector('#email-sending-status').style.display = "block";
        },

        //Table
        displayAddLeadForm() {

            let table = document.querySelector('.lead-table');
            let body = table.getElementsByTagName('tbody');
            let rowExists = document.querySelector('.add-lead-row');
            let menu = document.querySelector('.lead-table-options');

            if(rowExists == undefined){

                let add = document.querySelector('#span-add-lead');
                add.style.display = 'none';

                let okay = document.createElement('span');
                okay.innerHTML = 'agregar';
                okay.setAttribute('id', 'lead-table-option-okay');
                okay.addEventListener('click', this.addLeadManually);

                let separator = document.createElement('span');
                separator.innerHTML = ' | ';
                separator.setAttribute('id', 'lead-table-option-separator');
            
                let cancel = document.createElement('span');
                cancel.innerHTML = ' cancelar';
                cancel.addEventListener('click', this.displayAddLeadForm);
                cancel.setAttribute('id', 'lead-table-option-cancel');

                menu.appendChild(okay);
                menu.appendChild(separator);
                menu.appendChild(cancel);

                let row = document.createElement('tr');
                row.classList.add('add-lead-row');
            
                let id = document.createElement('td');
                id.innerHTML = '#';
            
                let name = document.createElement('td');
                let input_name = document.createElement('input');
                input_name.classList.add('input-manual-lead');
                input_name.setAttribute('id', 'manual-lead-name');
                name.appendChild(input_name);
                
                let phone = document.createElement('td');        
                let input_phone = document.createElement('input');
                input_phone.classList.add('input-manual-lead');
                input_phone.setAttribute('id', 'manual-lead-phone');
                phone.appendChild(input_phone);
            
                let email = document.createElement('td');
                let input_email = document.createElement('input');
                input_email.classList.add('input-manual-lead');
                input_email.setAttribute('id', 'manual-lead-email');
                email.appendChild(input_email);
            
                let status = document.createElement('td');
                let select_status = document.createElement('select');
                let select_status_option = document.createElement('option');
                select_status_option.innerHTML = 'Nuevo';
                select_status_option.setAttribute('value', 'Nuevo');
                select_status.classList.add('lead-status');
                select_status.setAttribute('id', 'manual-lead-status');
                select_status.style.width = '116px';
                select_status.appendChild(select_status_option);
                status.appendChild(select_status);
            
                let notes = document.createElement('td');
                notes.innerHTML = 'n/a';
            
                let date = document.createElement('td');
                date.innerHTML = 'Hoy';
            
                row.appendChild(id);
                row.appendChild(name);
                row.appendChild(phone);
                row.appendChild(email);
                row.appendChild(status);
                row.appendChild(notes);
                row.appendChild(date);
        
                let firstRow = body[0].getElementsByTagName("tr")[0];
                body[0].insertBefore(row, firstRow);
            }else{

                let add = document.querySelector('#span-add-lead');
                add.style.display = 'inline-block';

                let deleteRow = document.querySelector('.add-lead-row');
                deleteRow.remove();

                let okay = document.querySelector('#lead-table-option-okay');
                okay.remove();

                let separator = document.querySelector('#lead-table-option-separator');
                separator.remove();

                let cancel = document.querySelector('#lead-table-option-cancel');
                cancel.remove();

            }
        },
        addLeadManually() {

            let vue = this;

            let id_website = this.id_website;
            let name = document.querySelector('#manual-lead-name');
            let phone = document.querySelector('#manual-lead-phone');
            let email = document.querySelector('#manual-lead-email');
            let status = document.querySelector('#manual-lead-status');
            let formData = new FormData();

            if(id_website == null || name.value == '' || phone.value == '' || email.value == '' || status.value == ''){
                document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                document.querySelector('.note-saved-toast').style.color = "#ffffff";
                document.querySelector('.note-saved-toast').innerHTML = "<p>No puedes dejar campos vacios</p>";
                document.querySelector('.note-saved-toast').classList.add('active');
                setTimeout(() => {
                    document.querySelector('.note-saved-toast').classList.remove('active');
                  }, 2000);              
            }else{
                formData.append('id_website', id_website);
                formData.append('name', name.value);
                formData.append('phone', phone.value);
                formData.append('email', email.value);
                formData.append('status', status.value);
    
    
                let hr = new XMLHttpRequest();
                let url = "lead/addLeadManually";
                
                hr.open("POST", url, true);
                hr.onreadystatechange = function() {
                    if (hr.readyState === 4 && hr.status === 200) {
                        if(hr.responseText == 'success'){
                            document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                            document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                            document.querySelector('.note-saved-toast').innerHTML = "<p>Se añadió el prospecto correctamente</p>";
                            document.querySelector('.note-saved-toast').classList.add('active');
                            vue.displayAddLeadForm();
                            vue.dashboardData();
                            if(setTimeout(() => {
                                document.querySelector('.note-saved-toast').classList.remove('active');
                            }, 2000)){
                                document.querySelector('.note-saved-toast').style.zIndex = 100;
                            }
                        }else if(hr.responseText == 'failed'){
                            document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                            document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                            document.querySelector('.note-saved-toast').innerHTML = "<p>Error al añadir el prospecto</p>";
                            document.querySelector('.note-saved-toast').classList.add('active');
                            setTimeout(() => {
                                document.querySelector('.note-saved-toast').classList.remove('active');
                            }, 2000);
                            document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }
                    }
                }
                hr.send(formData);
            }
        },
        sortIdLead() {
            let column = document.querySelector("#lead_id");

            if(column.classList.contains('desc')){
                this.leads.sort((a, b) => a.id_lead - b.id_lead); 
                column.classList.remove('desc');
            }else{
                this.leads.sort((a, b) => b.id_lead - a.id_lead);
                column.classList.add('desc');
            } 
        },
        sortNameLead() {
            let column = document.querySelector("#lead_name");

            if(column.classList.contains('desc')){
                this.leads.sort((a, b)=>a.name.localeCompare(b.name));
                column.classList.remove('desc');
            }else {
                this.leads.sort((a, b)=>b.name.localeCompare(a.name));
                column.classList.add('desc');
            }
        },
        sortEmailLead() {
            let column = document.querySelector("#lead_email");

            if(column.classList.contains('desc')){
                this.leads.sort((a, b)=>a.email.localeCompare(b.email));
                column.classList.remove('desc');
            }else {
                this.leads.sort((a, b)=>b.email.localeCompare(a.email));
                column.classList.add('desc');
            }          
        },
        sortStatusLead() {
            let column = document.querySelector("#lead_status");

            if(column.classList.contains('desc')){
                this.leads.sort((a, b)=>a.status.localeCompare(b.status));
                column.classList.remove('desc');
            }else {
                this.leads.sort((a, b)=>b.status.localeCompare(a.status));
                column.classList.add('desc');
            }              
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
              this.currentPage++;
            }
        },
        deleteLead(id) {
            var vue = this;
            let formData = new FormData();

            formData.append('id_lead', id);

            let xr = new XMLHttpRequest();
            let url = 'lead/delete';
        
            xr.open('POST', url, true);
            xr.onreadystatechange = function(){
                if(xr.readyState === 4 && xr.status === 200){
                    if(xr.responseText === 'success'){
                        // document.querySelector('.note-saved-toast').style.zIndex = 110;
                        document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Se eliminó el lead</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        vue.dashboardData();
                        if(setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                        }, 2000)){
                            document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }
                        
                    }else if(xr.responseText === 'restricted'){
                        // document.querySelector('.note-saved-toast').style.zIndex = 110;
                        document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Permisos insuficientes</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                        }, 2000);
                        document.querySelector('.note-saved-toast').style.zIndex = 100;
                    }else if(xr.responseText === 'failed'){
                        // document.querySelector('.note-saved-toast').style.zIndex = 110;
                        document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Error al eliminar</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                        }, 2000);
                        document.querySelector('.note-saved-toast').style.zIndex = 100;     
                    }
                }
            }

            xr.send(formData);
        },
        prevPage() {
            if (this.currentPage > 1) {
              this.currentPage--;
            }
        },
        openModal(x, n, c, d) {
            this.lead_name = n;
            this.lead_content = c;
            this.lead_date = d;

            document.querySelector(".modal-container").style.display = "flex";

            var vue = this;
            var hr = new XMLHttpRequest();
            var url = "lead/leadNotes"; //Make a call to the dashboard controller
            vue.id_lead = x;
            var vars="id_lead="+vue.id_lead;

            console.log(vars);

            hr.open("POST", url, true);
            hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            hr.onreadystatechange = function(){
                if(hr.readyState === 4 && hr.status === 200){
                    vue.lead_notes_json = JSON.parse(hr.responseText);
                }
            }
            hr.send(vars);

        },
        closeModal() {
            document.querySelector(".modal-container").style.display = "none";
            this.lead_notes_json = [];
        },
        saveLeadNote() {
            var vue = this;
            
            var hr = new XMLHttpRequest();
            var url = "lead/leadNoteSave";
            var content = vue.lead_note;
            var vars = "content="+content+"&id_lead="+vue.id_lead;

            if(content !== null ){
                hr.open("POST", url, true);
                hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                hr.onreadystatechange = function(){
                    if(hr.readyState == 4 && hr.status == 200){
                        vue.lead_note = null;
                        vue.openModal(vue.id_lead, vue.lead_name, vue.lead_content, vue.lead_date);
                    }
                }
                hr.send(vars);
            }else{
                document.querySelector('.note-saved-toast').style.zIndex = 102;
                document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                document.querySelector('.note-saved-toast').style.color = "#ffffff";
                document.querySelector('.note-saved-toast').innerHTML = "<p>No puedes dejar campos vacios</p>";
                document.querySelector('.note-saved-toast').classList.add('active');
                vue.dashboardData();
                setTimeout(() => {
                    
                    document.querySelector('.note-saved-toast').classList.remove('active');
                  }, 2000);
            }


        },
        updateLeadStatus(id_lead) {
            let vue = this;
            let status = document.querySelector('#select-lead-status'+id_lead).value;
            let url = 'lead/leadStatusUpdate';
            let vars = 'status='+status+'&id_lead='+id_lead;
            let hr = new XMLHttpRequest();

            if(status == 'Identificación' || status == 'Presentación' || status == 'Cotización' || status == 'Negociación' || status == 'Cierre'){
                hr.open('POST', url, true);
                hr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                hr.onreadystatechange = function (){
                    if(hr.readyState === 4 && hr.status === 200){
                        // this.status = '';
                        if(hr.responseText == 'success'){
                            // document.querySelector('.note-saved-toast').style.zIndex = 110;
                            document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                            document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                            document.querySelector('.note-saved-toast').innerHTML = "<p>Se actualizó el status correctamente</p>";
                            document.querySelector('.note-saved-toast').classList.add('active');
                            vue.dashboardData();
                            let inicial = document.querySelector('#option-lead-status');
                            inicial.selected = true;
                            if(setTimeout(() => {
                                document.querySelector('.note-saved-toast').classList.remove('active');
                            }, 2000)){
                                document.querySelector('.note-saved-toast').style.zIndex = 100;
                            }
                            
                        }else{
                            // document.querySelector('.note-saved-toast').style.zIndex = 110;
                            document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                            document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                            document.querySelector('.note-saved-toast').innerHTML = "<p>Hubo un error al actualizar el status</p>";
                            document.querySelector('.note-saved-toast').classList.add('active');
                            setTimeout(() => {
                                document.querySelector('.note-saved-toast').classList.remove('active');
                            }, 2000);
                            document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }
                    }
                }
                hr.send(vars);
            }else{
                document.querySelector('.note-saved-toast').style.backgroundColor = "var(--warn)";
                document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                document.querySelector('.note-saved-toast').innerHTML = "<p>Hubo un error al actualizar el status</p>";
                document.querySelector('.note-saved-toast').classList.add('active');
                setTimeout(() => {
                    document.querySelector('.note-saved-toast').classList.remove('active');
                }, 2000);            
            }
        },
        editLeadName(id){
            let old_name = document.querySelector("#lead-name-data"+id);
            old_name.style.display="none";
            let new_name = document.querySelector("#lead-name-edit"+id);
            new_name.style.display = "table-cell";
        },
        updateLeadName(id){
            var vue = this;
            let updated_name = document.querySelector("#updated-name"+id).value;
            let hr = new XMLHttpRequest();
            let url = 'lead/changeName';
            let vars = 'id_lead='+id+'&updated_name='+updated_name;

            hr.open('POST', url, true);
            hr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            hr.onreadystatechange = function (){
                if(hr.readyState === 4 && hr.status === 200){
                    console.log(hr.responseText);
                    if(hr.responseText === "success"){
                        document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Se actualizó el nombre</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        document.querySelector("#lead-name-edit"+id).style.display = "none";
                        document.querySelector("#lead-name-data"+id).style.display = "table-cell";
                        vue.dashboardData();
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                            // document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }, 2000);
                    }else if(hr.responseText === "failed"){
                        document.querySelector('.note-saved-toast').style.backgroundColor = "red";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Se actualizó el lead</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        vue.dashboardData();
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                            // document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }, 2000);
                    }
                }
            }
            hr.send(vars);
            
        },
        editLeadPhone(id){
            let old_phone = document.querySelector("#lead-phone-data"+id);
            old_phone.style.display="none";
            let new_phone = document.querySelector("#lead-phone-edit"+id);
            new_phone.style.display = "table-cell";
        },
        updateLeadPhone(id){
            var vue = this;
            let updated_phone = document.querySelector("#updated-phone"+id).value;
            let hr = new XMLHttpRequest();
            let url = 'lead/changePhone';
            let vars = 'id_lead='+id+'&updated_phone='+updated_phone;
            console.log(vars);
            hr.open('POST', url, true);
            hr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            hr.onreadystatechange = function (){
                if(hr.readyState === 4 && hr.status === 200){
                    if(hr.responseText === "success"){
                        document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Se actualizó el teléfono</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        document.querySelector("#lead-phone-edit"+id).style.display = "none";
                        document.querySelector("#lead-phone-data"+id).style.display = "table-cell";
                        vue.dashboardData();
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                            // document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }, 2000);
                    }else if(hr.responseText === "failed"){
                        document.querySelector('.note-saved-toast').style.backgroundColor = "red";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Se actualizó el lead</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        vue.dashboardData();
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                            // document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }, 2000);
                    }
                }
            }
            hr.send(vars);
        },
        editLeadEmail(id){
            let old_email = document.querySelector("#lead-email-data"+id);
            old_email.style.display="none";
            let new_email = document.querySelector("#lead-email-edit"+id);
            new_email.style.display = "table-cell";
        },
        updateLeadEmail(id){
            var vue = this;
            let updated_email = document.querySelector("#updated-email"+id).value;
            let hr = new XMLHttpRequest();
            let url = 'lead/changeEmail';
            let vars = 'id_lead='+id+'&updated_email='+updated_email;

            hr.open('POST', url, true);
            hr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            hr.onreadystatechange = function (){
                if(hr.readyState === 4 && hr.status === 200){
                    console.log(hr.responseText);
                    if(hr.responseText === "success"){
                        document.querySelector('.note-saved-toast').style.backgroundColor = "greenyellow";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Se actualizó el lead</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        document.querySelector("#lead-email-edit"+id).style.display = "none";
                        document.querySelector("#lead-email-data"+id).style.display = "table-cell";
                        vue.dashboardData();
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                            // document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }, 2000);
                    }else if(hr.responseText === "failed"){
                        document.querySelector('.note-saved-toast').style.backgroundColor = "red";
                        document.querySelector('.note-saved-toast').style.color = "var(--shadows)";
                        document.querySelector('.note-saved-toast').innerHTML = "<p>Se actualizó el lead</p>";
                        document.querySelector('.note-saved-toast').classList.add('active');
                        vue.dashboardData();
                        setTimeout(() => {
                            document.querySelector('.note-saved-toast').classList.remove('active');
                            // document.querySelector('.note-saved-toast').style.zIndex = 100;
                        }, 2000);
                    }
                }
            }
            hr.send(vars);
        },
    },
    mounted(){
        this.onload();
    },
    watch: {
        feature_a: function(){
            encodedFeatureA();
        }
    }
});

/*-----------------------------------
            Vanilla JS
------------------------------------*/

/* Layout */
function toogleContent(display){
    switch(display){
        case "leads": 
            document.querySelector(".lead-table").style.display = "table";
            document.querySelector(".email-container").style.display = "none";
            document.querySelector(".lead-table-options").style.display = "inline-block";
        break;

        case "email":
            document.querySelector(".lead-table-options").style.display = "none";
            document.querySelector(".lead-table").style.display = "none";
            document.querySelector(".lead-table").style.display = "none";
            document.querySelector(".email-container").style.display = "grid";
            
        break;

        case "mobile-leads":
            document.querySelector(".mobile-lead-table").style.display = "table";
            document.querySelector(".mobile-email-container").style.display = "none";
            document.querySelector(".lead-table-options").style.display = "inline-block";
        break;

        case "mobile-email":
            document.querySelector(".mobile-lead-table").style.display = "none";
            document.querySelector(".mobile-email-container").style.display = "block";
            document.querySelector(".lead-table-options").style.display = "none";
        break;

        case "mobile-notes":
            
            if(document.querySelector(".grid-template").classList.contains('no-notes')){
                document.querySelector(".grid-template").classList.remove('no-notes');
            }else{
                document.querySelector(".grid-template").classList.add('no-notes');
            }
        break;
    }   
}

/* Notes */
function toggleNotes() {
    
    let notes = document.querySelector('.notes-container');
    let template = document.querySelector('.grid-template');

    if(notes.classList.contains('active') && template.classList.contains('active')){
        notes.classList.remove('active');
        template.classList.remove('active');
    }else{
        notes.classList.add('active');
        template.classList.add('active');
    }
}

function copyToClipboard(textarea) {
    var copyText = document.getElementById(textarea);
    copyText.select();

    try {
        // Intenta escribir en el portapapeles
        var successful = document.execCommand('copy');
        if (successful) {
            // Operación de escritura exitosa
            showCopySuccessMessage();
        } else {
            // Operación de escritura fallida
            console.error('No se pudo copiar el texto al portapapeles.');
        }
    } catch (err) {
        // Manejar errores
        console.error('Error al intentar copiar al portapapeles:', err);
    }
}

/* Leads */

function modalMessageToggle(){
    let element = document.querySelector('.modal-body-message-body');
    let notes = document.querySelector('.modal-body-notes');

    if(element.classList.contains('contracted')){
        element.classList.remove('contracted');
        notes.style.height = "50%";
        
    }else{
        element.classList.add('contracted');
        notes.style.height = "82%";
    }
}

/* Email */
function emailMobilePreview() {
    let preview = document.querySelector('#iframe-preview');
    preview.style.width = '320px';
}

function emailDesktopPreview() {
    let preview = document.querySelector('#iframe-preview');
    preview.style.width = '100%';
}

function emailCustom() {
    let email_setup = document.querySelector('.email-setup');
    let email_recipients = document.querySelector('.email-recipients');
    let email_editor = document.querySelector('.email-custom-editor-container');
    let preview = document.querySelector('#iframe-preview');
    preview.style.marginTop = '33px'; 

    // app.custom_email = 'Vista previa...';

    email_setup.classList.remove('active');
    email_setup.classList.add('hidden');
    email_editor.classList.add('active');
    email_recipients.classList.remove('active');
    email_recipients.classList.add('hidden');
    
}

function emailTemplate() {
    let email_setup = document.querySelector('.email-setup');
    let email_editor = document.querySelector('.email-custom-editor-container');
    let email_recipients = document.querySelector('.email-recipients');
    let preview = document.querySelector('#iframe-preview');
    preview.style.marginTop = '0'; 

    app.custom_email = undefined;

    email_setup.classList.remove('hidden');
    email_setup.classList.add('active');
    email_editor.classList.remove('active');
    email_recipients.classList.remove('active');
    email_recipients.classList.add('hidden');
}

function emailRecipients() {

    let email_recipients = document.querySelector('.email-recipients');
    let email_setup = document.querySelector('.email-setup');
    let email_editor = document.querySelector('.email-custom-editor-container');

    email_setup.classList.remove('active');
    email_setup.classList.add('hidden');
    email_recipients.classList.remove('hidden');
    email_recipients.classList.add('active');
    email_editor.classList.remove('active');
}

function showCopySuccessMessage() {
    var toast = document.querySelector('.note-saved-toast');
    toast.style.backgroundColor = "greenyellow";
    toast.style.color = "var(--shadows)";
    toast.innerHTML = "<p>Texto copiado correctamente!</p>";
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 2000);
}

function sendEmailCampaign() {
    let checkboxes = document.querySelectorAll('input[name="recipients"]');
    let selection = document.querySelectorAll('input[name="recipients"]:checked');
    let selected = [];

    for (let s = 0; s < selection.length; s++) {
        selected.push(selection[s].value);
    }

    let specialSelection = '';

    // Verificamos si fue elegido todos o individual
    for (let s = 0; s < selected.length; s++) {
        if (selected[s] === 'Todos' || selected[s] === 'Individual') {
            specialSelection = selected[s];
            break;
        }
    }

    // Habilita el campo de texto para escribir la direccion de correo
    if(specialSelection === 'Individual'){
        let input = document.querySelector('#correo_individual');
        input.disabled = false;
    }else{
        let input = document.querySelector('#correo_individual');
        input.disabled = true;
    }

    // Deshabilita todos los checkboxes exepto la seleccion especial (todos o individual)
    for (var c = 0; c < checkboxes.length; c++) {
        checkboxes[c].disabled = specialSelection !== '' && checkboxes[c].value !== specialSelection;
        if(checkboxes[c].disabled = specialSelection !== '' && checkboxes[c].value !== specialSelection){
        checkboxes[c].checked = false;
        }
    }

    let template_options = document.querySelectorAll('input[name="template_send"]:checked');
    let selected_template = [];
    let template;
    for(let t=0; t<template_options.length; t++){
        if(template_options[t].value != null){
            selected_template.push(template_options[t].value);
        }
    }
    template = selected_template[0];
    app.emailContent(selected, template);
}

function desktopTemplateSettingsToggle(){
    switch(app.template){
        case 'promotional':
            document.querySelector('.email-setup-promotional').style.display = "block";
            document.querySelector('.email-setup-newsletter').style.display = "none";
            document.querySelector('.email-no-template-selected').style.display = "none";
        break;

        case 'newsletter':
            document.querySelector('.email-setup-promotional').style.display = "none";
            document.querySelector('.email-setup-newsletter').style.display = "block";
            document.querySelector('.email-no-template-selected').style.display = "none";          
        break;
    }
}

function emailDefaultToogle(section){
    let defaultSettings = document.querySelector('.mobile-email-default-options-body');
    let email_preview = document.querySelector('.mobile-email-preview');

    switch(section){
        case 'defaultSettings':
            if(defaultSettings.classList.contains('hidden')){
                defaultSettings.classList.remove('hidden');
            }else{
                defaultSettings.classList.add('hidden');
            }
        break;

        case 'preview':
            if(email_preview.classList.contains('hidden')){
                email_preview.classList.remove('hidden');
            }else{
                email_preview.classList.add('hidden');
            }
        break;

        case 'template':
            switch(app.template){
                case 'promotional':
                    document.querySelector('.mobile-email-promotional').style.display = "block";
                    document.querySelector('.mobile-email-newsletter').style.display = "none";
                break;
                case 'newsletter':
                    document.querySelector('.mobile-email-promotional').style.display = "none";
                    document.querySelector('.mobile-email-newsletter').style.display = "block";
                break;
            }
        break;
    }
}

function promotionalToogleSettings(section){


    let headerBanner = document.querySelector('.mobile-email-promotional-header-and-banner-body');
    let features = document.querySelector('.mobile-email-promotional-features-body');
    let benefits = document.querySelector('.mobile-email-promotional-benefits-body');
    let social = document.querySelector('.mobile-email-promotional-social-body');
    let contact = document.querySelector('.mobile-email-promotional-contact-body');

    switch(section){

        case 'header-banner':
            if(headerBanner.classList.contains('hidden')){
                headerBanner.classList.remove('hidden');
            }else{
               headerBanner.classList.add('hidden');
            }
        break;

        case 'features':
            if(features.classList.contains('hidden')){
                features.classList.remove('hidden');
            }else{
               features.classList.add('hidden');
            }
        break;
        case 'benefits':
            if(benefits.classList.contains('hidden')){
                benefits.classList.remove('hidden');
            }else{
               benefits.classList.add('hidden');
            }
        break;
        case 'social':
            if(social.classList.contains('hidden')){
                social.classList.remove('hidden');
            }else{
               social.classList.add('hidden');
            }
        break;
        case 'contact':
            if(contact.classList.contains('hidden')){
                contact.classList.remove('hidden');
            }else{
               contact.classList.add('hidden');
            }
        break;
    }
}

function newsletterToogleSettings(section){

    let headerBanner = document.querySelector('.mobile-email-newsletter-header-and-banner-body');
    let introduction = document.querySelector('.mobile-email-newsletter-introduction-body');
    let content = document.querySelector('.mobile-email-newsletter-content-body');
    let social = document.querySelector('.mobile-email-newsletter-social-body');
    let contact = document.querySelector('.mobile-email-newsletter-contact-body');

    switch(section){

        case 'header-banner':
            if(headerBanner.classList.contains('hidden')){
                headerBanner.classList.remove('hidden');
            }else{
               headerBanner.classList.add('hidden');
            }
        break;

        case 'introduction':
            if(introduction.classList.contains('hidden')){
                introduction.classList.remove('hidden');
            }else{
                introduction.classList.add('hidden');
            }
        break;
        case 'content':
            if(content.classList.contains('hidden')){
                content.classList.remove('hidden');
            }else{
                content.classList.add('hidden');
            }
        break;
        case 'social':
            if(social.classList.contains('hidden')){
                social.classList.remove('hidden');
            }else{
               social.classList.add('hidden');
            }
        break;
        case 'contact':
            if(contact.classList.contains('hidden')){
                contact.classList.remove('hidden');
            }else{
               contact.classList.add('hidden');
            }
        break;
    }
}


/*  Layout template toggle */
document.querySelector('#select-website').addEventListener('change', function() {
    app.dashboardData();
});
document.querySelector('#mobile-select-website').addEventListener('change', function() {
    app.dashboardData();
});

document.querySelector('#menu-leads').addEventListener('click', function(){
    toogleContent("leads");
});
document.querySelector('#menu-email').addEventListener('click', function(){
    toogleContent("email");
});
document.querySelector('#menu-scripts').addEventListener('click', toggleNotes);


/* Lead table */
document.querySelector('#span-add-lead').addEventListener('click', app.displayAddLeadForm);
document.querySelector('#span-toggle-message').addEventListener('click', modalMessageToggle);


/* Email desktop template toggle */
document.querySelector("#select-email-template-desktop").addEventListener('change', function(){
    desktopTemplateSettingsToggle();
});
document.querySelector('#menu-email-pc').addEventListener('click', emailDesktopPreview);
document.querySelector('#menu-email-custom').addEventListener('click', emailCustom);
document.querySelector('#menu-email-template').addEventListener('click', emailTemplate);
document.querySelector('#menu-email-recipients').addEventListener('click', emailRecipients);
document.querySelectorAll('input[name="recipients"]').forEach(function(node) {
    node.addEventListener('click', sendEmailCampaign);
});
document.querySelectorAll('input[name="template_send"]').forEach(function(node) {
    node.addEventListener('click', sendEmailCampaign);
});
document.querySelector('#send-email-campaign').addEventListener('click', app.sendEmail);
document.querySelector('#select-email-template').addEventListener('change', function(){
    emailDefaultToogle('template');
});

/* Email mobile template toggle */
document.querySelector('#menu-email-mobile').addEventListener('click', emailMobilePreview);

document.querySelector('.mobile-email-default-options-header').addEventListener('click', function(){
    emailDefaultToogle('defaultSettings');
});
document.querySelector('.mobile-email-preview-header').addEventListener('click', function(){
    emailDefaultToogle('preview');
});

/* Promotional email toggle settings */
document.querySelector('.mobile-email-promotional-header-and-banner-header').addEventListener('click', function(){
    promotionalToogleSettings('header-banner');
});
document.querySelector('.mobile-email-promotional-features-header').addEventListener('click', function(){
    promotionalToogleSettings('features');
});
document.querySelector('.mobile-email-promotional-benefits-header').addEventListener('click', function(){
    promotionalToogleSettings('benefits');
});
document.querySelector('.mobile-email-promotional-social-header').addEventListener('click', function(){
    promotionalToogleSettings('social');
});
document.querySelector('.mobile-email-promotional-contact-header').addEventListener('click', function(){
    promotionalToogleSettings('contact');
});

/* Newsletter email toggle settings */
document.querySelector('.mobile-email-newsletter-header-and-banner-header').addEventListener('click', function(){
    newsletterToogleSettings('header-banner');
});
document.querySelector('.mobile-email-newsletter-introduction-header').addEventListener('click', function(){
    newsletterToogleSettings('introduction');
});
document.querySelector('.mobile-email-newsletter-content-header').addEventListener('click', function(){
    newsletterToogleSettings('content');
});
document.querySelector('.mobile-email-newsletter-social-header').addEventListener('click', function(){
    newsletterToogleSettings('social');
});
document.querySelector('.mobile-email-newsletter-contact-header').addEventListener('click', function(){
    newsletterToogleSettings('contact');
});




