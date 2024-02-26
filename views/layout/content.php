<div class="content">
    <div class="lead-table-options">
        <span id="span-add-lead">Agregar lead manualmente</span>
    </div>

    <!-- DESKTOP LEAD TABLE -->
    <table class="lead-table">
        <thead>
            <tr>
                <th width="5%" @click="sortIdLead" id="lead_id">Lead ID.</th>
                <th width="23%" @click="sortNameLead" id="lead_name">Nombre</th>
                <th width="15%" id="lead_phone">Teléfono</th>
                <th width="26%" @click="sortEmailLead" id="lead_email">Correo</th>
                <th width="10%" @click="sortStatusLead" id="lead_status">Status</th>
                <th width="4%">Notas</th>
                <th width="17%" id="lead_date">Fecha</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="lead in displayedData">
                <td>{{ lead.id_lead }} <span id="delete-lead-cross" v-on:click="deleteLead(lead.id_lead)">&times;</span></td>
                <!-- NAME -->
                <td style="text-align: left;" :id="'lead-name-data'+lead.id_lead"><span class="edit-lead-record" v-on:click="editLeadName(lead.id_lead)">&#x270F;&nbsp;</span>{{ lead.name }}</td>
                <td style="display:none" :id="'lead-name-edit'+lead.id_lead"><input class="input-manual-lead" :id="'updated-name'+lead.id_lead" type="text" :value="lead.name"/><span v-on:click="updateLeadName(lead.id_lead)">&#x2705;</span></td>
                <!-- PHONE -->
                <td style="text-align: left;" :id="'lead-phone-data'+lead.id_lead"><span v-on:click="openModal(lead.id_lead, lead.name, lead.content, lead.created_at)"><a :href="'tel:' + lead.phone">&#x1F4DE; &nbsp;</a></span><span class="edit-lead-record" v-on:click="editLeadPhone(lead.id_lead)">&#x270F;&nbsp;</span><a :href="'https://wa.me/'+lead.phone" target="_blank">{{ lead.phone }} </a></td>
                <td style="display:none" :id="'lead-phone-edit'+lead.id_lead"><input class="input-manual-lead" :id="'updated-phone'+lead.id_lead" type="number" :value="lead.phone"/><span v-on:click="updateLeadPhone(lead.id_lead)">&#x2705;</span></td>
                <!-- EMAIL -->
                <td style="text-align: left;" :id="'lead-email-data'+lead.id_lead"><span class="edit-lead-record" v-on:click="editLeadEmail(lead.id_lead)">&#x270F;&nbsp;</span>{{ lead.email }}</td>
                <td style="display:none" :id="'lead-email-edit'+lead.id_lead"><input class="input-manual-lead" :id="'updated-email'+lead.id_lead" type="text" :value="lead.email"/><span v-on:click="updateLeadEmail(lead.id_lead)">&#x2705;</span></td>
                <!-- STATUS -->
                <td>
                    <select class="lead-status" :id="'select-lead-status'+lead.id_lead" v-on:change="updateLeadStatus(lead.id_lead)">
                        <option id="option-lead-status" selected disabled :value="lead.status">{{ lead.status }}</option>
                        <option v-for="status in lead_status" :value="status">{{ status }}</option>
                    </select>
                </td>
                <!-- NOTES -->
                <td v-on:click="openModal(lead.id_lead, lead.name, lead.content, lead.created_at)">ver</td>
                <td>{{ lead.created_at }}</td>
            </tr>
            <tr class="desktop-table-footer">
                <td colspan="7">
                    <div class="pagination">
                        <button class="paginationButton" @click="prevPage" :disabled="currentPage === 1">&lt;</button>
                        <span>{{ currentPage }} / {{ totalPages }}</span>
                        <button class="paginationButton" @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- MOBILE LEAD TABLE -->
    <table class="mobile-lead-table">
        <thead>
            <tr>
                <th>Lead ID.</th>
                <th>Info.</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="lead in displayedData">
                <td style="font-size: 16px">{{ lead.id_lead }}</td>
                <td>
                    <table>
                        <tr>
                            <td class="td-fixed-size">Nombre:</td>
                            <td>{{ lead.name }}</td>
                        </tr>
                        <tr>
                            <td class="td-fixed-size">Teléfono:</td>
                            <td>{{ lead.phone }}</td>
                        </tr>
                        <tr>
                            <td class="td-fixed-size">Email:</td>
                            <td>{{ lead.email }}</td>
                        </tr>
                        <tr>
                            <td class="td-fixed-size">Notas:</td>
                            <td v-on:click="openModal(lead.id_lead, lead.name, lead.content, lead.created_at)"> ver </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="mobile-table-footer">
                <td colspan="7">
                    <div class="pagination">
                        <button class="paginationButton" @click="prevPage" :disabled="currentPage === 1">&lt;</button>
                        <span>{{ currentPage }} / {{ totalPages }}</span>
                        <button class="paginationButton" @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

    <!-- DESKTOP EMAIL CAMPAIGN CONTAINER -->
    <div class="email-container">

        <!-- Email tool bar -->
        <div class="email-setup-tools">
            <ul class="email-tools">
                <li class="tools-li" id="menu-email-template">Plantilla</li>
                <li class="tools-li" id="menu-email-recipients">Destinatarios</li>
                <li class="tools-li" id="menu-email-custom">Personalizado</li>
                <li class="tools-li" id="menu-email-pc">PC</li>
                <li class="tools-li" id="menu-email-mobile">Móvil</li>
            </ul>
        </div>

        <!-- Email setup -->
        <div class="email-setup active">

            <!-- EMAIL TEMPLATE SETTINGS -->
            <div class="email-default-options">
                <div style="width: 100%;">
                    <label>Asunto: </label><br/>
                    <input v-model="email_subject" type="text" style="width: 95%;">
                </div>
                <div style="display: flex; width: 100%;">
                    <div>
                        <label for="template">Plantilla:</label><br/>
                        <select id="select-email-template-desktop" v-model="template">
                            <option value="promotional">Promotional</option>
                            <option value="newsletter">Newsletter</option>
                        </select>
                    </div>
                    <div>
                        <label for="theme">Tema:</label><br/>
                        <select v-model="theme">
                            <option v-for="(value, index) in email_themes" :value="value" >{{ index }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- EMAIL PROMOTIONAL SETUP -->
            <div class="email-setup-promotional">
                
                <!-- Header & banner -->
                <div class="email-promotional-header-and-banner-header">
                    <span>Cabecera y pancarta</span>
                </div>
                <div class="email-promotional-header-and-banner-body">
                    <label for="logo">Logotipo:</label>
                    <div class="div-select-image">          
                        <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('logo')">Imagen...</button>
                        <input id="email_input_logo" v-model="logo" type="text" />
                    </div>

                    <label for="banner">Pancarta:</label>
                    <div class="div-select-image">
                        <button class="btn-primary"  v-on:click="openImageModal(); setSwitchValue('banner')">Imagen...</button>
                        <input id="email_input_banner" v-model="banner" type="text" />
                    </div>
                </div>

                <!-- Features -->
                <div class="email-promotional-features-header">
                    <span>Características</span>
                </div>
                <div class="email-promotional-features-body">
                    <label for="features">Ilustracion de las caracteristicas:</label>
                    <div class="div-select-image">
                        <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('features')">Imagen...</button>
                        <input id="email_input_features" v-model="features" type="text" />
                    </div>
                    <label for="first feature">Característica 1:</label>
                    <input type="text" v-model="feature_a" accept-charset="UTF-8"/>

                    <label for="second feature">Característica 2:</label>
                    <input type="text" v-model="feature_b"/>

                    <label for="third feature">Característica 3:</label>
                    <input type="text" v-model="feature_c" style="margin-bottom: 1rem;"/>
                </div>

                <!-- Benefits -->
                <div class="email-promotional-benefits-header">
                    <span>Beneficios</span>
                </div>
                <div class="email-promotional-benefits-body">
                    <label for="benefits">Ilustracion de los beneficios:</label>
                    <div class="div-select-image">
                        <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('benefits')">Imagen...</button>
                        <input id="email_input_benefits" type="text" />
                    </div>

                    <label for="first benefit">Beneficio 1:</label>
                    <input type="text" v-model="benefit_a"/>

                    <label for="second benefit">Beneficio 2:</label>
                    <input type="text" v-model="benefit_b"/>

                    <label for="third benefit">Beneficio 3:</label>
                    <input type="text" v-model="benefit_c" style="margin-bottom: 1rem;"/>
                </div>

                <!-- Social links -->
                <div class="email-promotional-social-header">
                    <span>Enlaces a redes sociales</span>
                </div>
                <div class="email-promotional-social-body">
                    <label for="facebook">Enlace hacia su página de Facebook:</label>
                    <input type="text" v-model="facebook_link"/>

                    <label for="instagram">Enlace hacia su página de Instagram:</label>
                    <input type="text" v-model="instagram_link"/>

                    <label for="youtube">Enlace hacia su canal de Youtube:</label>
                    <input type="text" v-model="youtube_link"/>
                </div>

                <!-- Address and footer -->
                <div class="email-promotional-contact-header">
                    <span>Contacto</span>
                </div>
                <div class="email-promotional-contact-body">
                    <label for="footer logo">Logotipo del pie de página:</label>
                    <div class="div-select-image">
                        <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('footer')">Imagen...</button>
                        <input id="email_input_footer" type="text" />
                    </div>
                    
                    <label for="business description">Descripción sintetizada de su negocio:</label>
                    <input type="text" v-model="slogan"/>

                    <label for="address">Dirección:</label>
                    <input type="text" v-model="address"/>

                    <label for="email">Correo electrónico:</label>
                    <input type="text" v-model="email"/>

                    <label for="phone">Teléfono:</label>
                    <input type="text" v-model="phone" style="margin-bottom: 1rem;"/>
                </div>

            </div>

            <!-- EMAIL NEWSLETTER SETUP -->
            <div class="email-setup-newsletter">

                <!-- Header & banner -->
                <div class="email-newsletter-header-and-banner-header">
                    <span>Cabecera y pancarta</span>
                </div>
                <div class="email-promotional-header-and-banner-body">
                    <label for="logo">Logotipo:</label>
                    <div class="div-select-image">          
                        <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('logo')">Imagen...</button>
                        <input id="email_input_logo" v-model="logo" type="text" />
                    </div>

                    <label for="banner">Pancarta:</label>
                    <div class="div-select-image">
                        <button class="btn-primary"  v-on:click="openImageModal(); setSwitchValue('banner')">Imagen...</button>
                        <input id="email_input_banner" v-model="banner" type="text" />
                    </div>
                </div>

                <!-- Introduction -->
                <div class="email-newsletter-introduction-header">
                    <span>Introducción</span>
                </div>
                <div class="email-newsletter-introduction-body">
                    <label for="title">Título</label>
                    <input v-model="title" type="text" />

                    <label for="text">Introducción</label>
                    <textarea v-model="content"></textarea>
                </div>

                <!-- Content -->
                <div class="email-newsletter-content-header">
                    <span>Contenido</span>
                </div>
                <div class="email-newsletter-content-body">
                    <div>
                        <label for="Illustration">Imagen descriptiva 1:</label>
                        <div class="div-select-image">
                            <button class="btn-primary"  v-on:click="openImageModal(); setSwitchValue('picture_a')">Imagen...</button>
                            <input id="email_input_picture_a" v-model="picture_a" type="text" />
                        </div>
                    </div>
                    <div>
                        <label for="text">Texto 1:</label>
                        <textarea v-model="sidetext_a"></textarea>
                    </div>
                    <div>
                        <label for="Illustration">Imagen descriptiva 2:</label>
                        <div class="div-select-image">
                            <button class="btn-primary"  v-on:click="openImageModal(); setSwitchValue('picture_b')">Imagen...</button>
                            <input id="email_input_picture_b" v-model="picture_b" type="text" />
                        </div>
                    </div>
                    <div>
                        <label for="text">Texto 2:</label>                    
                        <textarea v-model="sidetext_b" style="margin-bottom: 1rem;"></textarea>
                    </div>

                </div>

                <!-- Social links -->
                <div class="email-newsletter-social-header">
                    <span>Enlaces a redes sociales</span>
                </div>
                <div class="email-promotional-social-body">
                    <label for="facebook">Enlace hacia su página de Facebook:</label>
                    <input type="text" v-model="facebook_link"/>

                    <label for="instagram">Enlace hacia su página de Instagram:</label>
                    <input type="text" v-model="instagram_link"/>

                    <label for="youtube">Enlace hacia su canal de Youtube:</label>
                    <input type="text" v-model="youtube_link"/>
                </div>

                <!-- Address and footer -->
                <div class="email-newsletter-contact-header">
                    <span>Contacto</span>
                </div>
                <div class="email-promotional-contact-body">
                    <label for="footer logo">Logotipo del pie de página:</label>
                    <div class="div-select-image">
                        <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('footer')">Imagen...</button>
                        <input id="email_input_footer" type="text" />
                    </div>
                    
                    <label for="business description">Descripción sintetizada de su negocio:</label>
                    <input type="text" v-model="slogan"/>

                    <label for="address">Dirección:</label>
                    <input type="text" v-model="address"/>

                    <label for="email">Correo electrónico:</label>
                    <input type="text" v-model="email"/>

                    <label for="phone">Teléfono:</label>
                    <input type="text" v-model="phone"/>
                </div>

            </div>

            <!-- NO TEMPLATE SELECTED -->
            <div class="email-no-template-selected">
                <span>Elige una plantilla</span>
            </div>

        </div>

        <!-- Email custom editor -->
        <div class="email-custom-editor-container">
            <div class="email-custom-editor">
                <label for="email custom editor">Editor de texto plano e Hipertexto</label>
                <textarea v-model="custom_email" placeholder="Escribe algo creativo..."></textarea>
            </div>
        </div>

        <!-- Email recipients -->
        <div class="email-recipients hidden">

            <!-- Recipients settings -->
            <div>
                <!-- Recipients selection -->
                <div class="email-recipients-header">
                    <span>Seleccione los prospectos</span>
                </div>
                <div class="email-recipients-body">
                    <div>
                        <input type="checkbox" name="recipients" value="Todos">
                        <label for="Todos">Todos</label>    
                    </div>
                    <div>
                        <input type="checkbox" name="recipients" value="Nuevo">
                        <label for="Nuevos">Nuevos</label>
                    </div>
                    <div>
                        <input type="checkbox" name="recipients" value="Identificación">
                        <label for="Identificación">Identificación</label>  
                    </div>
                    <div>
                        <input type="checkbox" name="recipients" value="Presentación">
                        <label for="Presentación">Presentación</label>           
                    </div>
                    <div>
                        <input type="checkbox" name="recipients" value="Cotización">
                        <label for="Cotización">Cotización</label>
                    </div>
                    <div>
                        <input type="checkbox" name="recipients" value="Negociación"> 
                        <label for="Negociación">Negociación</label>
                    </div>
                    <div>
                        <input type="checkbox" name="recipients" value="Cierre">
                        <label for="Cerrados">Cerrados</label>
                    </div>
                    <div>
                        <input type="checkbox" name="recipients" value="Individual">
                        <label for="Individual">Individual</label><br>
                        <input type="email" v-model="correo_individual" id="correo_individual" disabled>
                    </div>
                </div>

                <!-- Design selection -->
                <div class="email-design-header">
                    <span>Elija el diseño que desea enviar</span>
                </div>
                <div class="email-design-body">
                    <div>
                        <input type="radio" name="template_send" value="template">
                        <label for="plantilla">Plantilla</label>
                    </div>
                    <div>
                        <input type="radio" name="template_send" value="custom">
                        <label for="personalizado">Personalizado</label>
                    </div>    
                </div> 
            </div>

            <!-- Send -->
            <div class="email-recipients-send-container">
                <button class="btn-warn" id="send-email-campaign">ENVIAR</button>
            </div>   
        </div>

        <!-- Email preview -->
        <div class="email-preview">
            <iframe id="iframe-preview" :src="'data:text/html;base64,'+templateX" charset="UTF-8" sandbox>
            </iframe>
        </div>

    </div>

    <!-- MOBILE EMAIL CAMPAIGN CONTAINER -->
    <div class="mobile-email-container">
        <div class="mobile-email-settings">
            <!-- Template configuration -->
            <div class="mobile-email-default-options ">
                <div class="mobile-email-default-options-header">
                    <span>Configuración de la plantilla</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-default-options-body">
                    <div>
                        <label for="template">Plantilla:</label><br/>
                        <select id="select-email-template" v-model="template">
                            <option value="promotional">Promotional</option>
                            <option value="newsletter">Newsletter</option>
                            <option value="acquisition">Acquisition</option>
                        </select>
                    </div>
                    <div>
                        <label for="theme">Tema:</label><br/>
                        <select v-model="theme">
                            <option v-for="(value, index) in email_themes" :value="value" >{{ index }}</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- Promotional email configuration -->
            <div class="mobile-email-promotional" style="display: none;">

                <!-- Heading and banner -->
                <div class="mobile-email-promotional-header-and-banner-header">
                    <span>Cabezera y pancarta</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-promotional-header-and-banner-body hidden">
                    <label for="logo">Logotipo:</label>
                    <div class="div-select-image">          
                        <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('logo')">Imagen...</button>
                        <input id="email_input_logo" v-model="logo" type="text" />
                    </div>

                    <label for="banner">Pancarta:</label>
                    <div class="div-select-image">
                        <button class="btn-primary"  v-on:click="openImageModal(); setSwitchValue('banner')">Imagen...</button>
                        <input id="email_input_banner" v-model="banner" type="text" />
                    </div>
                </div>

                <!-- Features -->
                <div class="mobile-email-promotional-features-header">
                    <span>Características</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-promotional-features-body hidden">
                    <div>
                        <label for="features">Ilustracion de las caracteristicas:</label>
                        <div class="div-select-image">
                            <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('features')">Imagen...</button>
                            <input id="email_input_features" v-model="features" type="text" />
                        </div>
                    </div>
                    <div>
                        <label for="first feature">Característica 1:</label>
                        <br/>
                        <input type="text" v-model="feature_a"/>
                    </div>
                    <div>
                        <label for="second feature">Característica 2:</label>
                        <br/>
                        <input type="text" v-model="feature_b"/>
                    </div>
                    <div>
                        <label for="third feature">Característica 3:</label>
                        <br/>
                        <input type="text" v-model="feature_c"/>
                    </div>
                </div>

                <!-- Benefits -->
                <div class="mobile-email-promotional-benefits-header">
                    <span>Beneficios</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-promotional-benefits-body hidden"> 
                    <div>
                        <label for="benefits">Ilustracion de los beneficios:</label>
                        <br/>
                        <div class="div-select-image">
                            <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('benefits')">Imagen...</button>
                            <input id="email_input_benefits" type="text" />
                        </div>
                    </div>
                    <div>
                        <label for="first benefit">Beneficio 1:</label>
                        <br/>
                        <input type="text" v-model="benefit_a"/>
                    </div>
                    <div>
                        <label for="second benefit">Beneficio 2:</label>
                        <br/>
                        <input type="text" v-model="benefit_b"/>
                    </div>
                    <div>
                        <label for="third benefit">Beneficio 3:</label>
                        <br/>
                        <input type="text" v-model="benefit_c"/>
                    </div>
                </div>

                <!-- Social links -->
                <div class="mobile-email-promotional-social-header">
                    <span>Redes sociales</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-promotional-social-body hidden">
                    <div>
                        <label for="facebook">Enlace hacia su página de Facebook:</label>
                        <br/>
                        <input type="text" v-model="facebook_link"/>
                    </div>
                    <div>
                        <label for="instagram">Enlace hacia su página de Instagram:</label>
                        <br/>
                        <input type="text" v-model="instagram_link"/>
                    </div>
                    <div>
                        <label for="youtube">Enlace hacia su canal de Youtube:</label>
                        <br/>
                        <input type="text" v-model="youtube_link"/>
                    </div>
                </div>

                <!-- Address and footer -->
                <div class="mobile-email-promotional-contact-header">
                    <span>Dirección y contacto</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-promotional-contact-body hidden">
                    <div>
                        <label for="footer logo">Logotipo del pie de página:</label>
                        <br/>
                        <div class="div-select-image">
                            <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('footer')">Imagen...</button>
                            <input id="email_input_footer" type="text" />
                        </div>
                    </div>
                    <div>
                        <label for="business description">Descripción sintetizada de su negocio:</label>
                        <br/>
                        <input type="text" v-model="slogan"/>
                    </div>
                    <div>
                        <label for="address">Dirección:</label>
                        <br/>
                        <input type="text" v-model="address"/>
                    </div>
                    <div>
                        <label for="email">Correo electrónico:</label>
                        <br/>
                        <input type="text" v-model="email"/>
                    </div>
                    <div>
                        <label for="phone">Teléfono:</label>
                        <br/>
                        <input type="text" v-model="phone"/>
                    </div>
                </div>

            </div>

            <!-- Newsletter email configuration -->
            <div class="mobile-email-newsletter" style="display: none;">

                <!-- Heading and banner -->
                <div class="mobile-email-newsletter-header-and-banner-header">
                    <span>Cabezera y pancarta</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-newsletter-header-and-banner-body hidden">
                    <label for="logo">Logotipo:</label>
                    <div class="div-select-image">          
                        <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('logo')">Imagen...</button>
                        <input id="email_input_logo" v-model="logo" type="text" />
                    </div>

                    <label for="banner">Pancarta:</label>
                    <div class="div-select-image">
                        <button class="btn-primary"  v-on:click="openImageModal(); setSwitchValue('banner')">Imagen...</button>
                        <input id="email_input_banner" v-model="banner" type="text" />
                    </div>
                </div>
                
                <!-- Introduction -->
                <div class="mobile-email-newsletter-introduction-header">
                    <span>Introducción</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-newsletter-introduction-body hidden">
                    <div>
                        <div>
                            <label for="title">Título:</label>
                            <br/>
                            <input v-model="title" type="text" />
                        </div>
                        <div>
                            <label for="introduction">Introducción:</label>
                            <br/>
                            <textarea v-model="content" cols="30" rows="10"></textarea>
                        </div>
                    </div>   
                </div>

                <!-- Contenido -->
                <div class="mobile-email-newsletter-content-header">
                    <span>Contenido</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-newsletter-content-body hidden">
                    <div>
                        <label for="banner">Imagen descriptiva 1:</label>
                        <div class="div-select-image">
                            <button class="btn-primary"  v-on:click="openImageModal(); setSwitchValue('picture_a')">Imagen...</button>
                            <input id="email_input_picture_a" v-model="picture_a" type="text" />
                        </div>
                    </div>
                    <div>
                        <label for="text">Texto 1:</label>
                        <br/>
                        <textarea v-model="sidetext_a" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <label for="banner">Imagen descriptiva 2:</label>
                        <div class="div-select-image">
                            <button class="btn-primary"  v-on:click="openImageModal(); setSwitchValue('picture_b')">Imagen...</button>
                            <input id="email_input_picture_b" v-model="picture_b" type="text" />
                        </div>
                    </div>
                    <div>
                        <label for="text">Texto 2:</label>
                        <br/>
                        <textarea v-model="sidetext_b"cols="30" rows="10"></textarea>
                    </div>

                </div>

                <!-- Social links -->
                <div class="mobile-email-newsletter-social-header">
                    <span>Redes sociales</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-newsletter-social-body hidden">
                    <div>
                        <label for="facebook">Enlace hacia su página de Facebook:</label>
                        <br/>
                        <input type="text" v-model="facebook_link"/>
                    </div>
                    <div>
                        <label for="instagram">Enlace hacia su página de Instagram:</label>
                        <br/>
                        <input type="text" v-model="instagram_link"/>
                    </div>
                    <div>
                        <label for="youtube">Enlace hacia su canal de Youtube:</label>
                        <br/>
                        <input type="text" v-model="youtube_link"/>
                    </div>
                </div>

                <!-- Address and footer -->
                <div class="mobile-email-newsletter-contact-header">
                    <span>Dirección y contacto</span>
                    <span style="font-size: 1rem;">+</span>
                </div>
                <div class="mobile-email-newsletter-contact-body hidden">
                    <div>
                        <label for="footer logo">Logotipo del pie de página:</label>
                        <br/>
                        <div class="div-select-image">
                            <button class="btn-primary" v-on:click="openImageModal(); setSwitchValue('footer')">Imagen...</button>
                            <input id="email_input_footer" type="text" />
                        </div>
                    </div>
                    <div>
                        <label for="business description">Descripción sintetizada de su negocio:</label>
                        <br/>
                        <input type="text" v-model="slogan"/>
                    </div>
                    <div>
                        <label for="address">Dirección:</label>
                        <br/>
                        <input type="text" v-model="address"/>
                    </div>
                    <div>
                        <label for="email">Correo electrónico:</label>
                        <br/>
                        <input type="text" v-model="email"/>
                    </div>
                    <div>
                        <label for="phone">Teléfono:</label>
                        <br/>
                        <input type="text" v-model="phone"/>
                    </div>
                </div>

            </div>

            <!-- Preview -->
            <div class="mobile-email-preview-header">
                <span>Vista previa</span>
                <span>+</span>
            </div>
            <div class="mobile-email-preview">
                <iframe id="iframe-preview" :src="'data:text/html;base64,'+templateX" sandbox>
                </iframe>
            </div>
        </div>
    </div>

    <!-- MODAL LEAD NOTES -->
    <div class="modal-container">
        <div class="modal">

            <!-- Modal header -->
            <div class="modal-header">
                <span style="font-style: oblique; color: greenyellow;">#{{ id_lead}} </span><span style="color: var(--accent)">{{ lead_name }}</span>
                <span class="modal-close" v-on:click="closeModal()">&times;</span>
            </div>

            <!-- Modal body -->
            <div class="modal-body">

                <!-- Message -->
                    <div class="modal-body-message-header">
                        <span>Mensaje</span>
                        <span id="span-toggle-message">+</span>
                    </div>
                    <div class="modal-body-message-body">
                        <p style="margin: 0px; white-space: pre-wrap;">
                        <!-- <span style="text-decoration: underline;">Enviado el: {{ lead_date }}</span><br/><br/> -->{{ lead_content }}
                        </p>
                    </div>



                <!-- Notes -->
                <div class="modal-body-notes" id="modal-body">
                    <div v-for="note in lead_notes_json" class="lead-note">
                        <p style="margin: 0px; white-space: pre-wrap;"><span style="color: var(--accent)">Creada por: {{ note.name }} at {{ note.created_at }}</span><br/>{{ note.content }}</p>
                    </div>
                </div>

            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <textarea id="textarea-lead-note" v-model="lead_note" required></textarea>
                <button class="btn-warn" v-on:click="saveLeadNote()">Guardar</button>
            </div> 

        </div>
    </div>

    <!-- MODAL IMAGE UPLOAD -->
    <div class="modal-image-container">
        <div class="modal-image">
            <div class="modal-image-header">
                <span>Seleccionar imagen</span><span class="modal-close" v-on:click="closeImageModal()">&times;</span>
            </div>
            <div class="modal-image-body">
                <div v-for="image in images_json" class="image-preview">
                    <span v-on:click="deleteImage(image.id_img)">&times;</span>
                    <img :src="'uploads/images/' + image.name" style="max-width: 100%;" v-on:click="selectImage(image.name)">
                    <br/>
                </div>
            </div>

            <div class="modal-image-footer">
                <div class="modal-image-footer-row">
                    <label for="input_image">
                        Seleccionar un archivo de este dispositivo...
                        <input name="image" id="input_image" type="file" />
                    </label>
                    <button class="btn-primary" v-on:click="uploadImage()"><img src="assets/images/white-upload.png" width="20"/></button>
                </div>
                <div class="modal-image-footer-row">            
                    <input type="text" id="input_selected_image">
                    <button id="image_selection_accepted" class="btn-warn"><img src="assets/images/white-checkmark.png" width="20"/></button>
                </div>
           </div>
        </div>
    </div>

    <!-- MODAL EMAIL STATUS -->
    <div class="modal-email-status">
        <div class="email-status-dialog">
            <div class="email-status-header">
                <span>Capaña de correos</span><span class="modal-close" v-on:click="closeEmailModal()">&times;</span>
            </div>
            <div class="email-status-body">

                <div id="email-sending-status">
                    <span>Enviando correos</span><br/>
                    <span style="text-align: center;" id="email-delivery-status">Se han enviado <span id="sent-mails">0</span> correos de <span id="total-mails">0</span></span>
                </div>

                <div id="email-delivery-results" style="display: none">
                    <span style="color: greenyellow;">Operación finalizada</span><br/>
                    <span>Enviados: <span id="sent-emails-result"></span></span>
                    <span>Fallidos: <span id="failed-emails-result"></span></span>
                </div>

                <div id="failed-mails-container">
                    <ul>
                        <li v-for="failed in failed_emails">{{ failed }}</li> 
                    </ul>
                </div>

            </div>
            <div class="email-status-footer">
                <button class="btn-warn">cancelar</button>
                <button class="btn-primary" v-on:click="closeEmailModal()">aceptar</button>
            </div>
        </div>
    </div>

</div>
