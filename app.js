/* ==========================================================================
   LÓGICA PRINCIPAL - TIENDA VIRTUAL PIRONA.CUT
   Gestión de estado, carrito, WhatsApp y Panel de Administración
   ========================================================================== */

// --- PRODUCTOS INICIALES POR DEFECTO ---
const DEFAULT_PRODUCTS = [
    {
        id: "prod-1",
        name: "Kit Completo de Crecimiento Capilar: Minoxidil Kirkland (3 Frascos) + Derma Roller 540 Agujas",
        price: 45000,
        description: "Maximiza los resultados de tu tratamiento con este combo especializado. Incluye tres frascos de Solución Tópica Kirkland Signature Minoxidil 5% para tres meses de tratamiento, junto con un Derma Roller de 540 agujas para estimular la circulación y potenciar la absorción del producto en los folículos pilosos. La combinación definitiva para combatir la caída y fomentar la regeneración capilar de manera profesional.",
        category: "Cabello",
        status: "available",
        image: "https://images.unsplash.com/photo-1626015276681-2b44f25a2e68?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-2",
        name: "Pack Trío de Ceras Capilares Evok (Fresa, Manzana y Coco - 150g c/u)",
        price: 50000,
        description: "Lleva la línea completa de ceras moldeadoras Evok y varía tu estilo cada día. Este set incluye las tres fragancias exclusivas: fresa, manzana y coco, todas con la fórmula base enriquecida con aceite de oliva para brindar una fijación flexible, brillo natural y nutrición profunda a tu cabello. La solución perfecta para quienes buscan versatilidad, aroma y cuidado profesional en un solo pack.",
        category: "Barba",
        status: "available",
        image: "https://drive.google.com/file/d/1TcZ4laz2Mh8y_xI-pxZIsOeGwhY-GEqa/view?usp=sharing"
    },
    {
        id: "prod-3",
        name: "Cera Moldeadora Black Cinco Estrellas Gold con Polímeros y Karité (150g)",
        price: 60000,
        description: "Cera moldeadora de fijación fuerte diseñada para un control total y duradero de tu peinado. Su fórmula avanzada con polímeros y extracto de karité no solo esculpe y define, sino que también aporta hidratación y suavidad al cabello. Es la elección perfecta para lograr estilos estructurados con un acabado impecable y un toque de nutrición natural.",
        category: "Barba",
        status: "available",
        image: "https://images.unsplash.com/photo-1605497746444-ac9dbd324d88?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-4",
        name: "Cera Moldeadora Premium Molding Wax con Romero y Pantenol",
        price: 35000,
        description: "Cera moldeadora y fijadora de alto desempeño, formulada con polímeros para un control preciso de tu peinado. Enriquecida con romero y pantenol, nutre tu cabello mientras le brinda estructura y fijación duradera. Su fórmula libre de parabenos garantiza un acabado profesional y saludable, ideal para quienes buscan estilo y cuidado en un solo producto.",
        category: "Afeitado",
        status: "available",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-5",
        name: "Derma Roller 540 Agujas  Sistema de Estimulación de Colágeno y Regeneración Facial",
        price: 90000,
        description: "Dispositivo avanzado diseñado para el cuidado y rejuvenecimiento de la piel. Gracias a sus 540 agujas, estimula la producción natural de colágeno, ayudando a reafirmar, regenerar y mejorar la textura de tu rostro. Es la herramienta ideal para integrar en tu rutina de cuidado personal y lograr una piel con aspecto más terso y saludable.",
        category: "Combos",
        status: "available",
        image: "https://images.unsplash.com/photo-1593702295094-aea22597af65?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: "prod-img-1",
        name: "Polvo Voluminizador Perfect Link Mattifying (30g)",
        price: 25000,
        description: "Polvo texturizante de fijación fuerte diseñado para aportar volumen instantáneo y sin peso a tu cabello. Su fórmula mate es ideal para crear peinados modernos, desordenados y con mucha textura, manteniendo el estilo controlado durante todo el día. Perfecto para quienes buscan un acabado natural y con cuerpo sin sensación grasa.",
        category: "Cabello",
        status: "available",
        image: "1.png"
    },
    {
        id: "prod-img-2",
        name: "Solución Tópica Kirkland Signature Minoxidil 5% Extra Fuerza para Hombres (60 ml)",
        price: 22000,
        description: "Tratamiento tópico clínicamente comprobado para combatir la caída del cabello y estimular su crecimiento. Esta fórmula de fuerza extra al 5% está diseñada específicamente para hombres, ofreciendo una solución sin aroma para uso diario. Cada frasco proporciona un suministro para un mes, ayudando a reactivar los folículos pilosos y recuperar la densidad capilar de manera efectiva.",
        category: "Cabello",
        status: "available",
        image: "2.png"
    },
    {
        id: "prod-img-3",
        name: "Shampoo Fortalecedor Nativo's Fenix Barber con Trichogen, Biotina y Arginina (350 ml)",
        price: 18000,
        description: "Shampoo especializado en el fortalecimiento capilar, formulado con Trichogen, biotina y arginina para revitalizar el cabello desde la raíz. Su potente combinación de extractos naturales, incluyendo Panax Ginseng, bardana, saw palmetto y gluconato de zinc, ayuda a reducir la caída y mejorar la densidad capilar. Ideal para una limpieza profunda que promueve un cabello más fuerte, sano y resistente en cada lavada.",
        category: "Barba",
        status: "available",
        image: "Gemini_Generated_Image_3kr8z43kr8z43kr8.png"
    },
    {
        id: "prod-img-4",
        name: "Cera Negra Premium Black Hair Wax con Romero y Pantenol",
        price: 24000,
        description: "Cera moldeadora de fijación media diseñada para definir y dar estilo a tu cabello con un acabado natural. Su fórmula especializada, enriquecida con romero y pantenol, ayuda a nutrir y fortalecer la hebra capilar mientras mantienes un peinado impecable durante todo el día. Ideal para lograr un look definido y saludable sin sensación pesada.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_41cy9l41cy9l41cy.png"
    },
    {
        id: "prod-img-5",
        name: "Shampoo Limpiador Kirkland Signature con Minoxidil Extra Fuerza (500 ml)",
        price: 20000,
        description: "Tratamiento tópico en shampoo diseñado para estimular la regeneración capilar. Su fórmula de extra fuerza ayuda a reactivar los folículos pilosos, fortaleciendo el cabello desde la raíz y combatiendo la caída. Ideal como parte de tu rutina diaria de cuidado y recuperación capilar.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_52vb7f52vb7f52vb.png"
    },
    {
        id: "prod-img-6",
        name: "Cera para Cabello Evok con Esencia de Manzana (150g)",
        price: 22000,
        description: "Cera moldeadora de fijación flexible ideal para estructurar, definir y controlar tu peinado con un vibrante y fresco aroma a manzana verde. Aporta una textura ligera y un brillo natural al cabello sin dejar residuos ni efecto acartonado.",
        category: "Barba",
        status: "available",
        image: "Gemini_Generated_Image_763t1l763t1l763t.png"
    },
    {
        id: "prod-img-7",
        name: "Cera para Cabello Evok con Esencia de Coco y Aceite de Oliva (150g)",
        price: 25000,
        description: "Cera moldeadora de alta fijación diseñada para esculpir y controlar tu peinado con un fresco aroma a coco. Enriquecida con aceite de oliva para hidratar profundamente y fortalecer el cabello, aportando un brillo saludable sin dejar sensación pesada.tilo formal peinado de lado con brillo natural y fijación media.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_9x9w9w9x9w9w9x9w.png"
    },
    {
        id: "prod-img-8",
        name: "Cera para Cabello Evok con Esencia de Fresa y Aceite de Oliva (150g)",
        price: 23000,
        description: "Cera moldeadora de fijación ideal para estilizar y definir tu cabello con un agradable aroma a fresa. Contiene aceite de oliva para nutrir e hidratar la fibra capilar, aportando brillo natural sin dejar residuos grasos.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_czrvwmczrvwmczrv.png"
    },
    {
        id: "prod-img-9",
        name: "Corte French Crop",
        price: 24000,
        description: "Flequillo recto corto con textura marcada y laterales degradados.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_hofxehofxehofxeh.png"
    },
    {
        id: "prod-img-10",
        name: "Corte Degradado Navaja (Razor Fade)",
        price: 26000,
        description: "Lateral rasurado al cero absoluto con navaja de afeitar.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_jtichujtichujtic.png"
    },
    {
        id: "prod-img-11",
        name: "Peinado de Lujo con Cera Mate",
        price: 15000,
        description: "Fijación fuerte y acabado sin brillo para resaltar la textura.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_lrg454lrg454lrg4.png"
    },
    {
        id: "prod-img-12",
        name: "Estilo Undercut Desconectado",
        price: 25000,
        description: "Laterales cortos y parte superior larga peinada hacia atrás.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_octvd6octvd6octv.png"
    },
    {
        id: "prod-img-13",
        name: "Tratamiento de Barba Premium",
        price: 28000,
        description: "Hidratación con aceites y bálsamos exclusivos Pirona Cut.",
        category: "Barba",
        status: "available",
        image: "Gemini_Generated_Image_ogk6pyogk6pyogk6.png"
    },
    {
        id: "prod-img-14",
        name: "Degradado de Barba (Beard Fade)",
        price: 20000,
        description: "Transición degradada que conecta el cabello con la patilla y la barba.",
        category: "Barba",
        status: "available",
        image: "Gemini_Generated_Image_qxsaqxsaqxsaqxsa.png"
    },
    {
        id: "prod-img-15",
        name: "Corte de Tijera Clásico",
        price: 28000,
        description: "Corte entero realizado a tijera para una caída suave y natural.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_ssd07dssd07dssd0.png"
    },
    {
        id: "prod-img-16",
        name: "Corte Mullet Moderno",
        price: 26000,
        description: "Reinterpretación del clásico mullet con textura y degradado lateral.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_u7oqfku7oqfku7oq.png"
    },
    {
        id: "prod-img-17",
        name: "Diseño de Cejas y Delineado",
        price: 12000,
        description: "Perfilado complementario para realzar la mirada y las facciones.",
        category: "Afeitado",
        status: "available",
        image: "Gemini_Generated_Image_x4q3k1x4q3k1x4q3.png"
    },
    {
        id: "prod-img-18",
        name: "Corte Mohawk Texturizado",
        price: 25000,
        description: "Cresta con volumen y degradado en las sienes.",
        category: "Cabello",
        status: "available",
        image: "Gemini_Generated_Image_z9gioez9gioez9gi.png"
    }
];

