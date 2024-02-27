<strong>== English Version ==</strong>

Hi,

This is one of my very first projects, therefore is sort of a "Frankenstein" app, nevertheless it works fine and is ready to use. Before I explain how I built it,
please don't forget to check it out at https://crm.pluralis.com.mx (I'll give you demo credentials for you to explore it at the end of this file).

<strong>Features</strong>

Nimbus CRM is a customer relationship management system that includes 4 main features:
1. Manage all of your websites/landing pages data in one site.
2. Create sale pitchs, call intros and more for you and all of your teamates
3. Sales funnel: keep track of your sale process, call customers, and send whatsapp messages in one place
4. Send email campaings: send masive email campaings, choose from our templates or import your own

<strong>MVC pattern</strong>

As you can see, the project structure is defined by an MVC programming pattern. I defined some URL rewrite rules 
within the .htaccess file to manipulate the URL's data, invoking controller classes and executing their methods 
following the next structure: 'controller/method'. This is defined in the index.php file, where you can find out 
how views are rendered according to this setup.

<strong>HTML</strong>

For the views, I first created a basic HTML template, which I broke apart into four different sections: the navigation bar, 
the sidebar, the workspace (which I called 'content'), and the footer. Now, in addition to the typical PHP approach to 
rendering views, I decided to use Vue.js CDN and vanilla JavaScript to manipulate the DOM instead.

<strong>Vue.js CDN / Vanilla JavaScript</strong>

So basically, I created a single component where all the `data()` properties are defined in order to make the app 'reactive' 
and update the DOM instantly as we change the state of the component (please take a look at the `main.js` file). This approach 
made it easier for me to create asynchronous HTTP requests to the controllers and, ultimately, to the models. I didn't use the 
`fetch()` object; instead, I utilized the `XMLHttpRequest()` object to send and receive data from the database (the database 
file is not included in this repository). To hide and show DOM elements, I used vanilla JavaScript to make the UI/UX possible. 
I relied heavily on the `document.querySelector()` method to accomplish this task, along with switch statements and if/else 
statements to control the rendering of the HTML elements."

<strong>Styling</strong>

Here's the revised version:

To style the entire web app, I used CSS3 without any frameworks. This means that I decided to create my own CSS classes for 
different elements such as divs, buttons, and templates. I utilized CSS grid and CSS flexbox to ensure that the design is 
responsive and available for mobile devices as well. Please review the `styles.css` file to see how it was implemented.

<strong>Backend</strong>

As mentioned before, I merged the backend and the frontend using an MVC programming pattern, which allowed me to organize 
the code more effectively. Initially, I designed the database structure using pen and paper to visualize how tables are 
interconnected and how data will be stored, enabling me to prepare for future queries within the app. Subsequently, I created 
the database (note: the database file is not included in this repository) using MySQL server. Additionally, I began creating 
entities for these tables (you can find them in the models folder). Essentially, models are objects that represent these 
entities in the database. Within each class file, you can find their properties, setters and getters, and methods 
to work with the data.

Controllers were designed to set the model's properties in an easier way and to ensure that no one else can fetch data 
from the database other than the logged-in user by verifying the session super global, etc. Again, please don't forget 
to check them out within the controllers directory. To send emails, I added the PHPMailer library to accomplish this 
task (please refer to the emailController.php file and Email.php respectively).

<strong>Demo user</strong>

If you would like to check the app live please go to https://crm.pluralis.com.mx and log in using the following credentials:
<br/>
<br/>
user: demo@pluralis.com.mx
<br/>
password: P1ur4liz2024
<br/>
<br/>
Thanks for reading me.
<br/>
Rergards, Gerardo Topete Pérez.

<strong>== Versión en español ==</strong>

Hola,

Esta es una de mis primeras aplicaciones web que desarrollé, por lo tanto es una especie de "Frankenstein" por la manera en la que
fue programada, sin embargo funciona y está lista para usarse. Antes de continuar no olvides probarla en http://crm.pluralis.com.mx
(las credenciales de prueba estan al final de este archivo).

