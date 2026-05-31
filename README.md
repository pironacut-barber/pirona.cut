# 💈 Tienda Virtual Pirona Cut

¡Bienvenido al código fuente de la tienda virtual **pirona.cut**! Esta tienda ha sido diseñada especialmente para barberías de alta gama, con un estilo visual premium en **negro y dorado** y optimizada para la venta directa a través de **WhatsApp** en Pesos Colombianos (COP).

Esta aplicación es completamente autoadministrable, responsiva y no requiere de complejas bases de datos en la nube. Todo el código está en esta misma carpeta, sin subcarpetas, para que puedas editarlo y abrirlo fácilmente en **Visual Studio Code**.

---

## 📂 Archivos en el Proyecto

*   `index.html`: Contiene la estructura y maquetación de la tienda y sus formularios de administración.
*   `styles.css`: Contiene el diseño visual en negro y dorado, efectos Premium de brillo, tarjetas de productos y diseño responsivo para celulares y computadoras.
*   `app.js`: Contiene la lógica del carrito de compras, el procesador inteligente de enlaces para incrustar videos de redes sociales, el conversor de imágenes a Base64 y el panel de administración.
*   `README.md`: Este instructivo de uso y edición.

---

## 🚀 Cómo Abrir y Probar la Tienda

1.  **Ejecución Rápida**: Puedes abrir directamente el archivo `index.html` en cualquier navegador web (Chrome, Edge, Firefox, Safari) haciendo doble clic en él.
2.  **En Visual Studio Code**:
    *   Abre Visual Studio Code.
    *   Ve a `Archivo` -> `Abrir carpeta...` y selecciona la carpeta de esta tienda (`pirona-cut`).
    *   Te recomendamos instalar la extensión de VS Code llamada **Live Server** para ver los cambios que edites en vivo.
    *   Una vez instalada la extensión, haz clic derecho sobre `index.html` y selecciona **Open with Live Server**.

---

## 🔑 Instrucciones para el Administrador (Dueño)

Para evitar que los clientes modifiquen la tienda, todas las funciones de edición están protegidas por contraseña.

### 1. Iniciar Sesión como Administrador
*   Baja hasta el pie de página (footer) de la tienda.
*   Haz clic en el enlace discreto que dice 🔒 **Acceso Dueño**.
*   Introduce la contraseña del dueño: **`Pirona20277`** y presiona Iniciar Sesión.
*   ¡Listo! Verás que aparece una barra de **Herramientas de Administrador** arriba del catálogo y que cada producto y video ahora tiene opciones para editar y eliminar.

### 2. Cómo agregar un producto de forma sencilla
*   En la barra de herramientas del administrador, haz clic en **+ Agregar Producto**.
*   Llena el nombre, precio en pesos colombianos (escribe solo el número, ej: `45000` para `$45.000 COP`), categoría, estado y descripción.
*   **Para la Imagen**: Tienes dos opciones súper fáciles:
    1.  **Subir Archivo Local**: Busca una foto directamente en tu computador. El sistema la convertirá a texto (Base64) automáticamente para que se guarde en tu navegador sin necesidad de pagar servidores de imágenes.
    2.  **Pegar Enlace**: Copia la dirección de cualquier imagen de internet y pégala directamente.
*   Haz clic en **Guardar Producto** y aparecerá al instante.

### 3. Cómo subir publicaciones/videos de Redes Sociales
Puedes subir contenido multimedia de tus redes para que los clientes vean tus trabajos en vivo:
*   En la barra de administración, haz clic en **Agregar Publicación Redes**.
*   **Copia y pega el enlace** directo de la publicación de tu red social favorita:
    *   **YouTube**: Enlace de videos o Shorts (ej: `https://www.youtube.com/watch?v=...` o `https://youtube.com/shorts/...`).
    *   **TikTok**: Enlace de tus videos oficiales de barbería.
    *   **Instagram**: Enlace de fotos, carruseles o Reels.
    *   **Facebook**: Enlace de tus posts o videos.
*   El sistema **detectará automáticamente la red social** y generará una vista previa del reproductor.
*   Escribe un título corto y haz clic en **Guardar Publicación**. Se incrustará directamente en la sección "Pirona en Redes".

### 4. Cómo editar la información general de la página
Puedes cambiar todos los textos y datos de contacto de la barbería que se muestran en el sitio:
* En tu panel de administrador, haz clic en el botón dorado **Editar Info de Página**.
* Se abrirá un formulario dividido en secciones:
    1. **Sección Principal (Hero)**: Título, subtítulo, descripción y el enlace para agendar citas (si lo dejas vacío, usará automáticamente tu WhatsApp general).
    2. **Información de Contacto**: Dirección física, teléfono comercial de exhibición y horarios de atención.
    3. **Redes Sociales**: Enlaces a tus perfiles oficiales de Instagram, TikTok, YouTube y Facebook (si dejas alguno en blanco, el ícono correspondiente se ocultará automáticamente de la sección de contacto).
    4. **Sección de Mapa**: Nombre de tu local, eslogan y el enlace de ubicación de Google Maps para el botón "Cómo Llegar".
* Haz clic en **Guardar Configuración** y los textos se actualizarán al instante en toda la página.

### 5. Cambiar el WhatsApp donde recibes los pedidos
* En la barra de administración verás un campo llamado **Número de WhatsApp de Ventas**.
* Escribe tu número completo de WhatsApp incluyendo el código de tu país sin signos de más o espacios (Ejemplo para Colombia: `57` seguido del número móvil de 10 dígitos, quedando así: `573001234567`).
* Haz clic en **Guardar**. Todos los pedidos que completen tus clientes en la tienda se enviarán a este número de inmediato.

### 6. Copias de Seguridad (Muy Importante)
Dado que la tienda guarda tus productos y configuraciones en el navegador local (`localStorage`), si borras las cookies o el historial del navegador podrías perder tu información.
*   **Para respaldar**: En tu panel de administrador, haz clic en 📥 **Guardar Copia (JSON)**. Se descargará un archivo a tu computador con todos tus productos, videos de redes sociales y textos de la página.
*   **Para restaurar**: Si abres la página en otra computadora o borraste el historial, haz clic en 📤 **Cargar Copia**, selecciona el archivo JSON de respaldo que descargaste y toda tu configuración y productos volverán a aparecer tal y como los dejaste.
*   **Restablecer Tienda**: Si deseas borrar todo y volver a los valores por defecto de fábrica, haz clic en el botón rojo 🔄 **Restablecer Tienda**.