// --- PUBLICACIONES EN REDES SOCIALES POR DEFECTO ---
const DEFAULT_POSTS = [
    {
        id: "post-vid-1",
        platform: "video",
        title: "Experiencia Pirona Cut Premium",
        description: "Un vistazo rápido al arte de la barbería y el ambiente clásico de nuestro local.",
        url: "https://assets.mixkit.co/videos/preview/mixkit-barber-shaving-a-man-with-a-razor-41584-large.mp4"
    },
    {
        id: "post-1",
        platform: "youtube",
        title: "Tutorial: Cómo Aplicar Cera Mate correctamente",
        url: "https://www.youtube.com/watch?v=Wz_0FhB9k-k",
        embedUrl: "https://www.youtube.com/embed/Wz_0FhB9k-k"
    },
    {
        id: "post-2",
        platform: "instagram",
        title: "Corte degradado clásico - Pirona Cut Style",
        url: "https://www.instagram.com/p/DAW-KzOOFvY/",
        embedUrl: "https://www.instagram.com/p/DAW-KzOOFvY/embed"
    },
    {
        id: "post-3",
        platform: "tiktok",
        title: "Técnica de Corte Texturizado",
        url: "https://www.tiktok.com/@barber/video/7212345678901234567",
        embedUrl: "https://www.tiktok.com/embed/v2/7212345678901234567"
    },
    {
        id: "post-4",
        platform: "facebook",
        title: "Visita nuestras instalaciones premium",
        url: "https://www.facebook.com/barberia/posts/10158495000000000",
        embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbarberia%2Fposts%2F10158495000000000&show_text=true&width=500"
    }
];

// --- CONFIGURACIÓN GENERAL POR DEFECTO ---
const DEFAULT_SETTINGS = {
    heroTitle: "PIRONA.CUT",
    heroSubtitle: "Cuidado & Estilo Masculino",
    heroDesc: "Lleva el estilo de la barbería a tu casa. Productos premium para el cuidado de tu cabello y barba con asesoramiento personalizado y envío directo a tu WhatsApp.",
    heroBookingUrl: "", // Vacío para usar WhatsApp general de ventas
    contactAddress: "Calle 3 con Carrera 30 local 30-16",
    contactPhone: "+57 310 684 5432",
    contactHours: "Lunes a Sábado: 8:30 AM - 1:00 PM y 2:30 PM - 8:00 PM",
    socialIg: "https://www.instagram.com/abraham_pirona?igsh=Zm5kdWNoc3AzZ3d3",
    socialTk: "https://www.tiktok.com/@abrahampirona22?_r=1&_t=ZS-96gYrj9Gnm0",
    socialYt: "https://youtube.com/@user-mb3wh4ru6y?si=BY7c-_QH7f3rlutU",
    socialFb: "https://www.facebook.com/share/19474a9Q9N/",
    mapLabel: "PIRONA.CUT",
    mapDesc: "El templo del corte premium",
    
};

// --- CONFIGURACIÓN DE DISEÑO PERSONALIZADO POR DEFECTO ---
const DEFAULT_THEME = {
    bgMain: "#0c0c0f",
    bgCard: "#141418",
    gold: "#d4af37",
    textMain: "#ffffff",
    fontHeading: "'Cinzel', serif",
    fontBody: "'Montserrat', sans-serif",
    textScale: "1.0"
};
let theme = {};
let layoutOffsets = {};
let visualEditModeActive = false;

// --- ESTADO GLOBAL ---
let products = [];
let posts = [];
let cart = [];
let whatsappNumber = "573106845432"; // Número por defecto de Colombia (Pirona Cut)
let settings = {}; // Configuración de la página

// --- INICIALIZACIÓN ---
document.addEventListener("DOMContentLoaded", () => {
    loadData();
    applySettings();
    renderProducts();
    renderSocialPosts();
    renderCart();
    checkAdminSession();
    setupFilters();
    setupSocialFilters();
    setupSearch();
    setupAdminWhatsAppInput();
    applyLayoutOffsets();
    setupDragging();
});

// --- CARGA DE DATOS (LOCALSTORAGE) ---
function loadData() {
    // Cargar productos
    const localProducts = localStorage.getItem("pirona_products");
    if (localProducts) {
        products = JSON.parse(localProducts);
        
        // Eliminar productos repetidos por imagen o nombre (dejando solo el primero de cada uno)
        const uniqueProducts = [];
        const seenImages = new Set();
        const seenNames = new Set();
        let updated = false;
        
        products.forEach(p => {
            const imgKey = p.image ? p.image.trim().toLowerCase() : "";
            const nameKey = p.name ? p.name.trim().toLowerCase() : "";
            
            if ((imgKey && seenImages.has(imgKey)) || (nameKey && seenNames.has(nameKey))) {
                updated = true; // Forzar guardado para limpiar duplicados en localStorage
            } else {
                uniqueProducts.push(p);
                if (imgKey) seenImages.add(imgKey);
                if (nameKey) seenNames.add(nameKey);
            }
        });
        products = uniqueProducts;

        // Sincronizar de forma inteligente: si faltan productos por defecto o tienen datos desactualizados (como el nombre que antes era ficticio y ahora es el corte real), los actualizamos
        DEFAULT_PRODUCTS.forEach(dp => {
            const existingIdx = products.findIndex(p => p.id === dp.id);
            if (existingIdx !== -1) {
                const existing = products[existingIdx];
                if (existing.name !== dp.name || existing.description !== dp.description || existing.price !== dp.price || existing.category !== dp.category || existing.image !== dp.image) {
                    products[existingIdx] = { 
                        ...existing, 
                        name: dp.name, 
                        description: dp.description, 
                        price: dp.price, 
                        category: dp.category,
                        image: dp.image
                    };
                    updated = true;
                }
            } else {
                // Si no existe por ID, buscar si existe por imagen para evitar duplicados
                const existingImgIdx = products.findIndex(p => p.image === dp.image);
                if (existingImgIdx !== -1) {
                    products[existingImgIdx] = { 
                        ...products[existingImgIdx], 
                        id: dp.id, 
                        name: dp.name, 
                        description: dp.description, 
                        price: dp.price, 
                        category: dp.category 
                    };
                    updated = true;
                } else {
                    products.push(dp);
                    updated = true;
                }
            }
        });
        if (updated) {
            localStorage.setItem("pirona_products", JSON.stringify(products));
        }
    } else {
        products = [...DEFAULT_PRODUCTS];
        localStorage.setItem("pirona_products", JSON.stringify(products));
    }

    // Cargar posts
    const localPosts = localStorage.getItem("pirona_posts");
    if (localPosts) {
        posts = JSON.parse(localPosts);
        
        // Quitar las fotos por defecto antiguas (post-img-1 a post-img-18) de la galería
        const originalLength = posts.length;
        posts = posts.filter(p => !(p.id && p.id.startsWith("post-img-") && p.platform === "foto"));
        
        // Sincronizar de forma inteligente: si faltan publicaciones por defecto, las agregamos
        const missingDefaults = DEFAULT_POSTS.filter(dp => !posts.some(p => p.id === dp.id || p.url === dp.url));
        if (missingDefaults.length > 0 || posts.length !== originalLength) {
            posts = [...posts, ...missingDefaults];
            localStorage.setItem("pirona_posts", JSON.stringify(posts));
        }
    } else {
        posts = [...DEFAULT_POSTS];
        localStorage.setItem("pirona_posts", JSON.stringify(posts));
    }

    // Cargar número de WhatsApp
    const localWA = localStorage.getItem("pirona_whatsapp");
    if (localWA && localWA !== "573001234567" && localWA !== "573000000000") {
        whatsappNumber = localWA;
    } else {
        whatsappNumber = "573106845432";
        localStorage.setItem("pirona_whatsapp", whatsappNumber);
    }

    // Cargar configuracion de pagina
    const localSettings = localStorage.getItem("pirona_settings");
    if (localSettings) {
        settings = JSON.parse(localSettings);
        // Migración a nuevos datos si tienen los por defecto antiguos
        if (settings.contactAddress === "Calle Principal de la Barbería, Bogotá, Colombia") {
            settings.contactAddress = "Calle 3 con Carrera 30 local 30-16";
        }
        if (!settings.contactPhone || settings.contactPhone.includes("300 000 0000") || settings.contactPhone.includes("300 123 4567") || settings.contactPhone.includes("3001234567")) {
            settings.contactPhone = "+57 310 684 5432";
        }
        if (settings.contactHours === "Lunes a Sábado: 9:00 AM - 8:00 PM\nDomingos: 10:00 AM - 4:00 PM") {
            settings.contactHours = "Lunes a Sábado: 8:30 AM - 1:00 PM y 2:30 PM - 8:00 PM";
        }
        localStorage.setItem("pirona_settings", JSON.stringify(settings));
    } else {
        settings = {...DEFAULT_SETTINGS};
        localStorage.setItem("pirona_settings", JSON.stringify(settings));
    }

    // Cargar carrito de sessionStorage
    const localCart = sessionStorage.getItem("pirona_cart");
    if (localCart) {
        cart = JSON.parse(localCart);
    }

    // Cargar tema personalizado
    const localTheme = localStorage.getItem("pirona_theme");
    if (localTheme) {
        theme = JSON.parse(localTheme);
    } else {
        theme = { ...DEFAULT_THEME };
    }
    applyTheme();

    // Cargar posiciones guardadas
    const localOffsets = localStorage.getItem("pirona_layout_offsets");
    if (localOffsets) {
        layoutOffsets = JSON.parse(localOffsets);
    } else {
        layoutOffsets = {};
    }
}

