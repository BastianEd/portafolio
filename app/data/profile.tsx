export const profileData = {
    name: 'Bastian Rubio',
    role: 'Estudiante de Ingeniero en informática',
    location: 'Chile',
    // Datos para la sección Hero
    hero: {
        avatarUrl: 'https://i.ibb.co/nFtjvHv/1706629229091.jpg',
        title: 'Hola, soy Bastián Rubio',
        subtitle: 'Estudiante de Ingeniero en informática',
        university: 'Duoc UC',
        description: `Apasionado por la programación y el análisis de datos. 
                        Manejo tecnologías como Python, JavaScript, Oracle SQL y Java. 
                        Me especializo en Ciencia de Datos y disfruto desarrollar proyectos que 
                        combinen automatización, bases de datos y soluciones web.
                        `,
        contactLink: 'https://www.linkedin.com/in/bastián-rubio-meneses/',
        cvLink: 'https://docs.google.com/document/d/1IdjeutWH_cJMieToEg0W_XCc0zqk853iq7cp9Q2zdis/edit?usp=sharing'
    },
    // Datos para la sección Sobre Mí
    about: {
        title: 'Sobre mí',
        paragraphs: [
            `Me llamo Bastián Rubio, estudiante de Ingeniería Informática en Duoc UC. Apasionado por la tecnología y la programación, comenzando mi especialización en Ciencia de Datos el próximo año.`,
            `Tengo experiencia en Python, Oracle SQL y automatización de procesos. He participado en proyectos como mi práctica en Banco de Chile, donde desarrollé herramientas de validación con Python.`,
            `Me interesa el análisis de datos, machine learning y crear soluciones que resuelvan problemas reales. Siempre estoy aprendiendo nuevas tecnologías y buscando aplicar mis conocimientos en proyectos prácticos.`
        ]
    },
    // Datos para la sección de Experiencia
    experience: [
        {
            title: "Discover Data with Oracle Education Foundation",
            company: "Oracle Chile",
            period: "Septiembre 2022",
            description: `Participé en el programa Discover Data with Oracle Education Foundation, 
            donde adquirí conocimientos en análisis y manejo de datos utilizando tecnologías de Oracle.
             Esta experiencia me permitió fortalecer habilidades en bases de datos y 
             fundamentos de ciencia de datos.`

        },
        {
            title: "HP Innovation",
            company: "HP Chile",
            period: "Octubre 2023",
            description: `Desarrollador Front-end en Innovation Camp HP 2023, 
            encargado de diseñar y construir la interfaz de usuario de la aplicación 
            web. Colaboré en equipo para crear una 
            experiencia visual atractiva y funcional, contribuyendo al éxito del 
            proyecto que obtuvo el primer lugar.`
        },
        {
            title: "Practicante Profesional",
            company: "Banco de Chile",
            period: "Diciembre 2023 — Febrero 2024",
            description: `Desarrollé una herramienta CLI en Python para analizar y validar mallas de Control‑M, detectando inconsistencias y permitiendo modificaciones automatizadas con la libreria xml.etree.ElementTree. Contribuí en el área de Big Data del banco, apoyando la automatización de procesos y la mejora continua.`
        }
    ],

    //Certificaciones
            //Se tuvo que migrar las imagenes a un hosting externo debido a problemas de carga en Netlify de la imagenes locales.
    certifications: [
        {
            title: 'Introduction to Cybersecurity',
            issuer: 'Cisco',
            issueDate: '27/05/2025',
            credentialUrl: 'https://www.credly.com/badges/b375038e-3872-4ba3-9950-98838eea1921/public_url',
            badgeImage: 'https://i.ibb.co/JRhbKVYk/cyberseguridad.webp',
            //badgeImage: 'assets/certifications/cybersecurity.webp'
        },
        {
            title: 'Artificial Intelligence Professional Certification - CAIPC®',
            issuer: 'Certiprof',
            issueDate: '11/10/2025 | Expira: 11/10/2028',
            credentialUrl: 'https://www.credly.com/badges/3d60ff55-7d30-459b-a169-cc27f0a30ced/public_url',
            badgeImage: 'https://i.ibb.co/7tBtwW06/blob.webp',
            //badgeImage: 'assets/certifications/certiprof-ai.webp'
        },
        {
            title: 'Python Essentials 1',
            issuer: 'Cisco',
            issueDate: '02/06/2024',
            credentialUrl: 'https://www.credly.com/badges/b92ee607-04e5-47c6-b33c-8353e7abdb05/public_url',
            badgeImage: 'https://i.ibb.co/5xMtF3kf/python.webp',
            //badgeImage: 'assets/certifications/python-essentials-1.webp'
        },
        {
            title: 'Introduction to Cloud',
            issuer: 'IBM Developer Skills Network',
            issueDate: '22/02/2024',
            credentialUrl: 'https://courses.cognitiveclass.ai/certificates/2eb17cae793047c2974d06a9a16d301d',
            badgeImage: 'https://i.ibb.co/RpnVxDvN/ibm-logo.webp',
            //badgeImage: 'assets/certifications/ibm-logo.webp'
        },
        {
            title: 'Red Hat System Administration I (RH124 - RHA) - Ver. 9.3',
            issuer: 'Red Hat',
            issueDate: '19/09/2025',
            credentialUrl: 'https://www.credly.com/badges/7f6af487-c6d2-4fa0-8317-74e5a69c2155/public_url',
            badgeImage: 'https://i.ibb.co/gMNTVmPK/RedHat.webp',
            //badgeImage: 'assets/certifications/redhat-logo.webp'
        },
        {
            title: 'SQL and Relational Databases 101',
            issuer: 'IBM Developer Skills Network',
            issueDate: '20/09/2025',
            credentialUrl: 'https://courses.cognitiveclass.ai/certificates/298833c7b11b4daaafba23cbd1779652',
            badgeImage: 'https://i.ibb.co/RpnVxDvN/ibm-logo.webp',
            //badgeImage: 'assets/certifications/ibm-logo.webp'
        }

    ],
    // Datos para la sección de Proyectos
        //Se tuvo que migrar las imagenes a un hosting externo debido a problemas de carga en Netlify de la imagenes locales.
    projects: [
        {
            title: 'Pastelería Mil Sabores Dulces',
            description: 'E-commerce completo para pastelería con carrito de compras, autenticación de usuarios, sistema de descuentos y blog integrado. Incluye usuarios de prueba con diferentes roles.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Authentication','Bootstrap'],
            github: 'https://github.com/BastianEd/MilSaboresDulces',
            demo: 'https://pasteleriamilsabores.netlify.app/',
            image: 'https://i.ibb.co/hFz0kwfK/pasteleria-mil-sabores.webp',
            //image: 'assets/projects/mil-sabores-dulces.webp'
        },
        {
            title: 'GameZone - Tienda de Videojuegos',
            description: 'Aplicación web para tienda de videojuegos con catálogo de productos, filtros y diseño responsive. Proyecto académico desarrollado con tecnologías frontend modernas.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Authentication','Bootstrap'],
            github: 'https://github.com/BastianEd/Web_GameZon_Evaluacion_Uno',
            demo: 'https://gamezone-store.netlify.app/',
            image: 'https://i.ibb.co/FkSJySHr/gamezone.webp',
            //image: 'assets/projects/gamezone.webp'
        },
        {
            title: 'API REST de Inventario para Constructora',
            description: 'API RESTful robusta para gestionar herramientas, trabajadores y préstamos. Incluye endpoints V1 (tradicional) y V2 (HATEOAS) con documentación Swagger.',
            tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'HATEOAS', 'JUnit5', 'Mockito', 'Swagger'],
            github: 'https://github.com/BastianEd/Inventario_Herramientas_Constructora',
            image: 'https://i.ibb.co/qFjbtHM6/inventario-constructora.webp',
            //image: 'assets/projects/inventario-constructora.webp'
        },
    ],
    // Links para redes sociales
    socials: [
        { name: 'github', url: 'https://github.com/BastianEd', label: 'GitHub' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/bastián-rubio-meneses/', label: 'LinkedIn' },
    ]
};