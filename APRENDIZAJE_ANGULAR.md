#<FONT COLOR='blue'>**APRENDIENDO ANGULAR**</FONT>


> [!NOTE]
> Para utilizar angular primero es necesario haber instalado **NodeJS** y luego ejecutar el comando **npm install -g @angular/cli** para instalar de manera general la consola de Angular.

>[!IMPORTANT]
> Para tener en cuenta, la creación de un nuevo proyecto se hace mediante el comando **ng new app_name**, finalmente si se desea visualizar el proyecto, se utiliza le comando **ng serve** para lanzar el aplicativo de Angular, siempre y cuando se encuentre dentro de la carpeta del proyecto.



> [!NOTE]
> Angular se basa en la utilización de **componentes** y **servicios**, donde los componentes son la parte que interactúa visualmente con la página, es decir, se encarga de la presentación de la información; mientras que los servicios se encargan de la lógica a desarrollar para la presentación de la información.
> Es importante tener en cuenta que las clases que se crean para los servicios deben ser exportadas pa su utilización como módulos.

> [!IMPORTANT]
> Para crear un nuevo servicio se utiliza el comando ***ng generate service RUTA_DEL_SERVICIO*** generalmente para mantener una buena estructura de código se utiliza la ruta ***services/NOMBRE_DEL_SERVICIO***.

> [!IMPORTANT]
> Para crear un componente en Angular 17, es necesario ejecutar el comando ***ng generate component RUTA_COMPONENTES***, generalmente para mantener una buena estructura de código se utiliza la ruta ***components/NOMBRE_COMPONENTE***. A diferencia de los servicios, los componentes añaden también los elementos **.html** y **.css** para manejar la presentación del mismo.

> [!IMPORTANT]
> Para utilizar los nuevos componentes, es necesario importarlo dentro del componente principal (Donde se va a utilizar), la importación se realiza dentro del metadato **imports** que tiene el decorador **@Component**. Adicionalmente, dado que se utiliza la librería ***HttpClient***, entonces es necesario registrar este proveedor dentro del archivo *app.config.ts* en el arreglo **providers**.