// --- FORMATEAR A PESOS COLOMBIANOS (COP) ---
function formatPrice(value) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(value);
}

// --- RENDERIZAR PRODUCTOS ---
function renderProducts(filteredProducts = null) {
    const grid = document.getElementById("products-grid");
    const isAdmin = sessionStorage.getItem("pirona_admin") === "true";
    const targetProducts = filteredProducts || products;
    
    if (targetProducts.length === 0) {
        grid.innerHTML = `
            <div class="empty-cart-message" style="grid-column: 1/-1;">
                <i class="fa-solid fa-search"></i>
                <p>No se encontraron productos que coincidan con tu búsqueda.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = "";
    targetProducts.forEach(prod => {
        const isSoldOut = prod.status === "out-of-stock";
        
        const card = document.createElement("div");
        card.className = "product-card";
        card.setAttribute("data-id", prod.id);

        card.innerHTML = `
            ${isSoldOut ? `<span class="product-badge product-badge-soldout">Agotado</span>` : ''}
            <span class="product-category-tag">${prod.category}</span>
            <div class="product-img-wrapper">
                <img class="product-img" src="${prod.image}" alt="${prod.name}" onerror="this.src='https://placehold.co/500x500/1a1a22/d4af37?text=Error+Imagen'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${prod.name}</h3>
                <p class="product-desc">${prod.description}</p>
                <div class="product-price-row">
                    <span class="product-price">${formatPrice(prod.price)}</span>
                    <button class="btn-add-cart" onclick="addToCart('${prod.id}')" ${isSoldOut ? 'disabled' : ''} title="Añadir al carrito">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
            
            <!-- Admin Overlay -->
            ${isAdmin ? `
                <div class="product-admin-overlay">
                    <button class="btn-card-action btn-card-edit" onclick="openEditProductModal('${prod.id}')">
                        <i class="fa-solid fa-pen-to-square"></i> Editar
                    </button>
                    <button class="btn-card-action btn-card-delete" onclick="deleteProduct('${prod.id}')">
                        <i class="fa-solid fa-trash"></i> Eliminar
                    </button>
                </div>
            ` : ''}
        `;
        grid.appendChild(card);
    });
}

// --- RENDERIZAR PUBLICACIONES ---
function renderSocialPosts(filterPlatform = "all") {
    const grid = document.getElementById("social-grid");
    const isAdmin = sessionStorage.getItem("pirona_admin") === "true";
    
    let targetPosts = posts;
    if (filterPlatform !== "all") {
        targetPosts = posts.filter(p => p.platform === filterPlatform);
    }
    
    if (targetPosts.length === 0) {
        grid.innerHTML = `
            <div class="empty-cart-message" style="grid-column: 1/-1;">
                <i class="fa-solid fa-share-nodes"></i>
                <p>No hay publicaciones en esta pestaña.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = "";
    targetPosts.forEach(post => {
        const card = document.createElement("div");
        card.className = "social-card";
        card.setAttribute("data-id", post.id);

        let platformIcon = "fa-share-nodes";
        let platformClass = "";
        
        switch(post.platform) {
            case "youtube":
                platformIcon = "fa-brands fa-youtube";
                platformClass = "youtube-bg";
                break;
            case "tiktok":
                platformIcon = "fa-brands fa-tiktok";
                platformClass = "tiktok-bg";
                break;
            case "instagram":
                platformIcon = "fa-brands fa-instagram";
                platformClass = "instagram-bg";
                break;
            case "facebook":
                platformIcon = "fa-brands fa-facebook-f";
                platformClass = "facebook-bg";
                break;
            case "foto":
                platformIcon = "fa-solid fa-image";
                platformClass = "foto-bg";
                break;
            case "video":
                platformIcon = "fa-solid fa-circle-play";
                platformClass = "video-bg";
                break;
        }

        let cardBodyHTML = "";
        if (post.platform === "foto") {
            cardBodyHTML = `
                <div class="social-card-body foto" onclick="openLightbox('${post.url}', '${post.title}')" style="cursor: pointer; height: 250px; overflow: hidden; background: #000; display: flex; align-items: center; justify-content: center;">
                    <img src="${post.url}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onerror="this.src='https://placehold.co/500x500/1a1a22/d4af37?text=Error+Imagen'">
                </div>
            `;
        } else if (post.platform === "video") {
            cardBodyHTML = `
                <div class="social-card-body video" style="height: 250px; background: #000; display: flex; align-items: center; justify-content: center;">
                    <video src="${post.url}" controls style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://placehold.co/500x500/1a1a22/d4af37?text=Error+Video'"></video>
                </div>
            `;
        } else {
            cardBodyHTML = `
                <div class="social-card-body ${post.platform}">
                    <iframe src="${post.embedUrl}" allowfullscreen scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="social-card-header">
                <div class="social-platform-info">
                    <div class="social-icon-wrapper ${platformClass}">
                        <i class="${platformIcon}"></i>
                    </div>
                    <span class="social-platform-name" style="text-transform: capitalize;">${post.platform}</span>
                </div>
                <span class="social-card-title">${post.title}</span>
            </div>
            ${cardBodyHTML}
            
            <!-- Admin Overlay for social posts -->
            ${isAdmin ? `
                <div class="social-admin-overlay">
                    <button class="btn-social-action btn-social-edit" onclick="openEditPostModal('${post.id}')" title="Editar enlace">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button class="btn-social-action btn-social-delete" onclick="deletePost('${post.id}')" title="Eliminar publicación">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            ` : ''}
        `;
        grid.appendChild(card);
    });
}

// Funciones del Lightbox para la Galería de Imágenes
function openLightbox(imgUrl, title) {
    const modal = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-img");
    const titleEl = document.getElementById("lightbox-title");
    
    if (modal && img && titleEl) {
        img.src = imgUrl;
        titleEl.textContent = title;
        modal.classList.add("active");
    }
}

function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (modal) {
        modal.classList.remove("active");
    }
}

// --- FILTRADO DE PRODUCTOS ---
function setupFilters() {
    const buttons = document.querySelectorAll("#category-filters .filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const category = btn.getAttribute("data-category");
            filterCatalog(category, document.getElementById("search-input").value);
        });
    });
}

// --- FILTRADO DE REDES SOCIALES ---
function setupSocialFilters() {
    const buttons = document.querySelectorAll(".social-filter-btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const platform = btn.getAttribute("data-platform");
            renderSocialPosts(platform);
        });
    });
}

// --- BUSCADOR ---
function setupSearch() {
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", (e) => {
        const activeBtn = document.querySelector(".filter-btn.active");
        const category = activeBtn ? activeBtn.getAttribute("data-category") : "all";
        filterCatalog(category, e.target.value);
    });
}

function filterCatalog(category, query) {
    let result = products;
    
    // Filtrar por categoría
    if (category !== "all") {
        result = result.filter(p => p.category === category);
    }
    
    // Filtrar por búsqueda
    if (query && query.trim() !== "") {
        const q = query.toLowerCase().trim();
        result = result.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.description.toLowerCase().includes(q)
        );
    }
    
    renderProducts(result);
}

// --- CONFIGURACIÓN DE NÚMERO DE WHATSAPP EN MODO ADMIN ---
function setupAdminWhatsAppInput() {
    // Si queremos que el input de whatsapp esté visible en el panel de herramientas admin
    const adminActionsBar = document.getElementById("admin-actions-bar");
    
    // Creamos dinámicamente un contenedor de configuración dentro de la barra de administración
    let settingsDiv = document.getElementById("admin-settings-container");
    if (!settingsDiv) {
        settingsDiv = document.createElement("div");
        settingsDiv.id = "admin-settings-container";
        settingsDiv.style.marginTop = "15px";
        settingsDiv.style.paddingTop = "15px";
        settingsDiv.style.borderTop = "1px solid rgba(212,175,55,0.1)";
        settingsDiv.innerHTML = `
            <div class="form-group" style="margin-bottom: 0; max-width: 400px;">
                <label for="wa-input" style="font-size: 0.75rem; color: var(--gold);"><i class="fa-brands fa-whatsapp"></i> Número de WhatsApp de Ventas (Ej: 573001234567)</label>
                <div style="display:flex; gap:10px; margin-top:5px;">
                    <input type="text" id="wa-input" value="${whatsappNumber}" style="padding: 6px 12px; font-size: 0.85rem;">
                    <button class="btn btn-primary btn-sm" onclick="saveWhatsAppNumber()" style="padding:6px 15px;">Guardar</button>
                </div>
            </div>
        `;
        adminActionsBar.appendChild(settingsDiv);
    }
}