<strong>Características</strong>

Nimbus CRM es un sistema de gestión de relaciones con los clinetes, el cual cuenta con cuatro caracterísiticas principales:
1. Administra todos tus sitios web y landing pages en un sólo lugar
2. Guarda machotes de intros de llamadas, guiones de venta, mensajes para los miembros de tu equipo de trabajo, etc.
3. Lleva un control de la etapa de ventas de todos tus prospectos, da seguimiento al proceso de ventas y envía mensajes de whatsapp
4. Crea campañas de email masivas utilizando nuestros templetes o utiliza los tuyos

<strong>Patrón MVC</strong>

Como se puede apreciar, la estructura del proyecto está definida por un patrón de programación MVC utilizando POO en Php. El archivo
.htaccess reescribe la URL para posteriormente invocar controladores y ejecutar el método deseado en base al siguiente esquema:
"controlador/metodo", de esta forma el archivo index.php crea una instancia del controlador solicitado y ejecuta el método deseado.

<strong>HTML</strong>

Para las vistas se hizo la maquetación con HTML y posteriormente se dividió en cuatro secciones principales, la barra de navegación,
la barra lateral, el contenido y el píe de página. Luego, estos trozos de html parciales son renderizados mediante funciones
Php para cargar las vistas correspondientes. Sin embargo, NO fue necesario apoyarse de esta técnica para renderizar las vistas,
si no que fue imprecindible el uso de JavaScript para poder controlar el DOM eficientemente y de forma moderna como se explica a continuación.

<strong>Vue.js CDN / JavaScript nativo</strong>

Basicamente se creó un componente principal en el cual se encuentran asociadas todas las propiedades del componente 'app' dentro de `data()`, de esta
forma se facilitó la manipulación de la información del frontend hacia el backend haciendo peticiones asincronas desde el frontend utilizando el método
`XMLHttpRequest()` de javascript (no se utilizó `fetch()` ni alguna librería adicional para envíar y recibir datos).
Para la manipulación del DOM se uso JavaScript nativo (por favor revíse el fichero main.js para más detalles) utilizando métodos clásicos como
`document.querySelector()`, bucles for, foreach, estructuras de control como switch, if/else etc.

<strong>Estilos</strong>

Para darle estilos a la aplicación se utilizó CSS3 sin la ayuda de frameworks, es decir se crearon las clases necesarias para cada uno de los
elementos HTML de la aplicación, utilizando la malla CSS y contenedores flexibles CSS, esto para poder hacer que el diseño sea responsivo
y se adapte a diferentes dispositivos (por favor no olvide en revisar el fichero styles.css).

<strong>Backend</strong>

Como se dijo anteriormente, se utilizó un patrón MVC para el desarrollo de Nimbus CRM, lo cual permitió organizar mejor el código y las tareas
que realizan cada unos de los ficheros que componen a la aplicación. Primero fue imprecindible diseñar la estructura de la base de datos con
lápiz y papel para que de esta forma se facilitara la creación de las entidades con MySQL, y así entender mejor cómo es que las tablas se relacionan entre
si, etc. Luego, se crearon los modelos en Php, los cuales representan cada una de las entidades de la base de datos. (el fichero SQL de la base de datos
no se encuentra disponible en este repositorio).

Los controladores se encargan de pasar los datos a los modelos, instanciándolos y accediendo a sus métodos públicos para definir sus propiedades
para posteriormente realizar consultas a la base de datos. De esta forma se previenen ataques SQL mediante consultas preparadas,
escapado de caracteres, entre otras medidas de seguridad.

<strong>Usuario de prueba</strong>

Por favor no olvide echarle uno ojo a Nimbus CRM en https://crm.nimbus.com.mx accediendo con el siguiente usuario de prueba:
<br/>
<br/>
usuario: demo@pluralis.com.mx
<br/>
contraseña: P1ur4liz2024
<br/>
<br/>
Gracias por leérme
<br/>
Atte. Gerardo Topete Perez.












