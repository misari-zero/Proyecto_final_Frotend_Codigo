import { create } from "zustand";

export const useProductStore = create((set,get)=>({
    products : [
        {
            id:'1',
            name: 'Apple MacBook Pro 17"',
            color: 'Silver',
            category: 'Phones',
            price: '4999',
            quantity: '50',
            image: '/macbook_pro_m3.webp',
            info: 'https://www.apple.com/la/macbook-pro/',
            descripcion: 'La MacBook Pro da un salto al futuro con los chips M3, M3 Pro y M3 Max. ' +
              'Fabricados con tecnología de 3 nanómetros y una nueva arquitectura de GPU, son los chips más avanzados ' +
              'que existen en una computadora personal. Y cada uno de estos pequeños gigantes lleva la potencia y el rendimiento a niveles inimaginables.\n\n' +
              'Descubre una nueva clase de arquitectura de GPU y la mayor innovación en gráficos en un chip de Apple hasta ahora. El Dynamic Caching optimiza ' +
              'la velocidad de la memoria del chip para aumentar drásticamente el uso promedio del GPU. El resultado: un impulso estratosférico en el rendimiento ' +
              'de las apps y juegos más pro. Ya puedes pestañear.\nLos juegos ahora cobran un nivel de detalle nunca antes visto gracias al Mesh Shading acelerado por ' +
              'hardware. Esta tecnología ofrece aún más capacidad y eficiencia en el procesamiento geométrico, lo que permite renderizar escenas visualmente más complejas ' +
              'y lograr imágenes épicas. Ya puedes cerrar la boca.'
        },
        {
            id:'2',
            name: 'Microsoft Surface Pro',
            color: 'White',
            category: 'PC',
            price: '1999',
            quantity: '40',
            image: '/microsoft_surface_pro.jpeg',
            info: 'https://www.microsoft.com/es-mx/surface/devices/surface-pro-11th-edition',
            descripcion:'Copilot en Windows, incluido en Surface Pro, es un compañero con tecnología de IA que te ayuda ' +
              'a trabajar de manera más inteligente, a ser más productivo y a mantenerte conectado con las personas y cosas' +
              ' que forman parte de tu vida as capacidades de IA proporcionadas por el dispositivo Surface Pro más rápido y más inteligente ' +
              'hasta ahora se traducen en una velocidad abrumadora y experiencias a 45 billones de operaciones por segundo Copilot se encarga de tareas rutinarias para que puedas lograr más cada día'
        },
        {
            id:'3',
            name: 'Magic Mouse 2',
            color: 'Black',
            category: 'Gaming/Console',
            price: '99',
            quantity: '30',
            image: '/magic_mouse_2.webp',
            info: 'https://mac-center.com.pe/products/magic-mouse-2',
            descripcion: 'l Magic Mouse es inalámbrico y recargable, con una nueva base que se desliza perfectamente sobre el escritorio. Y con la superficie Multi‑Touch podrás hacer gestos sencillos, como pasar de una web a otra o desplazarte por tus documentos.' +
              'Gracias a su batería recargable, podrás despreocuparte de cargar el Magic Mouse durante un mes o más. Está listo para usar desde el primer minuto y se enlaza automáticamente con tu Mac. Además, incluye un cable de tejido trenzado de USB‑C a Lightning que te permite conectarlo y cargarlo a través del puerto USB‑C de tu Mac.'
        },
        {
            id:'4',
            name: 'Razer Huntsman Mini',
            color: 'Black',
            category: 'PC',
            price: '95',
            quantity: '30',
            image: '/razer_huntsman_mini.jpg',
            info: 'https://www.razer.com/es-es/gaming-keyboards/razer-huntsman-mini',
            descripcion: 'Entra en una nueva dimensión letal con el Razer Huntsman Mini: un teclado para juegos reducido al 60 % de su tamaño y con sus punteros switches ópticos Razer™. Portátil e ideal para escritorios reducidos, es hora de experimentar un accionamiento a la velocidad de la luz con nuestro diseño más compacto hasta la fecha.' +
              'El teclado Razer Huntsman Mini no tiene la fila de función, el grupo de inicio ni la parte numérica de un teclado de tamaño tradicional completo. Aun así, no pierde funcionalidad, ya que todas estas funciones siguen siendo accesibles mediante funciones secundarias y atajos.\n\nIdeal para escritorios pequeños o minimalistas en los que el espacio es primordial, su diseño compacto te permite transportarlo sin problemas y colocarlo fácilmente para jugar, por lo que podrás jugar con mayor comodidad.'
        },
        {
            id:'5',
            name: 'Logitech Pro X 60',
            color: 'Black',
            category: 'PC',
            price: '199',
            quantity: '5',
            image: '/logitech_pro_x_60.webp',
            info: 'https://www.logitechg.com/es-roam/products/gaming-keyboards/pro-x-60-wireless-keyboard.html',
            descripcion: 'Diseñado en colaboración con los mejores jugadores de esports del mundo, PRO X 60 se ha diseñado para romper cualquier barrera entre tú y la victoria. Compite a un nuevo nivel con la próxima generación de teclados PRO.'


        },
        {
            id:'6',
            name: 'Hyperx Alloy 60',
            color: 'Black',
            category: 'PC',
            price: '93',
            quantity: '15',
            image: '/hyperx_alloy_60.webp',
            info: 'https://www.hp.com/us-en/shop/pdp/hyperx-alloy-origins-60-mechanical-gaming-keyboard-hx-red-(us-layout)',
            descripcion: 'El HyperX Alloy Origins 60 es un teclado sumamente portátil con un factor de forma del 60 % que le brinda más espacio para movimientos de barrido del mouse. Cuenta con un cuerpo duradero de aluminio completo y conmutadores HyperX confiables equilibrados para velocidad y rendimiento que están clasificados para soportar 80 millones de pulsaciones de teclas. '
        },
        {
            id:'7',
            name: 'Asus Rog Strix Impact II',
            color: 'White',
            category: 'PC',
            price: '65',
            quantity: '10',
            image: '/asus_rog_strix_impact_ii.webp',
            info: 'https://rog.asus.com/latin/mice-mouse-pads/mice/wireless/rog-strix-impact-ii-wireless-model/',
            descripcion:'Mouse inalámbrico para juegos ROG Strix Impact II con sensor óptico de 16,000 ppp, conectividad inalámbrica de 2.4 GHz, diseño ligero, diseño exclusivo de socket push-fit, botones de pivote e iluminación Aura Sync RGB. Sensor óptico de 16,000 ppp y 400 ips líder en la industria para un rendimiento excepcional.\nConectividad optimizada con conexión inalámbrica de 2.4 GHz y USB con cable.\nHasta 89 horas de duración de la batería o 48 horas con iluminación RGB encendida.\nLa tecnología SmartHop cambia sin problemas al canal más limpio.\nDiseño exclusivo de socket push-fit para personalizar la resistencia a los clics y extender la vida útil del mouse.\nBotón DPI sobre la marcha para ajustar la sensibilidad del mouse sin esfuerzo.\nMecanismo de pivote para clics del mouse más rápidos y con mayor capacidad de respuesta.\nSoftware exclusivo Armory Crate para una configuración fácil e intuitiva.'
        },
        {
            id:'8',
            name: 'Logitech 502 Hero',
            color: 'Black',
            category: 'PC',
            price: '52',
            quantity: '20',
            image: '/logitech_502_hero.webp',
            info: 'https://www.logitechg.com/es-roam/products/gaming-mice/g502-hero-gaming-mouse.910-005550.html',
            descripcion: 'Diseñado para un desempeño avanzado en los juegos. G502 HERO cuenta con un sensor de juegos HERO 25K con seguimiento de precisión submicrométrica, LIGHTSYNC RGB personalizable, perfiles integrados, pesos reposicionables y mucho más.'
        },
        {
            id:'9',
            name: 'Ryzen 7 7800F',
            color: 'Gray',
            category: 'PC',
            price: '345',
            quantity: '13',
            image: '/ryzen_7800F.jpg',
            info: 'https://www.amd.com/es/products/processors/desktops/ryzen/8000-series/amd-ryzen-7-8700f.html',
            descripcion:'Solo los procesadores AMD Ryzen™ incluyen modelos con la exclusiva tecnología AMD 3D V-Cache™ para aumentar el rendimiento de las experiencias de juego de forma considerable4. AMD combina sus procesadores de alta gama Ryzen Serie 7000X3D, con hasta impresionantes 144 MB de memoria en chip, junto con los núcleos de procesador más avanzados que puedes obtener en una PC para gaming, de modo que los fanáticos puedan aprovechar la potencia del mejor rendimiento para gaming y creadores en un solo chip5. Ninguna carga de trabajo está fuera de los límites con los procesadores AMD Ryzen.'
        },
        {
            id:'10',
            name: 'Intel i7-14700K',
            color: 'Gray',
            category: 'PC',
            price: '550',
            quantity: '15',
            image: '/intel_14700K.jpg',
            info: 'https://www.intel.la/content/www/xl/es/products/sku/236783/intel-core-i7-processor-14700k-33m-cache-up-to-5-60-ghz/specifications.html' ,
            descripcion: 'Arquitectura híbrida de desempeño avanzada\nLos procesadores Intel® Core™ de 14ᵃ Generación presentan una arquitectura híbrida de desempeño1 con hasta ocho Performance-cores (P-cores) y hasta 16 Efficient-cores (E-cores), combinados con direccionamiento inteligente de las cargas de trabajo mediante Intel® Thread Director2.\n\nConstruida para el gaming moderno\nDiseñado para los gamers que buscan el máximo desempeño para poder ejecutar los juegos más recientes, mientras tienen las capacidades para soportar otras cargas de trabajo. Las nuevas PCs con procesadores Intel® Core™ de 14ᵃ Generación hacen posible todo esto.'
        },
        {
            id:'11',
            name: 'Cooler CPU Liquid 120 Asus',
            color: 'Black',
            category: 'PC',
            price: '129',
            quantity: '5',
            image: '/cooler_cpu_120_asus_rog_tyuo.jpg',
            info: 'https://rog.asus.com/mx/cooling/cpu-liquid-coolers/rog-ryuo/rog-ryuo-120-model/',
            descripcion: 'La serie ROG Ryuo de enfriamiento líquido de alto rendimiento para CPU, está diseñada para pc\'s de tamaño compacto o mediana. Como los primeros de la línea ROG, la serie Ryuo brinda un desemepo, características y diseños que solo ROG te puede ofrecer para tu sistema. Con una pantalla LiveDash a color OLED que permite controlar las estadísticas del sistema en tiempo real y mostrar imágenes personalizadas, ROG Ryuo cuenta con soporte Aura Sync además de brindar una estética impresionante acompañado de un rendimiento sin precedentes.'
        },
        {
            id:'12',
            name: 'Nvidia Geoforce RTX 4070 12GB',
            color: 'Black',
            category: 'PC',
            price: '720',
            quantity: '9',
            image: '/asus-rtx-4070-su.jpg',
            info: 'https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx4070-12g/',
            descripcion: 'ASUS Dual GeForce RTX™ 4070 fuses dynamic thermal performance with broad compatibility. Advanced cooling solutions from flagship graphics cards — including two Axial-tech fans for maximizing airflow to the heatsink — are packed into the 26.7 cm long, 2.56-slot card, delivering more power in less space. These enhancements make ASUS Dual the perfect choice for gamers who want heavyweight graphics performance in a compact build.'
        },
        {
            id:'13',
            name: 'Nvidia Geoforce RTX 4060 8GB',
            color: 'Black',
            category: 'PC',
            price: '380',
            quantity: '16',
            image: '/asus-rtx4060ti-8g.webp',
            info: 'https://www.asus.com/motherboards-components/graphics-cards/dual/dual-rtx4060-o8g-evo/',
            descripcion: 'ASUS Dual GeForce RTX™ 4060 EVO fuses dynamic thermal performance with broad compatibility. Advanced cooling solutions from flagship graphics cards — including two Axial-tech fans for maximizing airflow to the heatsink — are packed into the 22.7 cm long, 2.5-slot card, delivering more power in less space. These enhancements make ASUS Dual the perfect choice for gamers who want heavyweight graphics performance in a compact build.'
        },
        {
            id:'14',
            name: 'Radeon RX 6700XT',
            color: 'Black',
            category: 'PC',
            price: '499',
            quantity: '17',
            image: '/rx_6700XT.png',
            info: 'https://rog.asus.com/latin/graphics-cards/graphics-cards/rog-strix/rog-strix-rx6700xt-o12g-gaming-model/',
            descripcion: 'La ROG Strix Radeon™ RX 6700 XT combina una solución de enfriamiento líder en la industria con un rendimiento energético de alta gama y comodidades adicionales. Debajo de la superficie, un enorme disipador de calor es enfriado por un trío de ventiladores Axial-tech que utilizan un nuevo esquema de rotación y funciones especializadas para ventiladores centrales y auxiliares. En el corazón de la bestia, los capacitores, los chokes y los MOSFET de primera categoría entregan sin esfuerzo cientos de vatios con un aviso de milisegundos. Una gran cantidad de características convenientes, que incluyen un switch de BIOS dual, modo 0dB, puertos FanConnect PWM y placa posterior de metal, hacen de este coloso de los fps una opción ideal para los constructores y DIY.'
        },
        {
            id:'15',
            name: 'Placa AMD Asus Prime X670',
            color: 'Black',
            category: 'PC',
            price: '257',
            quantity: '11',
            image: '/asus-prime-x670.png',
            info: 'https://www.asus.com/motherboards-components/motherboards/prime/prime-x670-p-wifi/',
            descripcion: 'ASUS Prime series motherboards are expertly engineered to unleash the full potential of AMD Ryzen 7000-series processors. Boasting a robust power design, comprehensive cooling solutions and intelligent tuning options, PRIME X670-P WIFI provides users and PC DIY builders with a range of performance optimizations via intuitive software and firmware features. This platform delivers the power and connectivity that advanced AI PC applications demand.'
        },
        {
            id:'16',
            name: 'Nintendo Switch OLED',
            color: 'White',
            category: 'Gaming/Console',
            price: '375',
            quantity: '12',
            image: '/nintendo-switch-oled.webp',
            info: 'https://www.nintendo.com/es-pe/switch/oled-model/',
            descripcion: 'Te presentamos la última consola que se une a la familia Nintendo Switch\nLa nueva consola cuenta con una vibrante pantalla OLED de 7 pulgadas (17.78 cm), un soporte ajustable y amplio, una base con puerto LAN para conexión por cable, almacenamiento interno de 64 GB y audio mejorado. Deleita tus ojos con colores brillantes y contrastes definidos cuando juegues en el camino.\n\nMira la diferencia que ofrece una pantalla vibrante cuando compites a toda velocidad o cuando combates a tus enemigos.'
        },
        {
            id:'17',
            name: 'Zelda Breath of the wild',
            color: 'red',
            category: 'Gaming/Console',
            price: '55',
            quantity: '15',
            image: '/zelda-breath-of-the-wild.webp',
            info: 'https://www.nintendo.com/es-pe/store/products/the-legend-of-zelda-breath-of-the-wild-switch/',
            descripcion: 'Olvida todo lo que sabes acerca de los juegos de la serie The Legend of Zelda. Explora y descubre un mundo lleno de aventuras en The Legend of Zelda: Breath of the Wild, una nueva saga que rompe los esquemas de la aclamada serie. Viaja a través de praderas y bosques, y alcanza cimas de montañas mientras descubres cómo cayó en la ruina el reino de Hyrule en esta emocionante aventura al aire libre. Ahora con Nintendo Switch, tu aventura será más libre y extensa que nunca. Lleva tu consola y vive una gran aventura como Link de la manera que más te guste.'
        },
        {
            id:'18',
            name: 'Xbox Series X',
            color: 'Black',
            category: 'Gaming/Console',
            price: '550',
            quantity: '17',
            image: '/xbox-series-x.webp',
            info: 'https://www.xbox.com/es-ES/consoles/xbox-series-x',
            descripcion: '12 TERAFLOPS DE POTENCIA\nExplora nuevos mundos enriquecidos con 12 teraflops de potencia de procesamiento en bruto, DirectX RayTracing y una unidad SSD. MÁS TIEMPO JUGANDO, MENOS ESPERANDO\nAprovecha al máximo cada minuto de tus juegos con Quick Resume, tiempos de carga ultrarrápidos y una jugabilidad de hasta 120 FPS... todo ello con la tecnología Xbox Velocity Architecture.'
        },
        {
            id:'19',
            name: 'Playstation 5',
            color: 'White',
            category: 'Gaming/Console',
            price: '550',
            quantity: '17',
            image: '/ps5.webp',
            info: 'https://www.playstation.com/es-ar/ps5/',
            descripcion: 'Disfruta de tiempos de carga superveloces con un SSD de velocidad ultrarrápida, una experiencia más inmersiva gracias a la compatibilidad con respuesta háptica1, gatillos adaptativos1 y audio 3D*, y toda una nueva generación de juegos increíbles para PlayStation. Descubre tu próximo juego inolvidable de nuestra experiencia interactiva. Elige lo que quieres sentir y deja que PS5 te transporte al centro de la acción.'
        },
        {
            id:'20',
            name: 'The Evil Within - Ps5',
            color: 'White',
            category: 'Gaming/Console',
            price: '60',
            quantity: '12',
            image: '/the-evil-within.jpeg',
            info: 'https://www.playstation.com/es-pe/games/the-evil-within/',
            descripcion: 'The Evil Within, desarrollado por Shinji Mikami y con el talento del equipo de Tango Gameworks, representa la esencia más pura del género del survival horror. Entornos cuidados al máximo, seres espeluznantes y una compleja trama se combinan para crear un mundo envolvente que te llevará a cotas de enorme tensión. Contarás con recursos limitados para luchar por la supervivencia y pasarás auténtico terror en esta mezcla perfecta de horror y acción.'
        },
        {
            id:'21',
            name: 'The Evil Within - Xbox',
            color: 'White',
            category: 'Gaming/Console',
            price: '60',
            quantity: '12',
            image: '/the-evil-within.jpeg',
            info: 'https://www.xbox.com/es-ES/games/store/the-evil-within/C2M8HBNVPT1T',
            descripcion: 'The Evil Within, desarrollado por Shinji Mikami y con el talento del equipo de Tango Gameworks, representa la esencia más pura del género del survival horror. Entornos cuidados al máximo, seres espeluznantes y una compleja trama se combinan para crear un mundo envolvente que te llevará a cotas de enorme tensión. Contarás con recursos limitados para luchar por la supervivencia y pasarás auténtico terror en esta mezcla perfecta de horror y acción.'
        },
    ],
    addToList: (newProduct) => {
        // findIndex -> Devuelve -1 si no encuentra nada 
        const productInList = get().products.findIndex(
            product => product.id === newProduct.id
        ) 
        if(productInList >= 0){
            const updateProducts = get().products.map( product => {
                if(product.id === newProduct.id){
                    return newProduct
                }
                return product
            })
            set(()=>({products: updateProducts}))
            return
        }

        set(state => ({
            products: [...state.products,newProduct]
        }))
    },
    removeFromList : (id) => {
        set(state =>{
            const newList = state.products.filter(product => product.id !== id)
            return {products : newList}
        })
    },
    cleanList: () => {
        set(
            () => ({products: []})
        )
    }
}))