function saveWhatsAppNumber() {
    const input = document.getElementById("wa-input");
    if (input) {
        let val = input.value.trim().replace(/[^0-9]/g, ""); // Solo números
        if (val.length >= 10) {
            whatsappNumber = val;
            localStorage.setItem("pirona_whatsapp", whatsappNumber);
            applySettings(); // Actualizar botón de cita de WhatsApp por defecto si aplica
            alert("Número de WhatsApp guardado correctamente: " + whatsappNumber);
        } else {
            alert("Por favor ingresa un número de WhatsApp válido con código de país (ej: 57 para Colombia + 10 dígitos).");
        }
    }
}


// ==========================================================================
// CARRITO DE COMPRAS LÓGICA
// ==========================================================================

function toggleCart() {
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-overlay");
    drawer.classList.toggle("active");
    overlay.classList.toggle("active");
}

function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("active");
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product || product.status === "out-of-stock") return;

    const existingItem = cart.find(item => item.product.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    saveCart();
    renderCart();
    
    // Animación pequeña en el badge del carrito
    const badge = document.getElementById("cart-badge");
    badge.style.transform = "scale(1.3)";
    setTimeout(() => {
        badge.style.transform = "scale(1)";
    }, 200);

    // Si queremos abrir el carrito al agregar, descomentar abajo:
    // toggleCart();
}

function updateQuantity(id, delta) {
    const item = cart.find(item => item.product.id === id);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(id);
    } else {
        saveCart();
        renderCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.product.id !== id);
    saveCart();
    renderCart();
}

function saveCart() {
    sessionStorage.setItem("pirona_cart", JSON.stringify(cart));
}

function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartBadge = document.getElementById("cart-badge");
    const cartSubtotal = document.getElementById("cart-subtotal");
    const cartTotal = document.getElementById("cart-total");
    
    // Contar total de ítems
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-box-open"></i>
                <p>Tu carrito está vacío</p>
                <button class="btn btn-primary btn-sm" onclick="toggleCart()">Explorar Tienda</button>
            </div>
        `;
        cartSubtotal.textContent = "$0 COP";
        cartTotal.textContent = "$0 COP";
        document.getElementById("whatsapp-checkout-btn").disabled = true;
        return;
    }

    document.getElementById("whatsapp-checkout-btn").disabled = false;
    cartItemsContainer.innerHTML = "";
    
    let subtotal = 0;

    cart.forEach(item => {
        const itemSubtotal = item.product.price * item.quantity;
        subtotal += itemSubtotal;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";
        cartItemDiv.innerHTML = `
            <img class="cart-item-img" src="${item.product.image}" alt="${item.product.name}" onerror="this.src='https://placehold.co/100x100/1a1a22/d4af37?text=Error'">
            <div class="cart-item-details">
                <span class="cart-item-title" title="${item.product.name}">${item.product.name}</span>
                <span class="cart-item-price">${formatPrice(item.product.price)}</span>
                <div class="cart-item-qty-row">
                    <div class="qty-control">
                        <button class="btn-qty" onclick="updateQuantity('${item.product.id}', -1)">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="btn-qty" onclick="updateQuantity('${item.product.id}', 1)">+</button>
                    </div>
                </div>
            </div>
            <button class="btn-remove-item" onclick="removeFromCart('${item.product.id}')" title="Eliminar">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    cartSubtotal.textContent = formatPrice(subtotal);
    cartTotal.textContent = formatPrice(subtotal);
}

// --- ENVIAR PEDIDO POR WHATSAPP ---
function checkoutWhatsApp() {
    if (cart.length === 0) return;

    let message = `💈 *PIRONA CUT | PEDIDO DE TIENDA VIRTUAL* 💈\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `¡Hola! Me gustaría comprar los siguientes productos:\n\n`;
    
    let subtotal = 0;
    cart.forEach(item => {
        const itemSubtotal = item.product.price * item.quantity;
        subtotal += itemSubtotal;
        message += `📦 *${item.quantity}x* ${item.product.name}\n`;
        message += `   _Precio:_ ${formatPrice(item.product.price)} c/u\n`;
        message += `   _Subtotal:_ *${formatPrice(itemSubtotal)}*\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💵 *DETALLE DEL PAGO:*\n`;
    message += `   • *Subtotal:* ${formatPrice(subtotal)}\n`;
    message += `   • *Envío:* A convenir con el barbero 🛵\n`;
    message += `   • *TOTAL A PAGAR: ${formatPrice(subtotal)}*\n\n`;
    
    message += `✍️ *DATOS DE ENVÍO (Por favor completa en WhatsApp):*\n`;
    message += `   • *Nombre:* \n`;
    message += `   • *Dirección/Localidad:* \n`;
    message += `   • *Método de Pago:* (Efectivo / Transferencia)\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💈 *¡Muchas gracias por elegir Pirona Cut!* 💈`;

    // Codificar mensaje para la URL
    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    // Abrir WhatsApp en pestaña nueva
    window.open(waUrl, "_blank");
}


// ==========================================================================
// MODALES Y ACCESO DE ADMINISTRACIÓN
// ==========================================================================

// Abrir Modal por ID
function openModal(id) {
    document.getElementById(id).classList.add("active");
}

// Cerrar Modal por ID
function closeModal(id) {
    document.getElementById(id).classList.remove("active");
    if (id === 'product-modal') {
        document.getElementById("product-form").reset();
        document.getElementById("product-image-preview").src = "https://placehold.co/300x300/1a1a1e/d4af37?text=Sin+Imagen";
        document.getElementById("product-final-image").value = "";
        document.getElementById("edit-product-id").value = "";
    } else if (id === 'post-modal') {
        document.getElementById("post-form").reset();
        document.getElementById("embed-preview-wrapper").classList.add("hidden");
        document.getElementById("embed-preview-container").innerHTML = "";
        document.getElementById("edit-post-id").value = "";
        document.getElementById("save-post-btn").disabled = true;
    } else if (id === 'settings-modal') {
        document.getElementById("settings-form").reset();
    }
}

// Ventana Login Administrador
function openLoginModal() {
    document.getElementById("admin-password").value = "";
    document.getElementById("login-error-msg").classList.add("hidden");
    openModal("login-modal");
}

// Autenticación de Administrador
function handleLogin(e) {
    e.preventDefault();
    const pass = document.getElementById("admin-password").value;
    const errorMsg = document.getElementById("login-error-msg");

    if (pass === "Pirona20277") {
        sessionStorage.setItem("pirona_admin", "true");
        closeModal("login-modal");
        updateAdminUI();
        alert("¡Bienvenido Administrador!");
    } else {
        errorMsg.classList.remove("hidden");
    }
}

// Cerrar Sesión Admin
function logoutAdmin() {
    sessionStorage.removeItem("pirona_admin");
    updateAdminUI();
    alert("Sesión de administrador cerrada.");
}

// Verificar si hay sesión admin activa
function checkAdminSession() {
    updateAdminUI();
}

// Actualizar elementos visuales dependiendo de si es Admin o Cliente
function updateAdminUI() {
    const isAdmin = sessionStorage.getItem("pirona_admin") === "true";
    
    // Elementos Navbar e indicadores
    const indicators = [
        document.getElementById("admin-mode-indicator"),
        document.getElementById("mobile-admin-btn"),
        document.getElementById("admin-actions-bar"),
        document.getElementById("admin-logout-btn")
    ];

    indicators.forEach(el => {
        if (el) {
            if (isAdmin) el.classList.remove("hidden");
            else el.classList.add("hidden");
        }
    });

    // Botón de login footer
    const loginBtn = document.getElementById("admin-login-btn");
    if (loginBtn) {
        if (isAdmin) loginBtn.classList.add("hidden");
        else loginBtn.classList.remove("hidden");
    }

    // Actualizar el número de WhatsApp en la barra de herramientas si corresponde
    const waInput = document.getElementById("wa-input");
    if (waInput) {
        waInput.value = whatsappNumber;
    }

    // Volver a renderizar productos y redes para activar/desactivar botones de edición
    renderProducts();
    renderSocialPosts();
}


// ==========================================================================
// OPERACIONES CRUD - PRODUCTOS
// ==========================================================================

function openAddProductModal() {
    document.getElementById("product-modal-title").textContent = "Agregar Nuevo Producto";
    document.getElementById("edit-product-id").value = "";
    document.getElementById("product-form").reset();
    document.getElementById("product-image-preview").src = "https://placehold.co/300x300/1a1a1e/d4af37?text=Sin+Imagen";
    document.getElementById("product-final-image").value = "";
    openModal("product-modal");
}

function openEditProductModal(id) {
    const prod = products.find(p => p.id === id);
    if (!prod) return;

    document.getElementById("product-modal-title").textContent = "Editar Producto";
    document.getElementById("edit-product-id").value = prod.id;
    document.getElementById("product-name").value = prod.name;
    document.getElementById("product-price").value = prod.price;
    document.getElementById("product-category").value = prod.category;
    document.getElementById("product-status").value = prod.status;
    document.getElementById("product-desc").value = prod.description;
    
    document.getElementById("product-image-preview").src = prod.image;
    document.getElementById("product-final-image").value = prod.image;

    openModal("product-modal");
}

// Convertir enlaces para compartir de Google Drive a enlaces directos de imagen
function convertGoogleDriveLink(url) {
    url = url.trim();
    let fileId = '';
    
    if (url.includes('drive.google.com') || url.includes('docs.google.com')) {
        // Expresión regular para /file/d/FILE_ID
        const fileDRegex = /\/file\/d\/([a-zA-Z0-9_-]+)/;
        const fileDMatch = url.match(fileDRegex);
        
        if (fileDMatch && fileDMatch[1]) {
            fileId = fileDMatch[1];
        } else {
            // Expresión regular para ?id=FILE_ID o &id=FILE_ID
            const idRegex = /[?&]id=([a-zA-Z0-9_-]+)/;
            const idMatch = url.match(idRegex);
            if (idMatch && idMatch[1]) {
                fileId = idMatch[1];
            }
        }
    }
    
    if (fileId) {
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    
    return url;
}

// Vista previa de imagen desde URL de Internet
function previewUrlImage() {
    let url = document.getElementById("product-url-image").value.trim();
    const preview = document.getElementById("product-image-preview");
    const finalInput = document.getElementById("product-final-image");

    if (url !== "") {
        // Convertir el enlace si es de Google Drive
        const convertedUrl = convertGoogleDriveLink(url);
        if (convertedUrl !== url) {
            url = convertedUrl;
            document.getElementById("product-url-image").value = url;
        }
        preview.src = url;
        finalInput.value = url;
    } else {
        preview.src = "https://placehold.co/300x300/1a1a1e/d4af37?text=Sin+Imagen";
        finalInput.value = "";
    }
}

// Convertir foto local a Base64 con REDIMENSIONAMIENTO Y COMPRESIÓN DINÁMICA
function previewLocalImage(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("product-image-preview");
    const finalInput = document.getElementById("product-final-image");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                // Crear un canvas para comprimir la imagen
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                // Definir dimensiones máximas de 600px
                const maxDim = 600;
                let width = img.width;
                let height = img.height;
                
                if (width > height) {
                    if (width > maxDim) {
                        height = Math.round(height * (maxDim / width));
                        width = maxDim;
                    }
                } else {
                    if (height > maxDim) {
                        width = Math.round(width * (maxDim / height));
                        height = maxDim;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                
                // Extraer base64 optimizada en formato JPEG al 75%
                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.75);
                
                preview.src = compressedBase64;
                finalInput.value = compressedBase64;
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Guardar / Editar Producto Formulario
function handleProductSubmit(e) {
    e.preventDefault();
    
    const editId = document.getElementById("edit-product-id").value;
    const name = document.getElementById("product-name").value.trim();
    const price = parseInt(document.getElementById("product-price").value);
    const category = document.getElementById("product-category").value;
    const status = document.getElementById("product-status").value;
    const desc = document.getElementById("product-desc").value.trim();
    let image = document.getElementById("product-final-image").value;

    if (!image || image === "") {
        alert("Por favor selecciona una imagen para el producto.");
        return;
    }

    // Asegurar la conversión de enlaces de Google Drive al guardar
    image = convertGoogleDriveLink(image);

    if (editId) {
        // Modo Edición
        const idx = products.findIndex(p => p.id === editId);
        if (idx !== -1) {
            const oldProduct = products[idx];
            products[idx] = {
                ...products[idx],
                name,
                price,
                category,
                status,
                description: desc,
                image
            };
            
            try {
                localStorage.setItem("pirona_products", JSON.stringify(products));
                alert("Producto actualizado correctamente.");
                closeModal("product-modal");
                renderProducts();
            } catch (error) {
                // Revertir en memoria si localStorage falla
                products[idx] = oldProduct;
                console.error("Error al guardar:", error);
                if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                    alert("⚠️ Error de Memoria: El navegador no tiene espacio suficiente. Por favor, sube una foto más pequeña o usa un enlace de Google Drive.");
                } else {
                    alert("Error al guardar: " + error.message);
                }
            }
        }
    } else {
        // Modo Creación
        const newProduct = {
            id: "prod-" + Date.now(),
            name,
            price,
            category,
            status,
            description: desc,
            image
        };
        products.unshift(newProduct);
        
        try {
            localStorage.setItem("pirona_products", JSON.stringify(products));
            alert("Producto agregado correctamente.");
            closeModal("product-modal");
            renderProducts();
        } catch (error) {
            // Revertir de memoria si localStorage falla
            products.shift();
            console.error("Error al guardar:", error);
            if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                alert("⚠️ Error de Memoria: El navegador no tiene espacio suficiente. Por favor, sube una foto más pequeña o usa un enlace de Google Drive.");
            } else {
                alert("Error al guardar: " + error.message);
            }
        }
    }
}

// Eliminar Producto
function deleteProduct(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este producto del catálogo?")) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem("pirona_products", JSON.stringify(products));
        
        // Quitar también del carrito si estaba agregado
        cart = cart.filter(item => item.product.id !== id);
        saveCart();
        renderCart();
        
        renderProducts();
    }
}


// ==========================================================================
// OPERACIONES CRUD - REDES SOCIALES (EMBED DETECTOR)
// ==========================================================================

function openAddPostModal() {
    document.getElementById("post-modal-title").textContent = "Agregar Publicación de Redes";
    document.getElementById("edit-post-id").value = "";
    document.getElementById("post-form").reset();
    document.getElementById("embed-preview-wrapper").classList.add("hidden");
    document.getElementById("embed-preview-container").innerHTML = "";
    document.getElementById("post-platform").value = "unknown";
    document.getElementById("save-post-btn").disabled = true;
    openModal("post-modal");
}

function openEditPostModal(id) {
    const post = posts.find(p => p.id === id);
    if (!post) return;

    document.getElementById("post-modal-title").textContent = "Editar Publicación";
    document.getElementById("edit-post-id").value = post.id;
    document.getElementById("post-title").value = post.title;
    document.getElementById("post-desc").value = post.description || "";
    
    // Configurar tipo en select
    const isSocial = ["youtube", "tiktok", "instagram", "facebook"].includes(post.platform);
    const selectType = isSocial ? "social" : post.platform;
    document.getElementById("post-type").value = selectType;
    
    switchGalleryType(); // Ocultar/mostrar paneles según el tipo
    
    if (isSocial) {
        document.getElementById("post-url").value = post.url;
        document.getElementById("post-platform").value = post.platform;
        autoDetectPlatform();
    } else if (post.platform === "foto") {
        document.getElementById("gallery-image-preview").src = post.url;
        document.getElementById("gallery-final-image").value = post.url;
        if (post.url.startsWith("http")) {
            switchGallerySourceTab("photo", "url");
            document.getElementById("post-url-image").value = post.url;
        } else {
            switchGallerySourceTab("photo", "file");
        }
    } else if (post.platform === "video") {
        const preview = document.getElementById("gallery-video-preview");
        const placeholder = document.getElementById("gallery-video-preview-placeholder");
        preview.src = post.url;
        preview.classList.remove("hidden");
        placeholder.style.display = "none";
        document.getElementById("gallery-final-video").value = post.url;
        
        if (post.url.startsWith("http")) {
            switchGallerySourceTab("video", "url");
            document.getElementById("post-url-video").value = post.url;
        } else {
            switchGallerySourceTab("video", "file");
        }
    }
    
    checkGalleryFormValidity();
    openModal("post-modal");
}

// Detector inteligente de enlaces de redes sociales
function parseSocialLink(url) {
    url = url.trim();
    
    // YouTube (Videos y Shorts)
    const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
    const ytMatch = url.match(ytRegex);
    if (ytMatch) {
        return {
            platform: 'youtube',
            embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}`
        };
    }
    
    // TikTok
    const ttRegex = /tiktok\.com\/@[^\/]+\/video\/(\d+)/;
    const ttMatch = url.match(ttRegex);
    if (ttMatch) {
        return {
            platform: 'tiktok',
            embedUrl: `https://www.tiktok.com/embed/v2/${ttMatch[1]}`
        };
    }
    
    // Instagram (Posts y Reels)
    const igRegex = /instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9_-]+)/;
    const igMatch = url.match(igRegex);
    if (igMatch) {
        return {
            platform: 'instagram',
            embedUrl: `https://www.instagram.com/p/${igMatch[1]}/embed`
        };
    }
    
    // Facebook
    const fbRegex = /(?:facebook\.com|fb\.watch)\/.+/;
    if (fbRegex.test(url)) {
        // Determinar si contiene video o es un post normal
        const isVideo = url.includes('/videos/') || url.includes('/watch') || url.includes('fb.watch');
        const pluginType = isVideo ? 'video.php' : 'post.php';
        return {
            platform: 'facebook',
            embedUrl: `https://www.facebook.com/plugins/${pluginType}?href=${encodeURIComponent(url)}&show_text=true&width=500`
        };
    }
    
    return {
        platform: 'unknown',
        embedUrl: ''
    };
}

// Ejecuta la autodetección mientras el usuario escribe o pega el link
function autoDetectPlatform() {
    const url = document.getElementById("post-url").value;
    const platformSelect = document.getElementById("post-platform");
    const previewWrapper = document.getElementById("embed-preview-wrapper");
    const previewContainer = document.getElementById("embed-preview-container");
    const saveBtn = document.getElementById("save-post-btn");

    const info = parseSocialLink(url);

    if (info.platform !== 'unknown') {
        platformSelect.value = info.platform;
        previewContainer.className = `embed-preview-container ${info.platform}`;
        previewContainer.innerHTML = `<iframe src="${info.embedUrl}" allowfullscreen scrolling="no" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`;
        previewWrapper.classList.remove("hidden");
        saveBtn.disabled = false;
    } else {
        platformSelect.value = 'unknown';
        previewContainer.className = "embed-preview-container";
        previewContainer.innerHTML = "";
        previewWrapper.classList.add("hidden");
        saveBtn.disabled = true;
    }
}

// Guardar / Editar publicación en redes o personalizada
function handlePostSubmit(e) {
    e.preventDefault();

    const editId = document.getElementById("edit-post-id").value;
    const type = document.getElementById("post-type").value;
    const title = document.getElementById("post-title").value.trim();
    const desc = document.getElementById("post-desc").value.trim();
    
    let platform = type;
    let url = "";
    let embedUrl = "";

    if (type === "social") {
        url = document.getElementById("post-url").value.trim();
        const info = parseSocialLink(url);
        if (info.platform === 'unknown') {
            alert("Enlace inválido. Por favor pega un enlace de YouTube, TikTok, Instagram o Facebook correcto.");
            return;
        }
        platform = info.platform;
        embedUrl = info.embedUrl;
    } else if (type === "foto") {
        url = document.getElementById("gallery-final-image").value;
        if (!url) {
            alert("Por favor selecciona o introduce una imagen.");
            return;
        }
    } else if (type === "video") {
        url = document.getElementById("gallery-final-video").value;
        if (!url) {
            alert("Por favor selecciona o introduce un video.");
            return;
        }
    }

    const postData = {
        platform,
        title,
        description: desc,
        url,
        embedUrl
    };

    if (editId) {
        // Editar
        const idx = posts.findIndex(p => p.id === editId);
        if (idx !== -1) {
            const oldPost = posts[idx];
            posts[idx] = {
                ...posts[idx],
                ...postData
            };
            
            try {
                localStorage.setItem("pirona_posts", JSON.stringify(posts));
                alert("Publicación actualizada correctamente.");
                closeModal("post-modal");
                renderSocialPosts();
            } catch (error) {
                posts[idx] = oldPost;
                console.error("Error al guardar:", error);
                if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                    alert("⚠️ Error de Memoria: El navegador no tiene espacio suficiente. Sube una foto o video más pequeño o usa enlaces de internet.");
                } else {
                    alert("Error al guardar: " + error.message);
                }
            }
        }
    } else {
        // Crear
        const newPost = {
            id: "post-" + Date.now(),
            ...postData
        };
        posts.unshift(newPost); // Al principio
        
        try {
            localStorage.setItem("pirona_posts", JSON.stringify(posts));
            alert("Publicación agregada con éxito.");
            closeModal("post-modal");
            renderSocialPosts();
        } catch (error) {
            posts.shift();
            console.error("Error al guardar:", error);
            if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                alert("⚠️ Error de Memoria: El navegador no tiene espacio suficiente. Sube una foto o video más pequeño o usa enlaces de internet.");
            } else {
                alert("Error al guardar: " + error.message);
            }
        }
    }
}

// Eliminar Publicación
function deletePost(id) {
    if (confirm("¿Estás seguro de que deseas eliminar esta publicación de la galería?")) {
        posts = posts.filter(p => p.id !== id);
        localStorage.setItem("pirona_posts", JSON.stringify(posts));
        renderSocialPosts();
    }
}


// ==========================================================================
// HERRAMIENTAS ADICIONALES (COPIAS DE SEGURIDAD Y RESTABLECER)
// ==========================================================================

// Restablecer Tienda a Valores de Fábrica
function resetStoreToDefault() {
    if (confirm("🚨 ATENCIÓN: Esto restablecerá todos los productos, publicaciones y configuración a los valores originales de fábrica. Perderás tus modificaciones locales. ¿Deseas continuar?")) {
        localStorage.removeItem("pirona_products");
        localStorage.removeItem("pirona_posts");
        localStorage.removeItem("pirona_whatsapp");
        localStorage.removeItem("pirona_settings");
        
        // Volver a cargar e iniciar
        loadData();
        applySettings();
        renderProducts();
        renderSocialPosts();
        setupAdminWhatsAppInput();
        
        alert("Tienda restablecida con éxito.");
    }
}

// Exportar Base de Datos Local como Archivo JSON
function exportStoreData() {
    const dataToExport = {
        products: products,
        posts: posts,
        whatsappNumber: whatsappNumber,
        settings: settings,
        exportDate: new Date().toISOString()
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataToExport, null, 4));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `pironacut_respaldo_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Exportar copia de seguridad completa del sitio web (.html, .css, .js, .json, imágenes y otros formatos) en un archivo ZIP
async function exportFullWebsiteBackup() {
    try {
        const btn = document.getElementById("btn-full-backup");
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Generando ZIP...`;
        btn.disabled = true;

        const zip = new JSZip();

        // 1. Obtener index.html
        const htmlRes = await fetch("index.html");
        const htmlText = await htmlRes.text();
        zip.file("index.html", htmlText);

        // 2. Obtener styles.css
        const cssRes = await fetch("styles.css");
        const cssText = await cssRes.text();
        zip.file("styles.css", cssText);

        // 3. Obtener app.js
        const jsRes = await fetch("app.js");
        const jsText = await jsRes.text();
        zip.file("app.js", jsText);

        // 4. Agregar los datos de la base de datos (JSON)
        const dataToExport = {
            products: products,
            posts: posts,
            whatsappNumber: whatsappNumber,
            settings: settings,
            exportDate: new Date().toISOString()
        };
        zip.file("pironacut_datos.json", JSON.stringify(dataToExport, null, 4));

        // 5. Obtener README.md si existe
        try {
            const readmeRes = await fetch("README.md");
            if (readmeRes.ok) {
                const readmeText = await readmeRes.text();
                zip.file("README.md", readmeText);
            }
        } catch (e) {
            console.warn("No se pudo obtener README.md:", e);
        }

        // 6. Obtener imágenes locales y fotos de la página
        const localAssets = [
            "logo.jpg",
            "pirona.jpeg",
            "1.png",
            "2.png",
            "Gemini_Generated_Image_3kr8z43kr8z43kr8.png",
            "Gemini_Generated_Image_41cy9l41cy9l41cy.png",
            "Gemini_Generated_Image_52vb7f52vb7f52vb.png",
            "Gemini_Generated_Image_763t1l763t1l763t.png",
            "Gemini_Generated_Image_9x9w9w9x9w9w9x9w.png",
            "Gemini_Generated_Image_czrvwmczrvwmczrv.png",
            "Gemini_Generated_Image_hofxehofxehofxeh.png",
            "Gemini_Generated_Image_jtichujtichujtic.png",
            "Gemini_Generated_Image_lrg454lrg454lrg4.png",
            "Gemini_Generated_Image_octvd6octvd6octv.png",
            "Gemini_Generated_Image_ogk6pyogk6pyogk6.png",
            "Gemini_Generated_Image_qxsaqxsaqxsaqxsa.png",
            "Gemini_Generated_Image_ssd07dssd07dssd0.png",
            "Gemini_Generated_Image_u7oqfku7oqfku7oq.png",
            "Gemini_Generated_Image_x4q3k1x4q3k1x4q3.png",
            "Gemini_Generated_Image_z9gioez9gioez9gi.png"
        ];

        for (const assetName of localAssets) {
            try {
                const assetRes = await fetch(assetName);
                if (assetRes.ok) {
                    const assetBlob = await assetRes.blob();
                    zip.file(assetName, assetBlob);
                }
            } catch (e) {
                console.warn(`No se pudo incluir el archivo ${assetName} en el ZIP:`, e);
            }
        }

        // Generar el archivo zip de forma asíncrona
        const content = await zip.generateAsync({ type: "blob" });
        
        // Crear el enlace de descarga y disparar el evento click
        const downloadUrl = URL.createObjectURL(content);
        const downloadAnchor = document.createElement('a');
        downloadAnchor.href = downloadUrl;
        downloadAnchor.download = `pironacut_sitio_completo_${new Date().toISOString().slice(0,10)}.zip`;
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        
        // Limpieza
        document.body.removeChild(downloadAnchor);
        URL.revokeObjectURL(downloadUrl);

        btn.innerHTML = originalText;
        btn.disabled = false;
        alert("¡Copia de seguridad en ZIP descargada con éxito! Contiene index.html, styles.css, app.js, README.md, las imágenes locales y tus datos pironacut_datos.json.");
    } catch (error) {
        console.error("Error al generar copia ZIP:", error);
        alert("⚠️ Error al generar el archivo ZIP: " + error.message + "\n\nNota: Si estás abriendo el archivo HTML directamente desde tu computadora (file://), algunos navegadores bloquean la descarga por seguridad de origen local (CORS). Intenta ejecutar la web a través de un servidor local o un hosting.");
        const btn = document.getElementById("btn-full-backup");
        if (btn) {
            btn.innerHTML = `<i class="fa-solid fa-file-zipper"></i> Copia Completa (ZIP)`;
            btn.disabled = false;
        }
    }
}

// Importar Base de Datos Local desde Archivo JSON
function importStoreData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (importedData.products && Array.isArray(importedData.products) &&
                importedData.posts && Array.isArray(importedData.posts)) {
                
                if (confirm("Se detectó un respaldo válido. Se reemplazarán todos los productos, publicaciones y configuraciones actuales. ¿Deseas proceder?")) {
                    
                    products = importedData.products;
                    posts = importedData.posts;
                    if (importedData.whatsappNumber) {
                        whatsappNumber = importedData.whatsappNumber;
                    }
                    if (importedData.settings) {
                        settings = importedData.settings;
                    } else {
                        settings = {...DEFAULT_SETTINGS};
                    }

                    localStorage.setItem("pirona_products", JSON.stringify(products));
                    localStorage.setItem("pirona_posts", JSON.stringify(posts));
                    localStorage.setItem("pirona_whatsapp", whatsappNumber);
                    localStorage.setItem("pirona_settings", JSON.stringify(settings));
                    
                    applySettings();
                    renderProducts();
                    renderSocialPosts();
                    setupAdminWhatsAppInput();
                    
                    alert("¡Copia de seguridad cargada y restaurada con éxito!");
                }
            } else {
                alert("El archivo JSON cargado no posee el formato correcto de respaldo de Pirona Cut.");
            }
        } catch (err) {
            alert("Error al leer el archivo JSON: " + err.message);
        }
    };
    reader.readAsText(file);
    
    // Limpiar input file
    event.target.value = "";
}

// --- APLICAR Y GESTIONAR CONFIGURACIÓN DE PÁGINA (HERO, CONTACTO, MAPA, REDES) ---
function applySettings() {
    // 1. Hero
    document.getElementById("display-hero-title").textContent = settings.heroTitle;
    document.getElementById("display-hero-subtitle").textContent = settings.heroSubtitle;
    document.getElementById("display-hero-desc").textContent = settings.heroDesc;
    
    // Enlace de Reservar Cita
    const bookingBtn = document.getElementById("display-hero-booking-btn");
    if (settings.heroBookingUrl && settings.heroBookingUrl.trim() !== "") {
        bookingBtn.href = settings.heroBookingUrl;
    } else {
        bookingBtn.href = `https://wa.me/${whatsappNumber}?text=¡Hola%20Pirona%20Cut!%20Me%20gustaría%20reservar%20una%20cita.`;
    }
    
    // 2. Información de Contacto
    document.getElementById("display-contact-address").textContent = settings.contactAddress;
    document.getElementById("display-contact-phone").textContent = settings.contactPhone;
    document.getElementById("display-contact-hours").textContent = settings.contactHours;
    
    // 3. Redes Sociales en Contacto
    setSocialLink("display-social-ig", settings.socialIg);
    setSocialLink("display-social-tk", settings.socialTk);
    setSocialLink("display-social-yt", settings.socialYt);
    setSocialLink("display-social-fb", settings.socialFb);
    
    // 4. Ubicación / Mapa
    const mapLabel = document.getElementById("display-map-label");
    if (mapLabel) mapLabel.textContent = settings.mapLabel;
    const mapDesc = document.getElementById("display-map-desc");
    if (mapDesc) mapDesc.textContent = settings.mapDesc;
    const mapLink = document.getElementById("display-map-link");
    if (mapLink) mapLink.href = settings.mapLink;

    // 5. Enlace del Curso de Barbería
    const cursoBtn = document.getElementById("btn-curso-whatsapp");
    if (cursoBtn) {
        cursoBtn.href = `https://wa.me/${whatsappNumber}?text=Hola%20Pirona%20Cut!%20Me%20gustaría%20recibir%20más%20información%20sobre%20el%20Curso%20de%20Barbería%20desde%20lo%20básico%20a%20lo%20avanzado.`;
    }
}

function setSocialLink(elementId, url) {
    const el = document.getElementById(elementId);
    if (el) {
        if (url && url.trim() !== "") {
            el.href = url;
            el.style.display = "flex";
        } else {
            el.style.display = "none";
        }
    }
}

// Abrir Modal de Configuración General
function openSettingsModal() {
    document.getElementById("settings-hero-title").value = settings.heroTitle;
    document.getElementById("settings-hero-subtitle").value = settings.heroSubtitle;
    document.getElementById("settings-hero-desc").value = settings.heroDesc;
    document.getElementById("settings-hero-booking").value = settings.heroBookingUrl || "";
    
    document.getElementById("settings-contact-address").value = settings.contactAddress;
    document.getElementById("settings-contact-phone").value = settings.contactPhone;
    document.getElementById("settings-contact-hours").value = settings.contactHours;
    
    document.getElementById("settings-social-ig").value = settings.socialIg || "";
    document.getElementById("settings-social-tk").value = settings.socialTk || "";
    document.getElementById("settings-social-yt").value = settings.socialYt || "";
    document.getElementById("settings-social-fb").value = settings.socialFb || "";
    
    document.getElementById("settings-map-label").value = settings.mapLabel;
    document.getElementById("settings-map-desc").value = settings.mapDesc;
    document.getElementById("settings-map-link").value = settings.mapLink;
    
    openModal("settings-modal");
}

// Guardar Configuración General
function handleSettingsSubmit(e) {
    e.preventDefault();
    
    settings.heroTitle = document.getElementById("settings-hero-title").value.trim();
    settings.heroSubtitle = document.getElementById("settings-hero-subtitle").value.trim();
    settings.heroDesc = document.getElementById("settings-hero-desc").value.trim();
    settings.heroBookingUrl = document.getElementById("settings-hero-booking").value.trim();
    
    settings.contactAddress = document.getElementById("settings-contact-address").value.trim();
    settings.contactPhone = document.getElementById("settings-contact-phone").value.trim();
    settings.contactHours = document.getElementById("settings-contact-hours").value.trim();
    
    settings.socialIg = document.getElementById("settings-social-ig").value.trim();
    settings.socialTk = document.getElementById("settings-social-tk").value.trim();
    settings.socialYt = document.getElementById("settings-social-yt").value.trim();
    settings.socialFb = document.getElementById("settings-social-fb").value.trim();
    
    settings.mapLabel = document.getElementById("settings-map-label").value.trim();
    settings.mapDesc = document.getElementById("settings-map-desc").value.trim();
    settings.mapLink = document.getElementById("settings-map-link").value.trim();
    
    localStorage.setItem("pirona_settings", JSON.stringify(settings));
    applySettings();
    closeModal("settings-modal");
    alert("¡Información de la página guardada y actualizada correctamente!");
}

// ==========================================================================
// PERSONALIZACIÓN DE ESTILO (DISEÑADOR DE TEMA)
// ==========================================================================

// Abrir Modal de Personalización de Estilo
function openCustomizerModal() {
    document.getElementById("custom-bg-main").value = theme.bgMain || DEFAULT_THEME.bgMain;
    document.getElementById("custom-bg-card").value = theme.bgCard || DEFAULT_THEME.bgCard;
    document.getElementById("custom-gold").value = theme.gold || DEFAULT_THEME.gold;
    document.getElementById("custom-text-main").value = theme.textMain || DEFAULT_THEME.textMain;
    
    document.getElementById("custom-font-heading").value = theme.fontHeading || DEFAULT_THEME.fontHeading;
    document.getElementById("custom-font-body").value = theme.fontBody || DEFAULT_THEME.fontBody;
    
    const scale = theme.textScale || DEFAULT_THEME.textScale;
    document.getElementById("custom-text-scale").value = scale;
    updateTextScaleLabel(scale);
    
    openModal("customizer-modal");
}

// Actualizar Etiqueta de la Escala de Texto
function updateTextScaleLabel(value) {
    const pct = Math.round(value * 100);
    document.getElementById("label-text-scale").textContent = `Escala de Tamaño: ${pct}% ${value == 1.0 ? '(Normal)' : ''}`;
}

// Guardar y Aplicar Estilo
function handleCustomizerSubmit(e) {
    e.preventDefault();
    
    theme.bgMain = document.getElementById("custom-bg-main").value;
    theme.bgCard = document.getElementById("custom-bg-card").value;
    theme.gold = document.getElementById("custom-gold").value;
    theme.textMain = document.getElementById("custom-text-main").value;
    
    theme.fontHeading = document.getElementById("custom-font-heading").value;
    theme.fontBody = document.getElementById("custom-font-body").value;
    theme.textScale = document.getElementById("custom-text-scale").value;
    
    localStorage.setItem("pirona_theme", JSON.stringify(theme));
    applyTheme();
    closeModal("customizer-modal");
    alert("¡Estilo y diseño del sitio web actualizados correctamente!");
}

// Aplicar Estilos CSS variables al documento :root
function applyTheme() {
    const root = document.documentElement;
    root.style.setProperty('--bg-main', theme.bgMain || DEFAULT_THEME.bgMain);
    root.style.setProperty('--bg-card', theme.bgCard || DEFAULT_THEME.bgCard);
    root.style.setProperty('--gold', theme.gold || DEFAULT_THEME.gold);
    root.style.setProperty('--text-main', theme.textMain || DEFAULT_THEME.textMain);
    root.style.setProperty('--font-heading', theme.fontHeading || DEFAULT_THEME.fontHeading);
    root.style.setProperty('--font-body', theme.fontBody || DEFAULT_THEME.fontBody);
    root.style.setProperty('--text-scale', theme.textScale || DEFAULT_THEME.textScale);
}

// Restablecer Estilo por Defecto de la Tienda
function resetThemeToDefault() {
    if (confirm("¿Estás seguro de que deseas restablecer los colores, fuentes y escala del texto a los valores de fábrica de Pirona Cut?")) {
        theme = { ...DEFAULT_THEME };
        localStorage.setItem("pirona_theme", JSON.stringify(theme));
        applyTheme();
        
        // Sincronizar inputs en el modal
        document.getElementById("custom-bg-main").value = theme.bgMain;
        document.getElementById("custom-bg-card").value = theme.bgCard;
        document.getElementById("custom-gold").value = theme.gold;
        document.getElementById("custom-text-main").value = theme.textMain;
        document.getElementById("custom-font-heading").value = theme.fontHeading;
        document.getElementById("custom-font-body").value = theme.fontBody;
        document.getElementById("custom-text-scale").value = theme.textScale;
        updateTextScaleLabel(theme.textScale);
        
        alert("Tema restablecido a los valores por defecto.");
    }
}

// ==========================================================================
// EDICIÓN VISUAL INTERACTIVA (ARRASRAR Y MOVER ELEMENTOS)
// ==========================================================================

// Activar o desactivar el modo de edición visual
function toggleVisualEditMode() {
    visualEditModeActive = !visualEditModeActive;
    
    const body = document.body;
    const btn = document.getElementById("btn-visual-edit");
    
    if (visualEditModeActive) {
        body.classList.add("visual-edit-active");
        btn.innerHTML = `<i class="fa-solid fa-check"></i> Desactivar Edición Visual`;
        btn.style.background = "linear-gradient(135deg, #25d366 0%, #20ba59 100%)";
        btn.style.color = "#ffffff";
        alert("Modo de edición visual activado. Ahora puedes arrastrar cualquiera de las secciones con borde punteado.");
    } else {
        body.classList.remove("visual-edit-active");
        btn.innerHTML = `<i class="fa-solid fa-arrows-up-down-left-right"></i> Activar Edición Visual`;
        btn.style.background = "";
        btn.style.color = "";
        alert("Modo de edición visual desactivado y posiciones guardadas.");
    }
}

// Aplicar posiciones guardadas (transformaciones translate) a todos los elementos con la clase movable-element
function applyLayoutOffsets() {
    const elements = document.querySelectorAll(".movable-element");
    elements.forEach(el => {
        const id = el.id;
        if (id && layoutOffsets[id]) {
            const pos = layoutOffsets[id];
            el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }
    });
}

// Restablecer todas las posiciones guardadas al flujo normal
function resetLayoutOffsets() {
    if (confirm("¿Deseas restablecer las posiciones de todos los objetos en la página a su lugar original?")) {
        layoutOffsets = {};
        localStorage.removeItem("pirona_layout_offsets");
        
        const elements = document.querySelectorAll(".movable-element");
        elements.forEach(el => {
            el.style.transform = "";
        });
        
        alert("Posiciones restablecidas correctamente.");
    }
}

// Configurar el sistema de arrastre táctil y con mouse (Pointer Events)
function setupDragging() {
    let activeDragElement = null;
    let startX = 0;
    let startY = 0;
    let initialOffsetX = 0;
    let initialOffsetY = 0;

    // Escuchar el evento pointerdown
    document.addEventListener("pointerdown", (e) => {
        if (!visualEditModeActive) return;

        // Buscar si hicimos clic dentro de un elemento arrastrable
        const target = e.target.closest(".movable-element");
        if (!target) return;

        // Desactivar comportamientos por defecto del navegador para arrastre
        e.preventDefault();

        activeDragElement = target;
        activeDragElement.setPointerCapture(e.pointerId);

        const id = activeDragElement.id;
        const offsets = layoutOffsets[id] || { x: 0, y: 0 };
        initialOffsetX = offsets.x;
        initialOffsetY = offsets.y;

        startX = e.clientX;
        startY = e.clientY;
    });

    // Escuchar el evento pointermove
    document.addEventListener("pointermove", (e) => {
        if (!visualEditModeActive || !activeDragElement) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        const newX = initialOffsetX + dx;
        const newY = initialOffsetY + dy;

        const id = activeDragElement.id;
        if (!layoutOffsets[id]) layoutOffsets[id] = {};
        layoutOffsets[id].x = newX;
        layoutOffsets[id].y = newY;

        activeDragElement.style.transform = `translate(${newX}px, ${newY}px)`;
    });

    // Escuchar el evento pointerup o pointercancel
    const handleDragEnd = (e) => {
        if (!activeDragElement) return;

        activeDragElement.releasePointerCapture(e.pointerId);
        activeDragElement = null;

        // Guardar posiciones en localStorage
        localStorage.setItem("pirona_layout_offsets", JSON.stringify(layoutOffsets));
    };

    document.addEventListener("pointerup", handleDragEnd);
    document.addEventListener("pointercancel", handleDragEnd);
}

// ==========================================================================
// FUNCIONALIDAD DE VISTA PREVIA Y SUBIDA DE LA GALERÍA
// ==========================================================================

// Cambiar el tipo de elemento de la galería (social, foto personalizada, video personalizado)
function switchGalleryType() {
    const type = document.getElementById("post-type").value;
    const socialSec = document.getElementById("gallery-social-section");
    const photoSec = document.getElementById("gallery-photo-section");
    const videoSec = document.getElementById("gallery-video-section");
    const saveBtn = document.getElementById("save-post-btn");

    socialSec.classList.add("hidden");
    photoSec.classList.add("hidden");
    videoSec.classList.add("hidden");

    if (type === "social") {
        socialSec.classList.remove("hidden");
        autoDetectPlatform(); // Esto activará o no el botón guardar en base al link
    } else if (type === "foto") {
        photoSec.classList.remove("hidden");
        previewGalleryPhotoUrl(); // Si hay una URL previa, actualizarla
        checkGalleryFormValidity();
    } else if (type === "video") {
        videoSec.classList.remove("hidden");
        previewGalleryVideoUrl();
        checkGalleryFormValidity();
    }
}

// Cambiar la pestaña de origen entre subida local e internet (URL)
function switchGallerySourceTab(type, source) {
    const tabFile = document.getElementById(`tab-${type}-file`);
    const tabUrl = document.getElementById(`tab-${type}-url`);
    const containerFile = document.getElementById(`gallery-${type}-file-container`);
    const containerUrl = document.getElementById(`gallery-${type}-url-container`);

    if (source === "file") {
        tabFile.classList.add("active");
        tabUrl.classList.remove("active");
        containerFile.classList.remove("hidden");
        containerUrl.classList.add("hidden");
    } else {
        tabFile.classList.remove("active");
        tabUrl.classList.add("active");
        containerFile.classList.add("hidden");
        containerUrl.classList.remove("hidden");
    }
    
    // Al cambiar la pestaña, volver a verificar si se puede habilitar el botón de guardar
    if (type === "photo") {
        previewGalleryPhotoUrl();
    } else if (type === "video") {
        previewGalleryVideoUrl();
    }
}

// Procesar imagen de galería local con compresión y redimensionamiento
function previewGalleryPhotoLocal(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("gallery-image-preview");
    const finalInput = document.getElementById("gallery-final-image");

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                // Dimensión máxima recomendada para galería: 800px
                const maxDim = 800;
                let width = img.width;
                let height = img.height;
                
                if (width > height) {
                    if (width > maxDim) {
                        height = Math.round(height * (maxDim / width));
                        width = maxDim;
                    }
                } else {
                    if (height > maxDim) {
                        width = Math.round(width * (maxDim / height));
                        height = maxDim;
                    }
                }
                
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                
                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.8);
                
                preview.src = compressedBase64;
                finalInput.value = compressedBase64;
                checkGalleryFormValidity();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Vista previa de imagen de galería desde una URL
function previewGalleryPhotoUrl() {
    const tabUrlActive = document.getElementById("tab-photo-url").classList.contains("active");
    const preview = document.getElementById("gallery-image-preview");
    const finalInput = document.getElementById("gallery-final-image");
    
    if (tabUrlActive) {
        let url = document.getElementById("post-url-image").value.trim();
        if (url !== "") {
            url = convertGoogleDriveLink(url);
            document.getElementById("post-url-image").value = url;
            preview.src = url;
            finalInput.value = url;
        } else {
            preview.src = "https://placehold.co/300x300/1a1a1e/d4af37?text=Sin+Imagen";
            finalInput.value = "";
        }
    } else {
        // Si estamos en modo archivo local, asegurar que finalInput tenga lo que está en preview.src (si no es placehold)
        if (!preview.src.includes("placehold.co")) {
            finalInput.value = preview.src;
        }
    }
    checkGalleryFormValidity();
}

// Procesar video local para galería
function previewGalleryVideoLocal(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("gallery-video-preview");
    const placeholder = document.getElementById("gallery-video-preview-placeholder");
    const finalInput = document.getElementById("gallery-final-video");

    if (file) {
        // Advertencia si el video es de más de 12MB para evitar cuotas de localStorage
        if (file.size > 12 * 1024 * 1024) {
            alert("⚠️ El archivo de video es demasiado pesado (máximo 12MB recomendado). Se recomienda subirlo a YouTube o TikTok y pegar el enlace, o usar un video local más corto.");
            event.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.classList.remove("hidden");
            placeholder.style.display = "none";
            finalInput.value = e.target.result; // Base64 del video
            checkGalleryFormValidity();
        };
        reader.readAsDataURL(file);
    }
}

// Vista previa de video de galería desde URL
function previewGalleryVideoUrl() {
    const tabUrlActive = document.getElementById("tab-video-url").classList.contains("active");
    const preview = document.getElementById("gallery-video-preview");
    const placeholder = document.getElementById("gallery-video-preview-placeholder");
    const finalInput = document.getElementById("gallery-final-video");

    if (tabUrlActive) {
        const url = document.getElementById("post-url-video").value.trim();
        if (url !== "") {
            preview.src = url;
            preview.classList.remove("hidden");
            placeholder.style.display = "none";
            finalInput.value = url;
        } else {
            preview.src = "";
            preview.classList.add("hidden");
            placeholder.style.display = "block";
            finalInput.value = "";
        }
    } else {
        if (preview.src && !preview.src.includes("placehold") && preview.src !== window.location.href) {
            finalInput.value = preview.src;
        }
    }
    checkGalleryFormValidity();
}

// Validación rápida para activar el botón "Guardar" de la galería
function checkGalleryFormValidity() {
    const type = document.getElementById("post-type").value;
    const saveBtn = document.getElementById("save-post-btn");
    
    if (type === "social") {
        autoDetectPlatform();
    } else if (type === "foto") {
        const title = document.getElementById("post-title").value.trim();
        const finalImage = document.getElementById("gallery-final-image").value;
        saveBtn.disabled = !(title !== "" && finalImage !== "");
    } else if (type === "video") {
        const title = document.getElementById("post-title").value.trim();
        const finalVideo = document.getElementById("gallery-final-video").value;
        saveBtn.disabled = !(title !== "" && finalVideo !== "");
    }
}

// Escuchar cambios en título de post para validar el botón guardar
document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("post-title");
    if (titleInput) {
        titleInput.addEventListener("input", checkGalleryFormValidity);
    }
});
